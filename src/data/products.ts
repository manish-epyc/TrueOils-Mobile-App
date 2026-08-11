export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  compareAtPrice?: number;
};

export type NutritionFact = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  tagline: string;
  images: string[];
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewsCount: number;
  variants: ProductVariant[];
  description: string;
  benefits: string[];
  howToUse: string[];
  /** Empty for external-use-only oils — shown as a caution note instead of a nutrition table. */
  nutrition: NutritionFact[];
  externalUseOnly?: boolean;
};

const PLACEHOLDER_IMAGES = [
  'https://trueoils.in/cdn/shop/files/BAO_50_Front.jpg?v=1771582706&width=480',
  'https://trueoils.in/cdn/shop/files/BAO_50_Front.jpg?v=1771582706&width=480&crop=left',
  'https://trueoils.in/cdn/shop/files/BAO_50_Front.jpg?v=1771582706&width=480&crop=right',
];

function scale(base: number, factor: number) {
  return Math.round(base * factor * 2) / 2;
}

function makeVariants(labels: string[], factors: number[], price: number, compareAtPrice?: number): ProductVariant[] {
  return labels.map((label, i) => ({
    id: label,
    label,
    price: scale(price, factors[i]),
    compareAtPrice: compareAtPrice ? scale(compareAtPrice, factors[i]) : undefined,
  }));
}

export const products: Product[] = [
  {
    id: 'p1',
    handle: 'bitter-almond-oil',
    title: 'Bitter Almond Oil',
    tagline: 'Cold-pressed from Gurbandi kernels, for hair, skin & culinary use.',
    images: PLACEHOLDER_IMAGES,
    price: 175.5,
    compareAtPrice: 195,
    rating: 4.2,
    reviewsCount: 86,
    variants: makeVariants(['50ml', '100ml', '250ml', '500ml'], [1, 1.8, 4, 7.2], 175.5, 195),
    description:
      'True Oils Bitter Almond Oil is cold-pressed from Gurbandi Prunus amygdalus kernels using a traditional kolhu, below 40°C. Potent and aromatic, it retains its natural nutty scent and full fatty acid profile, and is traditionally valued for hair, skin, and light culinary use.',
    benefits: [
      'Deeply nourishes and softens dry hair',
      'Rich in Vitamin E and antioxidants',
      'Helps soothe dry, irritated skin',
      'Lightweight — absorbs quickly without a greasy feel',
      'Traditionally used for scalp massage (champi)',
    ],
    howToUse: [
      'Hair: Warm a small amount and massage into the scalp; leave for 30 minutes before washing.',
      'Skin: Apply a few drops directly, or mix into a moisturiser.',
      'Culinary: Use sparingly as a finishing oil — not recommended for high-heat cooking.',
      'If solidified in cold weather, warm the bottle gently before use.',
    ],
    nutrition: [
      { label: 'Energy', value: '884 Kcal' },
      { label: 'Fat', value: '100g' },
      { label: 'Saturated Fatty Acids', value: '8g' },
      { label: 'Monounsaturated Fat', value: '65g' },
      { label: 'Polyunsaturated Fat', value: '27g' },
      { label: 'Vitamin E', value: '39mg' },
    ],
  },
  {
    id: 'p2',
    handle: 'castor-oil',
    title: 'Castor Oil',
    tagline: 'Cold-pressed, high in ricinoleic acid. Ideal for hair, skin & lashes.',
    images: PLACEHOLDER_IMAGES,
    price: 225,
    compareAtPrice: 250,
    rating: 4.3,
    reviewsCount: 142,
    variants: makeVariants(['100ml', '200ml', '500ml'], [1, 1.8, 4], 225, 250),
    description:
      'True Oils Castor Oil is cold-pressed from Ricinus communis seeds, exceptionally high in ricinoleic acid. Thick and rich, it is a strictly external-use oil, ideal for hair, skin, brows, and lashes.',
    benefits: [
      'Supports thicker-looking hair, brows and lashes over time',
      'Deeply moisturises dry skin and cuticles',
      'Rich in ricinoleic acid, a rare and potent fatty acid',
      'Helps reduce frizz and adds shine to hair',
    ],
    howToUse: [
      'Lashes/brows: Apply a small amount with a clean spoolie before bed.',
      'Hair: Mix with a lighter carrier oil and massage into the scalp.',
      'Skin: Use on cuticles, elbows, or heels as a heavy-duty moisturiser.',
      'For external use only — avoid contact with eyes.',
    ],
    nutrition: [],
    externalUseOnly: true,
  },
  {
    id: 'p3',
    handle: 'flax-seed-oil',
    title: 'Flax Seed Oil',
    tagline: 'Rich in Omega-3 ALA. Best used cold, never heated.',
    images: PLACEHOLDER_IMAGES,
    price: 117,
    compareAtPrice: 130,
    rating: 4.2,
    reviewsCount: 64,
    variants: makeVariants(['100ml', '250ml', '500ml'], [1, 2.2, 4], 117, 130),
    description:
      'True Oils Flax Seed Oil is cold-pressed from premium flax seeds and cloth-filtered, unrefined. One of the richest plant sources of Omega-3 ALA, it is best used cold — heat degrades its delicate fatty acids.',
    benefits: [
      'One of the richest plant sources of Omega-3 (ALA)',
      'Supports heart, brain and skin health',
      'May help reduce inflammation',
      'A good source of lignans and fibre-linked compounds',
    ],
    howToUse: [
      'Drizzle over salads, smoothies or finished dishes.',
      'Never heat — Omega-3s break down at high temperatures.',
      'Start with 1 teaspoon daily and build up gradually.',
      'Store in the refrigerator after opening and use within 60 days.',
    ],
    nutrition: [
      { label: 'Energy', value: '884 Kcal' },
      { label: 'Fat', value: '100g' },
      { label: 'Saturated Fatty Acids', value: '9g' },
      { label: 'Omega-3 (ALA)', value: '53g' },
      { label: 'Omega-6', value: '13g' },
      { label: 'Vitamin E', value: '1mg' },
    ],
  },
  {
    id: 'p4',
    handle: 'mustard-oil',
    title: 'Mustard Oil',
    tagline: 'Kolhu-pressed below 40°C, sharp and pungent, kitchen classic.',
    images: PLACEHOLDER_IMAGES,
    price: 165,
    compareAtPrice: 185,
    rating: 4.6,
    reviewsCount: 210,
    variants: makeVariants(['100ml', '250ml', '500ml', '1L'], [1, 2.2, 4, 7.5], 165, 185),
    description:
      'True Oils Mustard Oil (Kachi Ghani) is traditionally kolhu-pressed below 40°C and free from argemone oil. Sharp, pungent, and full-bodied, it is a kitchen classic across Indian cooking, and is also used for hair care and body massage.',
    benefits: [
      'High smoke point — well suited to Indian cooking styles',
      'Rich in monounsaturated fats',
      'Traditionally used for scalp and body massage',
      'Sharp, pungent aroma that mellows on heating',
    ],
    howToUse: [
      'Culinary: Heat until it just starts to smoke lightly, then add ingredients — this mellows the pungency.',
      'Hair: Warm slightly and massage into the scalp for traditional champi.',
      'Body: Use for pre-bath oil massage.',
      'Store in a cool, dark place away from direct sunlight.',
    ],
    nutrition: [
      { label: 'Energy', value: '884 Kcal' },
      { label: 'Fat', value: '100g' },
      { label: 'Saturated Fatty Acids', value: '12g' },
      { label: 'Monounsaturated Fat', value: '59g' },
      { label: 'Polyunsaturated Fat', value: '21g' },
      { label: 'Erucic Acid', value: '≤21%' },
    ],
  },
  {
    id: 'p5',
    handle: 'coconut-oil',
    title: 'Virgin Coconut Oil',
    tagline: 'Virgin cold-pressed, mild aroma. For cooking, skin & hair.',
    images: PLACEHOLDER_IMAGES,
    price: 210,
    compareAtPrice: 230,
    rating: 4.5,
    reviewsCount: 178,
    variants: makeVariants(['100ml', '250ml', '500ml'], [1, 2.2, 4], 210, 230),
    description:
      'True Oils Cold Pressed Virgin Coconut Oil (Shudh Nariyal Tel) is extracted from premium dried coconut (copra) using a mechanical cold press process. Unlike RBD (refined, bleached, deodorised) coconut oil, this virgin variant is unrefined and cloth filtered, retaining its natural coconut aroma and full fatty acid profile. It is a healthy source of good fats, supports digestion, and is excellent for hair care, skin care, and cooking.',
    benefits: [
      'Healthy source of good fat',
      'Improves immunity — strong agent for antibacterial, anti-fungal & anti-viral activity',
      'Improves digestion and boosts metabolism',
      'Excellent for hair care and skin',
      'Rich in Vitamin E',
      'Rich in saturated fatty acids which help burn fat and decrease appetite',
      'Used in salad dressing, sauteing, and cooking',
    ],
    howToUse: [
      'Culinary: Suitable for sauteing, stir-frying, baking, and as a butter substitute. Stable at medium-high heat.',
      'Topical: Apply to skin or hair as a natural moisturiser and conditioner.',
      'Oil pulling: Use 1 tablespoon for traditional oil pulling practice.',
      'If solidified, place the bottle in warm water briefly to liquefy. Do not microwave.',
    ],
    nutrition: [
      { label: 'Energy', value: '899.28 Kcal' },
      { label: 'Fat', value: '99.92g' },
      { label: 'Saturated Fatty Acids', value: '91.86g' },
      { label: 'Polyunsaturated Fat', value: '1.63g' },
      { label: 'Monounsaturated Fat', value: '6.51g' },
      { label: 'Carbohydrate', value: '0g' },
      { label: 'Protein', value: '0g' },
      { label: 'Vitamin E', value: '31.78mg' },
      { label: 'Trans Fat', value: 'ND' },
      { label: 'Cholesterol', value: 'ND' },
      { label: 'Sodium', value: 'BLQ' },
      { label: 'Added Sugar', value: '0g' },
    ],
  },
  {
    id: 'p6',
    handle: 'groundnut-oil',
    title: 'Groundnut Oil',
    tagline: 'Traditional kolhu-pressed peanut oil with a nutty aroma.',
    images: PLACEHOLDER_IMAGES,
    price: 190,
    compareAtPrice: 190,
    rating: 4.4,
    reviewsCount: 51,
    variants: makeVariants(['100ml', '250ml', '500ml'], [1, 2.2, 4], 190, 190),
    description:
      'True Oils Groundnut Oil is traditionally kolhu-pressed from whole peanuts below 40°C. Mild and nutty, it is a versatile everyday cooking oil with a naturally high smoke point.',
    benefits: [
      'High smoke point, ideal for frying and sauteing',
      'Good source of monounsaturated fat',
      'Mild, nutty flavour that suits a wide range of cuisines',
      'Naturally cholesterol-free',
    ],
    howToUse: [
      'Culinary: Use for everyday cooking, frying, and tempering.',
      'Store in a cool, dry place away from direct sunlight.',
      'Shake well before use — natural sediment may settle at the bottom.',
    ],
    nutrition: [
      { label: 'Energy', value: '884 Kcal' },
      { label: 'Fat', value: '100g' },
      { label: 'Saturated Fatty Acids', value: '17g' },
      { label: 'Monounsaturated Fat', value: '46g' },
      { label: 'Polyunsaturated Fat', value: '32g' },
      { label: 'Vitamin E', value: '13mg' },
    ],
  },
  {
    id: 'p7',
    handle: 'neem-oil',
    title: 'Neem Oil',
    tagline: 'Cold-pressed, unrefined. For skin care and natural pest control.',
    images: PLACEHOLDER_IMAGES,
    price: 145,
    rating: 4.0,
    reviewsCount: 29,
    variants: makeVariants(['100ml', '250ml'], [1, 2.2], 145),
    description:
      'True Oils Neem Oil is cold-pressed and unrefined, retaining its strong natural aroma and full compound profile. It is a strictly external-use oil, traditionally used for skin care and as a natural pest deterrent for plants.',
    benefits: [
      'Traditionally used to support clear, healthy-looking skin',
      'A natural, chemical-free option for plant pest control',
      'Unrefined and cloth-filtered — nothing added',
    ],
    howToUse: [
      'Skin: Dilute with a carrier oil before applying to skin.',
      'Plants: Mix a small amount with water and a mild soap, then spray on affected plants.',
      'Patch-test before first use on skin.',
      'For external use only — not intended for consumption.',
    ],
    nutrition: [],
    externalUseOnly: true,
  },
  {
    id: 'p8',
    handle: 'almond-oil',
    title: 'Sweet Almond Oil',
    tagline: 'Gentle, lightweight oil for daily skin and hair nourishment.',
    images: PLACEHOLDER_IMAGES,
    price: 199,
    compareAtPrice: 260,
    rating: 4.7,
    reviewsCount: 96,
    variants: makeVariants(['100ml', '250ml', '500ml'], [1, 2.2, 4], 199, 260),
    description:
      'True Oils Sweet Almond Oil is cold-pressed from premium sweet almonds. Gentle and lightweight, it absorbs easily and is suited to daily use on skin and hair, and light culinary use.',
    benefits: [
      'Lightweight — absorbs quickly without clogging pores',
      'Rich in Vitamin E and healthy fats',
      'Gentle enough for daily use, including on babies (patch-test first)',
      'Helps condition hair and tame frizz',
    ],
    howToUse: [
      'Skin: Apply a few drops as a daily moisturiser, morning or night.',
      'Hair: Smooth a small amount through ends to reduce frizz.',
      'Culinary: Use as a finishing oil for salads and desserts.',
      'Patch-test before first use if you have nut allergies.',
    ],
    nutrition: [
      { label: 'Energy', value: '884 Kcal' },
      { label: 'Fat', value: '100g' },
      { label: 'Saturated Fatty Acids', value: '8g' },
      { label: 'Monounsaturated Fat', value: '70g' },
      { label: 'Polyunsaturated Fat', value: '17g' },
      { label: 'Vitamin E', value: '39mg' },
    ],
  },
];

export function getDiscountPercent(price: number, compareAtPrice: number | undefined): number {
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

export const bestSellerProducts = [products[3], products[1], products[4], products[0]];
export const topRatedProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
export const topDiscountedProducts = [...products]
  .filter((p) => p.compareAtPrice && p.compareAtPrice > p.price)
  .sort((a, b) => getDiscountPercent(b.price, b.compareAtPrice) - getDiscountPercent(a.price, a.compareAtPrice))
  .slice(0, 4);
export const newArrivalProducts = [products[6], products[7], products[2], products[5]];

export const maxDiscountPercent = Math.round(
  Math.max(0, ...products.map((p) => getDiscountPercent(p.price, p.compareAtPrice)))
);

export function findProductById(productId: string): Product | undefined {
  return products.find((p) => p.id === productId);
}

export function resolveCartLine(merchandiseId: string): { product: Product; variant: ProductVariant } | undefined {
  const separatorIndex = merchandiseId.indexOf('-');
  if (separatorIndex === -1) return undefined;

  const productId = merchandiseId.slice(0, separatorIndex);
  const variantId = merchandiseId.slice(separatorIndex + 1);

  const product = findProductById(productId);
  const variant = product?.variants.find((v) => v.id === variantId);
  if (!product || !variant) return undefined;

  return { product, variant };
}
