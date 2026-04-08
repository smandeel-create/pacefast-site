import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Intermittent Fasting Targets Visceral Fat",
  description:
    "Clinical trials show IF combined with protein pacing reduces visceral fat by 33% in 8 weeks. Learn the mechanisms behind visceral fat loss through fasting.",
  keywords: [
    "visceral fat",
    "intermittent fasting visceral fat",
    "belly fat loss",
    "visceral adipose tissue",
    "IF-P fat loss",
    "fasting fat burning",
    "metabolic health",
  ],
  alternates: {
    canonical: "https://pacefast.app/blog/intermittent-fasting-visceral-fat",
  },
  openGraph: {
    title: "How Intermittent Fasting Targets Visceral Fat",
    description:
      "Clinical trials show IF combined with protein pacing reduces visceral fat by 33% in 8 weeks. Learn the mechanisms behind visceral fat loss through fasting.",
    url: "https://pacefast.app/blog/intermittent-fasting-visceral-fat",
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    authors: ["PaceFast"],
    tags: [
      "visceral fat",
      "intermittent fasting",
      "belly fat loss",
      "fat loss",
      "protein pacing",
    ],
  },
};

export default function Article() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How Intermittent Fasting Targets Visceral Fat",
            description:
              "Clinical trials show IF combined with protein pacing reduces visceral fat by 33% in 8 weeks. Learn the mechanisms behind visceral fat loss through fasting.",
            url: "https://pacefast.app/blog/intermittent-fasting-visceral-fat",
            datePublished: "2026-03-15T00:00:00Z",
            publisher: {
              "@type": "Organization",
              name: "PaceFast",
              url: "https://pacefast.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://pacefast.app/blog/intermittent-fasting-visceral-fat",
            },
          }),
        }}
      />
      <Link
        href="/blog"
        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        &larr; Back to all articles
      </Link>

      <article className="mt-8">
        <span className="inline-block rounded-full text-xs font-medium text-text-secondary uppercase tracking-wider">
          Fat Loss
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          How Intermittent Fasting Targets Visceral Fat
        </h1>
        <p className="mt-4 text-text-secondary">April 2026</p>

        <div className="mt-10 space-y-6 text-text-primary leading-relaxed">
          <p>
            Not all body fat is created equal. Subcutaneous fat &mdash; the
            kind you can pinch &mdash; is relatively benign. Visceral fat,
            which wraps around your internal organs in the abdominal cavity, is
            a different story entirely.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Why visceral fat is dangerous
          </h2>
          <p>
            Visceral adipose tissue (VAT) is metabolically active. It secretes
            inflammatory cytokines (IL-6, TNF-&alpha;), disrupts insulin
            signalling, and is strongly associated with type 2 diabetes,
            cardiovascular disease, non-alcoholic fatty liver disease, and
            certain cancers. You can have a normal BMI and still carry
            dangerous levels of visceral fat.
          </p>
          <p>
            The frustrating reality is that visceral fat is often the last to
            go with standard dieting. Many people lose subcutaneous fat and
            see changes in their arms and legs while the midsection remains
            stubbornly unchanged.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The IF-P advantage: 33% reduction in 8 weeks
          </h2>
          <p>
            In the 2023 <em>Obesity</em> trial led by Dr. Paul Arciero,
            participants following intermittent fasting combined with protein
            pacing (IF-P) achieved a 33% reduction in visceral adipose tissue
            over just 8 weeks. This was roughly double the visceral fat loss
            seen in the standard caloric restriction group, despite consuming
            the same total calories.
          </p>
          <p>
            This preferential targeting of visceral fat is one of the most
            clinically significant findings in the IF-P literature.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How fasting triggers visceral fat loss
          </h2>
          <p>
            Several mechanisms converge during fasting to preferentially
            mobilise visceral fat stores:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Insulin suppression:</strong> Fasting lowers insulin
              levels, which unlocks fat cells for lipolysis (fat breakdown).
              Visceral fat cells are particularly insulin-sensitive, meaning
              they respond more dramatically to insulin drops than subcutaneous
              fat.
            </li>
            <li>
              <strong>Catecholamine sensitivity:</strong> Visceral fat tissue
              has a higher density of beta-adrenergic receptors, making it more
              responsive to the norepinephrine surge that occurs during
              extended fasting periods.
            </li>
            <li>
              <strong>Growth hormone elevation:</strong> Fasting increases
              growth hormone secretion by up to 5&times;, which promotes fat
              oxidation while sparing lean tissue. Growth hormone
              preferentially targets visceral fat stores.
            </li>
            <li>
              <strong>Autophagy:</strong> Extended fasting activates cellular
              cleanup processes that are particularly active in metabolically
              dysfunctional visceral fat tissue.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Why protein pacing amplifies the effect
          </h2>
          <p>
            Protein pacing adds a critical layer: by ensuring high-quality
            protein intake at every meal (35% of calories), it maintains
            muscle mass during the caloric deficit. This matters because
            muscle tissue is metabolically active &mdash; it burns calories at
            rest. Standard diets that sacrifice muscle for weight loss
            actually lower your resting metabolic rate, making future fat loss
            harder.
          </p>
          <p>
            The IF-P combination creates an ideal metabolic environment: fasting
            periods mobilise visceral fat, while protein-paced eating windows
            protect and build lean tissue that keeps your metabolism high.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Measuring visceral fat loss
          </h2>
          <p>
            Visceral fat isn&rsquo;t easy to measure at home &mdash; you
            can&rsquo;t see it in the mirror or track it with a scale. Clinical
            studies use DEXA scans or MRI. For practical tracking, waist
            circumference is the best proxy: a reduction in waist measurement
            disproportionate to overall weight loss typically indicates visceral
            fat reduction.
          </p>
          <p>
            PaceFast&rsquo;s health dashboard tracks weight, BMI, body fat
            percentage, and VO2 max over time, with fasting days overlaid on
            all graphs so you can see the correlation between your fasting
            consistency and your body composition changes.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="font-semibold text-text-primary">
            Target visceral fat with science-backed protocols
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            PaceFast combines fasting schedules with protein-paced meals for
            maximum fat loss.
          </p>
          <a
            href="/#signup"
            className="mt-4 inline-block rounded-full bg-[#2c2b25] px-6 py-2.5 text-sm font-semibold text-[#faf9f6] transition-all hover:bg-[#5e5b4e]"
          >
            Join the Waitlist
          </a>
        </div>
      </article>
    </main>
  );
}
