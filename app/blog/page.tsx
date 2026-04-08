import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Science & Blog",
  description:
    "Evidence-based articles on intermittent fasting, protein pacing, body recomposition, and the PRISE protocol. Backed by peer-reviewed research.",
  keywords: [
    "intermittent fasting research",
    "protein pacing articles",
    "IF-P science",
    "fasting blog",
    "body recomposition research",
    "PRISE protocol studies",
  ],
  alternates: {
    canonical: "https://pacefast.app/blog",
  },
  openGraph: {
    title: "Science & Blog — PaceFast",
    description:
      "Evidence-based articles on intermittent fasting, protein pacing, body recomposition, and the PRISE protocol.",
    url: "https://pacefast.app/blog",
    type: "website",
  },
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  date: string;
}

const articles: Article[] = [
  {
    slug: "what-is-protein-pacing",
    title: "What Is Protein Pacing? The Science Behind 4 Meals a Day",
    excerpt:
      "Why meal timing matters as much as total intake, and how spacing protein across 4 meals maximises muscle protein synthesis throughout the day.",
    tag: "Fundamentals",
    date: "April 2026",
  },
  {
    slug: "intermittent-fasting-visceral-fat",
    title: "How Intermittent Fasting Targets Visceral Fat",
    excerpt:
      "A 33% reduction in visceral fat in just 8 weeks. The mechanisms behind how IF triggers lipolysis in the most dangerous fat deposits.",
    tag: "Fat Loss",
    date: "April 2026",
  },
  {
    slug: "if-p-muscle-retention",
    title: "Losing Fat Without Losing Muscle: The IF-P Advantage",
    excerpt:
      "Standard diets lose 25-30% of weight as lean mass. IF-P participants actually gained 6% fat-free mass while losing weight. Here's how.",
    tag: "Body Recomp",
    date: "April 2026",
  },
  {
    slug: "gut-microbiome-fasting",
    title: "Intermittent Fasting and Your Gut: What the Research Shows",
    excerpt:
      "How fasting cycles reshape your gut microbiome, improve bacterial diversity, and strengthen immune function from the inside out.",
    tag: "Gut Health",
    date: "April 2026",
  },
  {
    slug: "insulin-sensitivity-if-p",
    title: "How IF-P Improves Insulin Sensitivity and Blood Sugar Control",
    excerpt:
      "Better glucose regulation, improved insulin response, and smarter nutrient partitioning. The metabolic benefits of combining fasting with protein pacing.",
    tag: "Metabolic Health",
    date: "April 2026",
  },
  {
    slug: "vo2-max-intermittent-fasting",
    title: "How Intermittent Fasting Improves VO2 Max and Cardiorespiratory Fitness",
    excerpt:
      "IF-P participants showed significant VO2 max improvements without changing their exercise routine. The science behind fasting and cardiorespiratory fitness.",
    tag: "Fitness",
    date: "April 2026",
  },
  {
    slug: "anti-inflammatory-fasting",
    title: "The Anti-Inflammatory Effects of Intermittent Fasting and Protein Pacing",
    excerpt:
      "IF-P reduces CRP, IL-6, and TNF-α. How fasting and protein pacing combat the chronic inflammation linked to aging, joint pain, and disease.",
    tag: "Inflammation",
    date: "April 2026",
  },
  {
    slug: "reduced-hunger-protein-pacing",
    title: "Why You Feel Less Hungry on IF-P Than Standard Diets",
    excerpt:
      "IF-P participants report significantly less hunger than standard calorie restriction. How protein pacing and fasting regulate appetite hormones.",
    tag: "Appetite",
    date: "April 2026",
  },
  {
    slug: "lipid-profile-if-p",
    title: "How IF-P Improves Cholesterol, Triglycerides, and Heart Health",
    excerpt:
      "Improved cholesterol ratios, reduced triglycerides, and better cardiovascular risk markers. The heart health benefits of the IF-P protocol.",
    tag: "Heart Health",
    date: "April 2026",
  },
  {
    slug: "metabolic-rate-fasting",
    title: "Why IF-P Preserves Your Metabolic Rate While Standard Diets Tank It",
    excerpt:
      "Standard calorie restriction slows your metabolism. IF-P maintains resting metabolic rate through muscle preservation and hormonal optimisation.",
    tag: "Metabolism",
    date: "April 2026",
  },
];

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
        Science &amp; Blog
      </h1>
      <p className="mt-4 text-text-secondary max-w-2xl">
        Evidence-based articles on intermittent fasting, protein pacing, and
        body recomposition. Every claim is backed by peer-reviewed research.
      </p>

      <div className="mt-12 space-y-8">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="group block rounded-2xl border border-border bg-surface p-6 transition-all hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block rounded-full text-xs font-medium text-text-secondary uppercase tracking-wider">
                {a.tag}
              </span>
              <span className="text-xs text-text-secondary">{a.date}</span>
            </div>
            <h2 className="text-xl font-semibold text-text-primary group-hover:text-[#5e5b4e] transition-colors">
              {a.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {a.excerpt}
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#5e5b4e]">
              Read more &rarr;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
