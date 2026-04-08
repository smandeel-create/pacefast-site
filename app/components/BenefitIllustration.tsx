"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

const INK = "#141413";

type DrawFn = (
  rc: ReturnType<typeof rough.svg>,
  svg: SVGSVGElement,
) => void;

/* shared option helpers */
const opts = (extra?: Record<string, unknown>) => ({
  stroke: INK,
  strokeWidth: 1.8,
  roughness: 1.5,
  ...extra,
});

const fillOpts = (color: string, extra?: Record<string, unknown>) => ({
  stroke: INK,
  strokeWidth: 1.8,
  fill: color,
  fillStyle: "cross-hatch" as const,
  fillWeight: 0.8,
  hachureGap: 5,
  roughness: 1.5,
  ...extra,
});

/* ── Drawing functions keyed by card title slug ── */
const drawings: Record<string, DrawFn> = {
  "visceral-fat-loss": (rc, svg) => {
    svg.appendChild(rc.path("M 60 10 Q 30 40, 35 65 Q 38 85, 60 90 Q 82 85, 85 65 Q 90 40, 60 10", fillOpts("#b5c5c0", { seed: 42 })));
    svg.appendChild(rc.path("M 60 35 Q 48 52, 50 65 Q 52 78, 60 80 Q 68 78, 70 65 Q 72 52, 60 35", fillOpts("#faf9f6", { fillStyle: "solid", roughness: 1.2, seed: 43 })));
    svg.appendChild(rc.line(15, 30, 15, 70, opts({ stroke: "#8aada3", strokeWidth: 2, seed: 44 })));
    svg.appendChild(rc.line(8, 60, 15, 72, opts({ stroke: "#8aada3", strokeWidth: 2, seed: 45 })));
    svg.appendChild(rc.line(22, 60, 15, 72, opts({ stroke: "#8aada3", strokeWidth: 2, seed: 46 })));
  },

  "muscle-retention": (rc, svg) => {
    svg.appendChild(rc.line(20, 50, 100, 50, opts({ strokeWidth: 3, seed: 50 })));
    svg.appendChild(rc.rectangle(10, 30, 20, 40, fillOpts("#b4c6d4", { seed: 51 })));
    svg.appendChild(rc.rectangle(90, 30, 20, 40, fillOpts("#b4c6d4", { seed: 52 })));
    svg.appendChild(rc.line(58, 10, 58, 24, opts({ stroke: "#8ba8bc", strokeWidth: 2.5, seed: 53 })));
    svg.appendChild(rc.line(51, 17, 65, 17, opts({ stroke: "#8ba8bc", strokeWidth: 2.5, seed: 54 })));
  },

  "improved-vo2-max": (rc, svg) => {
    svg.appendChild(rc.path("M 52 30 Q 18 33, 16 58 Q 14 82, 38 85 Q 50 86, 52 68", fillOpts("#c5bfd9", { seed: 70 })));
    svg.appendChild(rc.path("M 68 30 Q 102 33, 104 58 Q 106 82, 82 85 Q 70 86, 68 68", fillOpts("#c5bfd9", { seed: 71 })));
    svg.appendChild(rc.line(57, 8, 57, 32, opts({ strokeWidth: 2, seed: 72 })));
    svg.appendChild(rc.line(63, 8, 63, 32, opts({ strokeWidth: 2, seed: 73 })));
    svg.appendChild(rc.line(112, 70, 112, 30, opts({ stroke: "#a49cc4", strokeWidth: 2, seed: 74 })));
    svg.appendChild(rc.line(105, 40, 112, 28, opts({ stroke: "#a49cc4", strokeWidth: 2, seed: 75 })));
    svg.appendChild(rc.line(119, 40, 112, 28, opts({ stroke: "#a49cc4", strokeWidth: 2, seed: 76 })));
  },

  "anti-inflammatory": (rc, svg) => {
    svg.appendChild(rc.path("M 60 10 L 95 25 Q 95 65, 60 90 Q 25 65, 25 25 Z", fillOpts("#e0c5ce", { seed: 80 })));
    svg.appendChild(rc.line(60, 35, 60, 68, opts({ strokeWidth: 2.5, roughness: 1, seed: 81 })));
    svg.appendChild(rc.line(44, 52, 76, 52, opts({ strokeWidth: 2.5, roughness: 1, seed: 82 })));
  },

  "gut-microbiome": (rc, svg) => {
    svg.appendChild(rc.ellipse(48, 50, 42, 52, fillOpts("#b4c6d4", { seed: 90 })));
    svg.appendChild(rc.path("M 48 24 Q 43 10, 55 6 Q 65 4, 58 15", opts({ strokeWidth: 1.5, roughness: 2, seed: 91 })));
    svg.appendChild(rc.ellipse(95, 55, 24, 30, fillOpts("#d4e2eb", { fillWeight: 0.6, hachureGap: 4, seed: 92 })));
    svg.appendChild(rc.circle(88, 20, 16, fillOpts("#ddd8ea", { fillStyle: "solid", strokeWidth: 1.5, seed: 93 })));
    svg.appendChild(rc.circle(40, 44, 6, fillOpts("#faf9f6", { fillStyle: "solid", strokeWidth: 1, roughness: 1, seed: 94 })));
    svg.appendChild(rc.circle(53, 55, 5, fillOpts("#faf9f6", { fillStyle: "solid", strokeWidth: 1, roughness: 1, seed: 95 })));
  },

  "less-hunger": (rc, svg) => {
    svg.appendChild(rc.line(35, 15, 35, 85, opts({ strokeWidth: 2, seed: 100 })));
    svg.appendChild(rc.line(35, 15, 35, 40, opts({ strokeWidth: 1.5, seed: 101 })));
    svg.appendChild(rc.line(28, 15, 28, 38, opts({ strokeWidth: 1.5, seed: 102 })));
    svg.appendChild(rc.line(42, 15, 42, 38, opts({ strokeWidth: 1.5, seed: 103 })));
    svg.appendChild(rc.circle(72, 52, 55, fillOpts("#b5c5c0", { seed: 104 })));
    svg.appendChild(rc.circle(63, 46, 5, fillOpts(INK, { fillStyle: "solid", strokeWidth: 1, roughness: 0.8, seed: 105 })));
    svg.appendChild(rc.circle(81, 46, 5, fillOpts(INK, { fillStyle: "solid", strokeWidth: 1, roughness: 0.8, seed: 106 })));
    svg.appendChild(rc.path("M 65 60 Q 72 68, 80 60", opts({ strokeWidth: 1.8, roughness: 1.2, seed: 107 })));
  },

  "better-lipid-profile": (rc, svg) => {
    svg.appendChild(rc.path("M 60 85 Q 20 60, 20 38 Q 20 18, 38 18 Q 52 18, 60 35 Q 68 18, 82 18 Q 100 18, 100 38 Q 100 60, 60 85", fillOpts("#b4c6d4", { seed: 110 })));
    svg.appendChild(rc.path("M 28 50 L 42 50 L 48 35 L 55 62 L 62 42 L 68 55 L 75 50 L 92 50", opts({ stroke: "#faf9f6", strokeWidth: 2.2, roughness: 0.8, seed: 111 })));
  },

  "metabolic-rate-preserved": (rc, svg) => {
    svg.appendChild(rc.arc(60, 52, 72, 72, Math.PI * 0.8, Math.PI * 0.2, false, fillOpts("#e0c5ce", { fillStyle: "solid", strokeWidth: 2, seed: 120 })));
    svg.appendChild(rc.line(28, 32, 34, 38, opts({ strokeWidth: 1.5, roughness: 1, seed: 121 })));
    svg.appendChild(rc.line(60, 14, 60, 22, opts({ strokeWidth: 1.5, roughness: 1, seed: 122 })));
    svg.appendChild(rc.line(92, 32, 86, 38, opts({ strokeWidth: 1.5, roughness: 1, seed: 123 })));
    svg.appendChild(rc.line(60, 55, 84, 32, opts({ stroke: "#cc9dae", strokeWidth: 2.5, roughness: 1.2, seed: 124 })));
    svg.appendChild(rc.circle(60, 55, 8, fillOpts("#e0c5ce", { fillStyle: "solid", strokeWidth: 1.5, roughness: 1, seed: 125 })));
    svg.appendChild(rc.path("M 60 70 Q 52 80, 54 88 Q 56 94, 60 95 Q 64 94, 66 88 Q 68 80, 60 70", fillOpts("#e0c5ce", { fillWeight: 0.6, hachureGap: 3, roughness: 1.2, seed: 126 })));
  },

  "insulin-sensitivity": (rc, svg) => {
    svg.appendChild(rc.path("M 45 15 Q 25 45, 25 58 Q 25 78, 45 78 Q 65 78, 65 58 Q 65 45, 45 15", fillOpts("#b5c5c0", { seed: 130 })));
    svg.appendChild(rc.line(37, 44, 37, 56, opts({ stroke: "#faf9f6", strokeWidth: 2, roughness: 1, seed: 131 })));
    svg.appendChild(rc.line(31, 50, 43, 50, opts({ stroke: "#faf9f6", strokeWidth: 2, roughness: 1, seed: 132 })));
    svg.appendChild(rc.path("M 72 30 Q 80 15, 88 30 Q 96 45, 104 30", opts({ stroke: "#8aada3", strokeWidth: 2.2, roughness: 1.5, seed: 133 })));
    svg.appendChild(rc.path("M 72 65 Q 80 58, 88 65 Q 96 72, 104 65", opts({ stroke: INK, strokeWidth: 1.8, roughness: 1.2, seed: 134 })));
    svg.appendChild(rc.line(88, 40, 88, 55, opts({ stroke: "#6b6860", strokeWidth: 1.5, roughness: 1, seed: 135 })));
    svg.appendChild(rc.line(84, 51, 88, 57, opts({ stroke: "#6b6860", strokeWidth: 1.5, roughness: 1, seed: 136 })));
    svg.appendChild(rc.line(92, 51, 88, 57, opts({ stroke: "#6b6860", strokeWidth: 1.5, roughness: 1, seed: 137 })));
  },
};

export default function BenefitIllustration({ slug }: { slug: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    /* clear any previous render (React strict mode) */
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const drawFn = drawings[slug];
    if (!drawFn) return;

    const rc = rough.svg(svg);
    drawFn(rc, svg);
  }, [slug]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 100"
      width={120}
      height={100}
      className="mx-auto mb-4"
    />
  );
}
