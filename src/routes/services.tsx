import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Psychological Services — Dr. Pat Pernicano" },
      { name: "description", content: "Trauma treatment, moral injury care for veterans, family therapy, and training from Dr. Pat Pernicano, Psy.D." },
      { property: "og:title", content: "Psychological Services — Dr. Pat Pernicano" },
      { property: "og:description", content: "Trauma treatment, moral injury care for veterans, family therapy, and training from Dr. Pat Pernicano, Psy.D." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="pt-20">
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-reveal="">
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Specializations
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Psychological Services
            </h2>
          </div>
          <div className="max-w-3xl mx-auto mb-16 bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] text-sm text-muted-foreground leading-relaxed" data-reveal="">
            <p>
              Dr. Pat graduated from Baylor University in 1985 with a Psy.D. From 2015-2025, she worked with at the VA and served Veterans with PTSD, Depression, and Moral Injury. She used stories and drawing with veterans to help them describe past trauma and impact on their lives.While at the VA, she co-authored and offered a group educational and treatment program for moral injury, Acceptance and Forgiveness Therapy. She served as part-time Associate Professor at Spalding University for 19 years, and also contracts with the United Methodist Church as a Ministerial Assessment Specialist. Dr. Pat’s latest publication was released March, 2025 by Routledge/Taylor & Francis:{" "}
              <strong>
                Healing Veteran Moral Injury: Using Story and Metaphor to Foster Hope and Connection
              </strong>
              . In 2021, Taylor & Francis Group selected{" "}
              <strong>
                Using Trauma-Focused Therapy Stories: Interventions for Therapists, Children and Their Caregivers
              </strong>
              , first published in 2014, for inclusion in their Classics collection.{" "}
              <strong>
                Using Stories, Art and Play in Trauma-Informed Treatment: Case Examples and Applications Across the Lifespan
              </strong>
              {" "}(2018) includes case examples (client stories, art and play) as well as case conceptualization to guide treatment.  In 2018, a number of her authored materials were accepted for a joint Sustainability Project between Taylor & Francis publishers and the United Nations. She has provided training on Trauma Informed Treatment, \Moral Injury, Using Metaphor and Story for Trauma Narrative/Impact, Impact of Trauma on Child Development, Integrative Treatment for Veteran Moral Injury (and the Benefit of Metaphor and Story), Mindful Practices for Children, Rorschach Performance Assessment System (RPAS), Cultural Diversity, and Using Stories, Art and Play in Family Focused Trauma Intervention. She has presented on the importance of addressing moral injury at end of life (hospice) and has authored a new book for children of Veterans titled{" "}
              <strong>
                Little Butterfly and her Daddy: Healing the Pain of War
              </strong>
              . This book opens up communication between parents and children following troubling life experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart w-6 h-6 text-accent-foreground">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Trauma Treatment
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Evidence-based, integrative approaches to trauma recovery across the lifespan, incorporating stories, art, and play.
              </p>
            </div>
            <div className="group bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6 text-accent-foreground">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Moral Injury in Veterans
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Specialized care for veterans navigating moral injury, drawing on deep clinical expertise and compassion.
              </p>
            </div>
            <div className="group bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-6 h-6 text-accent-foreground">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Child, Family & Adult Therapy
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Comprehensive mental health services for children, families, and adults using a tailored, relationship-centered approach.
              </p>
            </div>
            <div className="group bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow duration-300" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                Metaphor & Therapeutic Stories
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Creative therapeutic interventions using stories, metaphor, and play to facilitate healing and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
