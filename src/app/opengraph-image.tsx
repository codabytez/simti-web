import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: ${site.tagline} — clinical skin training for Nigerian pharmacists`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time, replacing the `/og-image.png` the metadata used to
 * reference — that file was never committed, so every social share rendered a
 * broken preview.
 *
 * The display face is loaded from a vendored TTF rather than `next/font`:
 * ImageResponse renders in an isolated Satori pass with no access to the app's
 * font pipeline, and Satori cannot parse woff2. Without this the headline
 * silently falls back to a generic sans and the card reads as off-brand.
 */
async function loadFonts() {
  const dir = join(process.cwd(), "src/assets/fonts");
  const [display, displayItalic, body, bodyMedium] = await Promise.all([
    readFile(join(dir, "CormorantGaramond-SemiBold.ttf")),
    readFile(join(dir, "CormorantGaramond-SemiBoldItalic.ttf")),
    readFile(join(dir, "DMSans-Regular.ttf")),
    readFile(join(dir, "DMSans-Medium.ttf")),
  ]);

  return [
    { name: "Cormorant Garamond", data: display, weight: 600 as const, style: "normal" as const },
    {
      name: "Cormorant Garamond",
      data: displayItalic,
      weight: 600 as const,
      style: "italic" as const,
    },
    { name: "DM Sans", data: body, weight: 400 as const, style: "normal" as const },
    { name: "DM Sans", data: bodyMedium, weight: 500 as const, style: "normal" as const },
  ];
}

/** Satori has no network access, so the seal is inlined as a data URI. */
async function loadLogo() {
  const data = await readFile(join(process.cwd(), "public/logo.png"));
  return `data:image/png;base64,${data.toString("base64")}`;
}

export default async function OpengraphImage() {
  const [fonts, logoSrc] = await Promise.all([loadFonts(), loadLogo()]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #3d1f18 0%, #2a1310 55%, #1a4a5c 100%)",
        padding: "68px 76px",
        fontFamily: "DM Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ width: 44, height: 2, background: "#b8963a" }} />
          <div
            style={{
              color: "#d4b47a",
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Cohort 2 · October 2026
          </div>
        </div>

        <img src={logoSrc} width={110} height={110} alt="" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div
          style={{
            display: "flex",
            fontFamily: "Cormorant Garamond",
            color: "#f7f1e8",
            fontSize: 82,
            lineHeight: 1.02,
            letterSpacing: -1.5,
            fontWeight: 600,
            maxWidth: 950,
          }}
        >
          Train to Become Nigeria&apos;s Leading Clinical Skin Expert
        </div>
        <div
          style={{
            color: "rgba(247,241,232,0.62)",
            fontSize: 26,
            lineHeight: 1.45,
            maxWidth: 780,
          }}
        >
          Evidence-based skin care for licensed pharmacists, grounded in the Barrier-First
          Framework.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(247,241,232,0.16)",
          paddingTop: 26,
        }}
      >
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            color: "#f7f1e8",
            fontSize: 40,
            fontWeight: 600,
            letterSpacing: 2,
          }}
        >
          {site.fullName}
        </div>
        <div
          style={{
            fontFamily: "Cormorant Garamond",
            fontStyle: "italic",
            color: "#4a9aaf",
            fontSize: 28,
          }}
        >
          {site.tagline}
        </div>
      </div>
    </div>,
    { ...size, fonts }
  );
}
