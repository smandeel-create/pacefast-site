# PaceFast Marketing Site — Developer Brief

## What is this?

Marketing and SEO site for PaceFast, a protein pacing + intermittent fasting iOS app. The site drives organic traffic via science-backed blog articles, each targeting specific health benefit keywords, and captures early access signups.

Domain: pacefast.app (available, not yet purchased)
Deployed: Vercel (auto-deploys on push to main)

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Source Serif 4 (serif headings), Inter (body/UI), JetBrains Mono (code)
- **Hosting:** Vercel (free tier)

## Design System

Warm, editorial aesthetic inspired by Anthropic's Skilljar site. Minimalist, serif-forward, generous whitespace.

### Colours
- **Page background:** #faf9f6 (warm cream)
- **Surface/sections:** #f0eee6 (slightly darker cream — used for alternating sections)
- **Cards:** white (#ffffff) — lighter than background, darken to surface on hover
- **Text primary:** #141413
- **Text secondary:** #6b6860
- **Buttons:** #2c2b25 (dark) with #faf9f6 text, hover: #5e5b4e
- **Accent bars on cards:** teal (#b5c5c0), blue (#b4c6d4), purple (#c5bfd9), pink (#e0c5ce)
- **Borders:** Generally none. Clean colour transitions, not outlines.

### Typography
- **Headings:** Source Serif 4, font-medium (500), tracking-tight. Sizes: 54px hero, 40px section, 24px card
- **Body:** Inter, 15-16px, text-secondary colour
- **UI elements:** Inter, 14px, font-medium

### Card Pattern
- White background, rounded-xl, no border
- Colour accent bar (h-1.5, w-12, rounded-full) at top
- Hover: background transitions to surface colour (#f0eee6)
- No shadows, no elevation changes, no border on hover

### Sections
- Alternating background: cream (#faf9f6) and surface (#f0eee6)
- No borders between sections — colour change provides separation
- Max width: 1200px, px-6 padding

## Site Structure

```
app/
├── layout.tsx          # Header, footer, fonts, metadata
├── globals.css         # Tailwind + CSS variables
├── page.tsx            # Landing page (hero, stats, benefits, how-it-works, blog preview, signup)
└── blog/
    ├── layout.tsx      # Blog layout wrapper
    ├── page.tsx        # Blog index (all articles listed)
    ├── what-is-protein-pacing/page.tsx
    ├── intermittent-fasting-visceral-fat/page.tsx
    ├── if-p-muscle-retention/page.tsx
    ├── gut-microbiome-fasting/page.tsx
    ├── insulin-sensitivity-if-p/page.tsx
    ├── vo2-max-intermittent-fasting/page.tsx
    ├── anti-inflammatory-fasting/page.tsx
    ├── reduced-hunger-protein-pacing/page.tsx
    ├── lipid-profile-if-p/page.tsx
    └── metabolic-rate-fasting/page.tsx
```

## Blog Articles (10 total)

Each article targets specific SEO keywords around IF-P health benefits. Every article ends with a CTA box linking to the waitlist signup.

| Article | SEO Target | Accent |
|---------|-----------|--------|
| What Is Protein Pacing | protein pacing, PRISE protocol, 4 meals a day | teal |
| IF & Visceral Fat | visceral fat, belly fat loss, intermittent fasting fat | blue |
| Muscle Retention (IF-P) | body recomposition, muscle retention fasting | purple |
| Gut Microbiome & Fasting | gut health fasting, microbiome diversity | teal |
| Insulin Sensitivity | insulin sensitivity fasting, blood sugar | teal |
| VO2 Max & IF | VO2 max intermittent fasting, cardiorespiratory | purple |
| Anti-Inflammatory | anti-inflammatory fasting, CRP, IL-6 | pink |
| Less Hunger on IF-P | fasting hunger, appetite hormones, ghrelin | blue |
| Lipid Profile | cholesterol fasting, triglycerides, heart health | purple |
| Metabolic Rate | metabolic rate fasting, yo-yo dieting, metabolism | pink |

## Landing Page Sections

1. **Hero** — Serif headline, subtitle, two CTAs (signup + learn)
2. **Stats bar** — 4 key numbers from the 2023 Obesity trial (9% weight loss, 33% visceral fat, +6% FFM, 35/35/30)
3. **Benefits grid** — 9 cards, each linking to a blog article, with colour accent bars
4. **How it works** — 5 numbered steps explaining the app flow
5. **From the Research** — 3 featured blog article cards
6. **Email signup** — Waitlist form (not yet wired to a backend)

## Key Science Claims (for accuracy)

All stats reference the 2023 Obesity trial by Dr. Paul Arciero (Skidmore College):
- 9% total body weight loss in 8 weeks
- 33% visceral adipose tissue reduction
- +6% **fat-free mass** (NOT muscle mass — FFM includes muscle, bone, water, connective tissue)
- Improved gut microbiome diversity
- Reduced inflammatory markers (CRP, IL-6, TNF-α)
- Improved lipid profiles
- Less reported hunger vs standard caloric restriction
- Maintained resting metabolic rate

**Important:** The protocol uses 4 meals/day in the clinical trials, but protein pacing is flexible — 3-5 meals work as long as each crosses the leucine threshold (20-40g protein) and they're spaced 3-4 hours apart. 4 is the practical sweet spot for most fasting windows.

## What's NOT Built Yet

- Email signup backend (form exists but doesn't submit anywhere — needs Supabase, Mailchimp, or similar)
- Analytics (add Vercel Analytics or Plausible)
- OG images for social sharing
- Sitemap.xml and robots.txt for SEO
- More blog articles (recipes, beginner guides, fasting protocol comparisons)
- App Store link (once the app launches)

## Related Project

The PaceFast iOS app is in the parent directory (`../`). See `../CLAUDE.md` for the app developer brief and `../Product Specification.md` for the full product spec.
