export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  product: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Kamilla Jedrak',
    location: 'UK',
    rating: 5,
    quote:
      'The mustard oil is amazing. After only one use, my hair looks much better. After years of searching I have found my grail.',
    product: 'Mustard Oil (Kachi Ghani)',
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    location: 'Delhi, India',
    rating: 5,
    quote:
      'Finally a brand that shows lab reports instead of just claims. The castor oil worked wonders for my lashes.',
    product: 'Castor Oil',
  },
  {
    id: 't3',
    name: 'Arjun Mehta',
    location: 'Mumbai, India',
    rating: 4,
    quote:
      'You can actually taste the difference in the cold-pressed groundnut oil versus refined ones. Cooking feels healthier now.',
    product: 'Groundnut Oil',
  },
  {
    id: 't4',
    name: 'Neha Kapoor',
    location: 'Chandigarh, India',
    rating: 5,
    quote: 'Scanned the batch QR out of curiosity and the certificate actually matched the bottle. That sold me for life.',
    product: 'Flax Seed Oil',
  },
];
