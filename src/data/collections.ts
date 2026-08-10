export type Collection = {
  id: string;
  handle: string;
  title: string;
  image?: string;
};

const PLACEHOLDER_IMAGE = 'https://trueoils.in/cdn/shop/files/BAO_50_Front.jpg?v=1771582706&width=120';

export const collections: Collection[] = [
  { id: '1', handle: 'mustard-oil', title: 'Mustard Oil', image: PLACEHOLDER_IMAGE },
  { id: '2', handle: 'groundnut-oil', title: 'Groundnut Oil', image: PLACEHOLDER_IMAGE },
  { id: '3', handle: 'flaxseed-oil', title: 'Flaxseed Oil', image: PLACEHOLDER_IMAGE },
  { id: '4', handle: 'coconut-oil', title: 'Coconut Oil', image: PLACEHOLDER_IMAGE },
  { id: '5', handle: 'almond-oil', title: 'Almond Oil', image: PLACEHOLDER_IMAGE },
  { id: '6', handle: 'neem-oil', title: 'Neem Oil', image: PLACEHOLDER_IMAGE },
];
