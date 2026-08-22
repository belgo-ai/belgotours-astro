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
    return;
  }

  let isOpen = false;

  function openPanel(isRealAvailability) {
    if (isOpen) return;
    isOpen = true;

    if (isRealAvailability) {
      window.BTAnalytics?.trackEvent("view_availability", window.__BT_TOUR__);
    }

    overlayEl.classList.remove("hidden");
    requestAnimationFrame(() => overlayEl.classList.add("open"));

    panelEl.classList.add("open", "bounce");
    document.body.classList.add("no-scroll");

    openBtns.forEach((b) => b.setAttribute("aria-expanded", "true"));
    setTimeout(() => panelEl.classList.remove("bounce"), 320);
  }

  function closePanel() {
    if (!isOpen) return;
    isOpen = false;

    overlayEl.classList.remove("open");
    panelEl.classList.remove("open");
    document.body.classList.remove("no-scroll");

    openBtns.forEach((b) => b.setAttribute("aria-expanded", "false"));

    setTimeout(() => {
      if (!isOpen) overlayEl.classList.add("hidden");
    }, 300);
  }

  openBtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const isRealAvailability = !btn.classList.contains(
        "openPrivateRequestBtn"
      );
      openPanel(isRealAvailability);
    })
  );

  closeBtns.forEach((btn) =>
    btn.addEventListener("click", closePanel)
  );

  overlayEl.addEventListener("click", closePanel);
}

document.addEventListener("DOMContentLoaded", initBookingPanel);