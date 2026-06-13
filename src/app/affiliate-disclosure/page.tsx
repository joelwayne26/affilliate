import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Joel Affiliates",
  description: "Affiliate disclosure for Joel Affiliates — transparency about how we earn commissions from product recommendations.",
};

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <header className="bg-[#1a2744] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm text-blue-200/60 hover:text-white transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-montserrat)]">
            Affiliate Disclosure
          </h1>
          <p className="mt-2 text-blue-200/70 text-sm">Last updated: June 13, 2025</p>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">FTC Compliance Disclosure</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            In accordance with the Federal Trade Commission guidelines regarding the use of endorsements and testimonials in advertising (16 CFR Part 255), we want to make it clear that Joel Affiliates participates in affiliate marketing programs. This means we may earn commissions on products or services purchased through links on this website. This disclosure is provided to comply with FTC regulations and to maintain transparency with our readers.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed">
            The Federal Trade Commission requires that we disclose any relationship we have with a product or service provider that might influence our recommendations. We take this requirement seriously and want you to understand exactly how our affiliate relationships work so you can make informed decisions about the products and services we recommend.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">What This Means for You</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            When you click on an affiliate link on our Site and make a purchase, we may receive a commission from the merchant or affiliate network at no additional cost to you. The price you pay for any product or service through our affiliate links is exactly the same as what you would pay if you went directly to the merchant&apos;s website. You will never pay more because you used our link. In some cases, we may be able to negotiate special discounts or bonuses that are only available through our links, which could actually save you money.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed">
            We want to be completely transparent: earning commissions is how we sustain this website and continue providing free content to our readers. Creating quality reviews, comparisons, and guides requires significant time and resources. Affiliate commissions allow us to keep this information freely accessible without charging subscription fees or plastering the site with intrusive advertisements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">Our Affiliate Programs</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            Joel Affiliates is a participant in the following affiliate programs:
          </p>
          <ul className="space-y-4">
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-[#1a2744] mb-1">Amazon Associates Program</h3>
              <p className="text-sm text-[#1a2744]/80">Joel Affiliates is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, I earn from qualifying purchases. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-[#1a2744] mb-1">ShareASale Affiliate Network</h3>
              <p className="text-sm text-[#1a2744]/80">We participate in the ShareASale affiliate network, which connects us with thousands of merchants offering affiliate programs. When you click a ShareASale affiliate link on our Site and make a purchase, we may receive a commission from the respective merchant. ShareASale uses a 30 to 120-day cookie to track referrals.</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-[#1a2744] mb-1">ClickBank Marketplace</h3>
              <p className="text-sm text-[#1a2744]/80">We promote select digital products available through the ClickBank marketplace. ClickBank is one of the largest affiliate networks for digital products, offering commissions typically ranging from 50% to 75%. When you purchase a ClickBank product through our link, we receive a commission from the product vendor.</p>
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-[#1a2744] mb-1">Shopify Affiliate Program</h3>
              <p className="text-sm text-[#1a2744]/80">We are a participant in the Shopify Affiliate Program, administered through Impact. When you sign up for Shopify through our affiliate link, we may receive a commission. Shopify is a registered trademark of Shopify Inc.</p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">Our Editorial Integrity</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            Our affiliate relationships do not influence our product reviews or recommendations. We only recommend products and services that we have personally used, thoroughly researched, or genuinely believe will provide value to our readers. A higher commission rate never influences our decision to recommend one product over another. If two products are compared on our Site, the winner is chosen based on genuine merit, not commission rates.
          </p>
          <p className="text-[#1a2744]/80 leading-relaxed">
            We regularly review and update our recommendations to ensure they remain accurate and relevant. If a product we previously recommended declines in quality or a better alternative becomes available, we will update our content accordingly, even if the original recommendation earned us a higher commission. Your trust is more valuable to us than any individual commission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">How We Use Affiliate Links</h2>
          <p className="text-[#1a2744]/80 leading-relaxed mb-3">
            Affiliate links appear on our Site in the following contexts:
          </p>
          <ul className="list-disc list-inside text-[#1a2744]/80 leading-relaxed space-y-1">
            <li>Product review articles where we link to the product page for your convenience</li>
            <li>Product comparison posts where we link to both products being compared</li>
            <li>Product cards on our homepage that link directly to the merchant&apos;s product page</li>
            <li>Recommended resource lists and tool roundups</li>
            <li>Within blog post content where a product mention is contextually relevant</li>
          </ul>
          <p className="text-[#1a2744]/80 leading-relaxed mt-3">
            Every affiliate link on our Site is clearly identified either by a visible badge, a text label, or the context of the surrounding content. We do not use cloaked, hidden, or deceptive affiliate links. If you are ever unsure whether a link is an affiliate link, you can assume that any link to a product or service from our Site may be an affiliate link.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">Cookie Tracking</h2>
          <p className="text-[#1a2744]/80 leading-relaxed">
            When you click an affiliate link on our Site, the respective affiliate network may place a cookie on your browser to track the referral. These cookies have varying durations: Amazon Associates uses a 24-hour cookie (or 90 days if the item is added to cart), ShareASale uses cookies ranging from 30 to 120 days depending on the merchant, ClickBank typically uses a 60-day cookie, and Shopify (via Impact) uses a 30-day cookie. These cookies are used solely to ensure we receive proper credit for the referral and do not collect any additional personal information beyond what is necessary for tracking.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-montserrat)] mb-3">Contact</h2>
          <p className="text-[#1a2744]/80 leading-relaxed">
            If you have any questions about our affiliate relationships or this disclosure, please contact us at: Joel Ssengendo, Email: joelssengendo1204@gmail.com, Website: affilliate-eta.vercel.app.
          </p>
        </section>
      </article>
    </div>
  );
}
