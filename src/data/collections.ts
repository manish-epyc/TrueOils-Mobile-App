export type Collection = {
  id: string;
  handle: string;
  title: string;
  image?: string;
  /** Product ids (from src/data/products.ts) that belong to this collection. */
  productIds: string[];
};

const placeholderImage = (lock: number) => `https://loremflickr.com/120/120/oliveoil,bottle?lock=${lock}`;

export const collections: Collection[] = [
  { id: '1', handle: 'mustard-oil', title: 'Mustard Oil', image: placeholderImage(1), productIds: ['p4'] },
  { id: '2', handle: 'groundnut-oil', title: 'Groundnut Oil', image: placeholderImage(2), productIds: ['p6'] },
  { id: '3', handle: 'flaxseed-oil', title: 'Flaxseed Oil', image: placeholderImage(3), productIds: ['p3'] },
  { id: '4', handle: 'coconut-oil', title: 'Coconut Oil', image: placeholderImage(4), productIds: ['p5'] },
  { id: '5', handle: 'almond-oil', title: 'Almond Oil', image: placeholderImage(5), productIds: ['p1', 'p8'] },
  { id: '6', handle: 'neem-oil', title: 'Neem Oil', image: placeholderImage(6), productIds: ['p7'] },
  { id: '7', handle: 'castor-oil', title: 'Castor Oil', image: placeholderImage(7), productIds: ['p2'] },
];

export function findCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}
