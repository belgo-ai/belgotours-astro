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

// Por intersección de rectángulos y no por puntos de muestreo: un enlace
// pequeño (p. ej. "Manage cookies" del pie) cabía entre los puntos de una
// rejilla 3×3. Cada control que se cruza se confirma con elementsFromPoint
// en el centro de la zona común, para no contar los que no se pintan ahí
// (ocultos, sin pointer-events o recortados fuera del viewport).
function coversControl(el: HTMLElement): boolean {
  const r = el.getBoundingClientRect();
  if (!r.width || !r.height) return false;
  const left = Math.max(0, r.left - PAD);
  const top = Math.max(0, r.top - PAD);
  const right = Math.min(innerWidth, r.right + PAD);
  const bottom = Math.min(innerHeight, r.bottom + PAD);
  for (const c of document.querySelectorAll<HTMLElement>(INTERACTIVE)) {
    if (el.contains(c) || c.contains(el) || c.closest("[data-float-yield]")) continue;
    const cr = c.getBoundingClientRect();
    const x1 = Math.max(left, cr.left);
    const y1 = Math.max(top, cr.top);
    const x2 = Math.min(right, cr.right);
    const y2 = Math.min(bottom, cr.bottom);
    if (x2 <= x1 || y2 <= y1) continue;
    const hits = document.elementsFromPoint((x1 + x2) / 2, (y1 + y2) / 2);
    if (hits.some((e) => c.contains(e))) return true;
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
