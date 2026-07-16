export const BUSINESS_TIME_ZONE =
  'Europe/Brussels';

const DATE_ONLY_PATTERN =
  /^(\d{4})-(\d{2})-(\d{2})$/;

function parseDateOnly(
  value: unknown,
): Date | null {
  const raw = String(value || '').trim();
  const match = DATE_ONLY_PATTERN.exec(raw);

  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const date = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
      12,
      0,
      0,
    ),
  );

  if (
    date.getUTCFullYear() !== year
    || date.getUTCMonth() !== month - 1
    || date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

function toDateOnly(
  date: Date,
): string {
  const year = String(
    date.getUTCFullYear(),
  ).padStart(4, '0');

  const month = String(
    date.getUTCMonth() + 1,
  ).padStart(2, '0');

  const day = String(
    date.getUTCDate(),
  ).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function businessToday(
  now = new Date(),
): string {
  const parts = new Intl.DateTimeFormat(
    'en-GB',
    {
      timeZone: BUSINESS_TIME_ZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    },
  ).formatToParts(now);

  const value = (
    type: Intl.DateTimeFormatPartTypes,
  ): string | undefined =>
    parts.find(
      (part) => part.type === type,
    )?.value;

  const year = value('year');
  const month = value('month');
  const day = value('day');

  if (!year || !month || !day) {
    throw new Error(
      'No se pudo calcular la fecha operativa de Bruselas.',
    );
  }

  return `${year}-${month}-${day}`;
}

export function addBusinessDays(
  value: string,
  days: number,
): string {
  const date = parseDateOnly(value);

  if (!date || !Number.isInteger(days)) {
    throw new Error(
      'No se pudo desplazar la fecha operativa.',
    );
  }

  date.setUTCDate(
    date.getUTCDate() + days,
  );

  return toDateOnly(date);
}

export function startOfBusinessWeek(
  value: string,
): string {
  const date = parseDateOnly(value);

  if (!date) {
    throw new Error(
      'No se pudo calcular el inicio de semana.',
    );
  }

  const weekday = date.getUTCDay();

  const mondayDifference =
    weekday === 0
      ? -6
      : 1 - weekday;

  date.setUTCDate(
    date.getUTCDate() + mondayDifference,
  );

  return toDateOnly(date);
}

export function businessWeekDates(
  today: string,
  offsetDays = 0,
): string[] {
  const displaced =
    addBusinessDays(today, offsetDays);

  const monday =
    startOfBusinessWeek(displaced);

  return Array.from(
    { length: 7 },
    (_, index) =>
      addBusinessDays(monday, index),
  );
}

export function formatBusinessDate(
  value: string,
  options: Intl.DateTimeFormatOptions,
  locale = 'es-ES',
): string {
  const date = parseDateOnly(value);

  if (!date) {
    return value || '—';
  }

  return new Intl.DateTimeFormat(
    locale,
    {
      ...options,
      timeZone: BUSINESS_TIME_ZONE,
    },
  ).format(date);
}

export function formatBusinessDateTime(
  value: unknown,
  options: Intl.DateTimeFormatOptions,
  locale = 'es-ES',
): string {
  const date = new Date(
    String(value || ''),
  );

  if (Number.isNaN(date.getTime())) {
    return '—';
  }

  return new Intl.DateTimeFormat(
    locale,
    {
      ...options,
      timeZone: BUSINESS_TIME_ZONE,
    },
  ).format(date);
}
