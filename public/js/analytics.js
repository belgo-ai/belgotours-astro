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
    gtag("config", MEASUREMENT_ID, { send_page_view: true });
  }

  function clearGA4Cookies() {
    var names = [];
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name === "_ga" || name.indexOf("_ga_") === 0) names.push(name);
    });
    names.forEach(function (name) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
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
