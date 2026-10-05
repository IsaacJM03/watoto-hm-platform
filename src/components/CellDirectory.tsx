import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { type Cell, CELLS, DAYS, FOCUS_TRACKS, type MeetingDay, type CellFocus, ZONES } from '../data/cells';
import { CellSignUpModal } from './CellSignUpModal';

export function CellDirectory() {
  const [selectedZone, setSelectedZone] = useState<string>('All Zones');
  const [selectedDay, setSelectedDay] = useState<'All Days' | MeetingDay>('All Days');
  const [selectedTrack, setSelectedTrack] = useState<'All Tracks' | CellFocus>('All Tracks');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCellForModal, setActiveCellForModal] = useState<Cell | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredCells = useMemo(() => {
    return CELLS.filter((cell) => {
      const matchZone = selectedZone === 'All Zones' || cell.zone === selectedZone;
      const matchDay = selectedDay === 'All Days' || cell.meetingDay === selectedDay;
      const matchTrack = selectedTrack === 'All Tracks' || cell.focus === selectedTrack;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        cell.name.toLowerCase().includes(q) ||
        cell.zone.toLowerCase().includes(q) ||
        cell.leaders.toLowerCase().includes(q) ||
        cell.campus.toLowerCase().includes(q) ||
        cell.venue.toLowerCase().includes(q) ||
        cell.focus.toLowerCase().includes(q) ||
        cell.meetingDay.toLowerCase().includes(q);

      return matchZone && matchDay && matchTrack && matchSearch;
    });
  }, [selectedZone, selectedDay, selectedTrack, searchQuery]);

  const handleOpenModal = (cell?: Cell) => {
    setActiveCellForModal(cell ?? null);
    setModalOpen(true);
  };

  const clearFilters = () => {
    setSelectedZone('All Zones');
    setSelectedDay('All Days');
    setSelectedTrack('All Tracks');
    setSearchQuery('');
  };

  return (
    <section id="cells" className="relative border-t border-(--line) px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-ember uppercase">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>Belong · HM Cell Groups</span>
            </div>
            <h2 className="mt-3 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.96] font-extrabold tracking-[-0.04em] text-(--fg)">
              Find your <span className="font-serif font-normal text-ember italic">Cell community.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-pretty text-(--muted) sm:text-lg">
              Life is meant to be shared. HM Cell groups meet weekly across Kampala’s universities, neighborhoods, and business hubs. Join a circle of bold, Christ-centered young adults.
            </p>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => handleOpenModal()}
              className="press inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-sm font-semibold text-white shadow-xs"
            >
              <span>Sign Up for a Cell</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-12 rounded-3xl border border-(--line) bg-(--fg)/[0.02] p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {/* Search */}
            <div className="md:col-span-1">
              <label htmlFor="search-cells" className="block text-xs font-semibold tracking-wider text-(--muted) uppercase">
                Search
              </label>
              <input
                id="search-cells"
                type="text"
                placeholder="Campus, leader, zone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
              />
            </div>

            {/* Zone Filter */}
            <div>
              <label htmlFor="filter-zone" className="block text-xs font-semibold tracking-wider text-(--muted) uppercase">
                Zone / Hub
              </label>
              <select
                id="filter-zone"
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3 py-2 text-sm font-medium text-(--fg) focus:border-ember focus:outline-none"
              >
                {ZONES.map((z) => (
                  <option key={z} value={z} className="bg-(--bg) text-(--fg)">
                    {z}
                  </option>
                ))}
              </select>
            </div>

            {/* Day Filter */}
            <div>
              <label htmlFor="filter-day" className="block text-xs font-semibold tracking-wider text-(--muted) uppercase">
                Meeting Day
              </label>
              <select
                id="filter-day"
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value as 'All Days' | MeetingDay)}
                className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3 py-2 text-sm font-medium text-(--fg) focus:border-ember focus:outline-none"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d} className="bg-(--bg) text-(--fg)">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Track Filter */}
            <div>
              <label htmlFor="filter-track" className="block text-xs font-semibold tracking-wider text-(--muted) uppercase">
                Focus Track
              </label>
              <select
                id="filter-track"
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value as 'All Tracks' | CellFocus)}
                className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3 py-2 text-sm font-medium text-(--fg) focus:border-ember focus:outline-none"
              >
                {FOCUS_TRACKS.map((t) => (
                  <option key={t} value={t} className="bg-(--bg) text-(--fg)">
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Filter Pill Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-(--line) pt-4 text-xs">
            <span className="text-(--muted)">Showing {filteredCells.length} of {CELLS.length} cells</span>
            {(selectedZone !== 'All Zones' || selectedDay !== 'All Days' || selectedTrack !== 'All Tracks' || searchQuery) && (
              <button
                type="button"
                onClick={clearFilters}
                className="press ml-auto rounded-full bg-ember/15 px-3 py-1 font-medium text-ember hover:bg-ember/25"
              >
                Reset filters ✕
              </button>
            )}
          </div>
        </div>

        {/* Cell Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCells.map((cell) => (
            <div
              key={cell.id}
              className="group flex flex-col justify-between rounded-3xl border border-(--line) bg-(--bg) p-6 transition-[border-color,box-shadow] duration-200 ease-out hover:border-ember/40 hover:shadow-lg hover:shadow-ember/5"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-ember/10 px-3 py-1 text-xs font-semibold text-ember">
                    {cell.focus}
                  </span>
                  <span className="text-xs font-medium text-(--muted)">
                    {cell.membersCount} members
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-(--fg)">
                  {cell.name}
                </h3>

                <p className="mt-1 font-serif text-sm italic text-ember">
                  “{cell.tagline}”
                </p>

                <p className="mt-3 text-sm leading-relaxed text-(--muted)">
                  {cell.description}
                </p>

                <div className="mt-5 space-y-2 border-t border-(--line) pt-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-(--muted)">Leaders</span>
                    <span className="font-semibold text-(--fg)">{cell.leaders}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-(--muted)">Schedule</span>
                    <span className="font-medium text-ember">{cell.meetingDay}s · {cell.meetingTime}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="shrink-0 text-(--muted)">Venue</span>
                    <span className="text-right font-medium text-(--fg)">{cell.venue}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenModal(cell)}
                  className="press flex w-full items-center justify-center gap-2 rounded-full border border-(--line) bg-(--fg)/[0.03] py-2.5 text-sm font-semibold text-(--fg) transition-colors hover:border-ember hover:bg-ember hover:text-white"
                >
                  <span>Join this Cell</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCells.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-(--line) p-12 text-center">
            <p className="text-lg font-semibold text-(--fg)">No cells match your criteria</p>
            <p className="mt-1 text-sm text-(--muted)">Try broadening your filters or searching for another campus.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="press mt-4 rounded-full bg-ember px-5 py-2 text-sm font-medium text-white"
            >
              Show all cells
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <CellSignUpModal
            initialCell={activeCellForModal}
            onClose={() => {
              setModalOpen(false);
              setActiveCellForModal(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
