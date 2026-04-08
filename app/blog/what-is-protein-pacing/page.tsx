import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Protein Pacing? The Science Behind 4 Meals a Day",
  description:
    "Protein pacing spaces 4 high-protein meals across your eating window to maximise muscle protein synthesis. Learn the science behind the PRISE protocol.",
  keywords: [
    "protein pacing",
    "meal timing",
    "muscle protein synthesis",
    "PRISE protocol",
    "Paul Arciero",
    "protein distribution",
    "4 meals a day",
  ],
};

export default function Article() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/blog"
        className="text-sm text-text-secondary hover:text-primary transition-colors"
      >
        &larr; Back to all articles
      </Link>

      <article className="mt-8">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Fundamentals
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-text-primary leading-tight">
          What Is Protein Pacing? The Science Behind 4 Meals a Day
        </h1>
        <p className="mt-4 text-text-secondary">April 2026</p>

        <div className="mt-10 space-y-6 text-text-primary/90 leading-relaxed">
          <p>
            Most nutrition advice focuses on <em>how much</em> protein you eat
            per day. Protein pacing flips the script: it&rsquo;s about{" "}
            <em>when</em> and <em>how often</em> you consume protein across your
            eating window.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The core principle
          </h2>
          <p>
            Protein pacing means consuming 4 meals per day, each containing
            20&ndash;40g of protein, spaced 3&ndash;4 hours apart. This pattern
            is designed to maximise muscle protein synthesis (MPS) &mdash; the
            process by which your body builds and repairs muscle tissue.
          </p>
          <p>
            MPS operates on a &ldquo;muscle full&rdquo; effect: after roughly
            20&ndash;40g of high-quality protein, the synthesis machinery is
            fully activated. Eating more protein in that single meal doesn&rsquo;t
            increase MPS further &mdash; the excess is simply oxidised for
            energy. But 3&ndash;4 hours later, the machinery resets and can be
            triggered again.
          </p>
          <p>
            By spacing 4 protein-rich meals across your day, you trigger MPS 4
            separate times. Compare this to the typical pattern of a
            protein-light breakfast, moderate lunch, and protein-heavy dinner
            &mdash; that only meaningfully triggers MPS once or twice.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The PRISE protocol
          </h2>
          <p>
            Protein pacing was formalised by Dr. Paul Arciero at Skidmore
            College as part of the PRISE protocol: <strong>P</strong>rotein
            pacing, <strong>R</strong>esistance training, <strong>I</strong>
            nterval training, <strong>S</strong>tretching, and{" "}
            <strong>E</strong>ndurance exercise. Over a decade of clinical
            trials have validated this combined approach.
          </p>
          <p>
            In a landmark 2023 study published in <em>Obesity</em>, participants
            following IF combined with protein pacing (IF-P) achieved remarkable
            results over just 8 weeks:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>9% total body weight loss</li>
            <li>33% reduction in visceral adipose tissue</li>
            <li>6% increase in fat-free mass</li>
            <li>
              Significant improvements in gut microbiome diversity
            </li>
            <li>
              Reduced inflammatory markers and improved lipid profiles
            </li>
          </ul>
          <p>
            These results roughly doubled those of standard caloric restriction
            with the same total calorie deficit.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            The 35/35/30 macro ratio
          </h2>
          <p>
            Dr. Arciero&rsquo;s clinical protocols target a specific
            macronutrient distribution: 35% protein, 35% carbohydrates, and 30%
            fat. This ratio is higher in protein than standard dietary
            guidelines (which typically recommend 10&ndash;15%), but the
            clinical evidence consistently shows superior outcomes for body
            composition.
          </p>
          <p>
            At a typical 2000 kcal/day target, this means each of the 4 meals
            contains approximately 500 calories with 44g protein, 44g carbs,
            and 17g fat. Every meal in the PaceFast database is validated to
            within &plusmn;5% of this target.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Why it works with intermittent fasting
          </h2>
          <p>
            Intermittent fasting and protein pacing are natural complements.
            Fasting enhances fat oxidation, insulin sensitivity, and cellular
            repair processes (autophagy). Protein pacing ensures that when you
            do eat, every meal is optimised to preserve and build lean mass.
          </p>
          <p>
            The combination addresses the biggest weakness of fasting alone:
            muscle loss. Standard IF protocols without attention to protein
            distribution can result in 25&ndash;30% of weight loss coming from
            lean mass. With protein pacing, participants in the 2023 trial
            actually <em>gained</em> muscle while losing fat.
          </p>

          <h2 className="text-2xl font-bold text-text-primary pt-4">
            Practical application
          </h2>
          <p>
            The challenge with protein pacing is execution. Hitting 35% protein
            in every meal requires deliberate planning &mdash; most meals
            people eat intuitively fall well short. This is especially true for
            vegetarian and vegan diets, where primary protein sources (legumes,
            tofu) carry significant carbohydrates or fats alongside the protein.
          </p>
          <p>
            This is exactly the problem PaceFast solves. The app provides a
            database of 46 macro-validated meals across omnivore, vegetarian,
            and vegan diets, a weekly planner with auto-generated shopping
            lists, and portion scaling that adjusts every ingredient to your
            personal calorie target.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="font-semibold text-text-primary">
            Ready to try protein pacing?
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            PaceFast handles the meal planning so you can focus on eating well.
          </p>
          <a
            href="/#signup"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-[#0D1117] transition-all hover:bg-primary-dark"
          >
            Join the Waitlist
          </a>
        </div>
      </article>
    </main>
  );
}
