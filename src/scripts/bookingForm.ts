
 
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";



 
 if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    
    console.log(" Inicializando BookingForm ");

    

    const root = document.getElementById("bookingForm");
// 📱 Inicializar teléfono internacional


const phoneInput = document.getElementById("customerPhone") as HTMLInputElement | null;

let iti: ReturnType<typeof intlTelInput> | null = null;
let utilsReady = false;

// FIX-01 F3 — país por defecto del prefijo: región del primer idioma del
// navegador que la tenga (es-MX → mx, fr-BE → be). Sin región de país
// (es, es-419) → país según el idioma del sitio. Sustituye a la
// geolocalización por IP (ipapi.co), que sólo alimentaba este prefijo.
const SITE_LANG_DEFAULT_COUNTRY: Record<string, string> = {
  es: "es",
  en: "gb",
  fr: "fr",
  it: "it",
  pt: "pt",
};

function defaultPhoneCountry(siteLang: string): string {
  const known = new Set(
    (intlTelInput as any).getCountryData().map((c: any) => c.iso2)
  );
  const tags = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of tags) {
    const region = String(tag || "")
      .split("-")
      .slice(1)
      .find((part) => /^[a-z]{2}$/i.test(part));
    if (region && known.has(region.toLowerCase())) return region.toLowerCase();
  }
  return SITE_LANG_DEFAULT_COUNTRY[siteLang] || "es";
}

if (phoneInput) {
  iti = intlTelInput(phoneInput, {
  initialCountry: defaultPhoneCountry(
    root?.dataset.lang || document.documentElement.getAttribute("lang") || "es"
  ),
  // Prefijo dentro del propio campo (no separado): con separateDialCode,
  // un "+" tecleado se descartaba (o abría el buscador de país) y "+32…"
  // nunca cambiaba el país. Así la librería detecta el "+xx" al teclear,
  // pegar o autocompletar. getNumber() sigue devolviendo E.164.
  separateDialCode: false,
  autoPlaceholder: "polite",
  loadUtils: () => import("intl-tel-input/utils"),
} as any);
(iti as any).promise?.then(() => { utilsReady = true; });

  phoneInput.addEventListener("blur", () => {
  const errorEl = document.getElementById("phoneError");

  // si utils aún no está listo, no castigues (evita falsos inválidos)
  if (!utilsReady) {
    errorEl?.classList.add("hidden");
    phoneInput.classList.remove("border-red-500", "ring-2", "ring-red-200");
    return;
  }

  // FIX-01B C1: vacío o sólo el prefijo → mensaje de campo obligatorio
  if (phoneIsEmpty(phoneInput)) {
    setFieldError(phoneInput);
  } else if (iti && !iti.isValidNumber()) {
    errorEl?.classList.remove("hidden");
    phoneInput.classList.add("border-red-500", "ring-2", "ring-red-200");
  } else {
    errorEl?.classList.add("hidden");
    phoneInput.classList.remove("border-red-500", "ring-2", "ring-red-200");
  }
});

const refreshNav = () => (window as any).updateBookingNavigation?.();

// El error se retira en cuanto el número es válido (sin mostrarlo al teclear)
phoneInput.addEventListener("input", () => {
  if (utilsReady && iti?.isValidNumber()) {
    document.getElementById("phoneError")?.classList.add("hidden");
    phoneInput.classList.remove("border-red-500", "ring-2", "ring-red-200");
  }
});
phoneInput.addEventListener("countrychange", () => {
  if (utilsReady && iti?.isValidNumber()) {
    document.getElementById("phoneError")?.classList.add("hidden");
    phoneInput.classList.remove("border-red-500", "ring-2", "ring-red-200");
  }
});

phoneInput.addEventListener("input", refreshNav);
phoneInput.addEventListener("keyup", refreshNav);

// intl-tel-input dispara esto cuando cambias país/bandera
phoneInput.addEventListener("countrychange", refreshNav);
}

if (!root) return;

const bookingRoot = root;


// Helpers tipados
function getInput(id: string): HTMLInputElement | null {
  return document.getElementById(id) as HTMLInputElement | null;
}

function getSelect(id: string): HTMLSelectElement | null {
  return document.getElementById(id) as HTMLSelectElement | null;
}

function getButton(id: string): HTMLButtonElement | null {
  return document.getElementById(id) as HTMLButtonElement | null;
}


// 🌍 Idioma y API
const lang =
  bookingRoot.dataset.lang ||
  document.documentElement.getAttribute("lang") ||
  "es";

const apiBase =
  bookingRoot.dataset.api || "http://localhost:1337/api";


// Steps
const steps = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
];

const successView = document.getElementById("bookingSuccess");
const navBar = document.getElementById("bookingNav");

const prevBtn = getButton("prevStep");
const nextBtn = getButton("nextStep");
const confirmBtn = getButton("confirmBooking");
const newBookingBtn = document.getElementById("newBooking");
const terms = document.getElementById("agreeToTerms");

const emailInput = getInput("customerEmail");
const emailConfirmInput = getInput("customerEmailConfirm");
const emailMismatch = document.getElementById("emailMismatch");

const summaryDate = document.getElementById("summaryDate");
const summaryTime = document.getElementById("summaryTime");
const summaryParticipants = document.getElementById("summaryParticipants");

let currentStep = 1;
let isSubmitting = false;


// Tracking UTM
const urlParams = new URLSearchParams(window.location.search);

const tracking: Record<string, string | undefined> = {
  utm_source: urlParams.get("utm_source") || undefined,
  utm_medium: urlParams.get("utm_medium") || undefined,
  utm_campaign: urlParams.get("utm_campaign") || undefined,
  utm_content: urlParams.get("utm_content") || undefined,
  utm_term: urlParams.get("utm_term") || undefined,
  gclid: urlParams.get("gclid") || undefined,
  referrer: document.referrer || undefined,
};


// 🔐 Inicializar bookingState seguro
window.bookingState = window.bookingState || {};

if (!window.bookingState.participants) {
  window.bookingState.participants = {
    adults: 1,
    children: 0,
  };
}

window.bookingState.tracking = tracking;

// ── Scroll automático guiado ─────────────────────────────────


// 2. Cuando se selecciona HORARIO → scroll a participantes (ya existe en Calendar)
// 3. Cuando participantes cambian → scroll a botón Continuar
document.addEventListener("participantsUpdated", () => {
  setTimeout(() => {
    const nextBtn = document.getElementById("nextStep");
    if (!nextBtn || !window.bookingState?.selectedTime) return;
    const panel = nextBtn.closest(".panel-content, .overflow-y-auto");
    if (panel) {
      const offsetTop = nextBtn.getBoundingClientRect().top
        - panel.getBoundingClientRect().top
        + panel.scrollTop - 16;
      panel.scrollTo({ top: offsetTop, behavior: "smooth" });
    } else {
      nextBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 300);
});

// 🔥 Limpiar errores visuales al escribir (solo una vez)
// FIX-01 F3: el error se retira en cuanto el valor es válido, no al teclear
bookingRoot.querySelectorAll("input, select, textarea").forEach((input) => {
  input.addEventListener("input", () => {
    if (!isFieldValid(input as HTMLInputElement)) return;
    clearFieldError(input as HTMLInputElement);
    if (currentStep === 2 && validateStep2(false)) hideNavHint();
  });
});

// Banner de error de reserva (rechazo backend, red, sesión caducada) —
// reemplaza alert() nativo, que bloquea la UI y no es accesible ni
// deja el dato introducido a la vista (B09 Gate 9, §8/§9).
const bookingErrorBanner = document.getElementById("bookingErrorBanner");
const bookingErrorText = document.getElementById("bookingErrorText");
const bookingErrorBackBtn = document.getElementById("bookingErrorBackBtn");

function showBookingError(message: string, opts: { backToStep1?: boolean } = {}) {
  if (!bookingErrorBanner || !bookingErrorText) {
    // Red de seguridad si el markup no está presente por algún motivo
    alert(message);
    return;
  }
  bookingErrorText.textContent = message;
  bookingErrorBanner.classList.remove("hidden");
  bookingErrorBackBtn?.classList.toggle("hidden", !opts.backToStep1);
  bookingErrorBanner.scrollIntoView({ behavior: "smooth", block: "center" });
}

function hideBookingError() {
  bookingErrorBanner?.classList.add("hidden");
}

bookingErrorBackBtn?.addEventListener("click", () => {
  hideBookingError();
  showStep(1);
});

    function showStep(stepNumber: number) {
  hideBookingError();
  steps.forEach((s, i) => {
    if (!s) return;
    const idx = i + 1;

    if (idx === stepNumber) {
      s.classList.remove("hidden");
      s.classList.add("active");
    } else {
      s.classList.remove("active");
      s.classList.add("hidden");
    }
  });

  if (successView) successView.classList.add("hidden");

  currentStep = stepNumber;
  updateStepper(stepNumber);
  hideNavHint();
  updateNavigation();

  if (stepNumber === 2 || stepNumber === 3) {
  updateSummary();
}

  // Scroll al inicio del paso — dentro del panel si existe
  if (stepNumber !== 1) {
    setTimeout(() => {
      const panel = document.querySelector(".panel-content");
      if (panel) {
        // Scroll al top del panel primero
        panel.scrollTo({ top: 0, behavior: "smooth" });
        // Luego al primer campo vacío del paso activo
        setTimeout(() => {
          const activeStep = document.querySelector(".booking-step.active");
          const firstInput = activeStep?.querySelector("input:not([type='hidden']):not([type='checkbox'])") as HTMLElement | null;
          if (firstInput && panel) {
            const offset = firstInput.getBoundingClientRect().top
              - panel.getBoundingClientRect().top
              + panel.scrollTop - 80;
            panel.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
          }
        }, 300);
      } else {
        bookingRoot.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  }
}

    function showSuccess() {
      steps.forEach((s) => {
        if (!s) return;
        s.classList.remove("active");
        s.classList.add("hidden");
      });
      if (navBar) navBar.classList.add("hidden");
      if (successView) successView.classList.remove("hidden");
    }

    function markFieldError(element: HTMLElement | null) {
  if (!element) return;

  element.classList.add("border-red-500", "ring-2", "ring-red-200");
  element.setAttribute("aria-invalid", "true");

  scrollIntoPanel(element);
  element.focus({ preventScroll: true });

  element.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-4px)" },
      { transform: "translateX(4px)" },
      { transform: "translateX(0)" },
    ],
    {
      duration: 250,
    }
  );
}

 
function validateStep1(showUI = false) {
  window.bookingState = window.bookingState || {};
  window.bookingState.participants =
    window.bookingState.participants || {
      adults: 1,
      children: 0,
    };

  const state = window.bookingState;

  const hasDate = !!state.selectedDate;
  const hasTime = !!state.selectedTime;

  const adults = Number(state.participants?.adults ?? 1);
  const hasParticipants = adults >= 1;

  const ok =
  hasDate &&
  hasTime &&
  hasParticipants &&
  typeof state.horarioId === "number";

  if (!ok && showUI) {
    if (!hasDate) {
      const calendar = document.querySelector(".calendar-2026") as HTMLElement | null;
      markFieldError(calendar);
      return false;
    }

    if (!hasTime) {
      const timeBlock = document.querySelector(".time-slot") as HTMLElement | null;
      markFieldError(timeBlock);
      return false;
    }

    if (!hasParticipants) {
      const counter = document.querySelector(".participant-counter") as HTMLElement | null;
      markFieldError(counter);
      return false;
    }
  }

  return ok;
}



// ── FIX-01 F2/F3: stepper, errores por campo y aviso de navegación ──
const BOOKING_UI_TEXT: Record<string, Record<string, string>> = {
  es: {
    required: "Este campo es obligatorio",
    emailInvalid: "Introduce un correo válido",
    reviewFields: "Revisa los campos marcados",
    chooseDateTime: "Elige una fecha y un horario para continuar",
    chooseTime: "Elige un horario para continuar",
  },
  en: {
    required: "This field is required",
    emailInvalid: "Please enter a valid email address",
    reviewFields: "Please check the highlighted fields",
    chooseDateTime: "Choose a date and a time to continue",
    chooseTime: "Choose a time to continue",
  },
  it: {
    required: "Questo campo è obbligatorio",
    emailInvalid: "Inserisci un indirizzo email valido",
    reviewFields: "Controlla i campi evidenziati",
    chooseDateTime: "Scegli una data e un orario per continuare",
    chooseTime: "Scegli un orario per continuare",
  },
  fr: {
    required: "Ce champ est obligatoire",
    emailInvalid: "Veuillez saisir une adresse email valide",
    reviewFields: "Vérifiez les champs signalés",
    chooseDateTime: "Choisissez une date et un horaire pour continuer",
    chooseTime: "Choisissez un horaire pour continuer",
  },
  pt: {
    required: "Este campo é obrigatório",
    emailInvalid: "Introduza um email válido",
    reviewFields: "Verifique os campos assinalados",
    chooseDateTime: "Escolha uma data e um horário para continuar",
    chooseTime: "Escolha um horário para continuar",
  },
};

function uiText(key: string): string {
  return (BOOKING_UI_TEXT[lang] || BOOKING_UI_TEXT.es)[key] || BOOKING_UI_TEXT.es[key];
}

const navHint = document.getElementById("bookingNavHint");

function showNavHint(message: string) {
  if (!navHint) return;
  navHint.textContent = message;
  navHint.classList.remove("hidden");
}

function hideNavHint() {
  navHint?.classList.add("hidden");
}

function updateStepper(stepNumber: number) {
  bookingRoot
    .querySelectorAll<HTMLElement>("[data-booking-step]")
    .forEach((el) => {
      const n = Number(el.dataset.bookingStep);
      el.classList.remove("text-gray-900", "font-semibold", "text-gray-700", "text-gray-400");
      if (n === stepNumber) {
        el.classList.add("text-gray-900", "font-semibold");
        el.setAttribute("aria-current", "step");
      } else {
        el.classList.add(n < stepNumber ? "text-gray-700" : "text-gray-400");
        el.removeAttribute("aria-current");
      }
    });
}

// Coloca el campo cerca de la parte superior del panel: así no queda bajo
// la barra fija de navegación ni bajo el teclado móvil (visualViewport).
function scrollIntoPanel(el: HTMLElement) {
  const panel = el.closest(".panel-content") as HTMLElement | null;
  if (!panel) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  const place = () => {
    const offset = el.getBoundingClientRect().top
      - panel.getBoundingClientRect().top
      + panel.scrollTop - 96;
    panel.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
  };
  place();
  window.visualViewport?.addEventListener("resize", place, { once: true });
}

const STEP2_FIELDS = [
  "firstName",
  "lastName",
  "customerCountry",
  "customerCity",
  "customerPhone",
  "customerEmail",
  "customerEmailConfirm",
];

// FIX-01B C1: con el prefijo dentro del campo, "+34" / "0034" sin más
// dígitos cuenta como vacío (nunca se envía sólo el prefijo).
function phoneIsEmpty(el: HTMLInputElement): boolean {
  const digits = el.value.replace(/\D/g, "").replace(/^00/, "");
  if (!digits) return true;
  const hasIntlPrefix = /^\s*(\+|00)/.test(el.value);
  const dialCode = iti?.getSelectedCountryData()?.dialCode;
  return hasIntlPrefix && !!dialCode && digits === dialCode;
}

function isFieldValid(el: HTMLInputElement): boolean {
  if (!STEP2_FIELDS.includes(el.id)) return true;
  const value = el.value.trim();
  if (!value) return false;
  if (el.id === "customerPhone") {
    if (phoneIsEmpty(el)) return false;
    return !utilsReady || !iti || iti.isValidNumber() === true;
  }
  if (el.id === "customerEmail") return el.checkValidity();
  if (el.id === "customerEmailConfirm") {
    return el.checkValidity() && value === (emailInput?.value.trim() ?? "");
  }
  return true;
}

// Mensaje genérico bajo el campo (obligatorio / email no válido)
function genericErrorEl(el: HTMLInputElement): HTMLElement {
  const id = `${el.id}FieldError`;
  let msg = document.getElementById(id);
  if (!msg) {
    msg = document.createElement("p");
    msg.id = id;
    msg.className = "text-xs text-red-500 mt-1 hidden";
    let anchor: HTMLElement = (el.closest(".iti") as HTMLElement) || el;
    if (anchor.parentElement?.classList.contains("relative")) anchor = anchor.parentElement;
    anchor.insertAdjacentElement("afterend", msg);
  }
  return msg;
}

function setFieldError(el: HTMLInputElement) {
  const value = el.value.trim();
  let msg: HTMLElement | null;
  if (el.id === "customerPhone" && !phoneIsEmpty(el)) {
    msg = document.getElementById("phoneError");
  } else if (el.id === "customerEmailConfirm" && value && el.checkValidity()) {
    msg = emailMismatch;
  } else {
    msg = genericErrorEl(el);
    msg.textContent = value && el.type === "email" ? uiText("emailInvalid") : uiText("required");
  }
  // Un único mensaje visible por campo
  const fieldMessages = [
    document.getElementById(`${el.id}FieldError`),
    el.id === "customerPhone" ? document.getElementById("phoneError") : null,
    el.id === "customerEmailConfirm" ? emailMismatch : null,
  ];
  fieldMessages.forEach((m) => {
    if (m && m !== msg) m.classList.add("hidden");
  });
  msg?.classList.remove("hidden");
  if (!el.dataset.describedbyOriginal) {
    el.dataset.describedbyOriginal = el.getAttribute("aria-describedby") || "";
  }
  if (msg) el.setAttribute("aria-describedby", msg.id);
  el.classList.add("border-red-500", "ring-2", "ring-red-200");
  el.setAttribute("aria-invalid", "true");
}

function clearFieldError(el: HTMLInputElement) {
  el.classList.remove("border-red-500", "ring-2", "ring-red-200");
  el.removeAttribute("aria-invalid");
  document.getElementById(`${el.id}FieldError`)?.classList.add("hidden");
  if (el.id === "customerPhone") document.getElementById("phoneError")?.classList.add("hidden");
  if (el.id === "customerEmailConfirm") emailMismatch?.classList.add("hidden");
  if (el.dataset.describedbyOriginal !== undefined) {
    if (el.dataset.describedbyOriginal) {
      el.setAttribute("aria-describedby", el.dataset.describedbyOriginal);
    } else {
      el.removeAttribute("aria-describedby");
    }
  }
}

    function validateStep2(showUI = false) {
  const invalid = STEP2_FIELDS
    .map((id) => getInput(id))
    .filter((el): el is HTMLInputElement => !!el && !isFieldValid(el));

  if (showUI && invalid.length) {
    invalid.forEach(setFieldError);
    showNavHint(uiText("reviewFields"));
    markFieldError(invalid[0]);
  }

  return invalid.length === 0;
}

    function validateStep3(showUI = false) {
  const checked = (terms as HTMLInputElement | null)?.checked ?? false;

  if (!checked && showUI) {
    markFieldError(terms);
  }

  return checked;
}

    function updateNavigation() {
      if (!prevBtn || !nextBtn) return;

      prevBtn.disabled = currentStep === 1;
      // FIX-01 F3: "Continuar" siempre habilitado; valida al pulsarlo y
      // explica qué falta (antes quedaba deshabilitado sin motivo visible).
      nextBtn.disabled = false;

      if (currentStep === 3) {
        nextBtn.classList.add("hidden");
        if (confirmBtn) {
          confirmBtn.disabled = !validateStep3(false) || isSubmitting;
        }
      } else {
        nextBtn.classList.remove("hidden");
        if (confirmBtn) {
               confirmBtn.disabled = true;
              }
      }
    }

    // 🔥 Exponer función global correctamente
(window as any).updateBookingNavigation = updateNavigation;

    // 👇 AGREGA ESTO
      

    // FIX-01 F4: "YYYY-MM-DD" es una fecha civil del tour. new Date(iso)
    // la interpreta como medianoche UTC y en husos de América mostraba el
    // día anterior. Se formatea a mediodía UTC en Europe/Brussels: misma
    // fecha para cualquier zona horaria del visitante.
    function formatTourDate(
      iso: string,
      locale: string,
      options: Intl.DateTimeFormatOptions = {}
    ): string {
      const [y, m, d] = String(iso).split("-").map(Number);
      if (!y || !m || !d) return String(iso);
      return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString(locale, {
        ...options,
        timeZone: "Europe/Brussels",
      });
    }

    function updateSummary() {
      const localeMap = {
        es: "es-ES",
        en: "en-GB",
        it: "it-IT",
        fr: "fr-FR",
      };
      const locale = localeMap[lang as keyof typeof localeMap] || "es-ES";

      const state = window.bookingState || {};
      if (summaryDate && state.selectedDate) {
        summaryDate.textContent = formatTourDate(state.selectedDate, locale, {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
      }
      if (summaryTime && state.selectedTime) {
        summaryTime.textContent = state.selectedTime;
      }
      if (summaryParticipants && state.participants) {
        const adultsWord =
          lang === "en" ? "adults" : lang === "it" ? "adulti" : lang === "fr" ? "adultes" : "adultos";
        const childrenWord =
          lang === "en" ? "children" : lang === "it" ? "bambini" : lang === "fr" ? "enfants" : "niños";
        summaryParticipants.textContent = `${state.participants.adults} ${adultsWord}, ${state.participants.children} ${childrenWord}`;
      }

         const step2SummaryDate = document.getElementById("step2SummaryDate");
         const step2SummaryTime = document.getElementById("step2SummaryTime");
         const step2SummaryParticipants = document.getElementById("step2SummaryParticipants");

         if (step2SummaryDate && state.selectedDate) {
         step2SummaryDate.textContent = formatTourDate(state.selectedDate, locale);
        }

        if (step2SummaryTime && state.selectedTime) {
        step2SummaryTime.textContent = state.selectedTime;
        }

        if (step2SummaryParticipants && state.participants) {
        step2SummaryParticipants.textContent =
        `${state.participants.adults + state.participants.children}`;
       }
       }
window.addEventListener("dateSelected", () => {
  updateSummary();
  updateNavigation();
  setTimeout(updateNavigation, 150);
});

window.addEventListener("timeSelected", () => {
  updateSummary();
  updateNavigation();
  if (currentStep === 1 && validateStep1(false)) hideNavHint();
});

    document.addEventListener("participantsUpdated", () => {
      updateNavigation();
    });

    // 🔥 Activar navegación dinámica en Step 2
const step2Inputs = bookingRoot.querySelectorAll(
  "#step2 input, #step2 select, #step2 textarea"
);

// Scroll al siguiente campo al presionar Tab o Enter en móvil
step2Inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    // Solo en móvil
    if (window.innerWidth > 768) return;
    const panel = document.querySelector(".panel-content");
    if (!panel) return;
    // Encontrar el siguiente input vacío
    const allInputs = Array.from(
      document.querySelectorAll("#step2 input:not([type='hidden']):not([type='checkbox']), #step2 select, #step2 textarea")
    ) as HTMLElement[];
    const currentIdx = allInputs.indexOf(input as HTMLElement);
    const nextInput = allInputs.slice(currentIdx + 1).find(el => !(el as HTMLInputElement).value?.trim());
    if (nextInput) {
      setTimeout(() => {
        const offset = nextInput.getBoundingClientRect().top
          - panel.getBoundingClientRect().top
          + panel.scrollTop - 80;
        panel.scrollTo({ top: Math.max(0, offset), behavior: "smooth" });
      }, 150);
    }
  });
});

step2Inputs.forEach((input) => {
  input.addEventListener("input", () => {
    updateNavigation();
  });

  input.addEventListener("change", () => {
    updateNavigation();
  });
});

    // FIX-01 F3: el desajuste de correos sólo se muestra al salir del campo
    // de confirmación; se retira en cuanto ambos coinciden.
    emailInput?.addEventListener("input", () => {
      if (emailConfirmInput?.getAttribute("aria-invalid") === "true" && isFieldValid(emailConfirmInput)) {
        clearFieldError(emailConfirmInput);
      }
    });
    emailConfirmInput?.addEventListener("blur", () => {
      const confirmValue = emailConfirmInput.value.trim();
      const emailValue = emailInput?.value.trim();
      if (confirmValue && emailValue && confirmValue !== emailValue) {
        setFieldError(emailConfirmInput);
      }
    });
    emailConfirmInput?.addEventListener("input", () => {
      updateNavigation();
    });

    terms?.addEventListener("change", () => {
      if (currentStep === 3 && confirmBtn) {
        confirmBtn.disabled = !validateStep3(false) || isSubmitting;
      }
    });

    prevBtn?.addEventListener("click", () => {
      if (isSubmitting) return;
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });

    nextBtn?.addEventListener("click", async () => {
      if (currentStep === 1) {
        if (!validateStep1(true)) {
          // El calendario marca siempre una fecha (la primera, de forma
          // automática); si ya hay horarios a la vista, lo que falta es la hora.
          const hasTimesShown = !!bookingRoot.querySelector(".time-slot");
          showNavHint(hasTimesShown ? uiText("chooseTime") : uiText("chooseDateTime"));
          return;
        }
        showStep(2);
        const state = window.bookingState || {};
        (window as any).BTAnalytics?.trackEvent("begin_checkout", {
          ...((window as any).__BT_TOUR__ || {}),
          selected_date: state.selectedDate,
          selected_time: state.selectedTime,
        });
        return;
      }
      if (currentStep === 2) {
        if (!validateStep2(true)) return;
        showStep(3);
        return;
      }
    });

    newBookingBtn?.addEventListener("click", () => {
      window.location.reload();
    });

    confirmBtn?.addEventListener("click", submitBooking);

    function setConfirmButtonTextDefault() {
      if (!confirmBtn) return;
      if (lang === "es")
        confirmBtn.textContent = "✅ Confirmar reserva gratis";
      else if (lang === "en")
        confirmBtn.textContent = "✅ Confirm free booking";
      else if (lang === "it")
        confirmBtn.textContent =
          "✅ Conferma la prenotazione gratuita";
      else if (lang === "fr")
        confirmBtn.textContent =
          "✅ Confirmer la réservation gratuite";
      else confirmBtn.textContent = "✅ Confirm booking";
    }

    async function submitBooking() {
      if (isSubmitting) return;
      if (!validateStep3(true)) return;

      const state = window.bookingState || {};
      const horarioId = state.horarioId;
      if (!horarioId) {
        showBookingError(
          lang === "es"
            ? "Ha ocurrido un problema con el horario seleccionado. Elige fecha y hora de nuevo."
            : lang === "en"
            ? "There was a problem with the selected time slot. Please choose date and time again."
            : lang === "it"
            ? "Si è verificato un problema con l'orario selezionato. Scegli di nuovo data e ora."
            : "Un problème est survenu avec le créneau sélectionné. Choisissez à nouveau la date et l'heure.",
          { backToStep1: true }
        );
        return;
      }

const firstName = getInput("firstName")?.value.trim();
const lastName = getInput("lastName")?.value.trim();
const city = getInput("customerCity")?.value.trim();
const country = getInput("customerCountry")?.value.trim();

const phone = getInput("customerPhone")?.value.trim();
const email = getInput("customerEmail")?.value.trim();
const emailConfirm = getInput("customerEmailConfirm")?.value.trim();
const comments = getInput("customerComments")?.value.trim() || "";
const howHeard = getSelect("howHeard")?.value || "";
const marketingConsent = getInput("marketingConsent")?.checked || false;
      const adultos = Number(state.participants?.adults || 1);
      const ninos = Number(state.participants?.children || 0);

      if (
        !firstName ||
        !lastName ||
        !city ||
        !country ||
    
        !phone ||
        !email ||
        !emailConfirm
      ) {
        showStep(2);
        showBookingError(
          lang === "es"
            ? "Faltan datos obligatorios. Revisa el paso anterior."
            : lang === "en"
            ? "Some required details are missing. Please check the previous step."
            : lang === "it"
            ? "Mancano dei dati obbligatori. Controlla il passaggio precedente."
            : "Des informations obligatoires sont manquantes. Vérifiez l'étape précédente."
        );
        return;
      }

      if (email !== emailConfirm) {
        showStep(2);
        showBookingError(
          lang === "es"
            ? "Los correos no coinciden."
            : lang === "en"
            ? "The email addresses don't match."
            : lang === "it"
            ? "Le email non corrispondono."
            : "Les adresses email ne correspondent pas."
        );
        return;
      }

      isSubmitting = true;
      if (confirmBtn) {
        if (confirmBtn) {
             confirmBtn.disabled = true;
               }
        confirmBtn.textContent = "⏳ Procesando...";
      }

      try {
        // 1️⃣ PAYLOAD para /reservas/confirmar (Strapi v5)
        const confirmarPayload = {
          horarioId,
          nombre: firstName,
          apellidos: lastName,
          email,
          telefono: iti && utilsReady ? iti.getNumber() : phone,
          ciudad: city,
          pais: country,
          adultos,
          ninos,
          idioma_cliente: lang,
          comentarios_cliente: comments || undefined,
          como_nos_conociste: howHeard || undefined,
          marketing_consent: marketingConsent,
          ...tracking,
        };

        // 2️⃣ Llamar a /reservas/confirmar
        const resConfirm = await fetch(
          `${apiBase}/reservas/confirmar`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(confirmarPayload),
          }
        );

        if (!resConfirm.ok) {
          const errJson = await resConfirm
            .json()
            .catch(() => ({}));
          console.error("❌ Error en /reservas/confirmar:", errJson);

          // F01 (B09 Gate 9, §9): el horario pudo pasar mientras el
          // usuario completaba el formulario — el backend es la
          // autoridad final y lo rechaza con este código. No dejar al
          // usuario atrapado: explicación humana + salida clara a
          // volver a elegir, en vez del mensaje crudo del backend.
          const isPastSlot = errJson?.code === "HORARIO_ALREADY_PAST";

          if (isPastSlot) {
            state.selectedDate = null;
            state.selectedTime = null;
            state.horarioId = null;
          }

          const msg =
            errJson?.error?.message ||
            errJson?.message ||
            `Error ${resConfirm.status}`;

          showBookingError(
            isPastSlot
              ? lang === "es"
                ? "Ese horario ya no está disponible. Elige otra fecha u hora."
                : lang === "en"
                ? "That time slot is no longer available. Please choose another date or time."
                : lang === "it"
                ? "Quell'orario non è più disponibile. Scegli un'altra data o ora."
                : "Ce créneau n'est plus disponible. Choisissez une autre date ou heure."
              : lang === "es"
              ? `No se pudo confirmar la reserva: ${msg}`
              : `Could not confirm booking: ${msg}`,
            { backToStep1: isPastSlot }
          );

          isSubmitting = false;
          if (confirmBtn) {
            confirmBtn.disabled = !validateStep3(false);
            setConfirmButtonTextDefault();
          }
          return;
        }

        const dataConfirm = await resConfirm.json().catch(() => ({}));
        console.log("✅ Respuesta confirmar:", dataConfirm);

        const confirmarToken =
          dataConfirm?.confirmarToken ||
          dataConfirm?.token ||
          dataConfirm?.checkoutToken;

        if (!confirmarToken) {
          console.error(
            "❌ No se obtuvo confirmarToken en la respuesta:",
            dataConfirm
          );
          showBookingError(
            lang === "es"
              ? "No se pudo procesar la reserva. Inténtalo de nuevo en unos segundos."
              : lang === "en"
              ? "We couldn't process the booking. Please try again in a moment."
              : lang === "it"
              ? "Non è stato possibile elaborare la prenotazione. Riprova tra poco."
              : "La réservation n'a pas pu être traitée. Merci de réessayer dans un instant."
          );
          isSubmitting = false;
          if (confirmBtn) {
            confirmBtn.disabled = !validateStep3(false);
            setConfirmButtonTextDefault();
          }
          return;
        }

        // 3️⃣ Llamar a /reservas/finalizar con el token
        const resFinal = await fetch(`${apiBase}/reservas/finalizar`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: confirmarToken }),
        });

        if (!resFinal.ok) {
          const errJson = await resFinal.json().catch(() => ({}));
          console.error("❌ Error en /reservas/finalizar:", errJson);

          // finalizar() vuelve a revalidar horario/tour en el backend
          // (no confía en los snapshots de sesión) — el mismo rechazo
          // F01 puede llegar aquí también, en la última pantalla.
          const isPastSlot = errJson?.code === "HORARIO_ALREADY_PAST";

          if (isPastSlot) {
            state.selectedDate = null;
            state.selectedTime = null;
            state.horarioId = null;
          }

          const msg =
            errJson?.error?.message ||
            errJson?.message ||
            `Error ${resFinal.status}`;

          showBookingError(
            isPastSlot
              ? lang === "es"
                ? "Ese horario ya no está disponible. Elige otra fecha u hora."
                : lang === "en"
                ? "That time slot is no longer available. Please choose another date or time."
                : lang === "it"
                ? "Quell'orario non è più disponibile. Scegli un'altra data o ora."
                : "Ce créneau n'est plus disponible. Choisissez une autre date ou heure."
              : errJson?.message === "Sesión no válida o ya usada" ||
                errJson?.message?.includes("expirad")
              ? lang === "es"
                ? "Tu sesión de reserva ha caducado. Vuelve a elegir fecha y hora."
                : lang === "en"
                ? "Your booking session has expired. Please choose date and time again."
                : lang === "it"
                ? "La tua sessione di prenotazione è scaduta. Scegli di nuovo data e ora."
                : "Votre session de réservation a expiré. Choisissez à nouveau la date et l'heure."
              : lang === "es"
              ? `No se pudo finalizar la reserva: ${msg}`
              : `Could not complete booking: ${msg}`,
            { backToStep1: isPastSlot }
          );

          isSubmitting = false;
          if (confirmBtn) {
            confirmBtn.disabled = !validateStep3(false);
            setConfirmButtonTextDefault();
          }
          return;
        }

        const dataFinal = await resFinal.json().catch(() => ({}));
        console.log("🎉 Reserva finalizada:", dataFinal);

        const reservaId =
          dataFinal?.reservaId ||
          dataFinal?.id ||
          dataFinal?.data?.id ||
          null;

        const safeLang = ["es", "en", "it", "fr"].includes(lang)
          ? lang
          : "es";

        if (reservaId) {
          // Redireccionamos a la página de éxito con el ID real
          window.location.href = `/${safeLang}/booking-success?id=${encodeURIComponent(
            reservaId
          )}`;
          return;
        }

        // Fallback: mostrar pantalla de éxito sin ID
        showSuccess();
        isSubmitting = false;
      } catch (e) {
        // Fallo de red/conexión — mensaje humano, nunca el detalle
        // técnico crudo (§8: "no mostrar errores técnicos/API crudos").
        // El detalle real sigue disponible en consola para depuración.
        console.error("❌ Excepción en submitBooking:", e);
        showBookingError(
          lang === "es"
            ? "No se pudo conectar para completar la reserva. Comprueba tu conexión e inténtalo de nuevo."
            : lang === "en"
            ? "We couldn't connect to complete the booking. Check your connection and try again."
            : lang === "it"
            ? "Impossibile connettersi per completare la prenotazione. Controlla la connessione e riprova."
            : "Impossible de se connecter pour finaliser la réservation. Vérifiez votre connexion et réessayez."
        );
        isSubmitting = false;
        if (confirmBtn) {
          confirmBtn.disabled = !validateStep3(false);
          setConfirmButtonTextDefault();
        }
      }
    }

    // 🌍 AUTOCOMPLETE COUNTRY + CITY
function setupAutocomplete(
  inputId: string,
  suggestionId: string,
  type: "country" | "city"
) {
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  const suggestionBox = document.getElementById(suggestionId);

  if (!input || !suggestionBox) return;

  let debounceTimeout: ReturnType<typeof setTimeout>;

  input.addEventListener("input", () => {
    const query = input.value.trim();
    suggestionBox.innerHTML = "";
    suggestionBox.classList.add("hidden");

    if (query.length < 2) return;

    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(async () => {
      try {
       const url = `/.netlify/functions/geocode?q=${encodeURIComponent(query)}&type=${encodeURIComponent(type)}&lang=${encodeURIComponent(lang)}`;

       const res = await fetch(url);

        if (!res.ok) return;

        const data = await res.json();
        if (!Array.isArray(data)) return;

        data.forEach((item) => {
          const option = document.createElement("div");
          option.className = "px-3 py-2 cursor-pointer hover:bg-gray-100 transition";
          option.textContent = (item.display_name || "").split(",")[0];

          option.addEventListener("click", () => {
            input.value = option.textContent || "";
            suggestionBox.classList.add("hidden");
            updateNavigation();
          });

          suggestionBox.appendChild(option);
        });

        if (data.length > 0) {
          suggestionBox.classList.remove("hidden");
        }
      } catch (err) {
        console.error("Autocomplete error:", err);
      }
    }, 300);
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target as Node)) {
      suggestionBox.classList.add("hidden");
    }
  });
}

// Inicializar autocomplete
setupAutocomplete("customerCountry", "countrySuggestions", "country");
setupAutocomplete("customerCity", "citySuggestions", "city");

   
  showStep(1);
  updateNavigation();
  });
  }



// 🔥 Exponer función global inmediatamente
export {};