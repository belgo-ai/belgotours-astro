export interface TourLanguageMeta {
  code: string;
  label: string;
  name: string;
  flag: string;
}

const LANGUAGE_META: Record<string, TourLanguageMeta> = {
  es: {
    code: 'es',
    label: 'ES',
    name: 'Español',
    flag: '🇪🇸',
  },
  en: {
    code: 'en',
    label: 'EN',
    name: 'English',
    flag: '🇬🇧',
  },
  it: {
    code: 'it',
    label: 'IT',
    name: 'Italiano',
    flag: '🇮🇹',
  },
  fr: {
    code: 'fr',
    label: 'FR',
    name: 'Français',
    flag: '🇫🇷',
  },
  de: {
    code: 'de',
    label: 'DE',
    name: 'Deutsch',
    flag: '🇩🇪',
  },
  pt: {
    code: 'pt',
    label: 'PT',
    name: 'Português',
    flag: '🇵🇹',
  },
  nl: {
    code: 'nl',
    label: 'NL',
    name: 'Nederlands',
    flag: '🇳🇱',
  },
};

export const TOUR_LANGUAGE_OPTIONS = [
  LANGUAGE_META.es,
  LANGUAGE_META.en,
  LANGUAGE_META.it,
  LANGUAGE_META.fr,
];

export function getTourLanguageMeta(
  value: unknown,
): TourLanguageMeta {
  const code = String(value || '')
    .trim()
    .toLowerCase();

  if (LANGUAGE_META[code]) {
    return LANGUAGE_META[code];
  }

  return {
    code: code || 'unknown',
    label: code ? code.toUpperCase() : '—',
    name: code || 'Idioma sin definir',
    flag: '🌐',
  };
}

export function getHorarioTourLanguage(
  value: unknown,
): string | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const horario = value as {
    idioma_tour?: unknown;
    recurrencia?: {
      idioma?: unknown;
    } | null;
    tour?: {
      locale?: unknown;
    } | null;
  };

  const candidates = [
    horario.idioma_tour,
    horario.recurrencia?.idioma,
    horario.tour?.locale,
  ];

  for (const candidate of candidates) {
    const normalized = String(
      candidate || '',
    )
      .trim()
      .toLowerCase();

    if (normalized) {
      return normalized;
    }
  }

  return null;
}
