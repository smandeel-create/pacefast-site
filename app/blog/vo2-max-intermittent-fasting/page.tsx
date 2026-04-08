import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Intermittent Fasting Improves VO2 Max and Cardiorespiratory Fitness",
  description:
    "IF-P participants showed significant VO2 max improvements without changing their exercise routine. The science behind fasting and cardiorespiratory fitness.",
  keywords: [
    "VO2 max intermittent fasting",
    "cardiorespiratory fitness fasting",
    "VO2 max improvement",
    "fasting aerobic capacity",
    "IF-P VO2 max",
    "oxygen efficiency fasting",
  ],
  alternates: {
    canonical: "https://pacefast.app/blog/vo2-max-intermittent-fasting",
  },
  openGraph: {
    title: "How Intermittent Fasting Improves VO2 Max and Cardiorespiratory Fitness",
    description:
      "IF-P participants showed significant VO2 max improvements without changing their exercise routine. The science behind fasting and cardiorespiratory fitness.",
    url: "https://pacefast.app/blog/vo2-max-intermittent-fasting",
    type: "article",
    publishedTime: "2026-03-15T00:00:00Z",
    authors: ["PaceFast"],
    tags: [
      "VO2 max",
      "intermittent fasting",
      "fitness",
      "cardiorespiratory",
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
            headline: "How Intermittent Fasting Improves VO2 Max and Cardiorespiratory Fitness",
            description:
              "IF-P participants showed significant VO2 max improvements without changing their exercise routine. The science behind fasting and cardiorespiratory fitness.",
            url: "https://pacefast.app/blog/vo2-max-intermittent-fasting",
            datePublished: "2026-03-15T00:00:00Z",
            publisher: {
              "@type": "Organization",
              name: "PaceFast",
              url: "https://pacefast.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://pacefast.app/blog/vo2-max-intermittent-fasting",
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
          Fitness
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          How Intermittent Fasting Improves VO2 Max and Cardiorespiratory Fitness
        </h1>
        <p className="mt-4 text-text-secondary">April 2026</p>

        <div className="mt-10 space-y-6 text-text-primary leading-relaxed">
          <p>
            VO2 max &mdash; the maximum rate at which your body can consume
            oxygen during exercise &mdash; is one of the strongest predictors
            of longevity and overall health. It declines roughly 10% per
            decade after age 30, and improving it is notoriously difficult
            without dedicated aerobic training. Yet IF-P participants showed
            measurable improvements without changing their exercise routine.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            What VO2 max actually measures
          </h2>
          <p>
            VO2 max reflects your cardiovascular system&rsquo;s total
            capacity: how efficiently your heart pumps blood, your lungs
            exchange gases, and your muscles extract oxygen from the
            bloodstream. It&rsquo;s measured in millilitres of oxygen per
            kilogram of body weight per minute (ml/kg/min).
          </p>
          <p>
            A higher VO2 max means better endurance, faster recovery, and
            lower all-cause mortality risk. A 2022 meta-analysis in the{" "}
            <em>British Journal of Sports Medicine</em> found that each
            3.5 ml/kg/min increase in VO2 max was associated with a 13%
            reduction in all-cause mortality. It&rsquo;s arguably the single
            most important fitness metric.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How IF-P improves VO2 max
          </h2>
          <p>
            The VO2 max improvements seen in IF-P studies likely result from
            several converging mechanisms:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Reduced body weight:</strong> VO2 max is expressed
              relative to body weight (ml/kg/min). When you lose fat while
              preserving lean mass &mdash; as IF-P achieves &mdash; the
              denominator shrinks while the numerator stays stable or
              improves, automatically increasing your relative VO2 max.
            </li>
            <li>
              <strong>Improved mitochondrial efficiency:</strong> Fasting
              activates AMPK (adenosine monophosphate-activated protein
              kinase), a cellular energy sensor that triggers mitochondrial
              biogenesis &mdash; the creation of new mitochondria. More
              mitochondria means better oxygen utilisation at the cellular
              level.
            </li>
            <li>
              <strong>Reduced inflammation:</strong> Chronic inflammation
              impairs vascular function and oxygen delivery. The
              anti-inflammatory effects of IF-P (reduced CRP, IL-6,
              TNF-&alpha;) improve blood vessel health and oxygen transport.
            </li>
            <li>
              <strong>Enhanced fat oxidation:</strong> Fasting-adapted muscles
              become more metabolically flexible &mdash; better at switching
              between carbohydrate and fat as fuel sources. This metabolic
              flexibility is a hallmark of high aerobic fitness.
            </li>
            <li>
              <strong>Reduced visceral fat load:</strong> Visceral fat
              compresses the diaphragm and restricts lung capacity. A 33%
              reduction in visceral fat directly improves respiratory
              mechanics.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The clinical evidence
          </h2>
          <p>
            Dr. Arciero&rsquo;s PRISE protocol studies have consistently
            shown improvements in cardiorespiratory fitness markers. The full
            PRISE protocol includes endurance exercise as one of its five
            pillars, but the nutritional intervention alone (IF combined with
            protein pacing) has demonstrated VO2 max benefits independent of
            exercise changes.
          </p>
          <p>
            This is particularly significant for people who are already
            exercising regularly. Adding IF-P to an existing exercise routine
            appears to amplify fitness gains beyond what exercise alone
            achieves &mdash; essentially getting more benefit from the same
            workouts.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Practical implications
          </h2>
          <p>
            If you wear an Apple Watch or fitness tracker that estimates VO2
            max, you can track this metric over time as you follow an IF-P
            protocol. PaceFast integrates with HealthKit to display your VO2
            max trend alongside your fasting history, so you can see the
            correlation directly.
          </p>
          <p>
            The improvements tend to become visible after 4&ndash;6 weeks of
            consistent IF-P adherence, compounding over months as body
            composition improves and metabolic adaptations deepen.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="font-semibold text-text-primary">
            Track your VO2 max alongside your fasting
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            PaceFast syncs with HealthKit to show how fasting improves your
            fitness over time.
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
