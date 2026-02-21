function initBookingPanel() {
  console.log("BOOKING PANEL INIT");

  const overlayEl = document.getElementById("bookingOverlay");
  const panelEl = document.getElementById("bookingPanel");
  const openBtns = document.querySelectorAll(
    ".openBookingBtn, .openPrivateRequestBtn"
  );
  const closeBtns = document.querySelectorAll(".closeBookingBtn");

  if (!overlayEl || !panelEl || openBtns.length === 0) {
    console.log("BOOKING ELEMENTS NOT FOUND");
    return;
  }

  let isOpen = false;

  function openPanel() {
    if (isOpen) return;
    isOpen = true;

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
      openPanel();
    })
  );

  closeBtns.forEach((btn) =>
    btn.addEventListener("click", closePanel)
  );

  overlayEl.addEventListener("click", closePanel);
}

document.addEventListener("DOMContentLoaded", initBookingPanel);