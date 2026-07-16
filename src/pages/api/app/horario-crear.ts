export const prerender = false;

import type { APIRoute } from 'astro';
import { verifySessionToken } from '../../../lib/app/auth';
import { can } from '../../../lib/app/permissions';
import { crmFetch } from '../../../lib/app/apiClient';

function safeRedirect(value: unknown): string {
  return typeof value === 'string' &&
    value.startsWith('/app/horarios')
    ? value
    : '/app/horarios';
}

function withQuery(
  target: string,
  key: string,
  value: string,
): string {
  const url = new URL(target, 'http://dashboard.local');
  url.searchParams.set(key, value);

  return `${url.pathname}${url.search}`;
}

function classifyCreateError(error: unknown): string {
  const message =
    error instanceof Error
      ? error.message
      : String(error);

  if (message.includes('HORARIO_DUPLICATE')) {
    return 'duplicado';
  }

  if (
    message.includes('HORARIO_INVALID_TOUR') ||
    message.includes('HORARIO_TOUR_NOT_FOUND')
  ) {
    return 'tour_invalido';
  }

  if (message.includes('HORARIO_INVALID_DATE')) {
    return 'fecha_invalida';
  }

  if (message.includes('HORARIO_INVALID_TIME')) {
    return 'hora_invalida';
  }

  if (message.includes('HORARIO_INVALID_CAPACITY')) {
    return 'cupo_invalido';
  }

  return 'crear_fallo';
}

export const POST: APIRoute = async ({
  request,
  cookies,
  redirect,
}) => {
  const token = cookies.get('bt_session')?.value;

  if (!token) {
    return redirect('/app/login');
  }

  const user = await verifySessionToken(token);

  if (!user || !can(user.role, 'horarios', 'write')) {
    return new Response('Forbidden', { status: 403 });
  }

  const form = await request.formData();
  const redirectTo = safeRedirect(form.get('redirect'));

  try {
    await crmFetch('/horarios', user, {
      method: 'POST',
      body: JSON.stringify({
        tour_id: Number(form.get('tour_id')),
        fecha: form.get('fecha'),
        hora: form.get('hora'),
        cupoMaximo: Number(
          form.get('cupoMaximo') || 25,
        ),
        disponible: true,
      }),
    });
  } catch (error) {
    return redirect(
      withQuery(
        redirectTo,
        'error',
        classifyCreateError(error),
      ),
    );
  }

  return redirect(
    withQuery(redirectTo, 'success', 'creado'),
  );
};
