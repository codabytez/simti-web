"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently centred in the viewport.
 *
 * Callers pass an array literal, so `ids` has a fresh identity on every render.
 * Depending on it directly tore down and rebuilt every observer each render —
 * and because observers fire on `observe()`, that re-entered `setActive` and
 * kicked off the next render. Joining to a string gives a stable dependency.
 *
 * A single observer with multiple targets replaces the previous one-per-id
 * approach, and picking the entry closest to the viewport centre stops two
 * adjacent sections from fighting over the active state.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");
  // The joined key is both the effect's dependency and its source of ids, so no
  // ref is needed to smuggle the array past the identity check.
  const key = ids.join("|");

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;

        const centre = window.innerHeight / 2;
        const nearest = visible.reduce((best, entry) => {
          const distance = Math.abs(
            entry.boundingClientRect.top + entry.boundingClientRect.height / 2 - centre
          );
          const bestDistance = Math.abs(
            best.boundingClientRect.top + best.boundingClientRect.height / 2 - centre
          );
          return distance < bestDistance ? entry : best;
        });

        setActive(nearest.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
