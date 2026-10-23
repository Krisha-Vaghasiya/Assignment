export function externalApiUrl(path: string) {
  const configured = process.env['TEDDYPUPS_API_URL'];
  if (!configured) return null;
  const base = new URL(configured);
  const isLocal = base.hostname === 'localhost' || base.hostname === '127.0.0.1';
  if ((base.protocol !== 'https:' && !isLocal) || base.username || base.password || base.search || base.hash) {
    throw new Error('Configure an HTTPS API URL without credentials (or http://localhost for local development).');
  }
  return new URL(base.pathname.replace(/\/$/, '') + '/' + path, base.origin);
}
