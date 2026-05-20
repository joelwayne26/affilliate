"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Search,
  Palette,
  Bot,
  BarChart3,
  Share2,
  Globe,
  CheckCircle2,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Shield,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Gift,
  Users,
  Target,
  Award,
  Heart,
  Sparkles,
  Monitor,
  MousePointerClick,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

// ─── Scroll Animation Hook ───────────────────────────────────────────────────

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ─── Animated Section Wrapper ─────────────────────────────────────────────────

function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    scale: "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? animationClass : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Counter Animation ────────────────────────────────────────────────────────

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topTools = [
  {
    name: "Semrush",
    category: "SEO & Marketing",
    commission: "$200 per sale",
    rating: 4.8,
    description:
      "The all-in-one SEO toolkit used by 10 million marketers worldwide. Keyword research, site audits, competitor analysis, and rank tracking all in one powerful platform.",
    bestFor: "SEO professionals & content marketers",
    link: "https://semrush.com/affiliate",
    icon: Search,
    color: "#f59e0b",
    tag: "Top Earner",
    image: "/hero-marketing.jpg",
  },
  {
    name: "Canva Pro",
    category: "Design & Creative",
    commission: "$36 per Pro sub",
    rating: 4.9,
    description:
      "Create stunning social media graphics, presentations, and marketing materials with drag-and-drop simplicity. 100M+ premium templates, photos, and videos included.",
    bestFor: "Social media managers & content creators",
    link: "https://canva.com/affiliates",
    icon: Palette,
    color: "#3b82f6",
    tag: "Most Popular",
    image: "/hero-design.jpg",
  },
  {
    name: "Shopify",
    category: "E-Commerce",
    commission: "$150 per subscription",
    rating: 4.7,
    description:
      "Launch your online store in minutes with the world's leading e-commerce platform. Handles everything from products to payments to shipping with enterprise-grade reliability.",
    bestFor: "E-commerce entrepreneurs & dropshippers",
    link: "https://shopify.com/affiliates",
    icon: Globe,
    color: "#10b981",
    tag: "Best for Stores",
    image: "/hero-community.jpg",
  },
  {
    name: "HubSpot",
    category: "CRM & Sales",
    commission: "Up to $1,000 per sale",
    rating: 4.6,
    description:
      "The ultimate growth platform combining CRM, marketing automation, sales tools, and customer service. Trusted by 200,000+ businesses in over 120 countries worldwide.",
    bestFor: "B2B companies & marketing agencies",
    link: "https://hubspot.com/partners",
    icon: Users,
    color: "#8b5cf6",
    tag: "Highest Payout",
    image: "/hero-marketing.jpg",
  },
];

const categories = [
  {
    title: "Email Marketing Tools",
    icon: Mail,
    description:
      "Grow your audience and nurture leads with the best email marketing platforms. Compare features, pricing, and automation capabilities side by side.",
    tools: ["ConvertKit", "Mailchimp", "Klaviyo", "ActiveCampaign"],
    color: "#3b82f6",
  },
  {
    title: "AI Marketing Tools",
    icon: Bot,
    description:
      "Leverage artificial intelligence to create content, optimize campaigns, and automate your marketing workflows in 2026 and beyond.",
    tools: ["ChatGPT", "Jasper AI", "Copy.ai", "Midjourney"],
    color: "#8b5cf6",
  },
  {
    title: "SEO & Keyword Research",
    icon: Search,
    description:
      "Boost your organic traffic with powerful SEO tools for keyword research, site audits, and competitor analysis that deliver real results.",
    tools: ["Semrush", "Ahrefs", "Ubersuggest", "Surfer SEO"],
    color: "#f59e0b",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    description:
      "Schedule posts, track analytics, and manage all your social media accounts from a single, streamlined dashboard with ease.",
    tools: ["Buffer", "Hootsuite", "Later", "Tailwind"],
    color: "#ec4899",
  },
  {
    title: "Website Builders & Hosting",
    icon: Globe,
    description:
      "Create a professional website without coding. Compare the best website builders and hosting providers for your needs and budget.",
    tools: ["WordPress", "Shopify", "Wix", "Squarespace"],
    color: "#10b981",
  },
  {
    title: "Productivity & Project Mgmt",
    icon: Target,
    description:
      "Streamline your workflow and boost team collaboration with modern project management and productivity tools built for speed.",
    tools: ["Notion", "Asana", "Trello", "Monday.com"],
    color: "#3b82f6",
  },
  {
    title: "Design & Creative Tools",
    icon: Palette,
    description:
      "Create stunning visuals, graphics, and brand assets with intuitive design tools built for marketers and creative professionals.",
    tools: ["Canva", "Adobe CC", "Figma", "Adobe Express"],
    color: "#f43f5e",
  },
  {
    title: "CRM & Sales Automation",
    icon: TrendingUp,
    description:
      "Close more deals and nurture leads with powerful CRM and sales automation platforms built for growing businesses of all sizes.",
    tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM"],
    color: "#f59e0b",
  },
];

const features = [
  {
    icon: MousePointerClick,
    title: "One-Click Affiliate Links",
    description:
      "Our Chrome extension lets you create affiliate links instantly while browsing. No login needed, no hassle. Just click and start earning from the tools you already recommend to your audience every day.",
  },
  {
    icon: DollarSign,
    title: "Real Commissions, Real Income",
    description:
      "Unlike ad revenue that pays pennies per click, affiliate partnerships pay real money — $36 to $1,000+ per conversion. One Semrush sale earns you $200. One HubSpot deal? Up to $1,000 in a single transaction.",
  },
  {
    icon: Monitor,
    title: "Track What Converts",
    description:
      "See exactly which tools your audience clicks and buys. Our detailed analytics help you understand what resonates so you can create more of the content that drives actual revenue for your business.",
  },
  {
    icon: Shield,
    title: "Trusted Brand Partners",
    description:
      "We only partner with reputable, industry-leading brands like Semrush, Canva, Shopify, and HubSpot. Your audience gets genuine value, and you earn from recommendations you can stand behind with confidence.",
  },
];

const testimonials = [
  {
    quote:
      "I was skeptical about affiliate marketing, but Joel's recommendations made it easy. I earned $600 in my first month just from Semrush referrals alone.",
    name: "Sarah K.",
    role: "Content Marketer",
  },
  {
    quote:
      "The comparison guides saved me hours of research. I found the perfect email tool for my business AND earned commission recommending it to my followers.",
    name: "Marcus T.",
    role: "Entrepreneur",
  },
  {
    quote:
      "Honest, thorough, and actually helpful. This is the only site I trust for marketing tool reviews. The free cheat sheet is incredible on its own.",
    name: "Priya M.",
    role: "Freelance Designer",
  },
];

const faqs = [
  {
    question: "How do I choose the right marketing tool for my business?",
    answer:
      "Start by identifying your biggest marketing challenge — is it email, SEO, social media, or design? Then consider your budget and team size. I recommend starting with one tool per category, mastering it, then expanding. My reviews and comparisons are designed to help you make the right choice quickly.",
  },
  {
    question: "Are these affiliate links? Do you earn a commission?",
    answer:
      "Yes, some links on this site are affiliate links. This means I earn a small commission at no extra cost to you if you sign up through my link. I only recommend tools I genuinely believe in, and my reviews are always honest. Affiliate income helps me keep creating free content and reviews.",
  },
  {
    question: "Do you offer free resources or guides?",
    answer:
      "Absolutely! Sign up for my newsletter below and receive a free '50 Marketing Tools Cheat Sheet' — a quick-reference guide to the best free and paid tools across every marketing category. I also share exclusive deals and tips that I don't post anywhere else.",
  },
  {
    question: "Which tool should I start with if I'm a complete beginner?",
    answer:
      "If you're just starting out, I recommend Canva for design (it's free to start and incredibly intuitive), Mailchimp or ConvertKit for email marketing, and Ubersuggest for basic SEO. These three tools will cover 80% of your marketing needs at minimal cost.",
  },
];

const brandLogos = [
  "Semrush",
  "Canva",
  "Shopify",
  "HubSpot",
  "Notion",
  "Mailchimp",
  "Ahrefs",
  "ConvertKit",
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTool, setActiveTool] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  // Auto-rotate tools showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTool((prev) => (prev + 1) % topTools.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      {/* ─── Header ───────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#1a2744]/95 backdrop-blur-md text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#f59e0b] flex items-center justify-center font-bold text-lg font-[family-name:var(--font-montserrat)] shadow-lg">
                JS
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg leading-tight font-[family-name:var(--font-montserrat)]">
                  Joel | Digital Marketing Tools
                </h1>
                <p className="text-[10px] sm:text-xs text-blue-300">
                  Reviews, Comparisons & Deals
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#tools"
                className="hover:text-[#f59e0b] transition-colors duration-300"
              >
                Top Tools
              </a>
              <a
                href="#categories"
                className="hover:text-[#f59e0b] transition-colors duration-300"
              >
                Categories
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#f59e0b] transition-colors duration-300"
              >
                How It Works
              </a>
              <a
                href="#about"
                className="hover:text-[#f59e0b] transition-colors duration-300"
              >
                About
              </a>
              <a href="#newsletter">
                <Button
                  size="sm"
                  className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-semibold transition-all duration-300 hover:scale-105"
                >
                  Free Cheat Sheet
                </Button>
              </a>
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? "max-h-80 pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#tools"
                className="py-2 hover:text-[#f59e0b] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Top Tools
              </a>
              <a
                href="#categories"
                className="py-2 hover:text-[#f59e0b] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </a>
              <a
                href="#how-it-works"
                className="py-2 hover:text-[#f59e0b] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#about"
                className="py-2 hover:text-[#f59e0b] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#newsletter"
                className="py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  size="sm"
                  className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-semibold w-full"
                >
                  Free Cheat Sheet
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ─── Hero Section ───────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#1a2744] text-white min-h-[90vh] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="/hero-marketing.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744] via-[#1a2744]/90 to-[#1a2744]/60" />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-[#f59e0b]/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-40 h-40 bg-[#8b5cf6]/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <Badge className="mb-6 bg-[#3b82f6]/20 text-[#60a5fa] border-[#3b82f6]/30 hover:bg-[#3b82f6]/30 transition-colors duration-300 animate-fade-in-up">
                  <Zap className="w-3 h-3 mr-1" />
                  #1 Resource for Marketing Tools
                </Badge>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 font-[family-name:var(--font-montserrat)] animate-fade-in-up delay-200">
                  Find the{" "}
                  <span className="gradient-text">Best Marketing Tools</span>{" "}
                  for Your Business
                </h2>
                <p className="text-lg sm:text-xl text-blue-100/90 mb-8 leading-relaxed max-w-xl animate-fade-in-up delay-400">
                  Honest reviews, side-by-side comparisons, and exclusive deals
                  on the digital marketing tools that actually work. Stop
                  guessing — start growing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
                  <a href="#tools">
                    <Button
                      size="lg"
                      className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-bold text-lg px-8 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f59e0b]/20"
                    >
                      Explore Top Tools
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="#newsletter">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto transition-all duration-300 hover:scale-105"
                    >
                      <Gift className="w-5 h-5 mr-2" />
                      Free Cheat Sheet
                    </Button>
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200/80 animate-fade-in-up delay-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span>Honest & unbiased reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span>Updated for 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    <span>Exclusive deals</span>
                  </div>
                </div>
              </div>

              {/* Right: Stats Cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  {
                    value: "200+",
                    label: "Tools Reviewed",
                    icon: Search,
                    color: "#3b82f6",
                  },
                  {
                    value: "$1,000",
                    label: "Max Commission",
                    icon: DollarSign,
                    color: "#f59e0b",
                  },
                  {
                    value: "10K+",
                    label: "Entrepreneurs Helped",
                    icon: Users,
                    color: "#10b981",
                  },
                  {
                    value: "50+",
                    label: "Free Resources",
                    icon: Gift,
                    color: "#ec4899",
                  },
                ].map((stat, i) => {
                  const IconComp = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="glass rounded-2xl p-6 hover:bg-white/12 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                      style={{ animationDelay: `${(i + 3) * 200}ms` }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${stat.color}25` }}
                      >
                        <IconComp
                          className="w-6 h-6"
                          style={{ color: stat.color }}
                        />
                      </div>
                      <div className="text-3xl font-extrabold font-[family-name:var(--font-montserrat)]">
                        {stat.value}
                      </div>
                      <div className="text-blue-200/70 text-sm mt-1">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Brand Logos Ticker ──────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider font-medium">
              Trusted partners & recommended tools
            </p>
            <div className="flex justify-center flex-wrap gap-8 sm:gap-12 items-center">
              {brandLogos.map((brand, i) => (
                <div
                  key={brand}
                  className="text-gray-300 hover:text-[#1a2744] transition-all duration-500 font-[family-name:var(--font-montserrat)] font-bold text-lg sm:text-xl opacity-50 hover:opacity-100"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Tools Showcase (Awin-style Image + Content) ────────── */}
        <section id="tools" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-[#f59e0b]/10 text-[#d97706] hover:bg-[#f59e0b]/20 transition-colors duration-300"
              >
                <Award className="w-3 h-3 mr-1" />
                Top Recommendations
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)] mb-4">
                Top Marketing Tools for 2026
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Thoroughly tested, honestly reviewed. These tools deliver real
                results for entrepreneurs and marketers.
              </p>
            </AnimatedSection>

            {/* Tool Selector Tabs */}
            <AnimatedSection className="mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                {topTools.map((tool, i) => {
                  const IconComp = tool.icon;
                  return (
                    <button
                      key={tool.name}
                      onClick={() => setActiveTool(i)}
                      className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 ${
                        activeTool === i
                          ? "bg-[#1a2744] text-white shadow-lg scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                      <span className="hidden sm:inline">{tool.name}</span>
                    </button>
                  );
                })}
              </div>
            </AnimatedSection>

            {/* Active Tool Display */}
            <AnimatedSection animation="scale">
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="grid lg:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative img-hover-zoom h-64 lg:h-auto">
                    <img
                      key={`img-${activeTool}`}
                      src={topTools[activeTool].image}
                      alt={topTools[activeTool].name}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="bg-[#f59e0b] text-[#1a2744] border-0 font-bold shadow-lg">
                        {topTools[activeTool].tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${topTools[activeTool].color}15`,
                        }}
                      >
                        {(() => {
                          const IconComp = topTools[activeTool].icon;
                          return (
                            <IconComp
                              className="w-6 h-6"
                              style={{ color: topTools[activeTool].color }}
                            />
                          );
                        })()}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)]">
                          {topTools[activeTool].name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {topTools[activeTool].category}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {topTools[activeTool].description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 bg-[#10b981]/10 text-[#059669] px-3 py-1.5 rounded-lg font-semibold text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        {topTools[activeTool].rating}/5
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-[#3b82f6]/10 text-[#2563eb] px-3 py-1.5 rounded-lg font-semibold text-sm">
                        {topTools[activeTool].commission}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm mb-8">
                      <span className="font-semibold text-[#1a2744]">
                        Best for:
                      </span>{" "}
                      {topTools[activeTool].bestFor}
                    </p>

                    <a
                      href={topTools[activeTool].link}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Button className="bg-[#1a2744] hover:bg-[#3b82f6] text-white font-bold h-12 px-8 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
                        Try {topTools[activeTool].name} Free
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* All Tools Quick Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {topTools.map((tool, i) => (
                <AnimatedSection
                  key={tool.name}
                  delay={i * 100}
                  animation="fade-up"
                >
                  <div
                    onClick={() => setActiveTool(i)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all duration-500 hover:shadow-lg hover:scale-[1.02] ${
                      activeTool === i
                        ? "bg-[#1a2744] text-white border-[#1a2744] shadow-lg"
                        : "bg-white text-[#1a2744] border-gray-100 hover:border-[#3b82f6]/30"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          activeTool === i ? "bg-white/20" : ""
                        }`}
                        style={
                          activeTool === i
                            ? {}
                            : { backgroundColor: `${tool.color}15` }
                        }
                      >
                        {(() => {
                          const IconComp = tool.icon;
                          return (
                            <IconComp
                              className="w-4 h-4"
                              style={{
                                color: activeTool === i ? "#f59e0b" : tool.color,
                              }}
                            />
                          );
                        })()}
                      </div>
                      <div>
                        <div className="font-bold text-sm font-[family-name:var(--font-montserrat)]">
                          {tool.name}
                        </div>
                        <div
                          className={`text-xs ${
                            activeTool === i ? "text-blue-200" : "text-gray-400"
                          }`}
                        >
                          {tool.commission}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Categories Section ─────────────────────────────────── */}
        <section id="categories" className="py-20 sm:py-28 bg-[#1a2744] text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-design.jpg"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-blue-200 border-white/20 hover:bg-white/15 transition-colors duration-300">
                <Sparkles className="w-3 h-3 mr-1" />
                Browse by Category
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-[family-name:var(--font-montserrat)] mb-4">
                Everything You Need to{" "}
                <span className="text-[#f59e0b]">Grow</span>
              </h2>
              <p className="text-blue-200/80 max-w-2xl mx-auto text-lg">
                Explore the best tools across every area of digital marketing.
                From email to AI, we&apos;ve got you covered.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((cat, i) => {
                const IconComp = cat.icon;
                return (
                  <AnimatedSection
                    key={cat.title}
                    delay={i * 80}
                    animation="scale"
                  >
                    <div className="group glass hover:bg-white/15 rounded-2xl p-6 transition-all duration-500 cursor-pointer hover:scale-[1.03] hover:shadow-xl">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${cat.color}25` }}
                      >
                        <IconComp
                          className="w-6 h-6"
                          style={{ color: cat.color }}
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-2 font-[family-name:var(--font-montserrat)]">
                        {cat.title}
                      </h3>
                      <p className="text-blue-200/70 text-sm leading-relaxed mb-4">
                        {cat.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs bg-white/10 px-2.5 py-1 rounded-md hover:bg-white/20 transition-colors duration-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── How It Works ───────────────────────────────────────── */}
        <section id="how-it-works" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-[#3b82f6]/10 text-[#2563eb]"
              >
                <Zap className="w-3 h-3 mr-1" />
                How It Works
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)] mb-4">
                Designed for Partners Who{" "}
                <span className="text-[#3b82f6]">Want More</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                We make affiliate partnerships effortless. Connect, manage, and
                monetize while adding genuine value to your content.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {features.map((feature, i) => {
                const IconComp = feature.icon;
                return (
                  <AnimatedSection
                    key={feature.title}
                    delay={i * 150}
                    animation={i % 2 === 0 ? "fade-left" : "fade-right"}
                  >
                    <div className="group bg-[#fafaf8] hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#3b82f6]/20 transition-all duration-500 hover:shadow-xl">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-[#1a2744] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComp className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-3 text-[#1a2744] font-[family-name:var(--font-montserrat)]">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Social Proof / Earnings ────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-[#1a2744] via-[#1e2d4f] to-[#1a2744] text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero-community.jpg"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection className="text-center mb-16">
              <Badge className="mb-4 bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/30">
                <DollarSign className="w-3 h-3 mr-1" />
                Real Earnings
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-[family-name:var(--font-montserrat)] mb-4">
                Great Content Should Generate{" "}
                <span className="text-[#f59e0b]">Great Revenue</span>
              </h2>
              <p className="text-blue-200/80 max-w-2xl mx-auto text-lg">
                Join entrepreneurs worldwide who&apos;ve grown their income with
                strategic tool partnerships.
              </p>
            </AnimatedSection>

            {/* Big Number */}
            <AnimatedSection animation="scale" className="mb-16">
              <div className="text-center">
                <div className="text-6xl sm:text-8xl font-extrabold font-[family-name:var(--font-montserrat)] gradient-text mb-2">
                  <AnimatedCounter target={115} prefix="$" suffix="M+" />
                </div>
                <p className="text-blue-200/60 text-lg">
                  Earned by affiliate partners worldwide
                </p>
              </div>
            </AnimatedSection>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <AnimatedSection
                  key={t.name}
                  delay={i * 150}
                  animation="fade-up"
                >
                  <div className="glass rounded-2xl p-8 hover:bg-white/12 transition-all duration-500 hover:scale-[1.02]">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                        />
                      ))}
                    </div>
                    <p className="text-blue-100/90 leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-bold text-white">
                        {t.name}
                      </div>
                      <div className="text-blue-200/60 text-sm">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ─── About Section ──────────────────────────────────────── */}
        <section id="about" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Side */}
              <AnimatedSection animation="fade-left">
                <div className="relative">
                  <div className="img-hover-zoom rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/hero-community.jpg"
                      alt="Joel Ssengendo - Digital Marketing Tools Expert"
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-[#10b981]" />
                      </div>
                      <div>
                        <div className="font-extrabold text-[#1a2744] text-lg font-[family-name:var(--font-montserrat)]">
                          200+
                        </div>
                        <div className="text-gray-500 text-xs">
                          Tools Reviewed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Content Side */}
              <AnimatedSection animation="fade-right">
                <Badge
                  variant="secondary"
                  className="mb-4 bg-[#f59e0b]/10 text-[#d97706]"
                >
                  <Users className="w-3 h-3 mr-1" />
                  About Me
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)] mb-6">
                  Hey, I&apos;m Joel!
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  I&apos;m a digital marketing enthusiast who got tired of
                  wasting money on tools that overpromise and underdeliver. So I
                  started testing them myself — thoroughly, honestly, and with
                  real businesses in mind.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Every review on this site is based on hands-on experience, not
                  marketing spin. Whether you&apos;re a solopreneur just
                  starting out or a growing business looking to scale, my goal is
                  to help you find the right tools faster.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Follow me on Pinterest for daily tool recommendations, tips,
                  and exclusive deals. And don&apos;t forget to grab my free
                  cheat sheet below!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://pinterest.com/joelssengendo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-[#e60023] hover:bg-[#cc001f] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Follow on Pinterest
                    </Button>
                  </a>
                  <a href="#newsletter">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#1a2744] text-[#1a2744] hover:bg-[#1a2744] hover:text-white transition-all duration-300"
                    >
                      <Gift className="w-5 h-5 mr-2" />
                      Get Free Resources
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── Newsletter Section ─────────────────────────────────── */}
        <section
          id="newsletter"
          className="py-20 sm:py-28 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#1e2d4f] to-[#253a5e]" />
          <div className="absolute inset-0">
            <img
              src="/hero-marketing.jpg"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#3b82f6]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f59e0b]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-white">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedSection animation="scale">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center mx-auto mb-8 shadow-xl animate-pulse-glow">
                  <Gift className="w-10 h-10 text-[#1a2744]" />
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="text-3xl sm:text-5xl font-extrabold font-[family-name:var(--font-montserrat)] mb-4">
                  Free: 50 Marketing Tools{" "}
                  <span className="text-[#f59e0b]">Cheat Sheet</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-blue-200/90 text-lg mb-10 leading-relaxed">
                  Get my curated list of the 50 best free and paid marketing
                  tools — organized by category with quick-hit summaries. Plus,
                  exclusive deals and new tool alerts every week.
                </p>
              </AnimatedSection>

              {subscribed ? (
                <AnimatedSection animation="scale">
                  <div className="bg-[#10b981]/20 border border-[#10b981]/30 rounded-2xl p-8">
                    <CheckCircle2 className="w-12 h-12 text-[#10b981] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">
                      You&apos;re in!
                    </h3>
                    <p className="text-blue-200">
                      Check your inbox for the free cheat sheet. Welcome aboard!
                    </p>
                  </div>
                </AnimatedSection>
              ) : (
                <AnimatedSection animation="fade-up" delay={400}>
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-14 bg-white/10 border-white/20 text-white placeholder:text-blue-200/60 text-base rounded-xl focus:ring-[#f59e0b] focus:border-[#f59e0b]"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-bold h-14 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f59e0b]/30"
                    >
                      Get It Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </AnimatedSection>
              )}
              <p className="text-blue-300/60 text-xs mt-6">
                No spam, ever. Unsubscribe anytime. Your email is safe with me.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ Section ────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-4 bg-[#3b82f6]/10 text-[#2563eb]"
              >
                FAQ
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)]">
                Your Questions Answered
              </h2>
            </AnimatedSection>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <AnimatedSection
                  key={index}
                  delay={index * 100}
                  animation="fade-up"
                >
                  <div className="bg-[#fafaf8] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors duration-300"
                    >
                      <span className="font-semibold text-[#1a2744] pr-4 font-[family-name:var(--font-montserrat)]">
                        {faq.question}
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openFaq === index
                            ? "bg-[#3b82f6] text-white rotate-180"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        openFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ──────────────────────────────────────────────── */}
      <footer className="bg-[#0f1729] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#f59e0b] flex items-center justify-center font-bold shadow-lg">
                  JS
                </div>
                <span className="font-bold font-[family-name:var(--font-montserrat)]">
                  Joel | Digital Marketing Tools
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Helping entrepreneurs find the best marketing tools with honest
                reviews and exclusive deals since 2024.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-[#f59e0b] font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider">
                Top Tools
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="https://semrush.com/affiliate"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Semrush
                  </a>
                </li>
                <li>
                  <a
                    href="https://canva.com/affiliates"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Canva Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://shopify.com/affiliates"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Shopify
                  </a>
                </li>
                <li>
                  <a
                    href="https://hubspot.com/partners"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="hover:text-white transition-colors duration-300"
                  >
                    HubSpot
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-[#f59e0b] font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider">
                Categories
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="#categories"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Email Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className="hover:text-white transition-colors duration-300"
                  >
                    SEO Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className="hover:text-white transition-colors duration-300"
                  >
                    AI Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#categories"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Design Tools
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-5 text-[#f59e0b] font-[family-name:var(--font-montserrat)] text-sm uppercase tracking-wider">
                Connect
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a
                    href="https://pinterest.com/joelssengendo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Pinterest
                  </a>
                </li>
                <li>
                  <a
                    href="#newsletter"
                    className="hover:text-white transition-colors duration-300"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Joel Ssengendo. All rights
              reserved.
            </p>
            <p className="text-gray-500 text-xs text-center max-w-md">
              Disclosure: Some links on this site are affiliate links. I may earn
              a commission at no extra cost to you.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
