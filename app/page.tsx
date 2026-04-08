import Link from "next/link";

/* ── Stat badge ── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-text-secondary">{label}</p>
    </div>
  );
}

/* ── Benefit card ── */
function Benefit({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{text}</p>
    </div>
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
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
        {num}
      </div>
      <div>
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <p className="mt-1 text-sm text-text-secondary leading-relaxed">
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
}: {
  href: string;
  title: string;
  excerpt: string;
  tag: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/5 bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {tag}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {excerpt}
      </p>
      <span className="mt-4 inline-block text-sm font-medium text-primary">
        Read more &rarr;
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 md:pt-32 md:pb-24 text-center relative">
          <div className="inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8">
            Coming soon to the App Store
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]">
            Know <span className="text-primary">when</span> to eat.
            <br />
            Know <span className="text-primary">what</span> to eat.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary leading-relaxed">
            PaceFast is the first app combining intermittent fasting with
            protein-paced meal planning. 4 meals, perfect macros, one app.
            Backed by peer-reviewed science.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#signup"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-[#0D1117] transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20"
            >
              Get Early Access
            </a>
            <Link
              href="/blog/what-is-protein-pacing"
              className="rounded-full border border-white/10 px-8 py-3.5 text-base font-semibold text-text-primary transition-all hover:border-primary/30 hover:bg-surface"
            >
              Learn the Science
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="9%" label="Weight loss in 8 weeks" />
          <Stat value="33%" label="Visceral fat reduction" />
          <Stat value="+6%" label="Fat-free mass increase" />
          <Stat value="35/35/30" label="Optimised macro ratio" />
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Why IF + Protein Pacing Works
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            An 8-week clinical trial published in <em>Obesity</em> (2023)
            showed that combining intermittent fasting with protein pacing
            outperformed standard caloric restriction on every metric.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Benefit
            icon="🔥"
            title="Visceral Fat Loss"
            text="33% reduction in visceral fat — the dangerous fat surrounding your organs linked to heart disease, type 2 diabetes, and metabolic syndrome."
          />
          <Benefit
            icon="💪"
            title="Muscle Retention"
            text="6% increase in fat-free mass during weight loss. Protein pacing triggers muscle protein synthesis 4 times per day, protecting lean tissue."
          />
          <Benefit
            icon="🫁"
            title="Improved VO2 Max"
            text="Significant improvements in cardiorespiratory fitness, even without changes to exercise routine. Better oxygen efficiency across all activities."
          />
          <Benefit
            icon="🧬"
            title="Anti-Inflammatory"
            text="Reduced inflammatory markers (CRP, IL-6, TNF-α). Chronic inflammation drives aging, joint pain, and disease — IF-P helps reverse it."
          />
          <Benefit
            icon="🦠"
            title="Gut Microbiome"
            text="Increased gut bacteria diversity. A healthier microbiome improves nutrient absorption, immune function, and even mood regulation."
          />
          <Benefit
            icon="😌"
            title="Less Hunger"
            text="Participants reported significantly less hunger vs. standard calorie restriction. Protein pacing stabilises blood sugar and keeps you fuller, longer."
          />
          <Benefit
            icon="📊"
            title="Better Lipid Profile"
            text="Improved cholesterol ratios and reduced triglycerides. Your cardiovascular risk markers improve alongside your body composition."
          />
          <Benefit
            icon="⚡"
            title="Metabolic Rate Preserved"
            text="Unlike crash diets that tank your metabolism, IF-P maintains resting metabolic rate. You keep burning calories efficiently."
          />
          <Benefit
            icon="🩸"
            title="Insulin Sensitivity"
            text="Improved blood glucose regulation and insulin response. Better nutrient partitioning means more of what you eat fuels muscle, not fat."
          />
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-y border-white/5 bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              How PaceFast Works
            </h2>
            <p className="mt-4 text-text-secondary">
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
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            From the Research
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
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
          />
          <BlogCard
            href="/blog/intermittent-fasting-visceral-fat"
            title="How Intermittent Fasting Targets Visceral Fat"
            excerpt="A 33% reduction in visceral fat in 8 weeks. How IF triggers lipolysis in the most dangerous fat deposits."
            tag="Fat Loss"
          />
          <BlogCard
            href="/blog/if-p-muscle-retention"
            title="Losing Fat Without Losing Muscle: The IF-P Advantage"
            excerpt="Standard diets lose 25-30% of weight as lean mass. IF-P participants gained 6% fat-free mass while losing weight."
            tag="Body Recomp"
          />
        </div>
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="text-primary font-semibold hover:underline"
          >
            View all articles &rarr;
          </Link>
        </div>
      </section>

      {/* ── EMAIL SIGNUP ── */}
      <section
        id="signup"
        className="border-y border-white/5 bg-gradient-to-b from-surface to-[#0D1117]"
      >
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get Early Access
          </h2>
          <p className="mt-4 text-text-secondary">
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
              className="flex-1 rounded-full border border-white/10 bg-[#0D1117] px-5 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#0D1117] transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
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
