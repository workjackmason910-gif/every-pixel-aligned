import { createFileRoute } from "@tanstack/react-router";
import { ReadMore } from "@/components/site/ReadMore";

export const Route = createFileRoute("/sample-stories")({
  head: () => ({
    meta: [
      { title: "Sample Stories — Dr. Pat Pernicano" },
      { name: "description", content: "Read sample therapeutic stories used with children, families, and veterans." },
      { property: "og:title", content: "Sample Stories — Dr. Pat Pernicano" },
      { property: "og:description", content: "Read sample therapeutic stories used with children, families, and veterans." },
    ],
  }),
  component: SampleStories,
});

function SampleStories() {
  return (
    <div className="pt-20">
      <section id="sample-stories" className="py-24 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-reveal="">
            <p className="text-primary text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Therapeutic Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">
              Sample Stories
            </h2>
          </div>
          <div className="max-w-3xl mx-auto" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    The Cracked Glass Bowl
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pat Pernicano, PsyD
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mb-8 border-b border-border pb-6">
                Originally published in{" "}
                <em>
                  Using Trauma Focused Therapy Stories: Interventions for Therapists, Children and their Caregivers
                </em>
                {" "}(2014). NY: Routledge/Taylor & Francis. This version is a two-part modification adapted for group treatment.
              </p>
              <h4 className="font-heading text-lg font-semibold text-primary mb-4">
                Part I: The Trauma
              </h4>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed mb-10">
                <p>
                  The hurricane was finally over, and a small, cracked, green glass bowl bobbed up and down in the ocean. She opened her eyes and looked around at the devastation. It was like a war zone, with uprooted trees and debris scattered as far as the eye could see.
                </p>
                <p>
                  She thought, "It's a wonder I survived the storm!" It was true. The bowl had been lifted off the ground by powerful winds and pummeled by blinding rains, green amidst black. She had been flung into a disorienting darkness, frozen in fear, at the mercy of the storm's destruction.
                </p>
                <p>
                  "How are you feeling?" asked a kind voice. It was her friend, the blue bowl, who had escaped the worst of the storm.
                </p>
                <p>
                  The glass bowl saw her reflection in the water and cried out with dismay, "Look at me! The storm has changed me. I am so damaged and broken that I will never be the same!"
                </p>
                <p>
                  It was true that the storm had changed her. She had many small cracks on her surface and two long, deep cracks that went all the way through. There was straw and dirt embedded in the cracks; there were deep gouges and large chips missing on her edges.
                </p>
              </div>
              <h4 className="font-heading text-lg font-semibold text-primary mb-4">
                Part II: Hope and Healing
              </h4>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  The blue bowl said, "You survived the storm, and that took incredible strength. You are still here, and you are not alone."
                </p>
                <p>
                  Over time, the cracked glass bowl discovered that while she could never look exactly as she had before the storm, she could learn to see herself in a new way. The cracks that ran through her told a story — her story — of survival, resilience, and hope.
                </p>
                <p>
                  Other bowls came to visit and shared their own stories of storms they had weathered. The cracked glass bowl realized she was not the only one who had been changed by life's storms. Together, they found comfort in shared understanding.
                </p>
                <p>
                  With the help of her friends and a wise old pottery maker who showed her how precious broken things can be, the cracked glass bowl began to see beauty in her imperfections. The cracks were filled with golden light, and she became something even more extraordinary than before — a testament to the power of healing.
                </p>
                <p className="italic text-primary font-medium">
                  "I am not broken," she said at last. "I am transformed."
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Be Afraid and Jump
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pat Pernicano, PsyD
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  A nine-year-old boy once spent all summer trying to jump off the high dive at the neighborhood pool. Our son's goal was to accomplish this before he turned ten. So far, each time he climbed the ladder and stepped out on the board, his courage spurted out like a lit match in the wind. I would give him a high-five, and he would look down on the water from the end of the board and count to three. Then he would call out, "Mom, I can't do it," and climb back off the high-dive.
                </p>
                <p>
                  One day at the pool he started to cry. "Mom, I really want to jump off the high dive. I'm almost ten, and I feel like a failure. But I'm so afraid. I shake. I feel my heart pounding. I think I'm going to throw up. I don't know what to do."
                </p>
                <p>
                  I hugged him and said, "It's OK to be afraid. We're all afraid sometimes. We push through it until the fear goes away. You can carry your fear with you and jump. Go out on the board, be afraid, and jump."
                </p>
                <p>
                  He looked at me in astonishment. "Mom, I was waiting for the fear to go away. I thought I had to conquer my fear before I jumped."
                </p>
                <p>
                  "Nope," I said. "Get to the end of the board, be afraid, and jump."
                </p>
                <p>
                  This time he climbed up, went to the end of the board, looked over for the high-five, quivered and shook, and jumped.
                </p>
                <p>
                  "I did it!" he exclaimed as he surfaced. He had pushed into and through his fear. His fear of the high dive eventually lessened, and he had learned something important. Fear chases you, walks with you, pounds in your heart, sits in your gut, and even talks to you in your head until you freeze and stop in your tracks. You can stare back at it, square in the face.
                </p>
                <p className="italic text-primary font-medium">
                  Be afraid and jump.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    The Burden Bag
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pat Pernicano, PsyD (2010)
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  There once was a rabbit named Jack that moved as slowly as a turtle. He could not hop or run like the other rabbits, and he was carrying a huge backpack that weighed him down. It hung nearly to the ground and looked like it was full of rocks.
                </p>
                <p>
                  A friend who observed Jack's struggle approached him. "You know, a rabbit is not meant to move as slowly as a turtle. Why are you carrying that heavy backpack? Why don't you take it off?"
                </p>
                <p>
                  Jack sighed and replied, "It's my burden bag. I never take it off."
                </p>
                <p>
                  The friend asked, "Not to sleep? Not to eat? Not to play?"
                </p>
                <p>
                  Jack replied in a grouchy voice, "I told you, I NEVER take it off."
                </p>
                <p>
                  His friend was curious. "I've never seen a burden bag. What types of burdens do you carry around?"
                </p>
                <p>
                  Jack said, "I don't remember everything that's in it, because I have been collecting burdens for a very long time. And some of them bother me so much I don't want to look at them too closely."
                </p>
                <p>
                  At his friend's request, he opened the backpack and revealed some of what was within the backpack.
                </p>
                <p>
                  The burdens were stuffed into Ziploc bags and labeled such things as, "Stupid mistakes," "Total failures," "Family problems," "Imperfections," "Betrayals," and "Rejections." The two largest, heaviest burdens were labeled "Unforgivable" and "Unspeakable." They were heavy, like rocks, each bag stuffed full.
                </p>
                <p>
                  His friend remarked that it was no wonder Jack moved as slowly as a turtle. They walked together until they found themselves at the shore of a beautiful lake. A sign by the lake said, "No fishing."
                </p>
                <p>
                  "What is this place?" asked Jack.
                </p>
                <p>
                  His friend replied, "This is a bottomless lake. You can throw burdens in the lake if you want to lighten your load. You watch them sink and you can't fish them back out." His friend added, "Some people call it Forgiveness Lake. It doesn't matter what you call it. It is open to everyone."
                </p>
                <p>
                  Jack was not easily convinced. He did not know what he would do if he emptied his backpack or lightened his load. Jack said, "These memories are important. I can't throw them away like they don't matter."
                </p>
                <p>
                  "Of course, they matter!" said his friend. "And you aren't throwing away the memories — just the weight and pain of them so that you can lighten your load and move forward."
                </p>
                <p>
                  Jack wasn't sure he wanted to handle the unforgivable, unspeakable ones. He didn't know if he deserved to be free of them.
                </p>
                <p>
                  His friend said, "You don't have to deserve it. The lake is here, and it is your choice."
                </p>
                <p>
                  At that moment, Jack realized he had a choice — to remain weighed down by his burdens or to release them. With some fear and trepidation, as his friend encouraged him, Jack flung the first burden in a high arc out over the lake. As it hit the lake's clear surface, small circles spread out around it, and the burden sank below the surface. Jack felt an unexpected surge of relief. One by one, he threw burdens into the lake.
                </p>
                <p>
                  When Jack was done, at least for the time being, he was exhausted, because as you know, it is hard work to let go of burdens. He asked, "But what do I do when I'm tempted to collect new burdens?"
                </p>
                <p>
                  His friend answered, "That is bound to happen, because, after all, you are 'only rabbit.' You might want to try collecting blessings. Blessings are things like carrots, lettuce, good memories, laughter, and playing with other rabbits. Fill the backpack with blessings, and every day, count your blessings. That will leave less room for burdens. And you can always come back to the lake."
                </p>
                <p>
                  Jack came to realize that he was not meant to move as slow as a turtle. Perhaps you, too, will realize who you are meant to be and find a way to lighten your load.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    The Self-Weaving Tapestry Story: The Dark with the Light
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pat Pernicano (2010)
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  There once was a Harry Potter-ish type kingdom where each person was given a self-weaving tapestry at birth. It held memories of life events. Whenever a good thing happened, a bright-colored thread would weave itself in. When something bad happened, a dark thread would be woven in. For most people, there were more bright than dark threads, and the tapestry became a beautiful reflection of the person's life.
                </p>
                <p>
                  One person who lived in the kingdom hated the dark threads because they were a reminder of the sad, tragic, or awful things that had happened. For that person, it was as if a spotlight was on the dark threads. The person said, "I hate the dark threads. I don't want to look at them or think about them. I don't want to remember those things. I'll just get rid of them." The person removed all the dark threads and locked them in a box in the closet.
                </p>
                <p>
                  A friend came by to visit not long after that, stared at what was left of the tapestry on the wall, and asked, "What have you done to your beautiful tapestry?"
                </p>
                <p>
                  The person said, "What do you mean? I fixed it. I took out the dark, ugly threads. Now I won't have to look at them or think about them. It's better this way."
                </p>
                <p>
                  The friend replied, "The tapestry was the whole you, a beautiful whole. Hiding the dark threads can't get rid of them or make them disappear, and the pain you experienced was real. But life includes the dark with the light and the good with the bad. Your tapestry is not whole without the dark threads. Look at it — there is so much missing."
                </p>
                <p>
                  It was true. The tapestry was no longer whole. There were huge holes among the bright, sagging threads. Many important parts were missing, and it was a sorry remnant of what had been there before.
                </p>
                <p>
                  The friend added, "The dark threads are part of you, but they don't have to define you. You might want to retrieve the dark threads from the closet and weave them back into the tapestry. This time, put them where you want them. You can't change the things that happened to you, but you can change how you look at them and find meaning in the whole."
                </p>
                <p>
                  The person considered what the friend had said. It did not help to hide the dark threads. The person took the dark threads out of the box in the closet and wove them back into the tapestry, placing them where they seemed to fit. The person started to accept the dark with the light and to see and accept the beauty of the whole. After all, we all need to find meaning in the darkness and light of our lives.
                </p>
                <p>
                  I hope you, too, will discover ways to accept the beauty of your "whole," to be restored, the dark with the light. Like the tapestry, you are a work in progress.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Time Served
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pat Pernicano (2023)
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  A man once appeared before a benevolent judge in the court of Acceptance and Forgiveness. He had struggled to accept and forgive things from his past, and he carried a heavy burden of guilt and pain. He was serving a self-imposed sentence of life in prison, without parole.
                </p>
                <p>
                  The judge asked him to stand up, and said, "You have been in this prison a long time. I would like to hear your story." The man stood up. He was reluctant to tell his story because he knew it would stir up his painful memories. But not talking about it had not helped, so he hesitantly did what the judge asked.
                </p>
                <p>
                  After he finished, the judge said, "You are free to go — with time served. It is time for you to be released. No one deserves life in prison for what you have told me. You have served many years in this dark and painful place. Go collect your things and reclaim your life."
                </p>
                <p>
                  The man went back to his cell and locked himself in.
                </p>
                <p>
                  Later that day, the guard came by the cell. He asked the man, "Why are you still here? It's time for you to go. The judge released you with time served." The guard laid the key by the cell door.
                </p>
                <p>
                  Two days later, the man was still in his cell. He had not used the key. The guard came and said, "I gave you the key to the cell door and it is still there on the floor." The guard picked up the key, unlocked the cell, opened the door, and said, "You are free to go. What are you waiting for?"
                </p>
                <p>
                  The man had many reasons for why he had remained in the cell. He was still in pain, and he was not sure what to do next. He told the guard, "It's not that easy. Being free to go is about two things: one part is your mind, knowing it is time, and the other part is spiritual, wondering if you deserve it or if you are willing to stop carrying it. I'm working on freeing myself. Until I accept what you offer me and free myself, I'm not really free to go."
                </p>
                <p>
                  The guard was baffled and said, "Well, in the court's eyes, you are free to go. So go, and continue your journey of mind and spirit somewhere else."
                </p>
                <p>
                  For some, it is not enough to be freed by a benevolent judge, with time served. Someone else — the military, loved ones, etc. — may free you, but you remain bound by your inner pain and struggles. Freeing yourself and releasing your pain is not as easy as it seems. And yet, it is your decision to make.
                </p>
                <p>
                  The man finally collected his things and left the jail cell. He would find the key to free himself in mind and spirit. He would reclaim his life. But for now, he would continue his journey as he searched for acceptance and forgiveness.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Floating in Quicksand: A Story of Feeling Stuck
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pernicano, 2020
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  There once was a man floating in quicksand, out in the middle of nowhere, keeping his head above water and trying to survive. He had not seen the quicksand in time to stop his fall. He regretted falling in, wishing he could retrace his steps and avoid this dilemma. He said to himself, "It's my fault. I wasn't paying close enough attention." But what was done was done; now, he was resigned to staying afloat as best he could. He knew not to struggle or panic because that might pull him under. Perhaps help would come.
                </p>
                <p>
                  No one had passed by since he fell in, and he was starting to lose hope. He feared he would get sucked under when his strength gave out.
                </p>
                <p>
                  Then came a voice, "Hey, there, what's going on down there?" Someone had finally come upon him!
                </p>
                <p>
                  The man replied in an annoyed voice, "Isn't it obvious?! I'm floating in quicksand — treading water, keeping myself alive! Might you give me a hand?"
                </p>
                <p>
                  The stranger pondered as he viewed the situation. "Yes, I can give you a hand. Or you can carefully turn yourself around and use the rope ladder behind you."
                </p>
                <p>
                  Hmmm. He had not noticed that solution. He was probably not the first to face the quicksand dilemma if a rope ladder was directly behind him.
                </p>
                <p>
                  Life is a little like that — something unexpected happens and you find yourself stuck. You might be frozen in fear or unable to move. You can survive by floating in quicksand, but if you are ready to move in a new direction, you might carefully turn around to find a whole new point of view.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-12" data-reveal="">
            <div className="bg-background rounded-lg p-8 md:p-12 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open w-6 h-6 text-accent-foreground">
                    <path d="M12 7v14" />
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    The Hungry Heart
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pat Pernicano
                  </p>
                </div>
              </div>
              <h4 className="font-heading text-base font-semibold text-foreground mb-3">
                Targeted Audiences
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm leading-relaxed">
                <li>
                  Abused and neglected children and their foster parents / parents / guardians
                </li>
                <li>
                  Children with insecure attachment / attachment deficits
                </li>
              </ul>
              <h4 className="font-heading text-base font-semibold text-foreground mt-6 mb-3">
                Uses
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm leading-relaxed">
                <li>
                  To improve parental empathy and attunement
                </li>
                <li>
                  Re-framing child behaviors / symptoms
                </li>
                <li>
                  Psycho-education about the impact of trauma
                </li>
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed mt-6 mb-6">
                This story is an excellent lead-in for child or family play therapy with abused or neglected children and their parents / foster parents / guardians. It is especially useful for educating parents about the nurture needs of children who may be placed out-of-home and engaging in obsessive compulsive rituals, stealing, hoarding, or rejecting care. For the child who is isolated, withdrawn or attachment disrupted, the story reframes behaviors that can lead to shame and low self-efficacy. This is a great story to help overly critical parents understand the roots of child trauma responses and to increase attunement with and empathy for the child.
              </p>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  "What are you doing?" said Owl to Sammy Squirrel. "Your nest is overflowing with nuts and you are trying to stuff more nuts in there?"
                </p>
                <p>
                  It was true. Sammy's nest, a large hole in a comfortable oak tree, was overflowing with nuts. They were crammed in there tight, like sardines in a sardine can.
                </p>
              </div>
              <ReadMore label="Read More">
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Owl added, "In fact, there are so many nuts in your nest that there is no room for you."
                  </p>
                  <p>
                    "Yes," said Sammy, "that's true. I sleep outside under the tree."
                  </p>
                  <p>
                    "It's not safe to sleep outside under the tree," said Owl. "There are dangerous animals that might hurt you, not to mention thunderstorms and hunters!"
                  </p>
                  <p>
                    Owl continued, "There are enough nuts in there for TEN squirrels, and you are only feeding yourself."
                  </p>
                  <p>
                    Sammy looked at Owl with a slight smile and rolled his eyes as if to say, "Silly Owl, you don't know what you're talking about". He insisted, "I need them when I get hungry and I am hungry all the time. I need them to survive the winter. And I need them just in case."
                  </p>
                  <p>
                    "Just in case what?" asked Owl.
                  </p>
                  <p>
                    "Just in case someone steals the ones I have collected. Just in case I run out. And just in case my mom comes back."
                  </p>
                  <p>
                    Ah… There was more to squirrel's story. Owl prompted, "In case your mom comes back?"
                  </p>
                  <p>
                    Sammy had not really meant to say that, but it was on his mind and just popped out. He looked down and was very quiet for a moment. He did not like to think or talk about his mom. It made him really sad.
                  </p>
                  <p>
                    But Owl was his friend and Sammy trusted him, so he decided to tell Owl about his mom. "When I was a really little squirrel, before I knew how to take care of myself, my mom went away. I don't know where she went. But she never came back."
                  </p>
                  <p>
                    Sammy went on. "Sometimes I dream about her. In one dream I see her playing with a handsome squirrel and running across a telephone wire. In my favorite dream she cuddles with me in the nest, and I fall asleep with her warm fur wrapped around me."
                  </p>
                  <p>
                    "Maybe that's not a dream," said Owl. "Maybe that's a happy memory of your mom loving you."
                  </p>
                  <p>
                    "It could be a memory," said Squirrel. "That is a nice thought."
                  </p>
                  <p>
                    He looked down. "In my bad dreams a hunter shoots her or she gets hit by a car. Maybe I'll never know." There was a long pause.
                  </p>
                  <p>
                    "How did you survive without your mom?" asked Owl.
                  </p>
                  <p>
                    "It was really hard that first winter," said Squirrel. "I was very lonely and cried a lot. I ran out of nuts and nearly starved. But somehow I survived. When spring came, I learned how to collect nuts by watching other squirrels."
                  </p>
                  <p>
                    Squirrel looked up at Owl, "I know it's silly but I sometimes dream about her coming back. In that dream I never run out of nuts and I am safe and happy again."
                  </p>
                  <p>
                    Owl gently wrapped one large wing around Sammy's shoulders and gave him a big hug. "It's not silly at all," he said. Sammy rested his head on Owl and sighed.
                  </p>
                  <p>
                    "Sammy," said Owl. "That is a very hard story to tell. Thank you for trusting me with your heart."
                  </p>
                  <p>
                    Owl asked, "I wonder if you could tell me where you got all these nuts. Surely they did not all come from this tree?"
                  </p>
                  <p>
                    Squirrel said, "I can't tell you - I'll get in trouble."
                  </p>
                  <p>
                    Owl commented, "Telling the truth is usually the best thing."
                  </p>
                  <p>
                    Sammy had a guilty look on his face. "I know it's wrong, but at night when everyone is sleeping, I go out and gather nuts under the largest trees where plenty of nuts fall. I doubt the other squirrels even miss them."
                  </p>
                  <p>
                    Owl replied, "Yes, those nuts do belong to other squirrels, even if you think they won't miss them."
                  </p>
                  <p>
                    "I know," said Sammy, "It is a bad habit and I can't seem to stop myself. I worry about going hungry or think about my mom, and I just HAVE to go out. 'Just in case,' you know."
                  </p>
                  <p>
                    "You know," said Owl, "You do not have a hungry tummy. It might feel like that, but you have a different type of hunger. You have a HUNGRY HEART. Your heart is lonely for love and comfort."
                  </p>
                  <p>
                    Sammy had a sudden "aha" at what Owl said - his tail flipped up in excitement.
                  </p>
                  <p>
                    Sammy exclaimed. "Why didn't I see it before? I have plenty of food in my nest, but it never seems to be enough. That is because I have a hungry heart! My heart is hungry for love and comfort."
                  </p>
                  <p>
                    It made so much sense. At a very young age, Sammy had to take care of himself and survive in a sometimes dangerous world. He did not need more food. He needed more love and comfort.
                  </p>
                  <p>
                    "Sammy," said Owl, "Let's return the extra nuts to where they belong. We will keep enough nuts to get you through the winter and leave some space in your nest for you to sleep. And if you ever get low on nuts, tell me and I'll be sure you never go hungry."
                  </p>
                  <p>
                    Sammy agreed with Owl, and that night, while everyone else was sleeping, they returned the nuts to the other squirrels' trees. Then they returned to Sammy's nest.
                  </p>
                  <p>
                    At the foot of the tree was a great pile of things: there was a stuffed toy that looked and squeaked just like a squirrel, a nightlight, a chew toy, a machine that made a sound like the ocean when you pushed a button, and a large very soft, fuzzy blanket.
                  </p>
                  <p>
                    "Where did those things come from?" asked Sammy.
                  </p>
                  <p>
                    Owl replied with a smile, "Those are for your hungry heart. The other squirrels in the neighborhood didn't know you were living here alone, and they wanted to help. The sound machine can block out the scary nighttime noises. The nightlight helps when you are scared of the dark. The toy is to cuddle, and the blanket is from me."
                  </p>
                  <p>
                    "Also," said Owl, "There is a grandmother squirrel down the street who just lost her husband. She is feeling sad and lonely. She did not like the thought of you being alone in your nest, especially at bedtime. She has offered to come tuck you in. She can cuddle with you until you fall asleep."
                  </p>
                  <p>
                    Sammy agreed to let the grandmother come tuck him in. After all, she was going through a sad and lonely time, and Sammy understood what that felt like.
                  </p>
                  <p>
                    Sammy's adopted grandmother, as well as neighbors and friends like Owl helped him fill the spaces in his hungry heart. He found out that a hungry heart is a lot like a broken heart. You have to be patient, because healing takes time.
                  </p>
                  <p>
                    The urge to take nuts did not go away — it came back now and then, as every bad habit does, but Sammy resisted it by seeing the nuts in his nest and knowing he had enough. Sammy learned he would never go hungry as long as he paid close attention to the needs of his heart.
                  </p>
                </div>
                <h4 className="font-heading text-lg font-semibold text-primary mt-8 mb-2">
                  The Bottom Line
                </h4>
                <p className="text-sm text-primary font-medium italic">
                  Feed your hungry heart with love and comfort!
                </p>
                <h4 className="font-heading text-lg font-semibold text-primary mt-8 mb-4">
                  Food for Thought
                </h4>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground text-sm leading-relaxed">
                  <li>
                    How are you like Sammy Squirrel?
                  </li>
                  <li>
                    Who in your life reminds you of the Owl?
                  </li>
                  <li>
                    What is your heart hungry for?
                  </li>
                  <li>
                    What can Sammy to do when he feels like taking nuts from others?
                  </li>
                  <li>
                    Describe a time in your life when your heart was hungry.
                  </li>
                </ol>
              </ReadMore>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
