export type ProductCategory = 'pouches' | 'scrunchies' | 'bags';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  price: string;
  images: string[];
  colors?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'rosalind-floral-pouch',
    name: 'Rosalind Floral Pouch',
    category: 'pouches',
    shortDescription: 'A floral-lined makeup pouch with a secure zipper and soft cotton exterior.',
    longDescription:
      'The Rosalind Floral Pouch is our everyday favourite — a soft cotton pouch with a delicate floral lining and a sturdy golden zipper. Roomy enough for your daily makeup essentials, yet small enough to slip into any tote. Each piece is cut and stitched by hand, so no two are exactly alike.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/21283036/pexels-photo-21283036.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/36393002/pexels-photo-36393002.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/4856502/pexels-photo-4856502.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Floral cream', 'Dusty rose'],
    featured: true,
  },
  {
    id: '2',
    slug: 'lumiere-pearl-pouch',
    name: 'Lumière Pearl Pouch',
    category: 'pouches',
    shortDescription: 'A soft satin pouch with pearl accents — elegant for evenings out.',
    longDescription:
      'The Lumière Pearl Pouch is made for special occasions. A soft satin exterior is finished with a delicate pearl-tone trim and a smooth zipper closure. Perfect as a clutch-style pouch or a keepsake holder for jewellery and small treasures.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/29899587/pexels-photo-29899587.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/38570568/pexels-photo-38570568.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/37801576/pexels-photo-37801576.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Pearl white', 'Blush'],
    featured: true,
  },
  {
    id: '3',
    slug: 'sky-canvas-drawstring',
    name: 'Sky Canvas Drawstring',
    category: 'pouches',
    shortDescription: 'A minimalist drawstring pouch in soft blue cotton canvas.',
    longDescription:
      'The Sky Canvas Drawstring is our go-anywhere pouch. Made from soft cotton canvas in a gentle sky blue, it closes with a simple drawstring and sits flat when empty. Use it for skincare, stationery, or as a travel organiser.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/3850531/pexels-photo-3850531.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/3850586/pexels-photo-3850586.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/3850572/pexels-photo-3850572.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Sky blue', 'Natural white'],
    featured: true,
  },
  {
    id: '4',
    slug: 'coeur-heart-pouch',
    name: 'Cœur Heart Pouch',
    category: 'pouches',
    shortDescription: 'A heart-patterned pouch with a sweet, romantic feel.',
    longDescription:
      'The Cœur Heart Pouch is our playful little companion. A heart-patterned cotton exterior is paired with a soft neutral lining and a neat zipper closure. A lovely gift pouch or a cheerful everyday organiser.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/36164257/pexels-photo-36164257.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/33977230/pexels-photo-33977230.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/3850566/pexels-photo-3850566.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Heart cream', 'Soft pink'],
  },
  {
    id: '5',
    slug: 'silk-petal-scrunchie',
    name: 'Silk Petal Scrunchie',
    category: 'scrunchies',
    shortDescription: 'A silky soft scrunchie in dusty rose — gentle on your hair.',
    longDescription:
      'The Silk Petal Scrunchie is made from a smooth, silky fabric that glides over your hair without pulling or snagging. The dusty rose shade pairs beautifully with both casual and dressy looks. A soft, full gather gives it a full, romantic bow shape.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/7897135/pexels-photo-7897135.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/6044145/pexels-photo-6044145.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/6044135/pexels-photo-6044135.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Dusty rose', 'Blush', 'Pearl'],
    featured: true,
  },
  {
    id: '6',
    slug: 'lavender-dream-scrunchie',
    name: 'Lavender Dream Scrunchie',
    category: 'scrunchies',
    shortDescription: 'A soft lavender scrunchie with a delicate, airy gather.',
    longDescription:
      'The Lavender Dream Scrunchie brings a soft pop of colour to your everyday ponytail or bun. Made from a lightweight fabric with a gentle sheen, it holds securely without pulling. A calming lavender tone that works across every season.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/6044139/pexels-photo-6044139.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/6044144/pexels-photo-6044144.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/8504371/pexels-photo-8504371.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Lavender', 'Mauve', 'Ivory'],
    featured: true,
  },
  {
    id: '7',
    slug: 'meadow-tote-bag',
    name: 'Meadow Tote Bag',
    category: 'bags',
    shortDescription: 'A soft cotton tote with a gentle print — your everyday carryall.',
    longDescription:
      'The Meadow Tote Bag is a lightweight cotton carryall with a soft, tonal print and sturdy straps. Roomy enough for a laptop, a pouch, and your daily essentials. A relaxed, handmade companion for market days and errands.',
    price: 'EGP — upon request',
    images: [
      'https://images.pexels.com/photos/4937320/pexels-photo-4937320.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/36265280/pexels-photo-36265280.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
      'https://images.pexels.com/photos/11754862/pexels-photo-11754862.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900',
    ],
    colors: ['Natural', 'Sage print'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export const featuredProducts = products.filter((p) => p.featured);
