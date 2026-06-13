// ═══════════════════════════════════════════════════════════════
// JOEL AFFILIATES — Central Affiliate Data Store
// ═══════════════════════════════════════════════════════════════
// TO ADD A NEW PRODUCT:
// 1. Find the right niche below
// 2. Copy an existing product object
// 3. Fill in: name, description, link (your Digistore24 affiliate URL), image, etc.
// 4. Place product images in /public/products/ folder
// That's it. The website auto-renders everything.
// ═══════════════════════════════════════════════════════════════

export type Program = "digistore24";

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  link: string; // YOUR DIGISTORE24 AFFILIATE LINK GOES HERE
  program: Program;
  commission: string;
  rating: number;
  tag?: string;
  price?: string;
  image: string; // Place images in /public/products/ e.g. "/products/primebiome.jpg"
  pinterestSEO: string; // Pinterest keyword strategy for this product
}

export interface Niche {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string; // Lucide icon name
  color: string;
  programs: Program[];
  products: AffiliateProduct[];
  pinterestTip: string;
}

// --- AFFILIATE PROGRAM BADGES ---

export const affiliatePrograms: Record<Program, { name: string; color: string; bgColor: string; description: string }> = {
  digistore24: {
    name: "Digistore24",
    color: "#2E7D32",
    bgColor: "#E8F5E9",
    description: "50-90% commission / Digital products / Instant payouts / 180-day cookie",
  },
};

// --- NICHES & PRODUCTS ---

export const niches: Niche[] = [
  // NICHE 1: HEALTH & FITNESS
  {
    id: "health-fitness",
    title: "Health & Fitness",
    subtitle: "Supplements, Weight Loss & Wellness",
    description: "Discover the supplements, fitness programs, and wellness tools that actually deliver results -- backed by real reviews and high Pinterest demand.",
    icon: "Heart",
    color: "#ef4444",
    programs: ["digistore24"],
    pinterestTip: "Before/after photos, smoothie recipes, and workout routines go viral on Pinterest. 'Glassy skin' and 'summer detox' are trending now (+566%). Link pins to your blog reviews.",
    products: [
      {
        id: "health-1",
        name: "PrimeBiome",
        description: "Advanced gut health supplement that supports the 'glassy skin' effect from within. Clinically-backed probiotic blend that improves digestion, reduces bloating, and gives your skin a natural radiant glow -- the #1 summer beauty trend on Pinterest.",
        bestFor: "Gut health, skin glow & digestion support",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "65%",
        rating: 4.6,
        tag: "Trending Now",
        price: "$69",
        image: "/products/primebiome.jpg",
        pinterestSEO: "glassy skin, gut health supplement, probiotic for skin, summer detox, bloating relief",
      },
      {
        id: "health-2",
        name: "Kerassentials",
        description: "Natural nail and skin health formula that targets fungus at the root. Powered by essential oils and vitamins that restore healthy nails and clear skin -- perfect for summer sandal season when nail care searches spike 300%.",
        bestFor: "Nail fungus & skin health",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "55%",
        rating: 4.4,
        tag: "High Converter",
        price: "$69",
        image: "/products/kerassentials.jpg",
        pinterestSEO: "nail fungus treatment, healthy nails, natural skin care, summer nail care, toe fungus remedy",
      },
      {
        id: "health-3",
        name: "The Smoothie Diet",
        description: "21-day rapid weight loss program with delicious smoothie recipes. Lose 10+ lbs in 3 weeks without starving -- just nutrient-packed blends that your body craves. Summer body motivation pins drive massive clicks.",
        bestFor: "Weight loss & meal prep",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.3,
        tag: "Top Earner",
        price: "$27",
        image: "/products/smoothie-diet.jpg",
        pinterestSEO: "smoothie diet, weight loss smoothie, 21 day diet, green smoothie recipe, summer body diet",
      },
      {
        id: "health-4",
        name: "Yoga Burn Challenge",
        description: "12-week yoga program designed specifically for women. Dynamic sequencing technique boosts metabolism and tones your body from home -- no gym required. Pinterest's female audience converts extremely well on yoga content.",
        bestFor: "Women 25-55 wanting home fitness",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.2,
        tag: "Best for Women",
        price: "$37",
        image: "/products/yoga-burn.jpg",
        pinterestSEO: "yoga for women, yoga burn, home yoga workout, yoga weight loss, morning yoga routine",
      },
      {
        id: "health-5",
        name: "Renew Sleep Supplement",
        description: "Deep sleep and metabolism support formula that enhances overnight fat burning and recovery. Wake up with more energy every morning -- sleep optimization is a top Pinterest wellness trend in 2025.",
        bestFor: "Poor sleep & slow metabolism",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "70%",
        rating: 4.1,
        tag: "Sleep + Metabolism",
        price: "$49",
        image: "/products/renew-sleep.jpg",
        pinterestSEO: "sleep supplement, deep sleep, metabolism booster, better sleep tips, sleep and weight loss",
      },
      {
        id: "health-6",
        name: "Puravive",
        description: "Natural weight management supplement targeting brown adipose tissue activation. Scientifically-formulated to boost calorie burning while you go about your day -- pairs perfectly with Pinterest healthy lifestyle pins.",
        bestFor: "Natural weight management",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "60%",
        rating: 4.3,
        tag: "Science-Backed",
        price: "$59",
        image: "/products/puravive.jpg",
        pinterestSEO: "natural weight loss, metabolism boost, brown fat activation, healthy weight management, fat burner natural",
      },
    ],
  },

  // NICHE 2: PETS
  {
    id: "pets",
    title: "Pets",
    subtitle: "Dog Training, Pet Health & Care",
    description: "The best pet training programs, health supplements, and care guides that pet owners swear by -- products that solve real problems and earn you high commissions.",
    icon: "PawPrint",
    color: "#f59e0b",
    programs: ["digistore24"],
    pinterestTip: "Cute pet photos are Pinterest gold. Dog training tips, pet health infographics, and before/after transformation pins get massive engagement and shares.",
    products: [
      {
        id: "pet-1",
        name: "Brain Training for Dogs",
        description: "Unique dog training system using brain games and mental stimulation instead of punishment. Eliminates bad behavior in 21 days -- and pet training pins get 3x more saves than average on Pinterest.",
        bestFor: "Dog owners with behavioral issues",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.7,
        tag: "Best Seller",
        price: "$47",
        image: "/products/brain-training-dogs.jpg",
        pinterestSEO: "dog training tips, brain games for dogs, stop dog barking, puppy training, dog behavior training",
      },
      {
        id: "pet-2",
        name: "The Ultimate Pet Health Guide",
        description: "Comprehensive natural health guide for dogs and cats covering nutrition, supplements, home remedies, and preventive care. Save thousands on vet bills while giving your pet the longest, healthiest life possible.",
        bestFor: "Pet owners wanting natural health solutions",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.4,
        tag: "Save on Vet Bills",
        price: "$37",
        image: "/products/pet-health-guide.jpg",
        pinterestSEO: "pet health tips, natural pet care, dog health, cat health, homemade dog food, pet supplements",
      },
      {
        id: "pet-3",
        name: "CBD Oil for Pets",
        description: "Premium broad-spectrum CBD oil formulated specifically for dogs and cats. Helps with anxiety, joint pain, inflammation, and seizures -- pet CBD pins have explosive engagement on Pinterest.",
        bestFor: "Anxious or aging pets",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.5,
        tag: "Fast Growing",
        price: "$49",
        image: "/products/cbd-pets.jpg",
        pinterestSEO: "CBD oil for dogs, pet anxiety relief, dog joint pain, natural pet remedies, cat CBD",
      },
      {
        id: "pet-4",
        name: "Dog Potty Training Formula",
        description: "Step-by-step system to potty train any dog in just 7 days -- even stubborn breeds. Works for puppies and adult rescue dogs. Potty training is one of the most searched pet topics on Pinterest.",
        bestFor: "New puppy owners & rescue dog parents",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "65%",
        rating: 4.3,
        price: "$27",
        image: "/products/dog-potty-training.jpg",
        pinterestSEO: "puppy potty training, how to potty train a dog, house training puppy, dog pee training",
      },
      {
        id: "pet-5",
        name: "Cat Language Bible",
        description: "Discover what your cat is really saying through body language, vocalizations, and behavior patterns. Strengthen the bond with your feline companion -- cat content dominates Pinterest with 2B+ monthly views.",
        bestFor: "Cat owners wanting deeper connection",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "60%",
        rating: 4.2,
        tag: "Cat Lovers",
        price: "$29",
        image: "/products/cat-language.jpg",
        pinterestSEO: "cat body language, what my cat means, cat behavior explained, understanding cats, cat communication",
      },
    ],
  },

  // NICHE 3: SPIRITUAL
  {
    id: "spiritual",
    title: "Spiritual",
    subtitle: "Manifestation, Astrology & Inner Growth",
    description: "Unlock your spiritual potential with the best manifestation guides, astrology readings, and personal growth programs -- products that resonate deeply and convert powerfully on Pinterest's visual platform.",
    icon: "Sparkles",
    color: "#8b5cf6",
    programs: ["digistore24"],
    pinterestTip: "Aesthetic quote pins, moon phase graphics, and manifestation checklists go viral. Spiritual content gets 2x more saves on Pinterest than any other niche. Visual = conversion.",
    products: [
      {
        id: "spirit-1",
        name: "Soulmate Sketch",
        description: "Get a detailed psychic sketch of your true soulmate -- a real artist draws what your future partner looks like based on spiritual energy. Highly visual product that is PERFECT for Pinterest pins. Users share their sketches everywhere.",
        bestFor: "Singles seeking love & spiritual connection",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "60%",
        rating: 4.5,
        tag: "Pinterest Gold",
        price: "$39",
        image: "/products/soulmate-sketch.jpg",
        pinterestSEO: "soulmate sketch, psychic drawing, find your soulmate, love reading, spiritual soulmate, twin flame",
      },
      {
        id: "spirit-2",
        name: "His Secret Obsession",
        description: "The relationship program that reveals the 'hero instinct' -- the psychological trigger that makes men crave commitment and devotion. Up to 90% commission and Pinterest's 60% female audience converts like crazy.",
        bestFor: "Women wanting deeper commitment",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "90%",
        rating: 4.4,
        tag: "90% Commission",
        price: "$49",
        image: "/products/his-secret-obsession.jpg",
        pinterestSEO: "relationship advice, hero instinct, make him commit, relationship tips, get him to propose",
      },
      {
        id: "spirit-3",
        name: "Moon Reading",
        description: "Personalized astrology reading based on your exact birth chart and moon sign. Discover your hidden talents, life purpose, and future opportunities -- astrology pins are among the top 5 most saved categories on Pinterest.",
        bestFor: "Astrology enthusiasts & spiritual seekers",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.3,
        tag: "Astrology Hit",
        price: "$27",
        image: "/products/moon-reading.jpg",
        pinterestSEO: "moon reading, birth chart reading, astrology reading, moon sign meaning, zodiac reading, horoscope",
      },
      {
        id: "spirit-4",
        name: "Wealth DNA Code",
        description: "Activate your 'wealth DNA' using ancient sound frequency technology that reprograms your subconscious for financial abundance. Manifestation + money is the highest-converting combination on Pinterest right now.",
        bestFor: "Anyone manifesting financial abundance",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.2,
        tag: "Top Earner",
        price: "$39",
        image: "/products/wealth-dna.jpg",
        pinterestSEO: "wealth manifestation, money manifestation, abundance mindset, law of attraction money, financial freedom",
      },
      {
        id: "spirit-5",
        name: "Midas Manifestation",
        description: "Ancient manifestation system using sound frequencies aligned with the universe to attract wealth, love, and success. Step-by-step audio program that has generated thousands of success stories worldwide.",
        bestFor: "Spiritual manifestors seeking results",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "60%",
        rating: 4.1,
        tag: "Sound Frequency",
        price: "$37",
        image: "/products/midas-manifestation.jpg",
        pinterestSEO: "manifestation audio, law of attraction, sound healing, frequency manifestation, attract abundance",
      },
      {
        id: "spirit-6",
        name: "Numerology Reading",
        description: "Discover your life path number and what it reveals about your destiny, relationships, and career. Personalized numerology report based on your birth date and name -- numerology pins get massive engagement on Pinterest.",
        bestFor: "Numerology believers & curious seekers",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.0,
        tag: "Mystical",
        price: "$27",
        image: "/products/numerology.jpg",
        pinterestSEO: "numerology reading, life path number, numerology meaning, angel numbers, destiny number",
      },
    ],
  },
];

// --- HELPER: Get all products across niches ---

export function getAllProducts(): (AffiliateProduct & { nicheId: string; nicheTitle: string; nicheColor: string })[] {
  return niches.flatMap((niche) =>
    niche.products.map((p) => ({
      ...p,
      nicheId: niche.id,
      nicheTitle: niche.title,
      nicheColor: niche.color,
    }))
  );
}

// --- HELPER: Get products by program ---

export function getProductsByProgram(program: Program): (AffiliateProduct & { nicheId: string; nicheTitle: string })[] {
  return niches.flatMap((niche) =>
    niche.products
      .filter((p) => p.program === program)
      .map((p) => ({ ...p, nicheId: niche.id, nicheTitle: niche.title }))
  );
}

// --- NICHE ICON MAP (Lucide icons) ---
export const nicheIconMap: Record<string, string> = {
  "Heart": "Heart",
  "PawPrint": "PawPrint",
  "Sparkles": "Sparkles",
};
