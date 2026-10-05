import type { ReactNode } from 'react';

const Box = ({ className = '' }: { className?: string }) => <div className={`rounded-md bg-neutral-200 ${className}`} />;
const Line = ({ w = 'w-full', h = 'h-2', className = '' }: { w?: string; h?: string; className?: string }) => (
  <div className={`rounded-full bg-neutral-300 ${w} ${h} ${className}`} />
);
const Pill = ({ dark = false }: { dark?: boolean }) => (
  <div className={`h-4 w-14 rounded-full ${dark ? 'bg-neutral-800' : 'border border-neutral-400'}`} />
);
const Photo = ({ className = '' }: { className?: string }) => (
  <div className={`relative overflow-hidden rounded-md bg-neutral-200 ${className}`}>
    <svg className="absolute inset-0 size-full text-neutral-300" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path d="M0 0L100 100M100 0L0 100" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
    </svg>
  </div>
);
const Badge = () => (
  <div className="flex flex-col items-center">
    <div className="h-5 w-1.5 bg-neutral-400" />
    <div className="flex h-24 w-[4.25rem] flex-col gap-1 rounded-lg border border-neutral-400 bg-white p-1.5">
      <div className="mx-auto h-1 w-4 rounded-full bg-neutral-300" />
      <div className="mt-auto" />
      <Line w="w-10" h="h-1.5" />
      <Line w="w-8" h="h-1" />
    </div>
  </div>
);

type Section = { name: string; purpose: string; notes: string[]; desktop: ReactNode; mobile: ReactNode };

const sections: Section[] = [
  {
    name: '01 Hero',
    purpose: 'Say who this is for in one look: the official 5-capsule HM mark, the understated Belong · Become · Build tagline, bold Christ-centered mission, and clear entry points.',
    notes: [
      'Official HM ministry mark: 5 energetic orange rounded capsules + bold geometric HISTORY MAKERS wordmark.',
      'On scroll past 160px the mark docks into the nav (shared layout, spring 0.5s).',
      'Tagline "Belong · Become · Build" styled as subtle, understated text without pill background or border.',
      'Hero text and CTAs enter reliably with compositor-accelerated CSS keyframe rise (reduced-motion safe).',
      'Features 1 Peter 2:9 scripture anchor: called out of darkness into His marvelous light.',
      'Crowd photo fades into the background with directional gradient mask, crisp on light and dark themes.',
    ],
    desktop: (
      <div className="flex h-full flex-col items-center gap-2 pt-4">
        <Box className="h-6 w-12" />
        <Line w="w-28" h="h-1.5" />
        <Line w="w-2/3" h="h-5" />
        <Line w="w-1/2" h="h-2" />
        <div className="flex gap-2"><Pill dark /><Pill /><Pill /></div>
        <Photo className="mt-auto h-2/5 w-full" />
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col items-center gap-2 pt-5">
        <Box className="h-5 w-9" />
        <Line w="w-20" h="h-1" />
        <Line w="w-11/12" h="h-4" />
        <Line w="w-2/3" />
        <div className="flex gap-1.5"><Pill dark /><Pill /></div>
        <Photo className="mt-auto h-2/5 w-full" />
      </div>
    ),
  },
  {
    name: '02 Manifesto',
    purpose: 'The HM Vision & Mission Statement kinetic text scroll, anchored in 1 Peter 2:9 NKJV.',
    notes: [
      'Section is 260svh tall; the text is pinned (sticky) for the whole scroll.',
      'Word-by-word scroll reveal illuminates the bold, Christ-centered young adult mission from 14% to 100% opacity.',
      'Includes 1 Peter 2:9 NKJV scripture: royal priesthood called out of darkness into His marvelous light.',
      'Integrates the Belong · Become · Build three-fold discipleship and marketplace pillars.',
      'With reduced motion, the full vision and scripture render immediately at full opacity.',
    ],
    desktop: (
      <div className="flex h-full flex-col justify-center gap-2 px-6">
        <Line w="w-24" h="h-1.5" />
        <Line h="h-4" /><Line h="h-4" /><Line w="w-4/5" h="h-4" />
        <div className="mt-2 border-t border-neutral-200 pt-2">
          <Line w="w-3/4" h="h-2" />
          <Line w="w-1/4" h="h-1.5" className="mt-1" />
        </div>
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col justify-center gap-2 px-3">
        <Line w="w-16" h="h-1.5" />
        <Line h="h-3" /><Line h="h-3" /><Line h="h-3" /><Line w="w-2/3" h="h-3" />
        <div className="mt-1 border-t border-neutral-200 pt-1.5">
          <Line w="w-5/6" h="h-1.5" />
        </div>
      </div>
    ),
  },
  {
    name: '03 Can we talk?',
    purpose: 'The discipleship & peer conversation feature. Pick a topic and start an anonymous conversation.',
    notes: [
      'Ties directly to multiplying disciples through intentional mentoring relationships.',
      'Includes Calling & Marketplace track for purposeful preparation in secular and ministry spaces.',
      'Badges hang at -3° to 2.5° and straighten on hover; tilt is ±6° (fine pointers only).',
      'Click: the badge grows into a centered sheet (shared layoutId). Content fades in after.',
      'Escape and the backdrop close the sheet. Scroll is locked and focus goes back to the badge.',
      'Mobile: badges sit in a horizontal snap-scroll row.',
    ],
    desktop: (
      <div className="flex h-full flex-col gap-2 px-6 pt-4">
        <Line w="w-16" h="h-1.5" />
        <Line w="w-1/2" h="h-4" />
        <Line w="w-1/3" />
        <div className="mt-2 flex justify-center gap-3"><Badge /><Badge /><Badge /><Badge /></div>
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col gap-2 px-3 pt-4">
        <Line w="w-12" h="h-1.5" />
        <Line h="h-3" /><Line w="w-3/4" h="h-3" />
        <div className="mt-2 flex gap-2 overflow-hidden"><Badge /><Badge /></div>
      </div>
    ),
  },
  {
    name: '04 HM Cell Module & Sign Up',
    purpose: 'Interactive Cell Directory connecting young adults to weekly community small groups across Kampala.',
    notes: [
      'Covers Makerere (MUK), Kyambogo (KYU), MUBS Nakawa, Downtown, Ntinda, Bugolobi, Kansanga, and Lubowa/Entebbe.',
      'Filter bar supports real-time filtering by Campus Hub / Zone, Meeting Day, Focus Track, and search query.',
      'Cell cards display cell name, leaders, venue, meeting day/time, member count, and focus track badge.',
      'Tactile "Join Cell" button triggers CellSignUpModal pre-populated with the chosen cell.',
      'Sign-up form features preferred meeting day selection, phone validation, WhatsApp connect CTA, and instant confirmation feedback.',
    ],
    desktop: (
      <div className="flex h-full flex-col gap-2 px-6 pt-4">
        <div className="flex justify-between items-center"><Line w="w-24" h="h-2" /><Pill dark /></div>
        <div className="mt-1 flex gap-2"><Box className="h-6 w-28" /><Box className="h-6 w-24" /><Box className="h-6 w-24" /></div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1.5" /><Line w="w-full" h="h-3" className="mt-1" /><Line w="w-3/4" h="h-1.5" className="mt-1" /><Pill dark /></div>
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1.5" /><Line w="w-full" h="h-3" className="mt-1" /><Line w="w-3/4" h="h-1.5" className="mt-1" /><Pill dark /></div>
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1.5" /><Line w="w-full" h="h-3" className="mt-1" /><Line w="w-3/4" h="h-1.5" className="mt-1" /><Pill dark /></div>
        </div>
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col gap-2 px-3 pt-4">
        <Line w="w-20" h="h-2" />
        <Line w="w-3/4" h="h-3" />
        <div className="flex gap-1.5"><Box className="h-5 w-20" /><Box className="h-5 w-16" /></div>
        <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1" /><Line w="w-full" h="h-2.5" className="mt-1" /><Pill dark /></div>
      </div>
    ),
  },
  {
    name: '05 Friday nights',
    purpose: 'When, where, who, and the Belong · Become · Build gathering ethos.',
    notes: [
      'Details include Downtown venue, discipleship pillars, and 1 Peter 2:9 scripture context.',
      'Add to calendar (weekly repeat) and Directions are real links.',
      'Tagline styled cleanly without pill background, honoring minimal editorial typography.',
      'Responsive split-grid layout adapting smoothly from mobile to wide screens.',
    ],
    desktop: (
      <div className="grid h-full grid-cols-2 items-center gap-4 px-6">
        <div>
          <Line w="w-20" h="h-1.5" className="mb-2" />
          <Line w="w-3/4" h="h-8" />
        </div>
        <div className="flex flex-col gap-2">
          <Line /><Line /><Line /><Line />
          <div className="flex gap-2"><Pill dark /><Pill /></div>
        </div>
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col justify-center gap-2 px-3">
        <Line w="w-16" h="h-1.5" />
        <Line w="w-3/4" h="h-6" />
        <Line /><Line /><Line />
        <div className="flex gap-2"><Pill dark /><Pill /></div>
      </div>
    ),
  },
  {
    name: '06 Testimony Wall',
    purpose: 'Authentic stories of young adults called out of darkness into marvelous light (1 Peter 2:9).',
    notes: [
      'Real themes: exam panic & depression, marketplace bribe refusal, secret shame to open brotherhood, situationship healing.',
      'Category filter bar: Campus & Freedom, Marketplace Integrity, Anxiety & Healing, Relationships & Identity.',
      'Editorial cards with Instrument Serif pull-quotes, author details (e.g. Esther N., 22 · Law Student, Makerere).',
      'Interactive reader modal with turning points, scripture anchors, and encouragement.',
      '"Share Your Story" modal enables young adults to contribute their breakthrough stories to the wall.',
    ],
    desktop: (
      <div className="flex h-full flex-col gap-2 px-6 pt-4">
        <div className="flex justify-between items-center"><Line w="w-28" h="h-2" /><Pill dark /></div>
        <div className="flex gap-2"><Box className="h-4 w-16" /><Box className="h-4 w-20" /><Box className="h-4 w-16" /></div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-10" h="h-1" /><Line w="w-full" h="h-3" className="mt-1" /><Line w="w-5/6" h="h-1.5" className="mt-1" /><Line w="w-1/2" h="h-1" className="mt-2" /></div>
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-10" h="h-1" /><Line w="w-full" h="h-3" className="mt-1" /><Line w="w-5/6" h="h-1.5" className="mt-1" /><Line w="w-1/2" h="h-1" className="mt-2" /></div>
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-10" h="h-1" /><Line w="w-full" h="h-3" className="mt-1" /><Line w="w-5/6" h="h-1.5" className="mt-1" /><Line w="w-1/2" h="h-1" className="mt-2" /></div>
        </div>
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col gap-2 px-3 pt-4">
        <Line w="w-24" h="h-2" />
        <Line w="w-4/5" h="h-3" />
        <div className="flex gap-1.5"><Box className="h-4 w-14" /><Box className="h-4 w-14" /></div>
        <div className="rounded-md border border-neutral-300 p-2"><Line w="w-full" h="h-2.5" /><Line w="w-3/4" h="h-1.5" className="mt-1" /><Line w="w-1/3" h="h-1" className="mt-2" /></div>
      </div>
    ),
  },
  {
    name: '07 The Journal / Essays',
    purpose: 'High-craft editorial articles for young adults on calling, ambition, dating, mental health, and kingdom theology.',
    notes: [
      'Authentic long-form essays written by HM pastors, marketplace leaders, and resident physicians.',
      'Featured Essay hero card with prominent pull-quote and author byline.',
      'Editorial grid with read times (e.g. 5 min read), tags, and excerpts.',
      'Clicking any article opens an immersive ArticleModal with drop-caps, key takeaways, and link sharing.',
    ],
    desktop: (
      <div className="flex h-full flex-col gap-2 px-6 pt-4">
        <Line w="w-24" h="h-2" />
        <div className="grid grid-cols-12 gap-2 rounded-md border border-neutral-300 p-2">
          <div className="col-span-7 flex flex-col gap-1"><Line w="w-16" h="h-1" /><Line w="w-full" h="h-3" /><Line w="w-4/5" h="h-1.5" /><div className="flex gap-1 mt-1"><Box className="size-3 rounded-full" /><Line w="w-20" h="h-1" /></div></div>
          <div className="col-span-5 rounded bg-neutral-100 p-1.5"><Line w="w-full" h="h-1.5" /><Line w="w-4/5" h="h-1.5" className="mt-1" /></div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-1">
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1" /><Line w="w-full" h="h-2.5" className="mt-1" /><Line w="w-1/2" h="h-1" className="mt-1" /></div>
          <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1" /><Line w="w-full" h="h-2.5" className="mt-1" /><Line w="w-1/2" h="h-1" className="mt-1" /></div>
        </div>
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col gap-2 px-3 pt-4">
        <Line w="w-20" h="h-2" />
        <Line w="w-4/5" h="h-3" />
        <div className="rounded-md border border-neutral-300 p-2"><Line w="w-12" h="h-1" /><Line w="w-full" h="h-2.5" className="mt-1" /><Line w="w-2/3" h="h-1.5" className="mt-1" /></div>
      </div>
    ),
  },
  {
    name: '08 Footer',
    purpose: 'Ministry attribution, Belong · Become · Build ethos, 1 Peter 2:9 NKJV scripture foundation, socials, and theme toggle.',
    notes: [
      'The theme is also accessible in the nav header.',
      'Choice is saved to localStorage and applied before first paint.',
      'Provides direct navigation to wireframes and social channels.',
    ],
    desktop: (
      <div className="flex h-full items-end justify-between px-6 pb-4">
        <div>
          <Line w="w-32" />
          <Line w="w-48" h="h-1.5" className="mt-1" />
        </div>
        <Line w="w-40" />
        <Box className="size-4 rounded-full" />
      </div>
    ),
    mobile: (
      <div className="flex h-full flex-col justify-end gap-2 px-3 pb-4">
        <Line w="w-28" />
        <Line w="w-40" h="h-1.5" />
        <Line />
        <Box className="size-4 rounded-full" />
      </div>
    ),
  },
];

export function Wireframes() {
  return (
    <div className="min-h-svh bg-neutral-50 px-5 py-14 text-neutral-900">
      <div className="mx-auto max-w-6xl">
        <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">← Back to prototype</a>
        <h1 className="mt-6 text-4xl font-bold tracking-[-0.035em]">History Makers wireframes</h1>
        <p className="mt-2 max-w-xl text-neutral-500">
          Eight cohesive modules documenting motion engineering, design tokens, small-group community, testimony wall, thought-leadership essays, and ministry ethos.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase">Ministry Vision & Ethos</span>
            <span className="text-xs font-semibold text-neutral-700">Tagline: Belong · Become · Build</span>
          </div>
          <p className="mt-2 text-base font-semibold text-neutral-900 sm:text-lg">
            “A generation of bold, Christ-centered, young adults who love and build communities, purposely prepared to serve sacrificially in the church and marketplace, multiplying disciples through intentional mentoring relationships.”
          </p>
          <p className="mt-3 font-serif text-sm italic text-neutral-600 sm:text-base">
            “But you are a chosen generation, a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness into His marvelous light.” — 1 Peter 2:9 NKJV
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {sections.map((s) => (
            <section key={s.name} className="grid gap-8 border-t border-neutral-200 pt-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-lg font-semibold">{s.name}</h2>
                <p className="mt-1 text-neutral-500">{s.purpose}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-600">
                  {s.notes.map((n) => (
                    <li key={n} className="flex gap-2"><span className="text-neutral-300">—</span>{n}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start gap-5">
                <figure className="flex-1">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl border border-neutral-300 bg-white">{s.desktop}</div>
                  <figcaption className="mt-2 text-xs text-neutral-400">Desktop · 1440</figcaption>
                </figure>
                <figure className="w-32 shrink-0 sm:w-40">
                  <div className="aspect-[9/19] overflow-hidden rounded-2xl border border-neutral-300 bg-white">{s.mobile}</div>
                  <figcaption className="mt-2 text-xs text-neutral-400">Mobile · 375</figcaption>
                </figure>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
