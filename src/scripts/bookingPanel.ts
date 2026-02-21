// src/scripts/bookingPanel.ts
// Controla abrir/cerrar el booking panel + overlay + swipe-down (mobile)
// Diseñado para no romper SSR: solo corre en navegador y si existen elementos.

function initBookingPanel() {
  const overlay = document.getElementById("bookingOverlay");
  const panel = document.getElementById("bookingPanel");
  const openBtns = document.querySelectorAll<HTMLButtonElement>(
    ".openBookingBtn, .openPrivateRequestBtn"
  );
  const closeBtns = document.querySelectorAll<HTMLButtonElement>(".closeBookingBtn");

  // Si no estamos en una página con booking panel, no hacemos nada.
  if (!overlay || !panel || openBtns.length === 0) return;

  let isOpen = false;

  function openPanel() {
    if (isOpen) return;
    isOpen = true;

    overlay.classList.remove("hidden");
    requestAnimationFrame(() => overlay.classList.add("open"));

    panel.classList.add("open", "bounce");
    document.body.classList.add("no-scroll");

    openBtns.forEach((b) => b.setAttribute("aria-expanded", "true"));
    setTimeout(() => panel.classList.remove("bounce"), 320);
  }

  function closePanel() {
    if (!isOpen) return;
    isOpen = false;

    overlay.classList.remove("open");
    panel.classList.remove("open");
    document.body.classList.remove("no-scroll");

    openBtns.forEach((b) => b.setAttribute("aria-expanded", "false"));

    setTimeout(() => {
      if (!isOpen) overlay.classList.add("hidden");
    }, 300);
  }

  // Click open
  openBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openPanel();
    });
  });

  // Click close
  closeBtns.forEach((btn) => btn.addEventListener("click", closePanel));
  overlay.addEventListener("click", closePanel);

  // Swipe-down close (mobile)
  const grabber = panel.querySelector<HTMLElement>(".panel-grabber");
  const content = panel.querySelector<HTMLElement>(".panel-content");

  if (!grabber || !content) return;

  let startY = 0;
  let currentY = 0;
  let dragging = false;

  const startDrag = (clientY: number) => {
    dragging = true;
    startY = clientY;
    currentY = 0;
    panel.style.transition = "none";
  };

  const moveDrag = (clientY: number) => {
    if (!dragging) return;
    const delta = clientY - startY;
    if (delta < 0) return;

    currentY = Math.min(delta, window.innerHeight);
    panel.style.transform = `translateY(${currentY}px)`;

    // efecto overlay suave
    const opacity = Math.max(0, 1 - currentY / 300) * 0.35;
    overlay.style.opacity = String(opacity);
  };

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;

    panel.style.transition = "transform 300ms cubic-bezier(.2,.8,.2,1)";

    if (currentY > 80) {
      closePanel();
      setTimeout(() => {
        panel.style.transform = "";
      }, 310);
    } else {
      panel.classList.add("bounce");
      panel.style.transform = "translateY(0)";
      setTimeout(() => panel.classList.remove("bounce"), 320);
      overlay.style.opacity = "";
    }
  };

  // Touch
  grabber.addEventListener(
    "touchstart",
    (e) => {
      const touch = e.touches[0];
      startDrag(touch.clientY);
    },
    { passive: true }
  );

  grabber.addEventListener(
    "touchmove",
    (e) => {
      const touch = e.touches[0];
      moveDrag(touch.clientY);
      e.preventDefault();
    },
    { passive: false }
  );

  grabber.addEventListener("touchend", endDrag);

  // Mouse (desktop drag, opcional)
  grabber.addEventListener("mousedown", (e) => {
    startDrag((e as MouseEvent).clientY);
  });

  window.addEventListener("mousemove", (e) => {
    moveDrag((e as MouseEvent).clientY);
  });

  window.addEventListener("mouseup", endDrag);
}

// Inicialización robusta (sin depender de timing)
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBookingPanel);
  } else {
    initBookingPanel();
  }
}