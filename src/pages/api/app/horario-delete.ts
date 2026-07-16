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

function classifyDeleteError(error: unknown): string {
  const message =
    error instanceof Error
      ? error.message
      : String(error);

  if (message.includes('HORARIO_HAS_RESERVATIONS')) {
    return 'tiene_reservas';
  }

  if (message.includes('HORARIO_HAS_OCCUPANCY')) {
    return 'tiene_ocupacion';
  }

  if (
    message.includes('HORARIO_NOT_FOUND') ||
    message.includes('HORARIO_INVALID_ID')
  ) {
    return 'no_encontrado';
  }

  return 'eliminar_fallo';
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
  const id = Number(form.get('id'));

  const redirectTo = safeRedirect(
    form.get('redirect'),
  );

  try {
    await crmFetch(
      `/horarios/${id}`,
      user,
      { method: 'DELETE' },
    );
  } catch (error) {
    return redirect(
      withQuery(
        redirectTo,
        'error',
        classifyDeleteError(error),
      ),
    );
  }

  return redirect(
    withQuery(redirectTo, 'success', 'eliminado'),
  );
};
