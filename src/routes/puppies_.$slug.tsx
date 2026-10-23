import { createFileRoute, Link } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';
import { catalogQuery } from '@/lib/catalog-query';
import { importedSiteHead } from '@/lib/imported-site-head';
import { Button } from '@/components/ui/button';
export const Route = createFileRoute('/puppies_/$slug')({ loader: ({ context }) => context.queryClient.ensureQueryData(catalogQuery), head: () => importedSiteHead('Puppy profile | TeddyPups U.A.E.', 'Explore puppy photos, availability and details at TeddyPups U.A.E.'), component: PuppyProfile });
function PuppyProfile() {
  const { slug } = Route.useParams();
  const { data } = useSuspenseQuery(catalogQuery);
  const puppy = data.catalog.puppies.find(p => p.slug === slug);
  return <main className="management-page"><header className="management-top"><Link to="/" className="management-brand">TeddyPups</Link><Button asChild variant="outline"><Link to="/puppies">All puppies</Link></Button></header>{puppy ? <section className="management-shell py-12"><p className="text-muted-foreground mb-3">{puppy.status.replace('-', ' ')}</p><h1 className="management-title">{puppy.name}</h1><p className="mt-4">{puppy.breed} · {puppy.sex}{puppy.age ? ` · ${puppy.age}` : ''}</p><div className="managed-photo-grid my-8">{puppy.photos.map((photo, index) => <img key={photo} src={photo} alt={`${puppy.name}, photo ${index + 1}`} className="managed-profile-photo" />)}</div><p className="whitespace-pre-line mb-8">{puppy.description}</p><Button asChild><Link to="/contact" search={{ puppy: puppy.id }}>Ask about {puppy.name}</Link></Button></section> : <section className="management-shell py-12"><h1 className="management-title">Puppy not available</h1><p className="my-6">{data.connected ? 'This profile is no longer available.' : 'Online puppy profiles are not connected yet.'}</p><Button asChild><Link to="/contact" search={{ puppy: "" }}>Contact TeddyPups</Link></Button></section>}</main>;
}
