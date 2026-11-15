"use client";

import { useEffect, useRef, type ReactNode } from "react";

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export function ScrollExperience({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"));
    const links = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-chapter-link]"));
    const hero = root.querySelector<HTMLElement>(".hero");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compact = window.matchMedia("(max-width: 760px), (max-height: 600px)");
    let frame = 0;

    const render = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const scrollRange = document.documentElement.scrollHeight - viewport;
      // Read geometry before writing styles to avoid repeated layout work.
      const positions = chapters.map((chapter) => chapter.getBoundingClientRect());
      const heroHeight = hero?.offsetHeight || viewport;
      const heroProgress = clamp(window.scrollY / heroHeight);
      let activeId = "";

      root.style.setProperty("--page-progress", `${clamp(window.scrollY / Math.max(1, scrollRange))}`);
      root.dataset.motion = reducedMotion.matches ? "reduced" : "full";
      root.style.setProperty("--hero-drift", reducedMotion.matches ? "0px" : `${heroProgress * 110}px`);
      root.style.setProperty("--hero-turn", reducedMotion.matches ? "0deg" : `${heroProgress * -8}deg`);

      chapters.forEach((chapter, index) => {
        const rect = positions[index];
        const visible = rect.top < viewport && rect.bottom > 0;
        if (rect.top <= viewport * 0.5 && rect.bottom > viewport * 0.5) activeId = chapter.id;
        if (!visible && chapter.dataset.motionSet) return;

        const progress = clamp(-rect.top / Math.max(1, rect.height - viewport));
        const entrance = clamp((viewport - rect.top) / (viewport * 0.85));
        const settle = clamp(progress / 0.45);
        const still = reducedMotion.matches;
        const mobile = compact.matches;
        chapter.style.setProperty("--visual-y", `${still ? 0 : mobile ? (1 - entrance) * 30 : (1 - settle) * 32 - progress * 12}px`);
        chapter.style.setProperty("--visual-turn", `${still || mobile ? 0 : (1 - settle) * (index % 2 ? 6 : -6)}deg`);
        chapter.style.setProperty("--visual-tilt", `${still || mobile ? 0 : (1 - settle) * -10}deg`);
        chapter.style.setProperty("--visual-scale", `${still || mobile ? 1 : 0.9 + settle * 0.1}`);
        chapter.style.setProperty("--copy-y", `${still ? 0 : (1 - entrance) * 45}px`);
        chapter.style.setProperty("--copy-opacity", `${still ? 1 : 0.25 + entrance * 0.75}`);
        chapter.style.setProperty("--orbit-turn", `${still ? 0 : progress * 75}deg`);
        chapter.style.setProperty("--watermark-x", `${still ? 0 : (0.5 - progress) * 65}px`);
        chapter.dataset.motionSet = "true";
      });

      links.forEach((link) => {
        if (link.dataset.chapterLink === activeId) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    compact.addEventListener("change", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(root);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      compact.removeEventListener("change", schedule);
      observer.disconnect();
    };
  }, []);

  return <div ref={rootRef} className="luce-site" id="top">{children}</div>;
}
