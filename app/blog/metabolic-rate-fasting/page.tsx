import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why IF-P Preserves Your Metabolic Rate While Standard Diets Tank It",
  description:
    "Standard calorie restriction slows your metabolism. IF-P maintains resting metabolic rate through muscle preservation and hormonal optimisation.",
  keywords: [
    "metabolic rate fasting",
    "metabolism intermittent fasting",
    "resting metabolic rate diet",
    "yo-yo dieting metabolism",
    "metabolic adaptation",
    "IF-P metabolism",
    "starvation mode myth",
  ],
  alternates: {
    canonical: "https://pacefast.app/blog/metabolic-rate-fasting",
  },
  openGraph: {
    title: "Why IF-P Preserves Your Metabolic Rate While Standard Diets Tank It",
    description:
      "Standard calorie restriction slows your metabolism. IF-P maintains resting metabolic rate through muscle preservation and hormonal optimisation.",
    url: "https://pacefast.app/blog/metabolic-rate-fasting",
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    authors: ["PaceFast"],
    tags: [
      "metabolic rate",
      "intermittent fasting",
      "metabolism",
      "protein pacing",
      "yo-yo dieting",
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
            headline: "Why IF-P Preserves Your Metabolic Rate While Standard Diets Tank It",
            description:
              "Standard calorie restriction slows your metabolism. IF-P maintains resting metabolic rate through muscle preservation and hormonal optimisation.",
            url: "https://pacefast.app/blog/metabolic-rate-fasting",
            datePublished: "2026-03-15T00:00:00Z",
            publisher: {
              "@type": "Organization",
              name: "PaceFast",
              url: "https://pacefast.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://pacefast.app/blog/metabolic-rate-fasting",
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
          Metabolism
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          Why IF-P Preserves Your Metabolic Rate While Standard Diets Tank It
        </h1>
        <p className="mt-4 text-text-secondary">April 2026</p>

        <div className="mt-10 space-y-6 text-text-primary leading-relaxed">
          <p>
            One of the cruelest ironies of dieting is that the more weight
            you lose, the harder your body fights to gain it back. This
            metabolic adaptation &mdash; sometimes called &ldquo;starvation
            mode&rdquo; &mdash; is the primary reason that over 80% of
            people who lose weight regain it within two years. IF-P appears
            to sidestep this trap.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            What is metabolic adaptation?
          </h2>
          <p>
            When you eat fewer calories than you burn, your body doesn&rsquo;t
            simply deplete its fat stores and carry on. It actively fights
            back through a process called adaptive thermogenesis. Your
            resting metabolic rate (RMR) &mdash; the calories you burn just
            existing &mdash; drops by more than the amount explained by
            weight loss alone.
          </p>
          <p>
            This was dramatically illustrated by the famous{" "}
            <em>Biggest Loser</em> study published in <em>Obesity</em>{" "}
            (2016), which found that contestants&rsquo; metabolisms had
            slowed by an average of 500 calories per day six years after
            the show &mdash; far beyond what their weight change would
            predict. Their bodies were burning 500 fewer calories daily
            than people of the same size who had never dieted.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Why standard diets slow your metabolism
          </h2>
          <p>
            Three factors drive metabolic adaptation during standard caloric
            restriction:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Muscle loss:</strong> Standard diets typically lose
              25&ndash;30% of weight as lean mass. Each kilogram of muscle
              burns roughly 13 calories per day at rest. Lose 5 kg of
              muscle and your resting metabolism drops by 65 calories daily
              &mdash; compounding to nearly 3 kg of potential fat regain
              per year.
            </li>
            <li>
              <strong>Thyroid downregulation:</strong> Prolonged caloric
              deficit reduces T3 (active thyroid hormone) levels, directly
              slowing metabolic rate. This is your body&rsquo;s
              energy-conservation response to perceived food scarcity.
            </li>
            <li>
              <strong>Leptin collapse:</strong> As you lose fat, leptin
              levels drop, signalling your brain that energy stores are
              dangerously low. The brain responds by reducing energy
              expenditure and increasing hunger &mdash; a double hit that
              makes regain almost inevitable.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How IF-P protects your metabolism
          </h2>
          <p>
            IF-P addresses each of these mechanisms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Muscle preservation through protein pacing:</strong>{" "}
              By triggering muscle protein synthesis 4 times per day, IF-P
              maintains (and even slightly increases) lean mass during
              weight loss. The metabolic engine stays intact. The 2023{" "}
              <em>Obesity</em> trial showed +6% fat-free mass in the IF-P
              group vs. lean mass <em>loss</em> in the caloric restriction
              group.
            </li>
            <li>
              <strong>Growth hormone preservation:</strong> Fasting
              increases growth hormone secretion by up to 5&times;. Growth
              hormone is powerfully anti-catabolic and supports metabolic
              rate. Standard continuous caloric restriction suppresses
              growth hormone.
            </li>
            <li>
              <strong>Cyclical feeding pattern:</strong> Unlike continuous
              restriction (eating slightly less every day), IF-P alternates
              between feeding and fasting. During eating windows, calorie
              intake is relatively normal for those meals. This cyclical
              pattern appears to prevent the sustained caloric deficit
              signal that triggers thyroid downregulation and leptin
              collapse.
            </li>
            <li>
              <strong>Thermic effect of protein:</strong> Protein has a
              thermic effect of 20&ndash;30% &mdash; your body burns
              20&ndash;30% of protein calories just digesting it. At 35%
              of total intake, this adds up: roughly 70&ndash;100 extra
              calories burned per day through digestion alone, compared to
              a standard 15% protein diet.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Breaking the yo-yo cycle
          </h2>
          <p>
            The reason yo-yo dieting happens is straightforward: you lose
            weight (including muscle), your metabolism slows, you return to
            normal eating, and you regain the weight &mdash; but as fat,
            not muscle. Now you&rsquo;re the same weight with less muscle
            and a slower metabolism. Each cycle makes the next one harder.
          </p>
          <p>
            IF-P breaks this cycle at its root by preserving lean mass.
            When you eventually transition from a deficit to maintenance
            calories, your metabolic rate is still intact. Your body
            doesn&rsquo;t have the caloric &ldquo;gap&rdquo; that drives
            regain.
          </p>
          <p>
            This is arguably IF-P&rsquo;s most important long-term
            advantage. The 8-week trial results are impressive, but the
            real win is what happens in year two and year three &mdash;
            when standard dieters have typically regained everything, but
            IF-P adherents have maintained their results because their
            metabolic infrastructure was never compromised.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="font-semibold text-text-primary">
            Lose weight without losing your metabolism
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            PaceFast protects your metabolic rate with science-backed
            protein pacing.
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
