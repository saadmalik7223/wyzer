"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

export interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  blinkInterval?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const randomChar = (chars: string) =>
  chars[Math.floor(Math.random() * chars.length)];

const scrambleInstant = (text: string, chars: string) =>
  text
    .split("")
    .map((c) => (c === " " ? " " : randomChar(chars)))
    .join("");

const ScrambledText: React.FC<ScrambledTextProps> = ({
  radius = 100,
  duration = 0.5,
  speed = 0.6,
  scrambleChars = ".:.",
  blinkInterval = 600,
  className = "",
  style = {},
  children,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const blinkTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const p = rootRef.current.querySelector("p");
    if (!p) return;

    const split = SplitText.create(p, {
      type: "chars",
      charsClass: "inline-block",
    });

    // Store original text
    split.chars.forEach((el) => {
      const c = el as HTMLElement;
      c.dataset.original = c.textContent || "";

      // default scrambled
      c.textContent = scrambleInstant(c.dataset.original, scrambleChars);
    });

    // 🔁 BLINKING SCRAMBLE (DEFAULT STATE)
    blinkTimer.current = window.setInterval(() => {
      split.chars.forEach((el) => {
        const c = el as HTMLElement;

        // if GSAP is animating (hover reveal), skip blinking
        if (gsap.isTweening(c)) return;

        c.textContent = scrambleInstant(c.dataset.original!, scrambleChars);
      });
    }, blinkInterval);

    const handleMove = (e: PointerEvent) => {
      split.chars.forEach((el) => {
        const c = el as HTMLElement;
        const rect = c.getBoundingClientRect();

        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          // ✨ REVEAL NEAR CURSOR
          gsap.to(c, {
            overwrite: "auto",
            duration: duration * (1 - dist / radius),
            scrambleText: {
              text: c.dataset.original!,
              chars: scrambleChars,
              speed,
            },
            ease: "power2.out",
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      split.revert();
      if (blinkTimer.current) clearInterval(blinkTimer.current);
    };
  }, [radius, duration, speed, scrambleChars, blinkInterval]);

  return (
    <div
      ref={rootRef}
      className={` m-[7vw] max-w-[1000px] font-mono text-[clamp(14px,4vw,32px)] text-[var(--primary-color)]/60 cursor-pointer ${className}`}
      style={style}
    >
      <p>{children}</p>
    </div>
  );
};

export default ScrambledText;
