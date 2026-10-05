const calendarUrl =
  'https://calendar.google.com/calendar/render?action=TEMPLATE&text=History%20Makers%20%C2%B7%20Friday%20Night&location=Watoto%20Church%20Downtown%2C%20Kampala&recur=RRULE:FREQ%3DWEEKLY;BYDAY%3DFR';
const mapsUrl = 'https://maps.google.com/?q=Watoto+Church+Downtown+Kampala';

const details = [
  ['When', 'Fridays, 7:00 PM'],
  ['Where', 'Watoto Church Downtown, Kampala'],
  ['Pillars', 'Belong (Community) · Become (Mentoring) · Build (Marketplace)'],
  ['Scripture', '1 Peter 2:9 NKJV (Royal Priesthood · Marvelous Light)'],
  ['Who', 'Young adults ready to make history. Bring a friend.'],
];

export function Gatherings() {
  return (
    <section id="fridays" className="border-t border-(--line) px-5 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ember uppercase">
            <span className="size-1.5 rounded-full bg-ember" />
            <span>Belong · Become · Build</span>
          </div>
          <h2 className="mt-4 text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
            Friday <span className="font-serif font-normal text-ember italic">nights.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-(--muted) sm:text-lg">
            Where bold, Christ-centered young adults gather to build community, worship, and grow in intentional discipleship for church and marketplace leadership.
          </p>
          <p className="mt-4 max-w-md font-serif text-sm italic text-(--muted)">
            “Called out of darkness into His marvelous light.” — 1 Peter 2:9
          </p>
        </div>

        <div>
          <dl className="divide-y divide-(--line) border-y border-(--line)">
            {details.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <dt className="text-sm font-medium text-(--muted)">{k}</dt>
                <dd className="font-medium text-(--fg) sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={calendarUrl} target="_blank" rel="noreferrer" className="press rounded-full bg-(--fg) px-5 py-2.5 text-sm font-medium text-(--bg)">
              Add to calendar
            </a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="press rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-(--line)">
              Directions
            </a>
          </div>
          <p className="mt-6 text-xs text-(--muted)">Placeholder time and venue. Confirm with the HM team.</p>
        </div>
      </div>
    </section>
  );
}
