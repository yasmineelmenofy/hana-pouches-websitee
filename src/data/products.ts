export type ProductCategory = "pouches" | "scrunchies" | "bags";

export interface ProductVariant {
  size: string;
  price: number | null;
}

export interface ProductColor {
  name: string;
  images: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;

  // Default/fallback images
  images: string[];

  // Each colour has its own images
  colors: ProductColor[];

  // Available sizes and prices
  variants: ProductVariant[];

  featured?: boolean;
  available: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "Gingham pouch",
    name: "Gingham pouch",
    category: "pouches",

    shortDescription: "Gingham pouch with a playful coloured zipper.",

    longDescription:
      "Made from quilted cotton in a gingham check, this pouch has a fresh, retro-picnic feel. A cheerful zipper adds a playful pop of contrast. Perfectly sized for cosmetics, hair accessories, or everyday essentials, and pairs well with matching sets.",

    images: [
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM.jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (1).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (2).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (3).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (4).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (5).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (6).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (7).jpeg",
      "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (8).jpeg",
    ],

    colors: [
      {
        name: "Sage",
        images: [
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM.jpeg",
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (1).jpeg",
        ],
      },
      {
        name: "Lavender",
        images: [
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (2).jpeg",
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (3).jpeg",
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (4).jpeg",
        ],
      },
      {
        name: "Beige",
        images: [
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (5).jpeg",
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (6).jpeg",
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (7).jpeg",
          "/products/Gingham/WhatsApp Image 2026-08-19 at 6.35.37 PM (8).jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "Small",
        price: 175,
      },
      {
        size: "Medium",
        price: 195,
      },
      {
        size: "Large",
        price: 220,
      },
    ],

    featured: true,
    available: true,
  },
  {
    id: "2",
    slug: "Cherry-Bow-pouch",
    name: "Cherry Bow pouch",
    category: "pouches",

    shortDescription:
      "A playful pale pink pouch printed with cherries and bows.",

    longDescription:
      "Made from quilted fabric in a soft pink shade, this pouch features a sweet all-over print of cherries and delicate bows. It's compact and soft to the touch, with a pink zipper closure. A fun choice for lip balms, hair clips, or other small everyday items.",

    images: [
      "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.09 PM (1).jpeg",
      "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.09 PM.jpeg",
      "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.10 PM (1).jpeg",
      "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.10 PM (2).jpeg",
      "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.10 PM.jpeg",
    ],

    colors: [
      {
        name: "pale pink",
        images: [
          "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.09 PM (1).jpeg",
          "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.09 PM.jpeg",
          "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.10 PM (1).jpeg",
          "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.10 PM (2).jpeg",
          "/products/Cherry Bow pouch/WhatsApp Image 2026-08-19 at 9.14.10 PM.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "Small",
        price: 185,
      },
      {
        size: "Medium",
        price: 205,
      },
      {
        size: "Large",
        price: 230,
      },
    ],

    featured: true,
    available: true,
  },

  {
    id: "3",
    slug: "WildFlower-pouch",
    name: "WildFlower pouch",
    category: "pouches",

    shortDescription: "Soft blooms in blush and gold.",

    longDescription:
      "This quilted cotton pouch features a wildflower print in coral, purple, and gold tones on a blush background. A sage-green zipper adds a subtle contrast to the feminine design. Well-suited for makeup, small accessories, or as part of a matching set.",

    images: [
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.16 PM (2).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (1).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (2).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (3).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (4).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (5).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM.jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.16 PM (1).jpeg",
      "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.16 PM.jpeg",
    ],

    colors: [
      {
        name: "sage-green zipper",
        images: [
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.16 PM (2).jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (1).jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (2).jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (3).jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (4).jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM.jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.16 PM (1).jpeg",
        ],
      },
      {
        name: "purple zipper",
        images: [
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.15 PM (5).jpeg",
          "/products/wildflower/WhatsApp Image 2026-08-19 at 7.26.16 PM.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "Small",
        price: 195,
      },
      {
        size: "Medium",
        price: 215,
      },
      {
        size: "Large",
        price: 240,
      },
    ],

    featured: true,
    available: true,
  },

  {
    id: "4",
    slug: "Disty-Floral-pouch",
    name: "Disty Floral pouch",
    category: "pouches",

    shortDescription: "A soft quilted pouch scattered with dainty florals",

    longDescription:
      "This pouch is made from quilted cotton featuring a delicate ditsy floral print in teal and brown tones on a white base. It's finished with a smooth sage-green zipper and a fabric pull tab for easy opening. Roomy enough for daily essentials like makeup, skincare, or small accessories, it's a versatile piece for everyday use or travel.",

    images: [
      "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (1).jpeg",
      "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (3).jpeg",
      "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (2).jpeg",
      "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM.jpeg",
      "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (4).jpeg",
      "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (5).jpeg",
    ],

    colors: [
      {
        name: "Fuchsia",
        images: [
          "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (4).jpeg",
          "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (5).jpeg",
        ],
      },
      {
        name: "sage-green",
        images: [
          "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (1).jpeg",
          "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (3).jpeg",
          "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM (2).jpeg",
          "/products/Disty Floral pouch/WhatsApp Image 2026-08-19 at 9.15.39 PM.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "Small",
        price: 175,
      },
      {
        size: "Medium",
        price: 195,
      },
      {
        size: "Large",
        price: 220,
      },
    ],
    featured: true,
    available: true,
  },

  {
    id: "5",
    slug: "Corduary-pouch",
    name: "Corduary pouch",
    category: "pouches",

    shortDescription: "A ribbed corduroy pouch with a relaxed, everyday feel",

    longDescription:
      "Crafted from soft ribbed corduroy fabric , this pouch has a cozy, textured look and feel. It includes a tan zipper, a fabric loop. Available in three sizes, it's ideal for storing cords, cosmetics, or everyday odds and ends.",

    images: [
      "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM.jpeg",
      "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (1).jpeg",
      "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (2).jpeg",
      "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (3).jpeg",
      "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (4).jpeg",
      "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (5).jpeg",
    ],

    colors: [
      {
        name: "Navy",
        images: [
          "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM.jpeg",
          "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (1).jpeg",
        ],
      },
      {
        name: "Burgundy",
        images: [
          "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (3).jpeg",
          "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (2).jpeg",
          "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (4).jpeg",
          "/products/Corduary pouch/WhatsApp Image 2026-08-19 at 9.16.49 PM (5).jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "Small",
        price: 195,
      },
      {
        size: "Medium",
        price: 215,
      },
      {
        size: "Large",
        price: 240,
      },
    ],

    featured: true,
    available: true,
  },

  {
    id: "6",
    slug: "dream-scrunchie",
    name: "Dream Scrunchie",
    category: "scrunchies",

    shortDescription: "A soft scrunchie with a delicate, airy gather.",

    longDescription:
      "The Dream Scrunchie brings a soft pop of colour to your everyday ponytail or bun. Made from stain fabric with a gentle sheen, it holds securely without pulling. A calming tone that works across every season.",

    images: [
      "/products/Scrunchies/pink and fushia.jpeg",
      "/products/Scrunchies/brown.jpeg",
      "/products/Scrunchies/Fushia.jpeg",
      "/products/Scrunchies/Grey.jpeg",
      "/products/Scrunchies/pink.jpeg",
      "/products/Scrunchies/Turquoise.jpeg",
    ],

    colors: [
      {
        name: "Fuchsia",
        images: [
          "/products/Scrunchies/Fushia.jpeg",
          "/products/Scrunchies/pink and fushia.jpeg",
        ],
      },
      {
        name: "Mauve Brown ",
        images: ["/products/Scrunchies/brown.jpeg"],
      },
      {
        name: "Icy Grey",
        images: ["/products/Scrunchies/Grey.jpeg"],
      },
      {
        name: "pink ",
        images: [
          "/products/Scrunchies/pink.jpeg",
          "/products/Scrunchies/pink and fushia.jpeg",
        ],
      },
      {
        name: "Turquoise",
        images: ["/products/Scrunchies/Turquoise.jpeg"],
      },
    ],

    variants: [
      {
        size: "Small",
        price: 20,
      },
      {
        size: "Medium",
        price: 25,
      },
    ],

    featured: true,
    available: true,
  },
  {
    id: "7",
    slug: "ruffled-satin-headband",
    name: "Ruffled Satin Headband",
    category: "scrunchies",

    shortDescription:
      "A voluminous ruffled headband in a rich mauve-brown satin.",

    longDescription:
      "The Ruffled Satin Headband makes a statement with its gathered, sculptural folds of lustrous satin. Crafted in a warm mauve-brown tone, it adds instant elegance to any hairstyle while staying comfortable and secure on the head. A versatile accent piece for both everyday wear and special occasions.",

    images: ["/products/Scrunchies/took.jpeg"],

    colors: [
      {
        name: "Mauve Brown",
        images: ["/products/Scrunchies/took.jpeg"],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 50,
      },
    ],

    available: true,
  },
 {
    id: "8",
    slug: "olive-quilted-hobo-bag",
    name: "Olive Quilted Hobo Bag",
    category: "bags",

    shortDescription:
      "A glossy patent hobo bag in deep olive green with quilted panels.",

    longDescription:
      "The Olive Quilted Hobo Bag is crafted from glossy patent-finish fabric with padded, square-quilted panels for a rich, structured texture. Its curved hobo silhouette and single top handle make it easy to sling over the shoulder, while the sleek olive tone adds a versatile pop of color to any outfit. A statement piece that's as practical as it is stylish.",

    images: [
      "/products/bags/greensage1.jpeg",
      "/products/bags/greensage2.jpeg",
    ],

    colors: [
      {
        name: "Olive Green",
        images: [
          "/products/bags/greensage1.jpeg",
          "/products/bags/greensage2.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 550,
      },
    ],
    featured: true,
    available: true,
  },
   {
    id: "9",
    slug: "cherry-gingham-ruffle-tote",
    name: "Cherry Gingham Ruffle Tote",
    category: "bags",

    shortDescription:
      "A playful red gingham tote finished with ruffled side trims.",

    longDescription:
      "The Cherry Gingham Ruffle Tote is made from soft cotton in a classic red-and-white gingham check, edged with sweet ruffled trims along the sides for a charming, picnic-ready finish. Its soft pink lining adds a pretty contrast inside. Lightweight and spacious, it's a fun, feminine tote for everyday errands or a day out.",

     images: [
      "/products/bags/redgingham2.jpeg",
      "/products/bags/redgingham1.jpeg",
      "/products/bags/redgingham3.jpeg",
    ],

    colors: [
      {
        name: "Red Gingham",
        images: [
          "/products/bags/redgingham2.jpeg",
          "/products/bags/redgingham1.jpeg",
          "/products/bags/redgingham3.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 450,
      },
    ],

    available: true,
  },
  {
    id: "10",
    slug: "urban-puffer-tote",
    name: "Urban Puffer Tote Bag",
    category: "bags",

    shortDescription:
      "A bold quilted puffer tote in black with a spacious, structured silhouette.",

    longDescription:
      "The Urban Puffer Tote Bag is crafted from smooth quilted nylon, patchworked into clean square panels for a modern, padded look. Its wide padded handles and roomy interior make it perfect for daily commutes, work essentials, or an oversized everyday carry. Lightweight yet structured, this tote pairs effortlessly with both casual and elevated looks.",

    images: [
      "/products/bags/bigtoteblack1.jpeg",
      "/products/bags/bigtoteblack2.jpeg",
      "/products/bags/bigtoteblack3.jpeg",
    ],

    colors: [
      {
        name: "Black",
        images: [
          "/products/bags/bigtoteblack1.jpeg",
          "/products/bags/bigtoteblack2.jpeg",
          "/products/bags/bigtoteblack3.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 950,
      },
    ],

    available: true,
  },
   
  {
    id: "11",
    slug: "star-charm-puffer-tote",
    name: "Star Charm Puffer Tote",
    category: "bags",

    shortDescription:
      "A quilted black puffer tote finished with a playful star charm.",

    longDescription:
      "The Star Charm Puffer Tote combines a padded, channel-quilted nylon body with long shoulder straps and a front zip pocket for quick-access items. A charming star-shaped leather charm hangs from the handle, adding a fun, distinctive touch. Structured yet soft, it's built for everyday wear with a look that stands out.",

    images: [
      "/products/bags/blackwithstar1.jpeg",
      "/products/bags/blackwithstar2.jpeg",
    ],

    colors: [
      {
        name: "Black",
        images: [
          "/products/bags/blackwithstar1.jpeg",
          "/products/bags/blackwithstar2.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 750,
      },
    ],

    available: true,
  },
  {
    id: "12",
    slug: "starlight-quilted-waist-bag",
    name: "Starlight Quilted Waist Bag",
    category: "bags",

    shortDescription:
      "A dreamy quilted waist bag in cream with a scattered star print.",

    longDescription:
      "The Starlight Quilted Waist Bag is made from soft quilted cotton in a gentle cream tone, printed with a delicate star pattern and finished with a warm gold zipper. Worn crossbody or as a fanny pack with its adjustable strap, it's a light, comfortable option for hands-free days out. A sweet, versatile accessory for everyday adventures.",

    images: [
      "/products/bags/brownstars1.jpeg",
      "/products/bags/brownstars2.jpeg",
      "/products/bags/brownstars3.jpeg",
    ],

    colors: [
      {
        name: "Ivory Star Print",
        images: [
          "/products/bags/brownstars1.jpeg",
          "/products/bags/brownstars2.jpeg",
          "/products/bags/brownstars3.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 450,
      },
    ],

    available: true,
  },
  {
    id: "13",
    slug: "hana-corduroy-waist-bag",
    name: "Hana Corduroy Waist Bag",
    category: "bags",

    shortDescription: "A cozy ribbed corduroy waist bag in warm caramel brown.",

    longDescription:
      "The Hana Corduroy Waist Bag is made from soft ribbed corduroy in a warm caramel tone, lined with a charming printed interior fabric. Its curved silhouette and adjustable strap make it easy to wear crossbody or around the waist. A cozy, textural accessory that adds a laid-back touch to any outfit.",

    images: [
      "/products/bags/cardourybrown1.jpeg",
      "/products/bags/cardourybrown2.jpeg",
    ],

    colors: [
      {
        name: "Caramel",
        images: [
          "/products/bags/cardourybrown1.jpeg",
          "/products/bags/cardourybrown2.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 450,
      },
    ],

    available: true,
  },
  {
    id: "14",
    slug: "dainty-floral-quilted-tote",
    name: "Dainty Floral Quilted Tote",
    category: "bags",

    shortDescription:
      "A quilted cotton tote covered in a delicate fuchsia ditsy floral print.",

    longDescription:
      "The Dainty Floral Quilted Tote is made from soft, diamond-quilted cotton printed with a scattered fuchsia floral pattern. Finished with sturdy handles and a spacious interior, it's an easy everyday bag that brings a feminine, romantic touch to any look. A charming pick for daily essentials or a weekend outing.",

    images: [
      "/products/bags/distyfloral1.jpeg",
      "/products/bags/distyfloral2.jpeg",
    ],

    colors: [
      {
        name: "Fuchsia Floral",
        images: [
          "/products/bags/distyfloral1.jpeg",
          "/products/bags/distyfloral2.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 600,
      },
    ],

    available: true,
  },
 
  {
    id: "15",
    slug: "olive-patent-slouch-bag",
    name: "Olive Patent Slouch Bag",
    category: "bags",

    shortDescription:
      "A relaxed slouchy shoulder bag in glossy olive patent with a matching pouch.",

    longDescription:
      "The Olive Patent Slouch Bag features a soft, oversized silhouette in a glossy patent finish that drapes beautifully on the shoulder. It comes with a matching quilted mini pouch attached at the front, perfect for keys or small essentials. Effortlessly chic and lightweight, it's designed for those who love an easy, oversized carry.",

    images: [
      "/products/bags/greensagef1.jpeg",
      "/products/bags/greensagef2.jpeg",
    ],

    colors: [
      {
        name: "Olive Green",
        images: [
          "/products/bags/greensagef1.jpeg",
          "/products/bags/greensagef2.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 450,
      },
    ],
    available: true,
  },
  {
    id: "16",
    slug: "gingham-bow-quilted-tote",
    name: "Gingham Bow Quilted Tote",
    category: "bags",

    shortDescription:
      "A soft grey gingham tote finished with a sweet bow and pink lining.",

    longDescription:
      "The Gingham Bow Quilted Tote is made from diamond-quilted cotton in a soft grey gingham check, lined in a delicate pink for a pretty contrast. A charming bow detail sits at the top, adding a feminine finishing touch. Lightweight and roomy, it's an adorable everyday tote for carrying your essentials in style.",

    images: [
      "/products/bags/greywithribbon1.jpeg",
      "/products/bags/greywithribbon2.jpeg",
      "/products/bags/greywithribbon3.jpeg",
    ],

    colors: [
      {
        name: "Grey Gingham",
        images: [
          "/products/bags/greywithribbon1.jpeg",
          "/products/bags/greywithribbon2.jpeg",
          "/products/bags/greywithribbon3.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 500,
      },
    ],

    available: true,
  },
  {
    id: "17",
    slug: "blush-floral-bow-tote",
    name: "Blush Floral Bow Tote",
    category: "bags",

    shortDescription:
      "A quilted ivory tote scattered with blush pink flowers and a bow accent.",

    longDescription:
      "The Blush Floral Bow Tote is crafted from soft, diamond-quilted cotton in an ivory base scattered with a delicate blush floral print. A small bow detail at the top adds a sweet, feminine touch, while the sturdy handles and generous interior make it perfect for everyday carrying. A romantic, versatile tote for any season.",

    images: [
      "/products/bags/pinnwithrippon1.jpeg",
      "/products/bags/pinnwithrippon2.jpeg",
    ],

    colors: [
      {
        name: "Blush Floral",
        images: [
          "/products/bags/pinnwithrippon1.jpeg",
          "/products/bags/pinnwithrippon2.jpeg",
        ],
      },
    ],

    variants: [
      {
        size: "One Size",
        price: 650,
      },
    ],

    available: true,
  },
 
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export const featuredProducts = products.filter((p) => p.featured);
