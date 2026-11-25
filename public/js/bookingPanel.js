function initBookingPanel() {
  const overlayEl = document.getElementById("bookingOverlay");
  const panelEl = document.getElementById("bookingPanel");
  // Nota: los botones de tours "request" llevan AMBAS clases
  // (openBookingBtn + openPrivateRequestBtn, ver [tourSlug].astro) —
  // por eso la distinción real/privado se hace por
  // openPrivateRequestBtn (presente sólo en modo solicitud), nunca
  // asumiendo que openBookingBtn por sí sola implica disponibilidad real.
  const openBtns = document.querySelectorAll(
    ".openBookingBtn, .openPrivateRequestBtn"
  );
  const closeBtns = document.querySelectorAll(".closeBookingBtn");

  if (!overlayEl || !panelEl || openBtns.length === 0) {
    window.__btPendingBooking?.removeAttribute("aria-busy");
    return;
  }

  let isOpen = false;
  // A11Y-01 — patrón de diálogo modal: cerrado, el panel es inert (ni
  // foco ni clics: antes sus ~17 controles fuera de pantalla entraban en
  // el orden de tabulación); abierto, el foco entra, Tab/Shift+Tab no
  // salen, Escape cierra y el foco vuelve al botón que lo abrió.
  let trigger = null;
  panelEl.setAttribute("role", "dialog");
  panelEl.setAttribute("aria-modal", "true");
  panelEl.setAttribute("tabindex", "-1");
  panelEl.inert = true;

  const FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function focusables() {
    return Array.from(panelEl.querySelectorAll(FOCUSABLE)).filter(
      (el) =>
        el.getClientRects().length > 0 &&
        getComputedStyle(el).visibility !== "hidden" &&
        !el.closest("[inert]")
    );
  }

  function openPanel(isRealAvailability, btn) {
    if (isOpen) return;
    isOpen = true;
    trigger = btn || null;

    if (isRealAvailability) {
      window.BTAnalytics?.trackEvent("view_availability", window.__BT_TOUR__);
    }

    overlayEl.classList.remove("hidden");
    requestAnimationFrame(() => overlayEl.classList.add("open"));

    panelEl.inert = false;
    panelEl.classList.add("open", "bounce");
    document.body.classList.add("no-scroll");

    openBtns.forEach((b) => b.setAttribute("aria-expanded", "true"));
    setTimeout(() => panelEl.classList.remove("bounce"), 320);

    // El propio diálogo recibe el foco (anuncia su nombre); el siguiente
    // Tab va al primer control. preventScroll: no mover la página.
    panelEl.focus({ preventScroll: true });
    document.addEventListener("keydown", onKeydown, true);
  }

  function closePanel() {
    if (!isOpen) return;
    isOpen = false;

    overlayEl.classList.remove("open");
    panelEl.classList.remove("open");
    document.body.classList.remove("no-scroll");
    panelEl.inert = true;
    document.removeEventListener("keydown", onKeydown, true);

    openBtns.forEach((b) => b.setAttribute("aria-expanded", "false"));

    // Volver al disparador; si ya no es usable (p. ej. el CTA fijo se
    // ocultó), al primer botón de reserva disponible.
    const usable = (el) =>
      el && el.isConnected && !el.closest("[inert]") && el.getClientRects().length > 0;
    const target = usable(trigger)
      ? trigger
      : Array.from(openBtns).find(usable);
    target?.focus({ preventScroll: true });
    trigger = null;

    setTimeout(() => {
      if (!isOpen) overlayEl.classList.add("hidden");
    }, 300);
  }

  function onKeydown(e) {
    if (!isOpen) return;

    if (e.key === "Escape") {
      // Un desplegable abierto dentro del panel se cierra primero:
      // prefijo telefónico (lo gestiona intl-tel-input) y sugerencias de
      // país/ciudad (se ocultan aquí; no tenían manejo de Escape).
      const t = e.target;
      if (
        e.defaultPrevented ||
        (t && t.getAttribute && t.getAttribute("aria-expanded") === "true") ||
        panelEl.querySelector(".iti__dropdown-content:not(.iti__hide)")
      ) {
        return;
      }
      const openSuggestions = Array.from(
        panelEl.querySelectorAll("#countrySuggestions, #citySuggestions")
      ).filter((box) => !box.classList.contains("hidden"));
      if (openSuggestions.length > 0) {
        e.preventDefault();
        openSuggestions.forEach((box) => box.classList.add("hidden"));
        return;
      }
      e.preventDefault();
      closePanel();
      return;
    }

    if (e.key !== "Tab") return;
    const items = focusables();
    if (items.length === 0) {
      e.preventDefault();
      panelEl.focus({ preventScroll: true });
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (!panelEl.contains(active)) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
    } else if (e.shiftKey && (active === first || active === panelEl)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  }

  openBtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const isRealAvailability = !btn.classList.contains(
        "openPrivateRequestBtn"
      );
      openPanel(isRealAvailability, btn);
    })
  );

  closeBtns.forEach((btn) =>
    btn.addEventListener("click", closePanel)
  );

  overlayEl.addEventListener("click", closePanel);

  // Toque recibido antes de este punto (captura inline en [tourSlug].astro)
  window.__btBookingReady = true;
  const pending = window.__btPendingBooking;
  window.__btPendingBooking = null;
  if (pending) {
    pending.removeAttribute("aria-busy");
    if (pending.isConnected) {
      openPanel(!pending.classList.contains("openPrivateRequestBtn"), pending);
    }
  }
}

document.addEventListener("DOMContentLoaded", initBookingPanel);
