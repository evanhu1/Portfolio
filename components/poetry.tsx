"use client"

import { Cormorant_Garamond } from 'next/font/google'
import { Judson } from 'next/font/google'

const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})
import React from 'react';

const poems = [
  {
    title: "Stars",
    lines: [
      "A million lights twinkle gently at me,",
      "Beneath the still pond, above the palm trees.",
      "I pluck at the stars from under the water:",
      "Sing lullabies on Mars, dance on rings of Saturn.",
      "I fill my pockets with galaxies, ponder at possibilities:",
      "A million sights I yearn to see, a million nights of vague memories.",
      "But the ripples on the surface betray my starlit lie:",
      "I gaze at reflections within a pond, and dream of the endless sky."
    ]
  },
  {
    title: "The Puddle and the Ocean",
    lines: [
      "Does the puddle know of the ocean?",
      "Does the raindrop imagine the flood?",
      "Does the bound moon envy the motion",
      "Of the celestial bodies above?",
      "Does the fish grow weary of water?",
      "Does the bird seek refuge from the sky?",
      "Does the human mind truly know sonder?",
      "Or tornados from a butterfly?"
    ]
  },
  {
    title: "Spider",
    lines: [
      "A fly falls into a spider's web,",
      "Though it’s been there once before.",
      "And despite the mortal consequence,",
      "It knows it’ll be there once more.",
      "To sip sweet venom of the spider's bite,",
      "And cocoon in its silken embrace.",
      "A creeping dependence takes silent flight-",
      "Drunk on that toxic taste.",
      "Euphoric arachnophilia, seduction and enigma.",
      "Will this be memorabilia? Or traumatic anathema?",
      "A fly falls into a spider's weave",
      "To perish as its kin before.",
      "And in the end the spider takes leave",
      "To ensnare a fly once more."
    ]
  },
  {
    title: "Ghost",
    lines: [
      "Effervescent ethereal, made of see through material,",
      "Why do you feel so real?",
      "I know you’re following me, don’t know if I should flee,",
      "Don’t I want to be free?",
      "Maybe you should leave my mind, yet your shape is not unkind.",
      "You won’t leave me behind?",
      "Though this feels like a sin, I want to see you again,",
      "Will you be my friend?",
      "And I - your willing host, because you get me the most,",
      "My darling ghost."
    ]
  },
  {
    title: "Prison",
    lines: [
      "Trapped by naught, lofty thoughts.",
      "Oh what am I waiting for?",
      "Liberation can’t be bought -",
      "Prison is an open door.",
      "Veins of hope all fill with clots;",
      "And fear leaves my soul poor.",
      "Ghosts of what I never sought,",
      "Prison is an open door.",
      "Waxen wings attempt to soar",
      "In search of something more.",
      "Beloved shackles I cherish so,",
      "They chain me to the floor,",
      "Would that I could leave and go,",
      "Discard the chains I wore",
      "Staying here is death I know - oh",
      "Prison is an open door."
    ]
  }
];

export function Poetry() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-900">
      <button className="fixed hover:bg-gray-200 top-8 left-6 bg-white border-none rounded-full w-12 h-12 shadow-lg flex items-center justify-center cursor-pointer" onClick={() => window.history.back()}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h1 className={`text-center text-4xl ${cormorant_garamond.className} font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl`}>
          Poetry
        </h1>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {poems.map((poem) => (
            <div key={poem.title} className="flex w-full max-w-m flex-col items-center justify-center rounded-lg bg-white p-12 text-center shadow dark:bg-gray-800 sm:w-auto">
              <p className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${cormorant_garamond.className}`}>{poem.title}</p>
              <div className="mt-4 space-y-4 text-gray-500 dark:text-gray-400">
                {poem.lines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
