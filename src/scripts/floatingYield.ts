// UX-01 final — botones flotantes de ayuda (WhatsApp, asistente IA).
// Regla única, sin offsets por ancho de pantalla: un flotante con
// [data-float-yield] cede (se oculta) mientras debajo de él haya un
// control interactivo — CTA, flecha/tarjeta de tour, botón, campo,
// enlace del menú — y reaparece cuando el control sale de debajo.
// No cede si tiene el foco. La posición vertical respecto al banner de
// cookies la da --bt-cookie-offset (CookieBanner) en el CSS de cada uno.

const INTERACTIVE =
  'a[href],button,input,select,textarea,label[for],[role="button"],[data-float-avoid]';
const PAD = 4;

function coversControl(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  if (!r.width || !r.height) return false;
  for (const fx of [0, 0.5, 1]) {
    for (const fy of [0, 0.5, 1]) {
      const x = r.left - PAD + (r.width + 2 * PAD) * fx;
      const y = r.top - PAD + (r.height + 2 * PAD) * fy;
      if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) continue;
      const under = document
        .elementsFromPoint(x, y)
        .find(
          (e) =>
            !el.contains(e) &&
            !e.contains(el) &&
            !e.closest("[data-float-yield]") &&
            e.closest(INTERACTIVE)
        );
      if (under) return true;
    }
  }
  return false;
}

function update() {
  document.querySelectorAll<HTMLElement>("[data-float-yield]").forEach((el) => {
    const yieldNow = !el.contains(document.activeElement) && coversControl(el);
    el.classList.toggle("bt-float-yield", yieldNow);
  });
}

let frame = 0;
function schedule() {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    update();
  });
}

// Scroll/resize, y tras interacciones que cambian lo que hay debajo
// (menú móvil, filtros, resultados del buscador, banner de cookies)
addEventListener("scroll", schedule, { passive: true });
addEventListener("resize", schedule);
document.addEventListener("click", () => setTimeout(schedule, 260));
document.addEventListener("keyup", () => setTimeout(schedule, 60));
document.addEventListener("DOMContentLoaded", schedule);
addEventListener("load", () => {
  schedule();
  // el banner de cookies aparece con ~800 ms de retraso
  setTimeout(schedule, 1100);
});
