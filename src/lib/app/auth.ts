import type { AppUser } from './types';

const STRAPI_URL = import.meta.env.STRAPI_URL;
const JWT_SECRET = import.meta.env.APP_JWT_SECRET;

function b64url(obj: object): string {
  return btoa(JSON.stringify(obj))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function hmacVerify(data: string, sig: string, secret: string): Promise<boolean> {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
  );
  const sigBytes = Uint8Array.from(
    atob(sig.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0)
  );
  return crypto.subtle.verify('HMAC', key, sigBytes, new TextEncoder().encode(data));
}

async function signJWT(payload: object, expiresInHours = 8): Promise<string> {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now    = Math.floor(Date.now() / 1000);
  const claims = { ...payload, iat: now, exp: now + expiresInHours * 3600 };
  const data   = `${b64url(header)}.${b64url(claims)}`;
  const sig    = await hmacSign(data, JWT_SECRET);
  return `${data}.${sig}`;
}

async function verifyJWT(token: string): Promise<Record<string, any> | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [h, p, s] = parts;
    const valid = await hmacVerify(`${h}.${p}`, s, JWT_SECRET);
    if (!valid) return null;
    const payload = JSON.parse(atob(p.replace(/-/g, '+').replace(/_/g, '/')));
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch { return null; }
}

const ROLE_MAP: Record<string, AppUser['role']> = {
  'super_admin':      'super_admin',
  'Super Admin':      'super_admin',
  'operations_admin': 'operations_admin',
  'Operations Admin': 'operations_admin',
  'Staff':            'operations_admin',
  'staff':            'staff',
  'guide':            'guide',
  'Guide':            'guide',
};

// Producción, 2026-08-23 — fix definitivo: POST /api/auth/local NUNCA
// popula `role` (comportamiento de fábrica de users-permissions), y el
// hotfix intermedio (`GET /users/me?populate=role`) tampoco alcanza —
// el sanitizador de contentAPI retira la relación `role` igual porque
// el rol Staff no tiene el permiso plugin::users-permissions.role.find,
// aunque la consulta sí la popule. Fuente única canónica: el endpoint
// propio /api/me-role, que consulta el rol server-side con
// strapi.db.query (sin pasar por ese sanitizador) y sólo puede
// devolver el rol de quien ya demostró tener un JWT válido.
async function fetchAuthenticatedRole(jwt: string): Promise<string | undefined> {
  const res = await fetch(`${STRAPI_URL}/api/me-role`, {
    headers: { Authorization: `Bearer ${jwt}` },
  });
  if (!res.ok) return undefined;
  const data = await res.json();
  return data?.role ?? undefined;
}

export async function loginWithStrapi(
  identifier: string,
  password: string
): Promise<{ user: AppUser; sessionToken: string } | null> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier, password }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.jwt || !data.user) return null;

    // No confiar en data.user.role (auth/local nunca lo popula) —
    // el rol real se obtiene con una segunda llamada ya autenticada.
    const strapiRoleName = await fetchAuthenticatedRole(data.jwt);
    const mappedRole = strapiRoleName ? ROLE_MAP[strapiRoleName] : undefined;

    // Fail-closed: si /users/me falla, no devuelve rol, o el rol no
    // mapea explícitamente a un rol de aplicación conocido (p.ej. el
    // rol genérico "Authenticated"), se deniega la sesión por
    // completo. Nunca se asigna un rol privilegiado por defecto.
    if (!mappedRole) {
      console.warn('[auth] login denied: unmapped Strapi role', strapiRoleName);
      return null;
    }

    const user: AppUser = {
      id:          data.user.id,
      email:       data.user.email,
      username:    data.user.username,
      role:        mappedRole,
      strapiToken: data.jwt,
    };

    const sessionToken = await signJWT(user);
    return { user, sessionToken };
  } catch (err) {
    console.error('[auth] login error:', err);
    return null;
  }
}

export async function verifySessionToken(token: string): Promise<AppUser | null> {
  const payload = await verifyJWT(token);
  if (!payload) return null;
  return {
    id:          payload.id,
    email:       payload.email,
    username:    payload.username,
    role:        payload.role,
    strapiToken: payload.strapiToken,
  };
}
