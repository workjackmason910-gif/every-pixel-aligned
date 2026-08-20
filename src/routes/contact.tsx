import { createFileRoute } from "@tanstack/react-router";
import { RevealObserver } from "@/components/site/RevealObserver";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Pat Pernicano" },
      { name: "description", content: "Get in touch with Dr. Pat Pernicano, Psy.D. for feedback, ideas, or professional inquiries." },
      { property: "og:title", content: "Contact — Dr. Pat Pernicano" },
      { property: "og:description", content: "Get in touch with Dr. Pat Pernicano, Psy.D. for feedback, ideas, or professional inquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-20">
      <RevealObserver />
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-reveal="">
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Contact
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-reveal="">
              <p className="text-muted-foreground leading-relaxed">
                Do you have feedback or an idea? Don't hesitate to reach out via email.
              </p>
              <div className="space-y-4">
                <a href="mailto:ppshrink@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-accent-foreground">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-sm">
                    ppshrink@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <form className="space-y-4" noValidate data-reveal="">
              <input className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-card" name="name" placeholder="Name" required />
              <input type="email" className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-card" name="email" placeholder="Email" required />
              <input type="tel" className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-card" name="phone" placeholder="Phone" />
              <textarea className="flex min-h-[80px] w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-card resize-none" name="message" placeholder="Message" rows={5} required></textarea>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
