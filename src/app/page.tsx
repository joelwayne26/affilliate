"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ExternalLink,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Gift,
  Menu,
  X,
  Zap,
  TrendingUp,
  Shield,
  CheckCircle2,
  DollarSign,
  Home as HomeIcon,
  Heart,
  ShoppingCart,
  Monitor,
  ImagePlus,
} from "lucide-react";
import { niches, affiliatePrograms, type Program, type Niche } from "@/lib/affiliate-data";

// --- Icon map for niches ---
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: HomeIcon,
  Heart,
  DollarSign,
  ShoppingCart,
  Monitor,
};

// --- Scroll Animation Hook ---

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// --- Animated Section ---

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
  const animMap = {
    "fade-up": "animate-fade-in-up",
    "fade-left": "animate-fade-in-left",
    "fade-right": "animate-fade-in-right",
    scale: "animate-scale-in",
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animMap[animation] : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// --- Program Badge ---

function ProgramBadge({ program, size = "sm" }: { program: Program; size?: "sm" | "md" }) {
  const info = affiliatePrograms[program];
  const sizeClass = size === "md" ? "text-xs px-3 py-1.5" : "text-[10px] px-2 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full font-semibold ${sizeClass} transition-transform hover:scale-105`}
      style={{
        backgroundColor: info.bgColor,
        color: info.color,
        border: `1px solid ${info.color}20`,
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: info.color }} />
      {info.name}
    </span>
  );
}

// --- Star Rating ---

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.round(rating)
              ? "fill-[#f59e0b] text-[#f59e0b]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      <span className="text-xs text-[#1a2744]/60 ml-1">{rating}</span>
    </div>
  );
}

// --- Product Card ---

function ProductCard({ product, nicheColor }: { product: any; nicheColor: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-1 flex flex-col">
      {/* Top accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: nicheColor }} />

      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
            <ImagePlus className="w-10 h-10 mb-2" />
            <span className="text-xs">Add image to {product.image || "/products/your-image.jpg"}</span>
          </div>
        )}
        {/* Tag overlay on image */}
        {product.tag && (
          <span
            className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full text-white shadow-md"
            style={{ backgroundColor: nicheColor }}
          >
            {product.tag}
          </span>
        )}
        {/* Program badge on image */}
        <div className="absolute top-3 right-3">
          <ProgramBadge program={product.program} />
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        {/* Product Name + Price */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-[#1a2744] text-base font-[family-name:var(--font-montserrat)] group-hover:text-[#3b82f6] transition-colors leading-tight">
            {product.name}
          </h3>
          {product.price && (
            <span className="text-sm font-bold text-[#1a2744] whitespace-nowrap">{product.price}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-[#1a2744]/70 leading-relaxed mb-3 flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Best For */}
        <p className="text-xs text-[#1a2744]/50 mb-3">
          <span className="font-semibold">Best for:</span> {product.bestFor}
        </p>

        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={product.rating} />
        </div>

        {/* Commission + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <div>
            <span className="text-[10px] text-[#1a2744]/50 uppercase tracking-wide">Commission</span>
            <p className="text-sm font-bold" style={{ color: nicheColor }}>
              {product.commission}
            </p>
          </div>
          <a href={product.link} target="_blank" rel="noopener noreferrer nofollow">
            <Button
              size="sm"
              className="text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: nicheColor }}
            >
              Get It Now
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Niche Section ---

function NicheSection({ niche, index }: { niche: Niche; index: number }) {
  const [showAll, setShowAll] = useState(false);
  const displayProducts = showAll ? niche.products : niche.products.slice(0, 3);
  const IconComponent = iconComponents[niche.icon] || Monitor;

  return (
    <AnimatedSection animation={index % 2 === 0 ? "fade-left" : "fade-right"} delay={index * 100}>
      <section id={niche.id} className="py-12 scroll-mt-20">
        {/* Niche Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: `${niche.color}15` }}
          >
            <IconComponent className="w-7 h-7" style={{ color: niche.color }} />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)]">
              {niche.title}
            </h2>
            <p className="text-sm text-[#1a2744]/60">{niche.subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {niche.programs.map((p) => (
              <ProgramBadge key={p} program={p} size="md" />
            ))}
          </div>
        </div>

        {/* Niche Description */}
        <p className="text-[#1a2744]/70 leading-relaxed max-w-3xl mb-6">{niche.description}</p>

        {/* Pinterest Tip */}
        <div
          className="flex items-start gap-3 p-4 rounded-xl mb-8"
          style={{ backgroundColor: `${niche.color}08`, borderLeft: `3px solid ${niche.color}` }}
        >
          <span className="text-sm font-bold mt-0.5" style={{ color: niche.color }}>Pinterest Tip</span>
          <p className="text-sm text-[#1a2744]/70">{niche.pinterestTip}</p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} nicheColor={niche.color} />
          ))}
        </div>

        {/* Show More / Less */}
        {niche.products.length > 3 && (
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-gray-200 text-[#1a2744]/70 hover:border-[#3b82f6] hover:text-[#3b82f6] transition-all"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  Show All {niche.products.length} Products <ChevronDown className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        )}
      </section>
    </AnimatedSection>
  );
}

// --- FAQ Section ---

const faqs = [
  {
    question: "How do I know which tools are right for me?",
    answer:
      "Each product card shows 'Best for' to help you match tools to your needs. If you are just starting, begin with free trials -- most of these tools offer one. I only recommend products I have researched thoroughly or use myself.",
  },
  {
    question: "Are these affiliate links? Do you earn a commission?",
    answer:
      "Yes, some links on this site are affiliate links. This means I earn a commission at no extra cost to you when you purchase through my link. I only recommend products I genuinely believe in. Affiliate income helps me keep creating free content and reviews.",
  },
  {
    question: "Which affiliate programs do you work with?",
    answer:
      "I partner with Amazon Associates, ShareASale, ClickBank, and Shopify Affiliates. Each program is clearly labeled on every product so you know exactly where your purchase comes from. Different programs offer different products and commission rates.",
  },
  {
    question: "How do I start making money with affiliate marketing?",
    answer:
      "Start by choosing a niche you are passionate about. Sign up for the affiliate programs listed here (Amazon, ShareASale, ClickBank, Shopify). Create content -- blog posts, Pinterest pins, social media -- that genuinely helps people. Insert your affiliate links naturally. Be patient and consistent.",
  },
  {
    question: "Which niche should I start with for fastest results?",
    answer:
      "Home & Living and Health & Wellness tend to have the fastest results because they have mass appeal and visual products perfect for Pinterest. Finance and Digital Tools take longer but pay higher commissions per sale.",
  },
];

// --- Main Component ---

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-[#1a2744]/95 backdrop-blur-md text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#f59e0b] flex items-center justify-center font-bold text-lg font-[family-name:var(--font-montserrat)] shadow-lg">
                JA
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg leading-tight font-[family-name:var(--font-montserrat)]">
                  Joel Affiliates
                </h1>
                <p className="text-[10px] sm:text-xs text-blue-300">
                  Top Products / Honest Reviews / Real Commissions
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-5 text-sm">
              {niches.slice(0, 4).map((n) => {
                const Icon = iconComponents[n.icon] || Monitor;
                return (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="flex items-center gap-1.5 hover:text-[#f59e0b] transition-colors duration-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {n.title}
                  </a>
                );
              })}
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
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              mobileMenuOpen ? "max-h-[500px] pb-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-3 text-sm">
              {niches.map((n) => {
                const Icon = iconComponents[n.icon] || Monitor;
                return (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="flex items-center gap-2 py-2 hover:text-[#f59e0b] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    {n.title}
                  </a>
                );
              })}
              <a href="#newsletter" className="py-2" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-semibold w-full">
                  Free Cheat Sheet
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden bg-[#1a2744] text-white min-h-[85vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2744] via-[#1a2744]/95 to-[#1a2744]/70" />
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#f59e0b]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-[#8b5cf6]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-[#3b82f6]/20 text-[#60a5fa] border-[#3b82f6]/30 hover:bg-[#3b82f6]/30 transition-colors duration-300 animate-fade-in-up">
                <Zap className="w-3 h-3 mr-1" />
                5 Niches / 4 Affiliate Programs / 1 Trusted Source
              </Badge>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 font-[family-name:var(--font-montserrat)] animate-fade-in-up delay-200">
                Find the <span className="gradient-text">Best Products</span>{" "}
                for Your Life & Business
              </h2>
              <p className="text-lg sm:text-xl text-blue-100/90 mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-400">
                Honest reviews and exclusive deals across home, health, finance, e-commerce, and digital tools.
                Every product tagged by affiliate program so you know exactly where you are buying.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
                <a href="#home-living">
                  <Button
                    size="lg"
                    className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-bold text-lg px-8 w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#f59e0b]/20"
                  >
                    Explore Products <ArrowRight className="w-5 h-5 ml-2" />
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

              {/* Program Badges Row */}
              <div className="mt-10 flex flex-wrap gap-3 animate-fade-in-up delay-800">
                {(Object.keys(affiliatePrograms) as Program[]).map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium"
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: affiliatePrograms[p].color }}
                    />
                    {affiliatePrograms[p].name}
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up delay-1000">
                {[
                  { label: "Products Reviewed", value: "27+", Icon: CheckCircle2 },
                  { label: "Max Commission", value: "$1,000", Icon: DollarSign },
                  { label: "Affiliate Programs", value: "4", Icon: Shield },
                  { label: "Niches Covered", value: "5", Icon: TrendingUp },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-xl glass">
                    <stat.Icon className="w-5 h-5 mx-auto mb-1 text-[#f59e0b]" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-[10px] text-blue-200/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Niches Quick Nav --- */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {niches.map((niche) => {
                const Icon = iconComponents[niche.icon] || Monitor;
                return (
                  <a
                    key={niche.id}
                    href={`#${niche.id}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                    style={{
                      borderColor: `${niche.color}30`,
                      color: niche.color,
                      backgroundColor: `${niche.color}08`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${niche.color}15`;
                      e.currentTarget.style.borderColor = niche.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${niche.color}08`;
                      e.currentTarget.style.borderColor = `${niche.color}30`;
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    {niche.title}
                    <span className="text-[10px] opacity-60">({niche.products.length})</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Affiliate Programs Overview --- */}
        <section className="py-12 bg-[#fafaf8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)] mb-2">
                  4 Trusted Affiliate Programs
                </h2>
                <p className="text-[#1a2744]/60">Every product is clearly labeled so you know where your purchase comes from</p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(Object.keys(affiliatePrograms) as Program[]).map((key, i) => {
                const prog = affiliatePrograms[key];
                const productCount = niches.reduce(
                  (acc, n) => acc + n.products.filter((p) => p.program === key).length,
                  0
                );
                return (
                  <AnimatedSection key={key} animation="scale" delay={i * 100}>
                    <div
                      className="p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                      style={{
                        borderColor: `${prog.color}20`,
                        backgroundColor: prog.bgColor,
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white font-bold text-lg"
                        style={{ backgroundColor: prog.color }}
                      >
                        {key === "amazon" ? "A" : key === "shareasale" ? "S" : key === "clickbank" ? "C" : "S"}
                      </div>
                      <h3 className="font-bold text-[#1a2744] mb-1 font-[family-name:var(--font-montserrat)]">
                        {prog.name}
                      </h3>
                      <p className="text-xs text-[#1a2744]/60 mb-3">{prog.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold" style={{ color: prog.color }}>
                          {productCount} products
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Niche Sections --- */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {niches.map((niche, index) => (
            <NicheSection key={niche.id} niche={niche} index={index} />
          ))}
        </div>

        {/* --- How It Works --- */}
        <section id="how-it-works" className="py-16 bg-[#1a2744] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold font-[family-name:var(--font-montserrat)] mb-2">
                  How Joel Affiliates Works
                </h2>
                <p className="text-blue-200/70">Transparent, honest, and designed to save you time</p>
              </div>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  Icon: Monitor,
                  title: "Browse by Niche",
                  desc: "Explore products across 5 niches -- from home gadgets to business tools. Each niche is tagged with its affiliate program.",
                },
                {
                  Icon: Shield,
                  title: "See the Program",
                  desc: "Every product shows which affiliate program it is from -- Amazon, ShareASale, ClickBank, or Shopify. Full transparency.",
                },
                {
                  Icon: DollarSign,
                  title: "Know the Commission",
                  desc: "Commission rates are displayed upfront. From 4.5% on Amazon to 75% on ClickBank, you know exactly what is earned.",
                },
                {
                  Icon: CheckCircle2,
                  title: "Buy with Confidence",
                  desc: "Only recommended products that deliver real value. Honest reviews, real ratings, and direct links -- no tricks.",
                },
              ].map((step, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 150}>
                  <div className="text-center p-6 rounded-2xl glass">
                    <step.Icon className="w-10 h-10 mx-auto mb-4 text-[#f59e0b]" />
                    <h3 className="font-bold text-lg mb-2 font-[family-name:var(--font-montserrat)]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-blue-200/80 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section id="faq" className="py-16 bg-[#fafaf8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-[#1a2744] font-[family-name:var(--font-montserrat)] mb-2">
                  Frequently Asked Questions
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} animation="fade-up" delay={i * 100}>
                  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold text-[#1a2744] pr-4">{faq.question}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-[#3b82f6] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#1a2744]/40 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === i ? "max-h-60 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="px-5 text-sm text-[#1a2744]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- Newsletter --- */}
        <section id="newsletter" className="py-16 bg-gradient-to-br from-[#1a2744] to-[#2d3f5e] text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-extrabold font-[family-name:var(--font-montserrat)] mb-3">
                Get the Free Cheat Sheet
              </h2>
              <p className="text-blue-100/80 mb-8 leading-relaxed">
                50+ top products across all 5 niches, organized by affiliate program with commission rates.
                Plus exclusive deals and tips I only share with subscribers.
              </p>

              {subscribed ? (
                <div className="p-6 rounded-2xl glass animate-scale-in">
                  <CheckCircle2 className="w-12 h-12 text-[#f59e0b] mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">You are In!</h3>
                  <p className="text-blue-200/80 text-sm">
                    Check your inbox for the free cheat sheet. Welcome to the community!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-[#f59e0b] h-12"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#f59e0b] text-[#1a2744] hover:bg-[#d97706] font-bold px-8 h-12 transition-all duration-300 hover:scale-105"
                  >
                    Get It Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </section>

        {/* --- Affiliate Disclosure --- */}
        <section className="py-8 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[#1a2744]/50 leading-relaxed text-center">
              <strong>Affiliate Disclosure:</strong> Some links on this website are affiliate links. This means if you click on the link and purchase the item, I will receive an affiliate commission at no extra cost to you. I only recommend products or services I use personally or believe will add value to my readers. As an Amazon Associate, I earn from qualifying purchases. As a ShareASale affiliate, I earn commissions from qualifying purchases through links on this site.
            </p>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-[#1a2744] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#f59e0b] flex items-center justify-center font-bold text-sm">
                  JA
                </div>
                <span className="font-bold font-[family-name:var(--font-montserrat)]">Joel Affiliates</span>
              </div>
              <p className="text-sm text-blue-200/60 leading-relaxed">
                Honest reviews and exclusive deals across 5 niches and 4 trusted affiliate programs.
              </p>
            </div>

            {/* Niches */}
            <div>
              <h4 className="font-bold mb-4 text-[#f59e0b]">Niches</h4>
              <div className="space-y-2 text-sm text-blue-200/60">
                {niches.map((n) => {
                  const Icon = iconComponents[n.icon] || Monitor;
                  return (
                    <a key={n.id} href={`#${n.id}`} className="flex items-center gap-2 hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                      {n.title}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold mb-4 text-[#f59e0b]">Affiliate Programs</h4>
              <div className="space-y-2 text-sm text-blue-200/60">
                {(Object.keys(affiliatePrograms) as Program[]).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: affiliatePrograms[key].color }} />
                    {affiliatePrograms[key].name}
                  </div>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-bold mb-4 text-[#f59e0b]">Connect</h4>
              <div className="space-y-2 text-sm text-blue-200/60">
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                  Pinterest
                </a>
                <a href="#newsletter" className="block hover:text-white transition-colors">
                  Newsletter
                </a>
                <a href="#about" className="block hover:text-white transition-colors">
                  About Joel
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-blue-200/40">
            &copy; {new Date().getFullYear()} Joel Affiliates. All rights reserved. |{" "}
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a> |{" "}
            <a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
