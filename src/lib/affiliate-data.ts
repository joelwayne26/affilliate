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
      {
        id: "health-7",
        name: "ProDentim",
        description: "Revolutionary dental health supplement in the form of a melting probiotic candy that supports optimal teeth and gum health. A recurring top offer on Digistore24 with massive conversion rates -- dental health pins get huge saves on Pinterest.",
        bestFor: "Oral health & dental care",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "70%",
        rating: 4.5,
        tag: "Recurring Top Offer",
        price: "$69",
        image: "/products/prodentim.jpg",
        pinterestSEO: "dental health supplement, probiotic for teeth, gum health, oral probiotics, teeth whitening natural, healthy gums",
      },
      {
        id: "health-8",
        name: "Sugar Defender",
        description: "Advanced blood sugar support formula with natural ingredients that help maintain healthy glucose levels. Blood sugar products are among the highest-converting offers on Digistore24 right now with strong AOV and repeat purchases.",
        bestFor: "Blood sugar management & metabolic health",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "65%",
        rating: 4.4,
        tag: "Blood Sugar Hit",
        price: "$69",
        image: "/products/sugar-defender.jpg",
        pinterestSEO: "blood sugar support, healthy glucose levels, sugar balance supplement, metabolic health, diabetes prevention",
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
  // NICHE 4: BUSINESS & INVESTMENT
  {
    id: "business-investment",
    title: "Business & Investment",
    subtitle: "Make Money Online, Trading & Wealth Building",
    description: "The most lucrative business and investment products on Digistore24 -- from trading systems to online income courses. This niche has the highest average order value (AOV) and up to 90% commissions. Long-term evergreen demand that never fades.",
    icon: "TrendingUp",
    color: "#10b981",
    programs: ["digistore24"],
    pinterestTip: "Side hustle infographics, passive income charts, and 'day in the life' pins drive massive clicks. 'How to make money online' is one of Pinterest's most searched phrases with 2B+ annual searches. Pin income screenshots and strategy breakdowns.",
    products: [
      {
        id: "biz-1",
        name: "AffiliateOne",
        description: "Complete affiliate marketing course that teaches you how to build a profitable online business from scratch. Step-by-step training with proven funnels and templates -- one of Digistore24's top business offers with consistent high conversions and strong upsells.",
        bestFor: "Beginners wanting to start affiliate marketing",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.5,
        tag: "Top Business Offer",
        price: "$37",
        image: "/products/affiliate-one.jpg",
        pinterestSEO: "affiliate marketing course, make money online, passive income, affiliate marketing for beginners, online business",
      },
      {
        id: "biz-2",
        name: "The 1K A Day Fast Track",
        description: "A proven system for generating $1,000+ per day using email marketing and affiliate offers. Learn the exact funnel strategy that top marketers use to build email lists that print money on autopilot -- email marketing pins convert 4x higher on Pinterest.",
        bestFor: "Email marketers & list builders",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.3,
        tag: "High AOV",
        price: "$997",
        image: "/products/1k-day-fasttrack.jpg",
        pinterestSEO: "email marketing course, make $1000 a day, fast track system, email funnel, list building strategy",
      },
      {
        id: "biz-3",
        name: "Salehoo",
        description: "Wholesale supplier directory and dropshipping research tool with 8,000+ verified suppliers. Find profitable products to sell on Amazon, eBay, and your own store. Dropshipping and wholesale content gets huge Pinterest engagement from aspiring entrepreneurs.",
        bestFor: "E-commerce & dropshipping beginners",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "50%",
        rating: 4.2,
        tag: "E-Com Essential",
        price: "$67",
        image: "/products/salehoo.jpg",
        pinterestSEO: "dropshipping for beginners, wholesale suppliers, find products to sell, Amazon FBA, e-commerce business",
      },
      {
        id: "biz-4",
        name: "Crypto Ultimatum",
        description: "Step-by-step cryptocurrency trading system designed for complete beginners. Learn when to buy, sell, and hold for maximum profit -- crypto content on Pinterest has exploded with 'how to invest' pins getting 500%+ more saves this year.",
        bestFor: "Crypto beginners & aspiring traders",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "65%",
        rating: 4.1,
        tag: "Crypto Trending",
        price: "$37",
        image: "/products/crypto-ultimatum.jpg",
        pinterestSEO: "cryptocurrency for beginners, crypto trading, how to buy bitcoin, crypto investment, bitcoin trading tips",
      },
      {
        id: "biz-5",
        name: "Paid Online Writing Jobs",
        description: "Access a database of thousands of paid writing opportunities -- from blog posts to copywriting gigs. Perfect for anyone wanting to earn from home with just a laptop. 'Get paid to write' is a viral Pinterest topic with massive search volume.",
        bestFor: "Freelance writers & work-from-home seekers",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.0,
        tag: "Work From Home",
        price: "$27",
        image: "/products/writing-jobs.jpg",
        pinterestSEO: "paid writing jobs, freelance writing, work from home jobs, get paid to write, online writing jobs",
      },
    ],
  },

  // NICHE 5: SURVIVAL & PREPAREDNESS
  {
    id: "survival",
    title: "Survival & Preparedness",
    subtitle: "Emergency Gear, Self-Defense & Off-Grid Living",
    description: "High-urgency, high-converting survival and preparedness products on Digistore24. This niche thrives on fear-based buying triggers and current events -- short-term spikes with consistent long-term demand. 75% commissions with multiple upsells.",
    icon: "Shield",
    color: "#64748b",
    programs: ["digistore24"],
    pinterestTip: "Survival gear checklists, bushcraft tips, and emergency preparedness infographics get huge saves. 'Bug out bag' and 'off-grid living' are trending Pinterest searches. Create pins showing gear layouts and survival skill tutorials.",
    products: [
      {
        id: "surv-1",
        name: "Backyard Liberty",
        description: "Complete guide to building your own self-sustaining backyard food system -- grow your own food year-round regardless of space or climate. With 75% commission on initial sales plus three upsells, this is one of Digistore24's top survival offers.",
        bestFor: "Preppers & self-sufficiency seekers",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.5,
        tag: "Top Survival Offer",
        price: "$39",
        image: "/products/backyard-liberty.jpg",
        pinterestSEO: "backyard farming, self sustaining garden, grow your own food, survival garden, prepper garden, off grid living",
      },
      {
        id: "surv-2",
        name: "World War Water",
        description: "Discover how to generate clean drinking water in any emergency situation -- from building homemade water filters to finding hidden water sources. Water security is the #1 concern in every crisis scenario, making this a high-urgency converter.",
        bestFor: "Emergency preparedness & water security",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "60%",
        rating: 4.2,
        tag: "Urgency Converter",
        price: "$37",
        image: "/products/world-war-water.jpg",
        pinterestSEO: "emergency water filter, water purification, survival water, clean water emergency, water crisis preparation",
      },
      {
        id: "surv-3",
        name: "Survival MD",
        description: "Complete medical survival guide for when doctors and hospitals are unavailable. Learn to treat injuries, infections, and illnesses using household items and natural remedies -- medical preparedness pins get massive engagement on Pinterest.",
        bestFor: "Medical preparedness & family safety",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "65%",
        rating: 4.4,
        tag: "Medical Prep",
        price: "$37",
        image: "/products/survival-md.jpg",
        pinterestSEO: "survival medicine, emergency medical guide, first aid survival, medical preparedness, SHTF medical guide",
      },
      {
        id: "surv-4",
        name: "The Lost Ways",
        description: "Rediscover forgotten survival skills that our ancestors used to thrive without modern technology. From preserving meat without refrigeration to building shelters from natural materials -- nostalgia + preparedness makes this a Pinterest favorite.",
        bestFor: "Traditional skills & survival enthusiasts",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.3,
        tag: "Ancestral Wisdom",
        price: "$37",
        image: "/products/lost-ways.jpg",
        pinterestSEO: "survival skills, ancestral skills, lost ways, off grid skills, pioneer survival, bushcraft techniques",
      },
      {
        id: "surv-5",
        name: "Bulletproof Home Defense",
        description: "Comprehensive home security and defense system that shows you how to protect your family during civil unrest, break-ins, and disaster scenarios. Home defense is a timeless concern that spikes with every news cycle.",
        bestFor: "Home defense & family protection",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "60%",
        rating: 4.1,
        tag: "Home Security",
        price: "$39",
        image: "/products/bulletproof-home.jpg",
        pinterestSEO: "home defense, home security tips, protect your family, house security, emergency preparedness home",
      },
    ],
  },

  // NICHE 6: RELATIONSHIPS & DATING
  {
    id: "relationships",
    title: "Relationships & Dating",
    subtitle: "Love, Commitment & Communication",
    description: "The highest-commission niche on Digistore24 with up to 90% payouts. Relationship products tap into deep emotional needs and have incredible conversion rates -- Pinterest's 60% female audience makes this a goldmine for dating and commitment products.",
    icon: "HeartHandshake",
    color: "#ec4899",
    programs: ["digistore24"],
    pinterestTip: "Relationship advice quotes, couple goal pins, and 'what men really want' infographics go super viral. Pinterest's female-dominated audience is the perfect match for dating and relationship products. Use aesthetic couple photos with text overlays.",
    products: [
      {
        id: "rel-1",
        name: "His Secret Obsession",
        description: "The #1 relationship program on Digistore24 reveals the 'hero instinct' -- the psychological trigger that makes men crave commitment. Earn up to 90% commission with $180+ per customer through the full funnel. Millions paid out in affiliate commissions already.",
        bestFor: "Women wanting deeper commitment from men",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "90%",
        rating: 4.6,
        tag: "90% Commission",
        price: "$49",
        image: "/products/his-secret-obsession.jpg",
        pinterestSEO: "relationship advice, hero instinct, make him commit, relationship tips, get him to propose, commitment trigger",
      },
      {
        id: "rel-2",
        name: "The Language of Desire",
        description: "Discover the exact words and phrases that trigger intense desire and attraction in men. Communication-based relationship program with powerful conversion rates -- 'words that make him want you' pins get crazy engagement on Pinterest.",
        bestFor: "Women wanting to reignite passion",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "80%",
        rating: 4.4,
        tag: "80% Commission",
        price: "$47",
        image: "/products/language-desire.jpg",
        pinterestSEO: "language of desire, words that attract men, relationship communication, make him desire you, attraction triggers",
      },
      {
        id: "rel-3",
        name: "Text Chemistry",
        description: "Learn the exact text messages that make men obsessed and unable to stop thinking about you. Practical, actionable dating advice for the texting era -- 'texting tips for dating' is one of the most searched relationship topics on Pinterest.",
        bestFor: "Women navigating modern dating & texting",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.3,
        tag: "Texting Era",
        price: "$49",
        image: "/products/text-chemistry.jpg",
        pinterestSEO: "texting tips dating, what to text a guy, text messages for him, dating advice texts, make him text back",
      },
      {
        id: "rel-4",
        name: "Obsession Phrases",
        description: "Powerful psychological phrases that trigger an obsession response in any man. Use these secret words to make him devoted, loyal, and irresistibly attracted to you. Emotional triggers + relationship content = Pinterest perfection.",
        bestFor: "Women wanting to create deep attraction",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "75%",
        rating: 4.2,
        tag: "Psychological Edge",
        price: "$47",
        image: "/products/obsession-phrases.jpg",
        pinterestSEO: "obsession phrases, psychological attraction, make him obsessed, relationship psychology, attraction phrases",
      },
      {
        id: "rel-5",
        name: "The Devotion System",
        description: "A complete relationship transformation system that takes any man from 'casual' to 'committed'. Step-by-step program with video modules, worksheets, and actionable strategies. Great for women in situationships or uncommitted relationships.",
        bestFor: "Women in casual relationships wanting commitment",
        link: "https://www.digistore24.com/redir/YOURID/",
        program: "digistore24",
        commission: "70%",
        rating: 4.1,
        tag: "Commitment System",
        price: "$49",
        image: "/products/devotion-system.jpg",
        pinterestSEO: "make him commit, devotion system, relationship commitment, get him to commit, casual to committed relationship",
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
  "TrendingUp": "TrendingUp",
  "Shield": "Shield",
  "HeartHandshake": "HeartHandshake",
};
