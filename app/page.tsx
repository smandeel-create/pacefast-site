import Link from "next/link";

/* colour accent bars for benefit cards - matching Skilljar style */
const accentColors: Record<string, string> = {
  teal: "bg-accent-teal",
  blue: "bg-accent-blue",
  purple: "bg-accent-purple",
  pink: "bg-accent-pink",
  amber: "bg-[#d4941e]",
};

/* ── Stat badge ── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-serif text-3xl md:text-4xl font-medium text-text-primary tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-text-secondary">{label}</p>
    </div>
  );
}

/* ── Benefit card ── */
function Benefit({
  title,
  text,
  href,
  accent,
}: {
  title: string;
  text: string;
  href: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl bg-white p-6 transition-all duration-200 hover:bg-surface"
    >
      <div className={`h-1.5 w-12 rounded-full ${accent} mb-5`} />
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">{text}</p>
      <span className="mt-4 inline-block text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
        Read the science &rarr;
      </span>
    </Link>
  );
}

/* ── How-it-works step ── */
function Step({
  num,
  title,
  text,
}: {
  num: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-text-primary font-semibold text-sm">
        {num}
      </div>
      <div>
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <p className="mt-1 text-[15px] text-text-secondary leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ── Blog preview card ── */
function BlogCard({
  href,
  title,
  excerpt,
  tag,
  accent,
}: {
  href: string;
  title: string;
  excerpt: string;
  tag: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl bg-white p-6 transition-all duration-200 hover:bg-surface"
    >
      <div className={`h-1.5 w-8 rounded-full ${accent} mb-4`} />
      <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
        {tag}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-text-primary group-hover:text-primary-hover transition-colors leading-snug">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {excerpt}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
        Read more &rarr;
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
          <div className="inline-block rounded-lg bg-white px-4 py-1.5 text-sm text-text-secondary mb-8">
            Coming soon to the App Store
          </div>
          <h1 className="font-serif text-4xl md:text-[54px] font-medium text-text-primary leading-[1.15] tracking-tight">
            Know when to eat.
            <br />
            Know what to eat.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            PaceFast is the first app combining intermittent fasting with
            protein-paced meal planning. 4 meals, perfect macros, one app.
            Backed by peer-reviewed science.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#signup"
              className="rounded-lg bg-primary px-8 py-3.5 text-base font-medium text-[#faf9f6] transition-all hover:bg-primary-hover"
            >
              Get Early Access
            </a>
            <Link
              href="/blog/what-is-protein-pacing"
              className="rounded-lg bg-white px-8 py-3.5 text-base font-medium text-text-primary transition-all hover:bg-surface"
            >
              Learn the Science
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1200px] px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="9%" label="Weight loss in 8 weeks" />
          <Stat value="33%" label="Visceral fat reduction" />
          <Stat value="+6%" label="Fat-free mass increase" />
          <Stat value="35/35/30" label="Optimised macro ratio" />
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-[40px] font-medium text-text-primary tracking-tight">
            Why IF + Protein Pacing Works
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            An 8-week clinical trial published in <em>Obesity</em> (2023)
            showed that combining intermittent fasting with protein pacing
            outperformed standard caloric restriction on every metric.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Benefit
            title="Visceral Fat Loss"
            text="33% reduction in visceral fat — the dangerous fat surrounding your organs linked to heart disease, type 2 diabetes, and metabolic syndrome."
            href="/blog/intermittent-fasting-visceral-fat"
            accent="bg-accent-teal"
          />
          <Benefit
            title="Muscle Retention"
            text="6% increase in fat-free mass during weight loss. Protein pacing triggers muscle protein synthesis 4 times per day, protecting lean tissue."
            href="/blog/if-p-muscle-retention"
            accent="bg-accent-blue"
          />
          <Benefit
            title="Improved VO2 Max"
            text="Significant improvements in cardiorespiratory fitness, even without changes to exercise routine. Better oxygen efficiency across all activities."
            href="/blog/vo2-max-intermittent-fasting"
            accent="bg-accent-purple"
          />
          <Benefit
            title="Anti-Inflammatory"
            text="Reduced inflammatory markers (CRP, IL-6, TNF-α). Chronic inflammation drives aging, joint pain, and disease — IF-P helps reverse it."
            href="/blog/anti-inflammatory-fasting"
            accent="bg-accent-pink"
          />
          <Benefit
            title="Gut Microbiome"
            text="Increased gut bacteria diversity. A healthier microbiome improves nutrient absorption, immune function, and even mood regulation."
            href="/blog/gut-microbiome-fasting"
            accent="bg-accent-teal"
          />
          <Benefit
            title="Less Hunger"
            text="Participants reported significantly less hunger vs. standard calorie restriction. Protein pacing stabilises blood sugar and keeps you fuller, longer."
            href="/blog/reduced-hunger-protein-pacing"
            accent="bg-accent-blue"
          />
          <Benefit
            title="Better Lipid Profile"
            text="Improved cholesterol ratios and reduced triglycerides. Your cardiovascular risk markers improve alongside your body composition."
            href="/blog/lipid-profile-if-p"
            accent="bg-accent-purple"
          />
          <Benefit
            title="Metabolic Rate Preserved"
            text="Unlike crash diets that tank your metabolism, IF-P maintains resting metabolic rate. You keep burning calories efficiently."
            href="/blog/metabolic-rate-fasting"
            accent="bg-accent-pink"
          />
          <Benefit
            title="Insulin Sensitivity"
            text="Improved blood glucose regulation and insulin response. Better nutrient partitioning means more of what you eat fuels muscle, not fat."
            href="/blog/insulin-sensitivity-if-p"
            accent="bg-accent-teal"
          />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-[40px] font-medium text-text-primary tracking-tight">
              How PaceFast Works
            </h2>
            <p className="mt-4 text-text-secondary text-lg">
              Set up in 60 seconds. Science-backed from day one.
            </p>
          </div>
          <div className="space-y-8">
            <Step
              num="1"
              title="Tell us about you"
              text="Sex, age, height, weight, activity level, and goal. PaceFast calculates your optimal calories and macro targets using the Mifflin-St Jeor equation."
            />
            <Step
              num="2"
              title="Choose your fasting protocol"
              text="16:8, 5:2, 36-hour, or build your own custom schedule. Set your preferred eating window and the app handles the rest."
            />
            <Step
              num="3"
              title="Get your weekly meal plan"
              text="PaceFast generates 7 days of protein-paced meals — 4 per day, each hitting 35% protein / 35% carbs / 30% fat. Swap any meal you don't like."
            />
            <Step
              num="4"
              title="Shop, cook, eat"
              text="An auto-generated shopping list groups ingredients by category. Confirm meals with a tap. The fasting timer tracks your progress with live phase indicators."
            />
            <Step
              num="5"
              title="Track your results"
              text="Weekly weigh-ins timed to your post-fast window for consistent data. Watch your weight, BMI, body fat, and VO2 max trend over time."
            />
          </div>
        </div>
      </section>

      {/* ── THE SCIENCE ── */}
      <section className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-[40px] font-medium text-text-primary tracking-tight">
            From the Research
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            PaceFast is built on Dr. Paul Arciero&rsquo;s PRISE protocol —
            backed by over a decade of peer-reviewed clinical trials.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <BlogCard
            href="/blog/what-is-protein-pacing"
            title="What Is Protein Pacing? The Science Behind 4 Meals a Day"
            excerpt="Why meal timing matters as much as total intake, and how spacing protein across 4 meals maximises muscle protein synthesis."
            tag="Fundamentals"
            accent="bg-accent-teal"
          />
          <BlogCard
            href="/blog/intermittent-fasting-visceral-fat"
            title="How Intermittent Fasting Targets Visceral Fat"
            excerpt="A 33% reduction in visceral fat in 8 weeks. How IF triggers lipolysis in the most dangerous fat deposits."
            tag="Fat Loss"
            accent="bg-accent-blue"
          />
          <BlogCard
            href="/blog/if-p-muscle-retention"
            title="Losing Fat Without Losing Muscle: The IF-P Advantage"
            excerpt="Standard diets lose 25-30% of weight as lean mass. IF-P participants gained 6% fat-free mass while losing weight."
            tag="Body Recomp"
            accent="bg-accent-purple"
          />
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            View all articles &rarr;
          </Link>
        </div>
      </section>

      {/* ── EMAIL SIGNUP ── */}
      <section
        id="signup"
        className="bg-surface"
      >
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-[40px] font-medium text-text-primary tracking-tight">
            Get Early Access
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            PaceFast is launching soon on the App Store. Join the waitlist and
            be the first to know.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            action="#"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="flex-1 rounded-lg bg-white px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-1 focus:ring-border-dark"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-[#faf9f6] transition-all hover:bg-primary-hover"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-xs text-text-secondary">
            No spam, ever. Just a single email when we launch.
          </p>
        </div>
      </section>
    </main>
  );
}
