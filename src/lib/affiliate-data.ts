// ═══════════════════════════════════════════════════════════════
// JOEL AFFILIATES — Central Affiliate Data Store
// ═══════════════════════════════════════════════════════════════
// TO ADD A NEW PRODUCT:
// 1. Find the right niche below
// 2. Copy an existing product object
// 3. Fill in: name, description, link (your affiliate URL), image, etc.
// 4. Place product images in /public/products/ folder
// That's it. The website auto-renders everything.
// ═══════════════════════════════════════════════════════════════

export type Program = "amazon" | "shareasale" | "clickbank" | "shopify";

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  bestFor: string;
  link: string; // YOUR AFFILIATE LINK GOES HERE
  program: Program;
  commission: string;
  rating: number;
  tag?: string;
  price?: string;
  image: string; // Place images in /public/products/ e.g. "/products/instant-pot.jpg"
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
  amazon: {
    name: "Amazon Associates",
    color: "#FF9900",
    bgColor: "#FFF3E0",
    description: "1-10% commission / 24hr cookie / Millions of products",
  },
  shareasale: {
    name: "ShareASale",
    color: "#2E7D32",
    bgColor: "#E8F5E9",
    description: "$20-$200/sale / 30-120 day cookie / 20,000+ merchants",
  },
  clickbank: {
    name: "ClickBank",
    color: "#E53935",
    bgColor: "#FFEBEE",
    description: "50-75% commission / Digital products / Instant payouts",
  },
  shopify: {
    name: "Shopify Affiliates",
    color: "#95BF47",
    bgColor: "#F1F8E9",
    description: "$150/referral / Recurring potential / E-commerce focus",
  },
};

// --- NICHES & PRODUCTS ---

export const niches: Niche[] = [
  // NICHE 1: HOME & LIVING
  {
    id: "home-living",
    title: "Home & Living",
    subtitle: "Kitchen, Decor & Smart Home",
    description: "Transform your space with the best home gadgets, kitchen essentials, and smart decor finds -- all tested and reviewed.",
    icon: "Home",
    color: "#10b981",
    programs: ["amazon", "shareasale"],
    pinterestTip: "Pin vertical lifestyle shots. Kitchen gadgets and home organization are Pinterest's top categories.",
    products: [
      {
        id: "home-1",
        name: "Instant Pot Duo Plus",
        description: "The #1 best-selling multi-cooker that replaces 9 appliances. Pressure cook, slow cook, saute, steam, and more -- perfect for busy households.",
        bestFor: "Busy families & meal preppers",
        link: "https://amazon.com/dp/B07W55D31W?tag=YOURTAG-20",
        program: "amazon",
        commission: "4.5%",
        rating: 4.8,
        tag: "Best Seller",
        price: "$89.95",
        image: "/products/instant-pot.jpg",
      },
      {
        id: "home-2",
        name: "Ninja Air Fryer XL",
        description: "Crispy, healthy meals with up to 75% less fat. 5.5-quart capacity feeds a family of 4 with easy one-touch cooking.",
        bestFor: "Health-conscious cooks",
        link: "https://amazon.com/dp/B09KV8FVHR?tag=YOURTAG-20",
        program: "amazon",
        commission: "4.5%",
        rating: 4.7,
        tag: "Trending",
        price: "$99.99",
        image: "/products/ninja-air-fryer.jpg",
      },
      {
        id: "home-3",
        name: "iRobot Roomba j7+",
        description: "Robot vacuum that avoids pet waste and cables. Self-emptying base means you go weeks without lifting a finger.",
        bestFor: "Pet owners & busy professionals",
        link: "https://amazon.com/dp/B09QNB5LT6?tag=YOURTAG-20",
        program: "amazon",
        commission: "4.5%",
        rating: 4.5,
        tag: "Premium Pick",
        price: "$599.00",
        image: "/products/roomba.jpg",
      },
      {
        id: "home-4",
        name: "Wayfair Home Decor",
        description: "Over 14 million items for every room. From modern to farmhouse, find furniture, rugs, lighting and decor at every budget.",
        bestFor: "Home decorators & renovators",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "5-7%",
        rating: 4.4,
        tag: "Huge Selection",
        image: "/products/wayfair-decor.jpg",
      },
      {
        id: "home-5",
        name: "Dash Compact Air Fryer",
        description: "Budget-friendly 2.6-quart air fryer perfect for dorms, apartments, and solo cooking. Quick, easy, and affordable.",
        bestFor: "Students & small spaces",
        link: "https://amazon.com/dp/B07WJ5D3H4?tag=YOURTAG-20",
        program: "amazon",
        commission: "4.5%",
        rating: 4.6,
        price: "$49.99",
        image: "/products/dash-air-fryer.jpg",
      },
      {
        id: "home-6",
        name: "Philips Hue Smart Lights",
        description: "16 million colors, voice control, and automation. Transform any room's mood instantly with the #1 smart lighting system.",
        bestFor: "Smart home enthusiasts",
        link: "https://amazon.com/dp/B07RM39K5R?tag=YOURTAG-20",
        program: "amazon",
        commission: "4%",
        rating: 4.6,
        tag: "Smart Pick",
        price: "$199.99",
        image: "/products/philips-hue.jpg",
      },
    ],
  },

  // NICHE 2: HEALTH & WELLNESS
  {
    id: "health-wellness",
    title: "Health & Wellness",
    subtitle: "Fitness, Supplements & Self-Care",
    description: "Discover the supplements, fitness programs, and wellness tools that actually deliver results -- backed by real reviews.",
    icon: "Heart",
    color: "#ef4444",
    programs: ["clickbank", "amazon"],
    pinterestTip: "Before/after photos, smoothie recipes, and workout routines go viral on Pinterest. Link to your blog reviews.",
    products: [
      {
        id: "health-1",
        name: "The Smoothie Diet",
        description: "21-day weight loss program with delicious smoothie recipes. Lost 10+ lbs in 3 weeks without starving -- just nutrient-packed blends.",
        bestFor: "Weight loss seekers",
        link: "https://YOURCLICKBANKID.smoothdie.hop.clickbank.net",
        program: "clickbank",
        commission: "75%",
        rating: 4.3,
        tag: "Top Earner",
        price: "$27",
        image: "/products/smoothie-diet.jpg",
      },
      {
        id: "health-2",
        name: "Yoga Burn Challenge",
        description: "12-week yoga program designed for women. Dynamic sequencing technique boosts metabolism and tones your body from home.",
        bestFor: "Women 25-55 wanting home fitness",
        link: "https://YOURCLICKBANKID.yogaburn.hop.clickbank.net",
        program: "clickbank",
        commission: "75%",
        rating: 4.2,
        price: "$37",
        image: "/products/yoga-burn.jpg",
      },
      {
        id: "health-3",
        name: "FITBIT Charge 6",
        description: "Advanced fitness tracker with built-in GPS, heart rate monitoring, sleep tracking, and 7-day battery. Your health on your wrist.",
        bestFor: "Fitness trackers & health monitoring",
        link: "https://amazon.com/dp/B0CGJV3G1R?tag=YOURTAG-20",
        program: "amazon",
        commission: "4%",
        rating: 4.5,
        tag: "Amazon Choice",
        price: "$129.95",
        image: "/products/fitbit-charge.jpg",
      },
      {
        id: "health-4",
        name: "BioFit Probiotic",
        description: "Clinically studied probiotic strain that supports weight management and gut health. 5.6 billion CFU per capsule.",
        bestFor: "Gut health & weight management",
        link: "https://YOURCLICKBANKID.biofitpro.hop.clickbank.net",
        program: "clickbank",
        commission: "65%",
        rating: 4.1,
        price: "$69",
        image: "/products/biofit.jpg",
      },
      {
        id: "health-5",
        name: "Theragun Mini",
        description: "Percussive therapy on the go. Quiet, powerful, and pocket-sized -- relieves muscle tension in 30 seconds flat.",
        bestFor: "Athletes & desk workers",
        link: "https://amazon.com/dp/B099MJ9XV3?tag=YOURTAG-20",
        program: "amazon",
        commission: "3%",
        rating: 4.7,
        tag: "Premium",
        price: "$199.00",
        image: "/products/theragun-mini.jpg",
      },
      {
        id: "health-6",
        name: "Renew Sleep Supplement",
        description: "Deep sleep and metabolism support formula. Enhances overnight fat burning and recovery for better energy every morning.",
        bestFor: "Poor sleep & slow metabolism",
        link: "https://YOURCLICKBANKID.renewsl.hop.clickbank.net",
        program: "clickbank",
        commission: "70%",
        rating: 4.0,
        price: "$49",
        image: "/products/renew-sleep.jpg",
      },
    ],
  },

  // NICHE 3: MONEY & FINANCE
  {
    id: "money-finance",
    title: "Money & Finance",
    subtitle: "Side Hustles, Investing & Financial Tools",
    description: "Build real income streams with the best financial tools, investment platforms, and side hustle resources that actually pay off.",
    icon: "DollarSign",
    color: "#f59e0b",
    programs: ["shareasale", "clickbank", "amazon"],
    pinterestTip: "Side hustle lists, budgeting tips, and money-saving hacks are massive on Pinterest. Pin quote graphics with dollar amounts.",
    products: [
      {
        id: "money-1",
        name: "Semrush",
        description: "The all-in-one SEO toolkit used by 10M marketers. Keyword research, site audits, competitor analysis -- find profitable keywords your competitors miss.",
        bestFor: "SEO professionals & content creators",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$200/sale",
        rating: 4.8,
        tag: "Top Earner",
        image: "/products/semrush.jpg",
      },
      {
        id: "money-2",
        name: "WP Engine Hosting",
        description: "Premium WordPress hosting with automatic speed optimization and security. The best foundation for money-making websites and blogs.",
        bestFor: "Bloggers & website owners",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$200/sale",
        rating: 4.7,
        tag: "High Ticket",
        image: "/products/wp-engine.jpg",
      },
      {
        id: "money-3",
        name: "SaleHoo Wholesale Directory",
        description: "Access 8,000+ verified wholesale suppliers and dropshippers. Find profitable products to sell on Amazon, Shopify, or eBay.",
        bestFor: "E-commerce beginners & dropshippers",
        link: "https://YOURCLICKBANKID.salehoo.hop.clickbank.net",
        program: "clickbank",
        commission: "50%",
        rating: 4.1,
        price: "$67",
        image: "/products/salehoo.jpg",
      },
      {
        id: "money-4",
        name: "FreshBooks Accounting",
        description: "Cloud accounting for freelancers and small businesses. Track expenses, send invoices, and get paid 2x faster.",
        bestFor: "Freelancers & small business owners",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$55/sale",
        rating: 4.5,
        image: "/products/freshbooks.jpg",
      },
      {
        id: "money-5",
        name: "Namecheap Domains",
        description: "Register domains at the lowest prices with free WhoisGuard privacy. The best starting point for any online business.",
        bestFor: "Anyone starting an online business",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "15-30%",
        rating: 4.6,
        price: "From $5.98/yr",
        image: "/products/namecheap.jpg",
      },
      {
        id: "money-6",
        name: "The Total Money Makeover (Book)",
        description: "Dave Ramsey's proven 7-step plan to get out of debt and build real wealth. Over 5 million copies sold.",
        bestFor: "Anyone in debt or building wealth",
        link: "https://amazon.com/dp/1595555277?tag=YOURTAG-20",
        program: "amazon",
        commission: "4.5%",
        rating: 4.8,
        tag: "Best Seller",
        price: "$14.99",
        image: "/products/money-makeover.jpg",
      },
    ],
  },

  // NICHE 4: E-COMMERCE TOOLS
  {
    id: "ecommerce-tools",
    title: "E-Commerce Tools",
    subtitle: "Start & Scale Your Online Store",
    description: "Launch your online business with the world's best e-commerce platform and tools. From idea to first sale in under 30 minutes.",
    icon: "ShoppingCart",
    color: "#95BF47",
    programs: ["shopify", "shareasale"],
    pinterestTip: "Showcase beautiful store designs and product mockups. 'Start your own store' pins attract aspiring entrepreneurs.",
    products: [
      {
        id: "ecom-1",
        name: "Shopify Starter",
        description: "Start selling on social media in minutes. No website needed -- just link, post, and sell. Perfect for Instagram and Pinterest sellers.",
        bestFor: "Social media sellers & beginners",
        link: "https://shopify.pxf.io/YOURID",
        program: "shopify",
        commission: "$150/referral",
        rating: 4.7,
        tag: "Best for Beginners",
        price: "$5/mo",
        image: "/products/shopify-starter.jpg",
      },
      {
        id: "ecom-2",
        name: "Shopify Basic",
        description: "Full online store with unlimited products, 24/7 support, and sales channels. The #1 e-commerce platform trusted by millions.",
        bestFor: "Serious online store owners",
        link: "https://shopify.pxf.io/YOURID",
        program: "shopify",
        commission: "$150/referral",
        rating: 4.8,
        tag: "Most Popular",
        price: "$39/mo",
        image: "/products/shopify-basic.jpg",
      },
      {
        id: "ecom-3",
        name: "Kinsta WordPress Hosting",
        description: "Premium managed WordPress hosting on Google Cloud Platform. Lightning-fast stores with enterprise-grade security and staging.",
        bestFor: "WooCommerce store owners",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$50-500/sale",
        rating: 4.9,
        tag: "Premium",
        image: "/products/kinsta.jpg",
      },
      {
        id: "ecom-4",
        name: "Thinkific Course Platform",
        description: "Create and sell online courses with zero transaction fees. Turn your expertise into a digital product that earns while you sleep.",
        bestFor: "Course creators & coaches",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "20% recurring",
        rating: 4.5,
        image: "/products/thinkific.jpg",
      },
    ],
  },

  // NICHE 5: DIGITAL TOOLS
  {
    id: "digital-tools",
    title: "Digital Tools",
    subtitle: "Software, AI & Productivity",
    description: "The best software and AI tools for creators, marketers, and entrepreneurs -- honest reviews and exclusive deals on tools that deliver.",
    icon: "Monitor",
    color: "#3b82f6",
    programs: ["shareasale", "amazon"],
    pinterestTip: "Software comparison infographics and 'top 5 tools' pins perform well. Create visual comparison charts.",
    products: [
      {
        id: "digital-1",
        name: "Canva Pro",
        description: "Create stunning social media graphics, presentations, and marketing materials with drag-and-drop simplicity. 100M+ premium assets included.",
        bestFor: "Social media managers & content creators",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$36/sub",
        rating: 4.9,
        tag: "Most Popular",
        price: "$12.99/mo",
        image: "/products/canva-pro.jpg",
      },
      {
        id: "digital-2",
        name: "HubSpot CRM",
        description: "Free CRM with marketing automation, sales tools, and customer service. Trusted by 200,000+ businesses in 120+ countries.",
        bestFor: "B2B companies & agencies",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "Up to $1,000/sale",
        rating: 4.6,
        tag: "Highest Payout",
        image: "/products/hubspot.jpg",
      },
      {
        id: "digital-3",
        name: "Ahrefs SEO Tool",
        description: "Backlink analysis, keyword research, and competitor monitoring used by the world's top SEO professionals. Data-driven marketing at its best.",
        bestFor: "SEO professionals & agencies",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$100/sale",
        rating: 4.7,
        image: "/products/ahrefs.jpg",
      },
      {
        id: "digital-4",
        name: "Notion Team",
        description: "All-in-one workspace for notes, docs, project management, and collaboration. Replace 5 apps with one powerful platform.",
        bestFor: "Teams & productivity-focused individuals",
        link: "https://amazon.com/dp/B0BSHF7WHW?tag=YOURTAG-20",
        program: "amazon",
        commission: "4%",
        rating: 4.8,
        tag: "Editor's Pick",
        price: "$8/user/mo",
        image: "/products/notion.jpg",
      },
      {
        id: "digital-5",
        name: "ConvertKit Email Marketing",
        description: "Email marketing built for creators. Grow your audience, sell digital products, and automate your email sequences effortlessly.",
        bestFor: "Bloggers, YouTubers & creators",
        link: "https://www.shareasale.com/r.cfm?b=XXXX&u=YOURID&m=XXXX",
        program: "shareasale",
        commission: "$30/trial",
        rating: 4.5,
        image: "/products/convertkit.jpg",
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
  "Home": "Home",
  "Heart": "Heart",
  "DollarSign": "DollarSign",
  "ShoppingCart": "ShoppingCart",
  "Monitor": "Monitor",
};
