"use client";

import { motion } from "framer-motion";
import { easeEditorial } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Cross-section of the skin barrier — the Barrier-First Framework made visible.
 *
 * The audience is clinicians, so the anatomy is deliberate rather than
 * decorative: corneocytes are staggered like brickwork within an intercellular
 * lipid matrix ("bricks and mortar"), the viable epidermal strata are stacked in
 * the correct order, and the dermo-epidermal junction undulates as rete ridges
 * rather than sitting flat.
 *
 * The stratum corneum is given more vertical weight than strict scale would
 * allow. That is the deliberate emphasis of the framework, and a to-scale
 * dermis would otherwise swallow the frame.
 *
 * Every coordinate is authored or derived deterministically — `Math.random`
 * would desynchronise the server and client renders.
 */

const VIEW_W = 400;
const VIEW_H = 500;

/** Fixed cell widths, cycled to give the brickwork an organic irregularity. */
const CELL_WIDTHS = [64, 78, 58, 86, 70, 62, 82, 68, 74, 60];

function corneocyteRow(rowIndex: number, startX: number) {
  const cells: { x: number; w: number }[] = [];
  let x = startX;
  let i = rowIndex * 3;

  while (x < VIEW_W + 20) {
    const w = CELL_WIDTHS[i % CELL_WIDTHS.length];
    cells.push({ x, w });
    x += w + 3;
    i += 1;
  }
  return cells;
}

/** Six layers of flattened, anucleate corneocytes. */
const CORNEUM_ROWS = Array.from({ length: 6 }, (_, r) => ({
  y: 40 + r * 19,
  cells: corneocyteRow(r, r % 2 === 0 ? -24 : -56),
}));

const DEJ_PATH =
  "M-10 288 C 30 268, 62 306, 100 288 S 168 268, 200 288 S 268 306, 300 288 S 368 268, 410 288";

const COLLAGEN = [
  "M-10 322 C 60 310, 130 334, 200 320 S 340 308, 410 324",
  "M-10 350 C 70 364, 140 336, 210 352 S 348 366, 410 346",
  "M-10 378 C 54 368, 128 390, 196 376 S 344 368, 410 384",
  "M-10 406 C 76 418, 148 394, 216 410 S 350 420, 410 402",
  "M-10 434 C 62 424, 132 446, 204 432 S 342 424, 410 438",
  "M-10 462 C 72 474, 144 450, 212 466 S 348 474, 410 456",
];

const layer = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeEditorial } },
};

const draw = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: easeEditorial } },
};

const label = {
  hidden: { opacity: 0, x: 8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeEditorial } },
};

/**
 * Labels sit right-aligned on a scrim. Set over the strata without one they
 * were unreadable against the corneocyte brickwork.
 */
function Label({
  y,
  text,
  sub,
  colour,
  width,
}: {
  y: number;
  text: string;
  sub?: string;
  colour: string;
  width: number;
}) {
  const height = sub ? 34 : 22;
  return (
    <motion.g variants={label}>
      <rect
        x={384 - width}
        y={y - 15}
        width={width}
        height={height}
        rx="4"
        fill="#2a1310"
        fillOpacity="0.72"
      />
      <text
        x="376"
        y={y}
        textAnchor="end"
        className="font-mono uppercase"
        fontSize="9.5"
        letterSpacing="1.5"
        fill={colour}
      >
        {text}
      </text>
      {sub && (
        <text
          x="376"
          y={y + 13}
          textAnchor="end"
          className="font-body"
          fontSize="8.5"
          fill="#f7f1e8"
          fillOpacity="0.5"
        >
          {sub}
        </text>
      )}
      <rect x={384 - width} y={y - 15} width="2" height={height} rx="1" fill={colour} />
    </motion.g>
  );
}

interface BarrierDiagramProps {
  className?: string;
}

export function BarrierDiagram({ className }: BarrierDiagramProps) {
  return (
    <motion.svg
      data-motion=""
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn("w-full h-full", className)}
      role="img"
      aria-labelledby="barrier-title barrier-desc"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } } }}
    >
      <title id="barrier-title">Cross-section of the skin barrier</title>
      <desc id="barrier-desc">
        Skin in cross-section: the stratum corneum, built from corneocytes set in an intercellular
        lipid matrix, above the viable epidermis and the dermis, divided by the undulating
        dermo-epidermal junction.
      </desc>

      <defs>
        <linearGradient id="barrier-dermis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e7a8f" stopOpacity="0.34" />
          <stop offset="70%" stopColor="#1a4a5c" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#1a4a5c" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="barrier-epidermis" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f7f1e8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f7f1e8" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* ── Skin surface ──────────────────────────────────────────────── */}
      <motion.g variants={layer}>
        <motion.rect
          variants={draw}
          style={{ originX: 0 }}
          x="-10"
          y="30"
          width={VIEW_W + 20}
          height="1.5"
          fill="#f7f1e8"
          fillOpacity="0.35"
        />
      </motion.g>

      {/* ── Stratum corneum ───────────────────────────────────────────── */}
      {CORNEUM_ROWS.map((row, r) => (
        <motion.g key={`corneum-${r}`} variants={layer}>
          {row.cells.map((c, i) => (
            <rect
              key={i}
              x={c.x}
              y={row.y}
              width={c.w}
              height={14}
              rx="3"
              fill="#f7f1e8"
              fillOpacity={0.17 - r * 0.014}
              stroke="#f7f1e8"
              strokeOpacity="0.2"
              strokeWidth="0.75"
            />
          ))}
          {/* Intercellular lipid lamellae — the mortar holding the barrier. */}
          <motion.rect
            variants={draw}
            style={{ originX: 0 }}
            x="-10"
            y={row.y + 15.5}
            width={VIEW_W + 20}
            height="1.25"
            fill="#b8963a"
            fillOpacity="0.42"
          />
        </motion.g>
      ))}

      {/* ── Granular layer — keratohyalin granules ─────────────────────── */}
      <motion.g variants={layer}>
        <rect x="-10" y="158" width={VIEW_W + 20} height="34" fill="url(#barrier-epidermis)" />
        {Array.from({ length: 15 }, (_, i) => (
          <circle
            key={`gran-${i}`}
            cx={4 + i * 28}
            cy={170 + (i % 3) * 6}
            r="2.6"
            fill="#d4b47a"
            fillOpacity="0.55"
          />
        ))}
      </motion.g>

      {/* ── Spinous layer — polygonal keratinocytes ────────────────────── */}
      <motion.g variants={layer}>
        {Array.from({ length: 9 }, (_, i) => (
          <circle
            key={`spin-a-${i}`}
            cx={14 + i * 45}
            cy={208}
            r="10"
            fill="#f7f1e8"
            fillOpacity="0.05"
            stroke="#f7f1e8"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <circle
            key={`spin-b-${i}`}
            cx={36 + i * 45}
            cy={234}
            r="10"
            fill="#f7f1e8"
            fillOpacity="0.05"
            stroke="#f7f1e8"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        ))}
      </motion.g>

      {/* ── Basal layer — the proliferative compartment ────────────────── */}
      <motion.g variants={layer}>
        {Array.from({ length: 20 }, (_, i) => (
          <rect
            key={`basal-${i}`}
            x={-6 + i * 21}
            y="256"
            width="15"
            height="24"
            rx="6"
            fill="#4a9aaf"
            fillOpacity={0.34 + (i % 3) * 0.08}
            stroke="#4a9aaf"
            strokeOpacity="0.6"
            strokeWidth="0.75"
          />
        ))}
      </motion.g>

      {/* ── Dermo-epidermal junction ───────────────────────────────────── */}
      <motion.path
        variants={draw}
        style={{ originX: 0 }}
        d={DEJ_PATH}
        fill="none"
        stroke="#b8963a"
        strokeOpacity="0.8"
        strokeWidth="2"
      />

      {/* ── Dermis: collagen bundles and a papillary capillary loop ────── */}
      <motion.g variants={layer}>
        <rect x="-10" y="292" width={VIEW_W + 20} height={VIEW_H} fill="url(#barrier-dermis)" />
        {COLLAGEN.map((d, i) => (
          <path
            key={`collagen-${i}`}
            d={d}
            fill="none"
            stroke="#f7f1e8"
            strokeOpacity={0.16 - i * 0.014}
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        ))}
      </motion.g>

      {/* ── Labels ────────────────────────────────────────────────────── */}
      <Label
        y={86}
        text="Stratum corneum"
        sub="The barrier. Assessed first."
        width={158}
        colour="#d4b47a"
      />
      <Label y={222} text="Viable epidermis" width={116} colour="#f7f1e8" />
      <Label y={404} text="Dermis" width={68} colour="#4a9aaf" />
    </motion.svg>
  );
}
