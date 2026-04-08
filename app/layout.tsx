import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-geist-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://pacefast.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PaceFast — Protein Pacing + Intermittent Fasting App",
    template: "%s | PaceFast",
  },
  description:
    "The first app combining intermittent fasting with protein-paced meal planning. 4 meals, perfect macros, one app. Backed by science.",
  keywords: [
    "intermittent fasting app",
    "protein pacing",
    "IF-P",
    "meal planning",
    "fasting timer",
    "body recomposition",
    "macro tracking",
    "PRISE protocol",
    "visceral fat loss",
    "protein pacing meals",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "PaceFast — Protein Pacing + Intermittent Fasting",
    description:
      "The first app combining intermittent fasting with protein-paced meal planning. Backed by peer-reviewed science.",
    url: BASE_URL,
    siteName: "PaceFast",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PaceFast — Protein Pacing + Intermittent Fasting",
    description:
      "The first app combining intermittent fasting with protein-paced meal planning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ── JSON-LD structured data ── */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PaceFast",
  url: BASE_URL,
  description:
    "The first app combining intermittent fasting with protein-paced meal planning.",
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PaceFast",
  url: BASE_URL,
  description:
    "Protein pacing + intermittent fasting. One app. Backed by science.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-text-primary">
          PaceFast
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/blog"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Science &amp; Blog
          </Link>
          <a
            href="#signup"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-[#faf9f6] transition-all hover:bg-primary-hover"
          >
            Get Early Access
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-surface mt-auto">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold text-text-primary">
              PaceFast
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              Protein pacing + intermittent fasting.
              <br />
              One app. Backed by science.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary mb-3">
              Learn
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/blog/what-is-protein-pacing" className="hover:text-text-primary transition-colors">
                  What is Protein Pacing?
                </Link>
              </li>
              <li>
                <Link href="/blog/intermittent-fasting-visceral-fat" className="hover:text-text-primary transition-colors">
                  IF &amp; Visceral Fat Loss
                </Link>
              </li>
              <li>
                <Link href="/blog/if-p-muscle-retention" className="hover:text-text-primary transition-colors">
                  Muscle Retention on IF-P
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-text-primary mb-3">
              More
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/blog" className="hover:text-text-primary transition-colors">
                  All Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 text-center text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} PaceFast. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
