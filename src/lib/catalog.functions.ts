import { createServerFn } from '@tanstack/react-start';
import type { CatalogResult } from './catalog-types';
export const getCatalog = createServerFn({ method: 'GET' }).handler(async (): Promise<CatalogResult> => {
  const empty: CatalogResult = { connected: false, catalog: { puppies: [], faqs: [], stories: [] } };
  try {
    const { externalApiUrl } = await import('./external-api.server');
    const url = externalApiUrl('catalog');
    if (!url) return empty;
    const response = await fetch(url, { signal: AbortSignal.timeout(8000), redirect: 'error' });
    if (!response.ok) return empty;
    const catalog = await response.json();
    if (!Array.isArray(catalog.puppies) || !Array.isArray(catalog.faqs) || !Array.isArray(catalog.stories)) return empty;
    return { connected: true, catalog };
  } catch { return empty; }
});
