import { createFileRoute } from '@tanstack/react-router';
import { externalApiUrl } from '@/lib/external-api.server';
const allowed = /^(health|auth\/(login|logout|me)|inquiries|admin\/(puppies|faqs|stories|inquiries)(\/[a-f0-9]{24})?|admin\/uploads|files\/[a-f0-9]{24})$/;
async function proxy({ request, params }: { request: Request; params: { _splat?: string } }) {
  const path = params._splat || '';
  if (!allowed.test(path)) return Response.json({ error: 'Not found.' }, { status: 404 });
  if (!['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method)) return new Response(null, { status: 405 });
  if (request.method !== 'GET') {
    const origin = request.headers.get('origin');
    if (!origin || origin !== new URL(request.url).origin) return Response.json({ error: 'Request not permitted.' }, { status: 403 });
    if (Number(request.headers.get('content-length') || 0) > 5.5 * 1024 * 1024) return Response.json({ error: 'Photo is too large.' }, { status: 413 });
  }
  try {
    const url = externalApiUrl(path);
    if (!url) return Response.json({ error: 'Online management is not connected yet. Please contact us on WhatsApp.' }, { status: 503 });
    const headers = new Headers();
    const cookie = request.headers.get('cookie')?.split(';').map(v => v.trim()).find(v => v.startsWith('tp_admin='));
    if (cookie) headers.set('cookie', cookie);
    const type = request.headers.get('content-type');
    if (type) headers.set('content-type', type);
    const body = request.method === 'GET' ? undefined : await request.arrayBuffer();
    if (body && body.byteLength > 5.5 * 1024 * 1024) return Response.json({ error: 'Photo is too large.' }, { status: 413 });
    const response = await fetch(url, { method: request.method, headers, ...(body ? { body } : {}), signal: AbortSignal.timeout(15000), redirect: 'error' });
    const outgoing = new Headers({ 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    outgoing.set('Content-Type', response.headers.get('content-type') || 'application/json');
    for (const value of response.headers.getSetCookie()) if (value.startsWith('tp_admin=')) outgoing.append('Set-Cookie', value);
    return new Response(response.body, { status: response.status, headers: outgoing });
  } catch { return Response.json({ error: 'The service is unavailable. Please try again or contact us on WhatsApp.' }, { status: 502 }); }
}
export const Route = createFileRoute('/api/public/manage/$')({ server: { handlers: { GET: proxy, POST: proxy, PUT: proxy, PATCH: proxy, DELETE: proxy } } });
