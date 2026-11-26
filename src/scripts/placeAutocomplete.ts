// BOOKING-UX-02 — autocompletado de País del paso 2.
//
// Lista local (códigos ISO de intl-tel-input, ya incluido en el bundle, +
// nombres de Intl.DisplayNames). Sin red: "Méx" → México al instante,
// nunca ciudades ni regiones. Se busca en el idioma del sitio y en otros
// idiomas habituales ("Belgique" en /es/ → Bélgica); se guarda el nombre
// en el idioma del sitio.
//
// Ciudad no tiene lista propia: la política de Nominatim público no
// permite autocompletado y el stack no tiene otra fuente. Es texto libre
// con el autorrelleno del navegador (autocomplete="address-level2").
//
// Patrón combobox (input + listbox): flechas, Enter, Escape, toque/clic.
// Valor guardado igual que antes (texto en `pais`); el ISO sólo vive en
// data-iso del input, no se envía al backend.

import intlTelInput from "intl-tel-input";

type Option = { value: string; iso?: string };

const MAX_OPTIONS = 6;

export const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Mercados frecuentes: desempatan coincidencias del mismo nivel
const PRIORITY = ["ES", "MX", "AR", "CO", "CL", "PE", "IT", "FR", "BE", "US", "GB", "DE", "NL", "PT", "BR", "UY", "EC", "VE"];

// Formas habituales que no coinciden con el nombre oficial
const ALIASES: Record<string, string> = {
  eeuu: "US", "ee uu": "US", usa: "US", us: "US", america: "US",
  uk: "GB", inglaterra: "GB", england: "GB", "gran bretana": "GB", escocia: "GB", gales: "GB",
  holanda: "NL", holland: "NL", olanda: "NL", hollande: "NL",
  "corea": "KR", korea: "KR", "republica checa": "CZ", "czech republic": "CZ",
};

const OTHER_LANGS = ["en", "es", "it", "fr", "pt", "de", "nl"];

type Country = { iso: string; name: string; keys: string[] };

let countriesCache: { lang: string; list: Country[] } | null = null;

function countryList(lang: string): Country[] {
  if (countriesCache?.lang === lang) return countriesCache.list;
  const data = (intlTelInput as any).getCountryData() as { iso2: string; name: string }[];
  // El primero es el idioma del sitio (nombre que se guarda); el resto sólo
  // sirve para encontrar el país escrito en otro idioma
  const names: Intl.DisplayNames[] = [];
  for (const l of [lang, ...OTHER_LANGS.filter((x) => x !== lang)]) {
    try {
      names.push(new Intl.DisplayNames([l], { type: "region" }));
    } catch {}
  }
  const aliasByIso: Record<string, string[]> = {};
  for (const [k, iso] of Object.entries(ALIASES)) (aliasByIso[iso] ||= []).push(k);
  const list = data.map(({ iso2, name }) => {
    const iso = iso2.toUpperCase();
    const localName = names[0]?.of(iso) || name;
    const keys = [localName, ...names.slice(1).map((n) => n.of(iso) || ""), name].filter(Boolean).map(normalize);
    return { iso, name: localName, keys: [...new Set([...keys, ...(aliasByIso[iso] || [])])] };
  });
  countriesCache = { lang, list };
  return list;
}

export function searchCountries(query: string, lang: string): Option[] {
  const q = normalize(query);
  if (!q) return [];
  const scored: { c: Country; score: number }[] = [];
  for (const c of countryList(lang)) {
    let score = Infinity;
    c.keys.forEach((k, i) => {
      const lead = i === 0 ? 0 : 1; // el nombre en el idioma del sitio primero
      if (k.startsWith(q)) score = Math.min(score, lead);
      else if (k.split(" ").some((w) => w.startsWith(q))) score = Math.min(score, 2 + lead);
      else if (q.length >= 3 && k.includes(q)) score = Math.min(score, 4);
    });
    if (score < Infinity) scored.push({ c, score });
  }
  const rank = (iso: string) => {
    const i = PRIORITY.indexOf(iso);
    return i === -1 ? PRIORITY.length : i;
  };
  return scored
    .sort((a, b) => a.score - b.score || rank(a.c.iso) - rank(b.c.iso) || a.c.name.localeCompare(b.c.name, lang))
    .slice(0, MAX_OPTIONS)
    .map(({ c }) => ({ value: c.name, iso: c.iso }));
}

// Texto escrito que es exactamente un país (o alias) → país canónico
export function matchCountry(text: string, lang: string): Country | null {
  const q = normalize(text);
  if (!q) return null;
  return countryList(lang).find((c) => c.keys.includes(q)) || null;
}

function combobox(
  input: HTMLInputElement,
  box: HTMLElement,
  onPick: (opt: Option) => void
) {
  let options: Option[] = [];
  let active = -1;

  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", box.id);
  box.setAttribute("role", "listbox");

  const close = () => {
    box.classList.add("hidden");
    box.innerHTML = "";
    options = [];
    active = -1;
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
  };

  const highlight = (i: number) => {
    active = i;
    [...box.children].forEach((el, j) => {
      el.setAttribute("aria-selected", String(j === i));
      el.classList.toggle("bg-gray-100", j === i);
    });
    if (i >= 0) {
      input.setAttribute("aria-activedescendant", `${box.id}-opt-${i}`);
      (box.children[i] as HTMLElement)?.scrollIntoView({ block: "nearest" });
    } else input.removeAttribute("aria-activedescendant");
  };

  const pick = (i: number) => {
    const opt = options[i];
    if (!opt) return;
    close();
    onPick(opt);
  };

  const show = (list: Option[]) => {
    box.innerHTML = "";
    options = list;
    active = -1;
    if (!list.length || document.activeElement !== input) {
      close();
      return;
    }
    list.forEach((opt, i) => {
      const el = document.createElement("div");
      el.id = `${box.id}-opt-${i}`;
      el.setAttribute("role", "option");
      el.setAttribute("aria-selected", "false");
      el.className = "px-3 py-3 cursor-pointer hover:bg-gray-100 transition";
      const main = document.createElement("span");
      main.className = "font-medium text-gray-900";
      main.textContent = opt.value;
      el.appendChild(main);
      // pointerdown + preventDefault: el input no pierde el foco antes
      // de elegir (táctil y ratón)
      el.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        pick(i);
      });
      box.appendChild(el);
    });
    box.classList.remove("hidden");
    input.setAttribute("aria-expanded", "true");
  };

  input.addEventListener("keydown", (e) => {
    if (box.classList.contains("hidden") || !options.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlight((active + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlight(active <= 0 ? options.length - 1 : active - 1);
    } else if (e.key === "Enter" && active >= 0) {
      e.preventDefault();
      pick(active);
    } else if (e.key === "Escape") {
      // sólo cierra la lista: bookingPanel.js no cierra el panel con
      // un Escape ya atendido (defaultPrevented)
      e.preventDefault();
      close();
    }
  });
  input.addEventListener("blur", () => setTimeout(close, 0));

  return { show, close };
}

// Tecleo, borrado o pegado del usuario; el autorrelleno llega como
// "insertReplacementText" o como evento sin inputType
const isTyping = (e: Event) =>
  e instanceof InputEvent && !!e.inputType && e.inputType !== "insertReplacementText";

function isAutofilled(el: HTMLInputElement) {
  for (const sel of [":autofill", ":-webkit-autofill"]) {
    try {
      if (el.matches(sel)) return true;
    } catch {}
  }
  return false;
}

export function setupCountryAutocomplete(
  input: HTMLInputElement,
  box: HTMLElement,
  lang: string,
  onChange: () => void,
  next?: HTMLElement | null
) {
  const cb = combobox(input, box, (opt) => {
    input.value = opt.value;
    input.dataset.iso = opt.iso || "";
    onChange();
    next?.focus();
  });

  input.addEventListener("input", (e) => {
    const exact = matchCountry(input.value, lang);
    input.dataset.iso = exact?.iso || "";
    // Autorrelleno del navegador (valor completo sin teclear): se normaliza
    // y la lista propia no se abre, para no superponerse a la del navegador
    if (!isTyping(e) || isAutofilled(input)) {
      cb.close();
      if (exact) input.value = exact.name;
      return;
    }
    cb.show(searchCountries(input.value, lang));
  });

  // Escrito a mano o por autorrelleno: si es un país, se normaliza
  input.addEventListener("change", () => {
    const c = matchCountry(input.value, lang);
    if (c) {
      input.value = c.name;
      input.dataset.iso = c.iso;
    }
    onChange();
  });
}
