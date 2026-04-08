import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How IF-P Improves Cholesterol, Triglycerides, and Heart Health",
  description:
    "Intermittent fasting with protein pacing improves cholesterol ratios and reduces triglycerides. The cardiovascular benefits of the IF-P protocol.",
  keywords: [
    "cholesterol intermittent fasting",
    "triglycerides fasting",
    "lipid profile diet",
    "heart health fasting",
    "HDL LDL fasting",
    "cardiovascular health IF-P",
    "cholesterol improvement diet",
  ],
};

export default function Article() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
      >
        &larr; Back to all articles
      </Link>

      <article className="mt-8">
        <span className="inline-block rounded-full text-xs font-medium text-text-secondary uppercase tracking-wider">
          Heart Health
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          How IF-P Improves Cholesterol, Triglycerides, and Heart Health
        </h1>
        <p className="mt-4 text-text-secondary">April 2026</p>

        <div className="mt-10 space-y-6 text-text-primary leading-relaxed">
          <p>
            Your lipid profile &mdash; the balance of cholesterol subtypes
            and triglycerides in your blood &mdash; is one of the most
            important modifiable risk factors for cardiovascular disease. And
            while many people associate dietary fat with bad cholesterol, the
            reality is more nuanced: <em>when</em> and <em>how</em> you eat
            matters as much as <em>what</em> you eat.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Understanding your lipid panel
          </h2>
          <p>
            A standard lipid panel measures four key numbers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Total cholesterol:</strong> The sum of all cholesterol
              in your blood. Less useful than the individual components below.
            </li>
            <li>
              <strong>LDL cholesterol (&ldquo;bad&rdquo;):</strong> Carries
              cholesterol to artery walls where it can form plaques. Lower
              is generally better, though particle size matters more than
              total LDL in modern cardiology.
            </li>
            <li>
              <strong>HDL cholesterol (&ldquo;good&rdquo;):</strong> Carries
              cholesterol away from artery walls back to the liver for
              disposal. Higher is better. HDL above 60 mg/dL is considered
              protective.
            </li>
            <li>
              <strong>Triglycerides:</strong> Fat molecules circulating in
              the blood. Elevated triglycerides (above 150 mg/dL) are an
              independent risk factor for heart disease and are strongly
              associated with insulin resistance.
            </li>
          </ul>
          <p>
            The most important number is often the triglyceride-to-HDL
            ratio. A ratio below 2 is considered excellent; above 4
            indicates significant cardiovascular risk.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            How fasting improves lipid profiles
          </h2>
          <p>
            Fasting improves your lipid profile through multiple pathways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Triglyceride reduction:</strong> During fasting, your
              body burns circulating triglycerides for energy. Regular
              fasting cycles lower baseline triglyceride levels. Additionally,
              improved insulin sensitivity (a hallmark of IF) reduces the
              liver&rsquo;s production of VLDL particles, which carry
              triglycerides into the bloodstream.
            </li>
            <li>
              <strong>HDL increase:</strong> Fasting promotes the production
              and maturation of HDL particles. Weight loss, particularly
              visceral fat loss, is one of the most reliable ways to raise
              HDL &mdash; and IF-P excels at visceral fat reduction.
            </li>
            <li>
              <strong>LDL particle shift:</strong> While total LDL may not
              change dramatically, fasting tends to shift the distribution
              toward larger, buoyant LDL particles (pattern A) and away
              from small, dense LDL particles (pattern B). Small dense LDL
              is far more atherogenic &mdash; it penetrates artery walls
              more easily and is more susceptible to oxidation.
            </li>
            <li>
              <strong>Reduced oxidative stress:</strong> Fasting reduces
              oxidative stress markers, which means less oxidation of LDL
              particles. Oxidised LDL is the form that actually initiates
              plaque formation in arteries.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The protein pacing effect
          </h2>
          <p>
            The 35/35/30 macro ratio used in IF-P is well-suited for lipid
            health. At 30% fat, the diet isn&rsquo;t low-fat (which can
            paradoxically raise triglycerides via carbohydrate excess) or
            high-fat (which can elevate LDL in some individuals). The
            moderate fat intake, combined with high protein and balanced
            carbohydrates, creates an optimal metabolic environment for
            lipid processing.
          </p>
          <p>
            Protein itself has a neutral to slightly positive effect on
            lipid profiles. It doesn&rsquo;t spike insulin the way refined
            carbohydrates do (insulin drives triglyceride production), and
            the thermic effect of protein means more dietary calories are
            burned during digestion rather than stored.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The clinical evidence
          </h2>
          <p>
            PRISE protocol studies have consistently demonstrated improved
            lipid profiles in IF-P groups. The improvements extend beyond
            what can be explained by weight loss alone &mdash; the caloric
            restriction comparison groups in these studies lost weight but
            showed smaller lipid improvements, despite the same total calorie
            deficit.
          </p>
          <p>
            This suggests that meal timing and macro distribution are
            independent variables in cardiovascular risk &mdash; a finding
            with significant implications for dietary guidelines that have
            traditionally focused exclusively on total intake.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Monitoring your progress
          </h2>
          <p>
            If you have a recent lipid panel, consider getting a follow-up
            test after 8&ndash;12 weeks of IF-P. The triglyceride-to-HDL
            ratio is the easiest number to track and tends to improve
            earliest. Your GP can order a standard lipid panel, or many
            pharmacies now offer at-home testing kits.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="font-semibold text-text-primary">
            Improve your heart health with every meal
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            PaceFast&rsquo;s 35/35/30 meals are optimised for
            cardiovascular health alongside body composition.
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
