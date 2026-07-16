export const prerender = false;

import type { APIRoute } from 'astro';
import { verifySessionToken } from '../../../lib/app/auth';
import { can } from '../../../lib/app/permissions';
import { crmApi } from '../../../lib/app/apiClient';

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

function classifyToggleError(error: unknown): string {
  const message =
    error instanceof Error
      ? error.message
      : String(error);

  if (message.includes('HORARIO_NOT_FOUND')) {
    return 'no_encontrado';
  }

  if (
    message.includes('HORARIO_INVALID_ID') ||
    message.includes('HORARIO_INVALID_AVAILABILITY')
  ) {
    return 'disponibilidad_invalida';
  }

  return 'toggle_fallo';
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
  const disponible =
    form.get('disponible') === 'true';

  const redirectTo = safeRedirect(
    form.get('redirect'),
  );

  try {
    await crmApi.horarioDisponibilidad(
      user,
      id,
      disponible,
    );
  } catch (error) {
    return redirect(
      withQuery(
        redirectTo,
        'error',
        classifyToggleError(error),
      ),
    );
  }

  return redirect(
    withQuery(
      redirectTo,
      'success',
      disponible ? 'abierto' : 'cerrado',
    ),
  );
};
