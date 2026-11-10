// GA4 Direct gtag + Consent Mode BASIC. Cargado is:inline, muy temprano en
// <head> de Layout.astro, antes de cualquier otro script. Expone
// window.BTAnalytics para que scripts module (bookingForm.ts,
// BookingCalendar.astro, PrivateRequestForm.astro, booking-success.astro,
// [tourSlug].astro) y scripts clásicos (bookingPanel.js) puedan disparar
// eventos sin duplicar lógica de consentimiento.
(function () {
  if (window.BTAnalytics) return;

  var MEASUREMENT_ID = "G-9XFXKEF6N5";
  var CONSENT_KEY = "belgotours_cookie_consent";
  var loaded = false;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  function readConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function hasAnalyticsConsent() {
    var prefs = readConsent();
    return !!(prefs && prefs.analytics);
  }

  function setDefaultConsent() {
    gtag("consent", "default", {
      analytics_storage: hasAnalyticsConsent() ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
  }

  // SEC-GA4-01 — GA4 nunca recibe tokens ni IDs de la URL. Por defecto
  // gtag envía document.location (dl) y document.referrer (dr) completos:
  // booking-cancel?token=, resenas/formulario?token= y booking-*?id=
  // llegaban a GA4 en la propia página y como referrer de la siguiente.
  // page_location / page_referrer = origen + ruta + sólo los parámetros
  // de atribución de esta lista (cualquier otro, incluido el hash, se
  // descarta: lista blanca, no lista negra).
  var ALLOWED_QUERY_PARAMS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "utm_id",
    "gclid",
    "gbraid",
    "wbraid",
  ];

  function sanitizeUrl(raw) {
    try {
      var u = new URL(raw, window.location.href);
      // /{lang}/resenas/{token} lleva el token en la ruta (hoy esa página
      // redirige sin cargar GA4; defensa en profundidad)
      var path = u.pathname.replace(
        /^(\/[a-z]{2}\/resenas\/)(?!formulario\b|gracias\b|error\b)[^/]+/,
        "$1[token]"
      );
      var kept = new URLSearchParams();
      ALLOWED_QUERY_PARAMS.forEach(function (key) {
        var value = u.searchParams.get(key);
        if (value !== null) kept.set(key, value);
      });
      var query = kept.toString();
      return u.origin + path + (query ? "?" + query : "");
    } catch (e) {
      return "";
    }
  }

  // Referrer del propio sitio → mismo saneado; externo → sólo el origen
  // (es lo que GA4 necesita para la atribución).
  function sanitizedReferrer() {
    var ref = document.referrer;
    if (!ref) return "";
    try {
      var r = new URL(ref);
      return r.origin === window.location.origin ? sanitizeUrl(ref) : r.origin + "/";
    } catch (e) {
      return "";
    }
  }

  // Consent Mode BASIC: el script de GA4 sólo se carga cuando ya hay
  // consentimiento analytics real (previo o recién concedido) — nunca antes.
  function loadGA4() {
    if (loaded) return;
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    var pageParams = {
      page_location: sanitizeUrl(window.location.href),
      page_referrer: sanitizedReferrer(),
    };
    // "set" → se aplica a todos los hits de la página (page_view,
    // user_engagement y eventos propios); "config" → al page_view inicial.
    gtag("set", pageParams);
    gtag("config", MEASUREMENT_ID, {
      send_page_view: true,
      page_location: pageParams.page_location,
      page_referrer: pageParams.page_referrer,
    });
  }

  function clearGA4Cookies() {
    var names = [];
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name === "_ga" || name.indexOf("_ga_") === 0) names.push(name);
    });
    // gtag.js escribe estas cookies con domain=.<host> (cookie de dominio,
    // con punto inicial) — borrar sólo con path=/ crea una cookie
    // host-only distinta y deja la original intacta. Se intenta con y sin
    // el dominio explícito para cubrir ambos casos de forma robusta.
    var host = window.location.hostname;
    var domains = [host];
    if (host.indexOf(".") !== -1) domains.push("." + host);
    names.forEach(function (name) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      domains.forEach(function (domain) {
        document.cookie =
          name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + domain;
      });
    });
  }

  function updateConsent(analyticsGranted, marketingGranted) {
    var wasLoaded = loaded;
    gtag("consent", "update", {
      analytics_storage: analyticsGranted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    if (analyticsGranted) {
      var justLoaded = !wasLoaded;
      loadGA4();
      // Si el usuario concede consentimiento durante la misma visita
      // (no en una carga de página posterior), el view_item de la
      // página actual ya se intentó disparar antes del consentimiento
      // y se descartó (trackEvent no-opea sin consentimiento) — se
      // reintenta aquí una vez, igual que gtag ya reenvía el
      // page_view estándar en este mismo momento vía 'config'.
      if (justLoaded && window.__BT_TOUR__) {
        trackEvent("view_item", window.__BT_TOUR__);
      }
    } else if (wasLoaded) {
      clearGA4Cookies();
    }
  }

  // Whitelist explícita — defensa en profundidad además de la disciplina
  // en cada punto de disparo: ningún parámetro fuera de esta lista se
  // reenvía nunca a GA4, aunque el llamador lo incluya por error.
  var SAFE_PARAM_KEYS = [
    "tour_slug",
    "tour_name",
    "tour_city",
    "tour_type",
    "content_language",
    "tour_language",
    "selected_date",
    "selected_time",
    "participants_total",
  ];

  function trackEvent(name, params) {
    if (!hasAnalyticsConsent() || !loaded) return;
    var safeParams = {};
    if (params) {
      SAFE_PARAM_KEYS.forEach(function (k) {
        if (params[k] !== undefined && params[k] !== null && params[k] !== "") {
          safeParams[k] = params[k];
        }
      });
    }
    gtag("event", name, safeParams);
  }

  // Guard de una sola vez por sesión de navegador, para dedupe local
  // (ej. booking_confirmed en reload). La clave puede incluir un
  // identificador interno (p.ej. reservaId) sólo como parte del NOMBRE
  // de la clave de sessionStorage — ese identificador nunca se envía a GA4.
  function onceGuard(key) {
    try {
      var flagKey = "bt_once_" + key;
      if (sessionStorage.getItem(flagKey)) return false;
      sessionStorage.setItem(flagKey, "1");
      return true;
    } catch (e) {
      return true;
    }
  }

  window.BTAnalytics = {
    updateConsent: updateConsent,
    trackEvent: trackEvent,
    hasAnalyticsConsent: hasAnalyticsConsent,
    isLoaded: function () {
      return loaded;
    },
    onceGuard: onceGuard,
  };

  setDefaultConsent();
  if (hasAnalyticsConsent()) loadGA4();
})();
