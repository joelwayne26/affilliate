import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Joel Affiliates — Tips, Reviews & Guides",
  description: "In-depth articles on affiliate marketing, product reviews, SEO tools, and strategies to grow your online income.",
};

const blogPosts = [
  {
    slug: "best-web-hosting-beginners",
    title: "5 Best Web Hosting Sites for Beginners in 2025",
    excerpt: "Starting your first website? Compare the 5 best beginner-friendly web hosting providers: pricing, features, speed, and honest recommendations to get you online fast.",
    date: "June 13, 2025",
    readTime: "8 min",
    category: "Web Hosting",
  },
  {
    slug: "start-affiliate-marketing-zero-money",
    title: "How to Start Affiliate Marketing with Zero Money",
    excerpt: "A complete beginner's guide to starting affiliate marketing without spending a dime. Free tools, free platforms, and a step-by-step 90-day plan to earn your first commission.",
    date: "June 13, 2025",
    readTime: "10 min",
    category: "Affiliate Marketing",
  },
  {
    slug: "semrush-vs-ahrefs-seo-tools",
    title: "Semrush vs Ahrefs: Which SEO Tool is Better in 2025?",
    excerpt: "An honest, in-depth comparison of Semrush and Ahrefs — features, pricing, data accuracy, and which SEO tool is right for your business.",
    date: "June 13, 2025",
    readTime: "12 min",
    category: "SEO Tools",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <header className="bg-[#1a2744] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-blue-200/60 hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-montserrat)]">
            Blog
          </h1>
          <p className="mt-2 text-blue-200/70">
            In-depth articles, honest reviews, and practical guides to help you make smarter decisions and grow your income.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#3b82f6] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 text-xs text-[#1a2744]/50 mb-3">
                  <span className="bg-[#3b82f6]/10 text-[#3b82f6] px-2.5 py-1 rounded-full font-medium">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] text-[#1a2744] group-hover:text-[#3b82f6] transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-[#1a2744]/70 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-[#3b82f6] group-hover:translate-x-1 transition-transform">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
