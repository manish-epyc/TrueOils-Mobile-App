export type Collection = {
  id: string;
  handle: string;
  title: string;
  image?: string;
  /** Product ids (from src/data/products.ts) that belong to this collection. */
  productIds: string[];
};

const PLACEHOLDER_IMAGE = 'https://trueoils.in/cdn/shop/files/BAO_50_Front.jpg?v=1771582706&width=120';

export const collections: Collection[] = [
  { id: '1', handle: 'mustard-oil', title: 'Mustard Oil', image: PLACEHOLDER_IMAGE, productIds: ['p4'] },
  { id: '2', handle: 'groundnut-oil', title: 'Groundnut Oil', image: PLACEHOLDER_IMAGE, productIds: ['p6'] },
  { id: '3', handle: 'flaxseed-oil', title: 'Flaxseed Oil', image: PLACEHOLDER_IMAGE, productIds: ['p3'] },
  { id: '4', handle: 'coconut-oil', title: 'Coconut Oil', image: PLACEHOLDER_IMAGE, productIds: ['p5'] },
  { id: '5', handle: 'almond-oil', title: 'Almond Oil', image: PLACEHOLDER_IMAGE, productIds: ['p1', 'p8'] },
  { id: '6', handle: 'neem-oil', title: 'Neem Oil', image: PLACEHOLDER_IMAGE, productIds: ['p7'] },
  { id: '7', handle: 'castor-oil', title: 'Castor Oil', image: PLACEHOLDER_IMAGE, productIds: ['p2'] },
];

export function findCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}
