import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/metaphor-stories")({
  head: () => ({
    meta: [
      { title: "Metaphor & Stories — Dr. Pat Pernicano" },
      { name: "description", content: "How metaphor and story support trauma treatment, connection, and hope in clinical practice." },
      { property: "og:title", content: "Metaphor & Stories — Dr. Pat Pernicano" },
      { property: "og:description", content: "How metaphor and story support trauma treatment, connection, and hope in clinical practice." },
    ],
  }),
  component: MetaphorStories,
});

function MetaphorStories() {
  return (
    <>
      <section id="metaphor" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-reveal="">
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Using Stories and Metaphors
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Metaphor & Stories
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              Four reasons to use stories, metaphors and playful interventions in psychotherapy
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)]" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles w-6 h-6 text-accent-foreground">
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                  <path d="M20 3v4" />
                  <path d="M22 5h-4" />
                  <path d="M4 17v2" />
                  <path d="M5 18H3" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Metaphor is the Language of Play and Creativity
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Clients communicate through their play and creativity, at every age and stage. Stories elicit feelings, memories, concerns, and perceptions, which are communicated through playful therapy activities.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)]" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-6 h-6 text-accent-foreground">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                  <path d="M6 18a4 4 0 0 1-1.967-.516" />
                  <path d="M19.967 17.484A4 4 0 0 1 18 18" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Play Reflects Developmental Stages
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A child's play and language reflect developmental competencies and challenges.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)]" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb w-6 h-6 text-accent-foreground">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Stories Springboard Treatment
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Stories reduce defensiveness, introduce treatment themes and guide treatment interventions. They propel treatment!
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)]" data-reveal="">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap w-6 h-6 text-accent-foreground">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6" />
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                Stories Teach
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Stories suggest new ways of looking at things. They seed possibilities for change. Story characters serve as role models for identification.
              </p>
            </div>
          </div>
          <div className="text-center mb-12" data-reveal="">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Meaning Making through Story and Metaphor
            </h3>
          </div>
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] space-y-4 mb-20" data-reveal="">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Listening to a story is a cognitive task; however, as the listener joins the story and then finds him or herself in the story, metaphor, and story have the potential to elicit an experiential "aha moment" with a shift in meaning. Story and metaphor offer the listener new ways of looking at things and possible pathways forward. Metaphors and therapeutic stories suggest as-yet-unconsidered possibilities, and in therapy, stories take the listener to a place where painful memories are activated and re-experienced. I refer to metaphor as a universal shorthand or morse code that sends a complete message in very few words. Metaphors are helpful when words fail.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Story and metaphor convey meaning, plant seeds of new understanding, and put the past in context. Metaphor, a form of universal language, activates emotion, fosters identification, and enhances self-understanding. Storytelling is at the heart of all therapy. Metaphor is a cross-theoretical tool to seed possibilities, offer meaning, present alternative views, restructure cognition, and reframe narrative history. Stories and their characters serve as models, teach values and skills, and provide insight on both a conscious and nonconscious level.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Metaphors and stories have been used in several approaches, including Ericksonian hypnosis, narrative therapy, mindfulness, and cognitive behavioral methods. Story characters resemble the listener in some way, such as personal characteristics, life struggles, and thought patterns. The story theme may parallel some aspect of the person's life, model insight, or solve a problem. A message is packaged and received in a way that is more palatable than direct feedback from a therapist. Stories gently open up as-yet unrecognized, not-fully-conscious emotional material.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stories also enable empathy and foster connection with others. Perhaps most importantly, story and metaphor contribute to meaning-making about self, others, and the world.
            </p>
          </div>
          <div className="text-center mb-12" data-reveal="">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              The Science of Storytelling and Metaphor
            </h3>
          </div>
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] space-y-4 mb-20" data-reveal="">
            <p className="text-muted-foreground text-sm leading-relaxed">
              There is science behind storytelling. Storytelling can activate mirroring, a process where one person's brain activity is essentially activated in someone else's brain, and the other person responds to the connection. The earliest example of this co-activation and co-regulation is during parent-infant interactions of gazing, smiling, and babbling back and forth.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A good storyteller engages the other person, and the other person feels very attuned, i.e., connected and understood. Researchers suggest that when we are being told a story, it is as if we are there. Stories and metaphors "light up" parts of the brain we would use if we lived out the story events, i.e. our senses and emotions.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The listener joins and becomes part of the story when the theme and metaphors trigger memories of lived experiences. We symbolically connect metaphors and story elements to our experiences and memories. Thus, metaphors convey explicit and implicit emotions through symbolic associations in only a few words, such as, "The classroom was a zoo," and "She has a heart of gold." The creative brain gets the message, while the literal brain might picture a classroom full of elephants, zebras, and monkeys.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Metaphors can evoke memories, feelings, images, and experiences previously out of awareness, and we understand them in non-literal ways. Trauma survivors often report strong painful emotions after listening to The Cracked Glass Bowl story (Pernicano, 2012) as they draw themselves as a bowl that feels "broken, damaged, or changed." Stories take listeners down a path of "being there" as opposed to listening. The "aha" of metaphor and story help us construct a new narrative through a process of meaning-making.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Milton Erickson has been named the first advocate of the use of stories and metaphors in therapy. He believed that stories could influence our understanding by providing new information, arousing emotions, and creating new experiences at a less conscious level of awareness. Stories move the listener to a vulnerable, receptive state of readiness, a readiness to be open and shift one's inner state of mind and emotion. What has been described as a corrective emotional experience is one of growth, new perspective, and healing from the inside out.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A powerful metaphor can quickly shift someone's point of view. Let's close this with a metaphor that cuts to the truth when someone reports guilt or shame following a sexual assault against them. Sexual assault is any non-consensual sexual activity or opportunistic, disallowed behavior. The perpetrator catches you off guard and pounced; took you down. Later, you blamed yourself and wondered if you had missed something … or sent the wrong message. The reality is that you didn't send any message at all. The lion was on the prowl.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Consider the National Geographic special on lions in Africa. The film opens with a herd of beautiful gazelles running, jumping, and playing together on the grass. They are being gazelles and doing what gazelles do. The camera pans to a lion, crouched down close to the ground, hidden in the tall grass. The lion is on the hunt for fresh meat. He is arrogant, confident, and knows what he is doing. Lions are predatory and when they are hungry, they prepare for the kill. Some of the older gazelles catch the scent of the lion and scamper away. A small gazelle tracks a beautiful butterfly and chases it a few feet away from the herd. In one unsuspecting instant, the predatory lion pounces and takes her down. No regrets. He was hungry. Any gazelle would do. And he is a serial killer. The next day, or the day after that, there will be another victim.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              No one would blame the gazelle for the lion's actions.
            </p>
          </div>
          <div className="text-center mb-12" data-reveal="">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              Dr. Pat's Reflections
            </h3>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] border-l-4 border-primary" data-reveal="">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                December 15, 2022
              </span>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">
                Acceptance and Forgiveness Therapy (AFT) for Veterans with Moral Injury
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Veterans with moral injury carry burdens of guilt, grief, shame, and/or betrayal that keep them stuck and prevent healing. They ruminate about the past and carry unspoken memories of experiences that when they were lived were not addressed or resolved. What they carry is not easily resolved through traditional trauma-informed therapies. They were betrayed by others or engaged in guilt-worthy actions with or without orders, and they became interpersonally disconnected, doubting their worth and often struggling with the desire to end their lives or to reek revenge. Most entered the military at young ages when persons are not prepared for what they might encounter during training, combat or military service.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Moral injury arises from sanctioned and unsanctioned activities that violate core values. AFT addresses moral injury through story & metaphor with non-judgmental group forgiveness that results in acceptance of self and others. A powerful veteran-to-veteran reconnection develops during the group, and trust is born through sharing long-hidden stories.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Many consider their actions to have been unforgivable and live with unresolved, punitive guilt. AFT incorporates concepts of confession, including spiritual and legal, and forgiveness by a benevolent other. One "other" is a fair, compassionate judge who releases a person with time served. This concept resonates with veterans who carry shame and guilt. They acknowledge that they have carried a burden a long time and perhaps they can choose to let it go, with the group's help. They are not alone in their pain, and the group response to their stories stirs compassion for themselves.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Whatever you are carrying, consider "time served," and allow your life to reflect your worth rather than focusing unduly on your failures. The past does not have to define who you are now, although it is woven into your tapestry of life experiences.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] border-l-4 border-primary" data-reveal="">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                November 28, 2019
              </span>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">
                Moral Injury in Veterans
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  After working with trauma and attachment issues for many years at non-profit settings (family reunification, child abuse/neglect, out-of-home youth), I decided to take my work to the Veteran's Administration. I had been reading about Moral Injury for a year or two and soon after being hired, sought to work with a VA Chaplain to lead a group for Veteran's struggling with memories of morally injurious events. He tells me he had been praying for a mental health co-leader for some time, so it was "perfect storm" timing to bring this program to the VA.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The program has been a work in progress, with ongoing quality improvement efforts and lots of veteran input. My colleague provided chaplain-driven materials as well as moral injury (MI) work being done elsewhere in the country. I combined this with my understanding of trauma, grief, and self-imposed guilt. I ventured into using metaphor, stories and drawing to help veterans develop personalized Impact Statements.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This new journey has allowed me to learn about unique aspects of Veteran trauma yet also to realize that the creative use of stories and art helps Veterans reduce symptoms of PTSD with purpose and meaning as they move forward. Dr. Chaplain Kerry Haynes and I have been leading a moral injury group for about a year and a half now. We have qualitative and quantitative data that speaks to the benefit of addressing moral injury.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Since June 2019 we have been part of a nationally driven VA effort toward "integrated services" (clergy & mental health) for Veteran Moral Injury. After being invited to Washington with six VA Moral Injury teams, we now meet monthly and contribute to a Dynamic Diffusion (DDN) project. It is encouraging to see our work being disseminated to other VA's so that more Veterans can receive services for Moral Injury.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We recently presented at the Texas Psychological Association. In the section on Client Creations, you will see Veteran pre-post drawings that depict perceived change. As part of the group, we use Part I (Trauma) and Part II (Hope and Healing) of Pernicano's Cracked Glass Bowl Story (adapted for Veteran population).
                </p>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)] border-l-4 border-primary" data-reveal="">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                July 25, 2018
              </span>
              <h4 className="font-heading text-lg font-semibold text-foreground mt-2 mb-3">
                Using Metaphor with Veterans
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We sometimes forget that adult clients, like children, often lack the words to describe their deepest pain and most hurtful experiences; metaphor, stories, art and play facilitate them doing so. In my recent work with veterans, both male and female, I have discovered many who also experienced trauma of some type prior to entering the military, particularly physical, emotional and/or sexual abuse. Some were raised in neglectful, domestically violent home environments, a life that laid the foundation for chronically high stress, hyper-vigilance, mistrust, avoidance, poor sexual choices and even acting out. Many entered the military to "escape" that difficult world, yet later experienced training or combat-related trauma, including what is referred to as MST (Military Sexual Trauma).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I began using metaphor, stories and drawing in my work with veterans, to help them improve their quality of life through trauma-resolution, improved coping and positive relationships. As a group, they displayed a readiness to pursue change, and I started using the story The Cracked Glass Bowl to assess degree/intensity of trauma and to "jump start" the process of trauma recovery. The results have been amazing, as the pre-post treatment drawings reflect qualitative changes in self-perception that parallel veteran scores on psychometric measures of somatic symptoms, anxiety and depression. I have shared some of these drawings in the Client Creations section of the website.
                </p>
              </div>
              <p className="text-sm text-primary font-medium mt-4 italic">
                All best, Dr. Pat
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-[var(--shadow-soft)]" data-reveal="">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-5 h-5 text-accent-foreground">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">
                  What is Moral Injury?
                </h4>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    A "betrayal" of what is "right" (Shay, 1994)
                  </span>
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    The action violates moral, religious or military standards (deeply held beliefs, values and expectations) (Litz et al., 2009).
                  </span>
                </li>
              </ul>
              <h5 className="font-heading text-base font-semibold text-foreground mb-3 italic">
                It Can Be…
              </h5>
              <ul className="space-y-2">
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    You as the "victim" OR you as the one at fault (survivor vs. perpetrator models)
                  </span>
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    Something you saw
                  </span>
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    Something you did alone or with others
                  </span>
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    Something you failed to do (you ignored something, did not report, or failed to do "enough")
                  </span>
                </li>
                <li className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                  <span className="text-primary mt-0.5">
                    •
                  </span>
                  <span>
                    Carrying dehumanizing memories
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                The person may have ignored something, did not report something, or failed to do "enough" by his/her standards.
              </p>
              <p className="text-xs text-muted-foreground italic mt-4">
                The opinions herein do not constitute Veterans Affairs official policy regarding treatment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
