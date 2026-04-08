import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intermittent Fasting and Your Gut: What the Research Shows",
  description:
    "How intermittent fasting combined with protein pacing reshapes your gut microbiome, improves bacterial diversity, and strengthens immune function.",
  keywords: [
    "gut microbiome fasting",
    "intermittent fasting gut health",
    "gut bacteria diversity",
    "fasting microbiome",
    "gut health diet",
    "IF-P gut bacteria",
    "digestive health fasting",
  ],
  alternates: {
    canonical: "https://pacefast.app/blog/gut-microbiome-fasting",
  },
  openGraph: {
    title: "Intermittent Fasting and Your Gut: What the Research Shows",
    description:
      "How intermittent fasting combined with protein pacing reshapes your gut microbiome, improves bacterial diversity, and strengthens immune function.",
    url: "https://pacefast.app/blog/gut-microbiome-fasting",
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    authors: ["PaceFast"],
    tags: [
      "gut microbiome",
      "intermittent fasting",
      "gut health",
      "protein pacing",
      "digestive health",
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
            headline: "Intermittent Fasting and Your Gut: What the Research Shows",
            description:
              "How intermittent fasting combined with protein pacing reshapes your gut microbiome, improves bacterial diversity, and strengthens immune function.",
            url: "https://pacefast.app/blog/gut-microbiome-fasting",
            datePublished: "2026-03-15T00:00:00Z",
            publisher: {
              "@type": "Organization",
              name: "PaceFast",
              url: "https://pacefast.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://pacefast.app/blog/gut-microbiome-fasting",
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
          Gut Health
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          Intermittent Fasting and Your Gut: What the Research Shows
        </h1>
        <p className="mt-4 text-text-secondary">April 2026</p>

        <div className="mt-10 space-y-6 text-text-primary leading-relaxed">
          <p>
            Your gut microbiome &mdash; the trillions of bacteria living in
            your digestive tract &mdash; influences far more than digestion.
            It shapes your immune system, produces neurotransmitters that
            affect mood, regulates inflammation, and plays a direct role in
            how you store and burn fat. And it turns out that <em>when</em>{" "}
            you eat matters as much as <em>what</em> you eat.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The diversity principle
          </h2>
          <p>
            Microbiome health is largely measured by diversity &mdash; the
            number of different bacterial species present and the balance
            between them. Higher diversity is consistently associated with
            better metabolic health, stronger immune function, lower
            inflammation, and reduced risk of obesity and autoimmune
            conditions.
          </p>
          <p>
            Modern Western diets, irregular eating patterns, and chronic
            stress all tend to reduce microbiome diversity. The result is a
            gut dominated by a few species, often the ones that thrive on
            sugar and refined carbohydrates.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How fasting reshapes the microbiome
          </h2>
          <p>
            Fasting introduces a cyclical pattern that the gut microbiome
            responds to powerfully:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Rest and repair:</strong> During fasting periods, the
              gut lining undergoes repair processes that are inhibited during
              constant digestion. The intestinal barrier strengthens, reducing
              &ldquo;leaky gut&rdquo; permeability that allows inflammatory
              compounds into the bloodstream.
            </li>
            <li>
              <strong>Microbial cycling:</strong> Different bacterial species
              thrive during fed and fasted states. The alternation between
              these states promotes diversity by preventing any single species
              from dominating permanently.
            </li>
            <li>
              <strong>Short-chain fatty acid production:</strong> Fasting
              promotes the growth of bacteria that produce butyrate and other
              short-chain fatty acids &mdash; compounds that nourish the gut
              lining, reduce inflammation, and improve insulin sensitivity.
            </li>
            <li>
              <strong>Migrating motor complex:</strong> The gut&rsquo;s
              &ldquo;cleaning wave&rdquo; &mdash; a rhythmic contraction that
              sweeps debris through the intestines &mdash; only activates
              during fasting. Constant snacking suppresses this essential
              housekeeping function.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The IF-P clinical evidence
          </h2>
          <p>
            The 2023 <em>Obesity</em> trial specifically measured gut
            microbiome changes in IF-P participants. The results showed
            significant increases in bacterial diversity compared to the
            standard caloric restriction group. Participants showed enrichment
            of beneficial species associated with lean body composition and
            metabolic health.
          </p>
          <p>
            This finding is particularly notable because gut microbiome
            composition is increasingly recognised as both a cause and
            consequence of obesity. By improving the microbiome, IF-P may
            create a positive feedback loop: a healthier gut makes it easier
            to maintain a healthy weight, which in turn supports microbiome
            diversity.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The protein pacing contribution
          </h2>
          <p>
            Protein pacing adds another dimension to gut health. The quality
            and distribution of protein intake influences which bacterial
            species flourish. Spreading protein across 4 meals rather than
            concentrating it in one large serving creates a more consistent
            nutrient environment for beneficial bacteria.
          </p>
          <p>
            The 35/35/30 macro ratio used in IF-P also ensures adequate fibre
            from the carbohydrate portion (35% of calories from whole grains,
            vegetables, and legumes), which serves as prebiotic fuel for
            beneficial gut bacteria.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Practical takeaways
          </h2>
          <p>
            The gut microbiome benefits of IF-P build gradually over weeks.
            Some people experience temporary digestive adjustment in the first
            few days of a new fasting protocol &mdash; this is normal and
            typically resolves as the microbiome adapts. Staying hydrated
            during fasting periods is particularly important for digestive
            health.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="font-semibold text-text-primary">
            Feed your gut the right way
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            PaceFast times your meals for optimal digestion and microbiome
            health.
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
