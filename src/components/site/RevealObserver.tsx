import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Replicates the reference site's scroll-triggered fade-up reveals:
 * elements marked with data-reveal become visible once they enter the viewport.
 */
export function RevealObserver() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    let cleanup: (() => void) | undefined;

    // Wait until route hydration has settled before touching the DOM.
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        cleanup = start();
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cleanup?.();
    };
  }, [pathname]);

  return null;
}

function start() {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.setAttribute("data-visible", ""));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    nodes.forEach((n) => {
      n.removeAttribute("data-visible");
      observer.observe(n);
    });

    return () => observer.disconnect();
}
