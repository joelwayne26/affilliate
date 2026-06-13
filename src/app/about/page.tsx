import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Joel Affiliates | Joel Ssengendo",
  description: "Learn about Joel Affiliates and Joel Ssengendo — why I started this site, my mission, and how I help you find the best products across 5 niches.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <header className="bg-[#1a2744] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-blue-200/60 hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-montserrat)]">
            About Joel Affiliates
          </h1>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] mb-4">My Mission</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            Joel Affiliates exists for one simple reason: to cut through the noise and give you honest, thoroughly researched product recommendations that actually help you make better purchasing decisions. The internet is flooded with fake reviews, inflated ratings, and so-called experts who have never touched the products they are promoting. I built this site to be the opposite of that. Every product you see here has been carefully evaluated based on real-world performance, genuine user feedback, and verifiable value. If a product is not good enough, it does not make it onto this site, period.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed">
            I cover five niches because I believe in diversification. Home and living products help you create a space you love. Health and wellness products help you feel your best. Money and finance tools help you build real wealth. E-commerce tools help you start and grow an online business. And digital tools help you work smarter, not harder. Each niche is carefully curated so you get only the best options, clearly labeled with their affiliate program source and commission structure, because transparency is non-negotiable.
          </p>
        </section>

        {/* About Joel */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] mb-4">About Joel Ssengendo</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            My name is Joel Ssengendo, and I am the person behind Joel Affiliates. I started this website because I was tired of wasting money on products that looked great in ads but performed poorly in real life. Like many of you, I have been burned by misleading reviews and overhyped recommendations. That frustration turned into motivation to build something better — a site where every recommendation is backed by genuine research and honest analysis.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            I am not a faceless corporation or a content mill churning out hundreds of low-quality posts. I am a real person who spends hours researching each product, comparing features, reading user reviews, and testing wherever possible. I partner with trusted affiliate programs including Amazon Associates, ShareASale, ClickBank, and the Shopify Affiliate Program because they offer reliable tracking, genuine products, and fair commission structures. Every affiliate link on this site is clearly disclosed, and I never let commission rates influence my recommendations.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed">
            My background is in digital marketing and technology, and I bring that expertise to every review and comparison I write. I understand the difference between marketing speak and genuine value, and I use that knowledge to help you see past the hype and make informed decisions. When I recommend a product, it is because I genuinely believe it is the best option for the specific use case I describe — not because it pays the highest commission.
          </p>
        </section>

        {/* Values */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] mb-4">What I Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">Honesty Over Profit</h3>
              <p className="text-sm text-[#1a2744]/80 leading-relaxed">A higher commission never changes my recommendation. If product A is better than product B, I recommend product A — even if product B pays more. Your trust is worth more than any single commission.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">Full Transparency</h3>
              <p className="text-sm text-[#1a2744]/80 leading-relaxed">Every affiliate relationship is disclosed. Every commission rate is visible. You always know exactly how I earn money from this site. No hidden agendas, no cloaked links, no surprises.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">Quality Over Quantity</h3>
              <p className="text-sm text-[#1a2744]/80 leading-relaxed">I would rather review 6 excellent products in a niche than list 30 mediocre ones. Every product on this site has earned its place through genuine merit and real value.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-[#1a2744] mb-2">Real Research</h3>
              <p className="text-sm text-[#1a2744]/80 leading-relaxed">I do not rewrite manufacturer descriptions. I dig into specifications, compare alternatives, read verified user reviews, and provide context that helps you understand whether a product fits your specific situation.</p>
            </div>
          </div>
        </section>

        {/* How the site works */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] mb-4">How This Site Works</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            Joel Affiliates is an independent product recommendation website. I research and curate the best products across five niches and four trusted affiliate programs. When you find a product you like and click through to purchase it, I may earn a small commission from the respective affiliate network at absolutely no extra cost to you. This commission is how I fund the continued research, writing, and maintenance of this site.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed">
            I also publish in-depth blog articles covering topics like web hosting comparisons, affiliate marketing strategies, and SEO tool reviews. These articles are designed to provide genuine value and help you make informed decisions — they are not thinly veiled sales pitches. My goal is to build a resource that you return to again and again because the information is reliable, the writing is clear, and the recommendations are trustworthy.
          </p>
        </section>

        {/* Connect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] mb-4">Connect With Me</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-4">
            I love hearing from readers. Whether you have a question about a product, a suggestion for a review, or just want to say hello, feel free to reach out. You can connect with me through the following channels:
          </p>
          <div className="space-y-3">
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#1a2744] hover:text-[#3b82f6] transition-colors">
              <span className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600 font-bold text-sm">P</span>
              <span className="font-medium">Pinterest — Follow for product pins and visual guides</span>
            </a>
            <a href="/#newsletter" className="flex items-center gap-3 text-[#1a2744] hover:text-[#3b82f6] transition-colors">
              <span className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">N</span>
              <span className="font-medium">Newsletter — Get exclusive deals and free resources</span>
            </a>
            <div className="flex items-center gap-3 text-[#1a2744]">
              <span className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">E</span>
              <span className="font-medium">Email — joelssengendo1204@gmail.com</span>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-[#1a2744]/70">
          <strong>Affiliate Disclosure:</strong> This site contains affiliate links. I may earn a commission if you click on a link and make a purchase at no extra cost to you. See my <Link href="/affiliate-disclosure" className="underline hover:text-[#1a2744]">full affiliate disclosure</Link> for details.
        </div>
      </article>
    </div>
  );
}
