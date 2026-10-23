import { queryOptions } from '@tanstack/react-query';
import { getCatalog } from './catalog.functions';
export const catalogQuery = queryOptions({ queryKey: ['teddypups-catalog'], queryFn: () => getCatalog(), staleTime: 30_000 });
