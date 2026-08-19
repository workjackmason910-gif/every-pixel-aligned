import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Replicates the reference site's scroll-triggered fade-up reveals:
 * elements marked with data-reveal become visible once they enter the viewport.
 */
export function RevealObserver() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    nodes.forEach((n) => {
      n.classList.remove("is-visible");
      observer.observe(n);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
