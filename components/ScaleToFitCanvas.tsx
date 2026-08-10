"use client";

import { useEffect, useRef, useState } from "react";

const DESIGN_WIDTH = 1440; // fixed Figma desktop canvas width

type Props = {
  /**
   * Desktop (md) canvas height in px. Used to collapse the wrapper down to the
   * scaled height so the section doesn't leave empty space below the shrunken
   * canvas (a bare `transform: scale` keeps the original layout box height).
   */
  designHeight: number;
  children: React.ReactNode;
};

/**
 * Scales a fixed 1440px-wide desktop canvas down to fit the viewport between the
 * `md` breakpoint (768px) and 1440px, preserving the Figma layout proportions.
 * At >=1440px it renders 1:1 (centered); below 768px it passes children through
 * untouched so the component's own mobile layout takes over.
 */
export default function ScaleToFitCanvas({ designHeight, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Match Tailwind's `md:` (min-width: 768px) exactly so scaling engages in
    // lockstep with the desktop canvas classes.
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      const on = mq.matches;
      setActive(on);
      setScale(on ? Math.min(1, el.clientWidth / DESIGN_WIDTH) : 1);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    mq.addEventListener("change", update);
    // Also listen to viewport resize directly: ResizeObserver is throttled in
    // occluded/background tabs, and scaling is fundamentally viewport-driven.
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref}>
      {active ? (
        <div
          style={{
            height: designHeight * scale,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              flex: "0 0 auto",
            }}
          >
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
