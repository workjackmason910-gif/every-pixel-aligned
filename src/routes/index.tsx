import { createFileRoute } from "@tanstack/react-router";
import { RevealObserver } from "@/components/site/RevealObserver";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Pat Pernicano, Psy.D. — Pathways to Healing" },
      { name: "description", content: "Licensed clinical psychologist specializing in trauma, moral injury in veterans, and child, family & adult mental health." },
      { property: "og:title", content: "Dr. Pat Pernicano, Psy.D. — Pathways to Healing" },
      { property: "og:description", content: "Licensed clinical psychologist specializing in trauma, moral injury in veterans, and child, family & adult mental health." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <RevealObserver />
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/assets/hero-bg-BVjqeT0E.jpg" alt="" width="1920" height="1080" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="text-primary-foreground/80 text-sm tracking-[0.25em] uppercase mb-4 font-body font-medium" data-reveal="">
            Dr. Pat’s Pathways to Healing
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6" data-reveal="">
            Dr. Pat Pernicano
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-primary-foreground/85">
              Psy.D.
            </span>
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl font-body max-w-xl mx-auto mb-8" data-reveal="">
            Licensed Clinical Psychologist
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-primary-foreground/75 text-sm font-body" data-reveal="">
            <span className="border border-primary-foreground/30 rounded-full px-4 py-1.5">
              Trauma
            </span>
            <span className="border border-primary-foreground/30 rounded-full px-4 py-1.5">
              Moral Injury in Veterans
            </span>
            <span className="border border-primary-foreground/30 rounded-full px-4 py-1.5">
              Child, Family & Adult Mental Health
            </span>
            <span className="border border-primary-foreground/30 rounded-full px-4 py-1.5">
              Author & Storyteller
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
