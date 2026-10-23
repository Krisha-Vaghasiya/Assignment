export type Puppy = { id: string; name: string; slug: string; breed: string; sex: string; age: string; description: string; status: 'available' | 'reserved' | 'gone-home' | 'draft'; photos: string[]; order: number };
export type Faq = { id: string; question: string; answer: string; published?: boolean; order: number };
export type Story = { id: string; name: string; caption: string; photo: string; published?: boolean; order: number };
export type Inquiry = { id: string; name: string; phone: string; email: string; area: string; puppyId: string; message: string; status: 'new' | 'contacted' | 'closed'; createdAt: string };
export type Catalog = { puppies: Puppy[]; faqs: Faq[]; stories: Story[] };
export type CatalogResult = { connected: boolean; catalog: Catalog };
