import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { type Cell, CELLS } from '../data/cells';

interface CellSignUpModalProps {
  initialCell?: Cell | null;
  onClose: () => void;
}

const PREFERRED_DAYS = ['Wednesday', 'Thursday', 'Saturday', 'Flexible / Any Day'] as const;

export function CellSignUpModal({ initialCell, onClose }: CellSignUpModalProps) {
  const [selectedCellId, setSelectedCellId] = useState<string>(initialCell?.id ?? CELLS[0].id);
  const [preferredDay, setPreferredDay] = useState<string>(initialCell?.meetingDay ?? 'Wednesday');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [workplaceOrCampus, setWorkplaceOrCampus] = useState('');
  const [note, setNote] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeCell = CELLS.find((c) => c.id === selectedCellId) ?? CELLS[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const root = document.documentElement;
    const body = document.body;
    const prevRootOverflow = root.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      root.style.overflow = prevRootOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [onClose]);

  const handleCellSelect = (cellId: string) => {
    setSelectedCellId(cellId);
    const found = CELLS.find((c) => c.id === cellId);
    if (found) {
      setPreferredDay(found.meetingDay);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = phone.replace(/\D/g, '');
    if (!fullName.trim()) return;
    if (digitsOnly.length < 7) {
      setPhoneError('Please provide a valid WhatsApp number (at least 7 digits)');
      return;
    }
    setPhoneError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] } }}
        transition={{ type: 'spring', duration: 0.4, bounce: 0.12 }}
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-(--line) bg-(--bg) p-6 text-(--fg) shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="press absolute top-5 right-5 flex size-9 items-center justify-center rounded-full border border-(--line) text-(--muted) hover:text-(--fg)"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-ember uppercase">
              <span className="size-1.5 rounded-full bg-ember" />
              <span>Belong · HM Cell Groups</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Join an <span className="font-serif font-normal text-ember italic">HM Cell.</span>
            </h3>
            <p className="mt-2 text-sm text-(--muted)">
              Life is not meant to be walked alone. Connect with young adults in your university, neighborhood, or career field.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="cell-select" className="block text-xs font-semibold tracking-wide text-(--fg)">
                  Select Cell Hub
                </label>
                <select
                  id="cell-select"
                  value={selectedCellId}
                  onChange={(e) => handleCellSelect(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm font-medium text-(--fg) focus:border-ember focus:outline-none"
                >
                  {CELLS.map((c) => (
                    <option key={c.id} value={c.id} className="bg-(--bg) text-(--fg)">
                      {c.name} ({c.zone} · {c.meetingDay}s)
                    </option>
                  ))}
                </select>
                <div className="mt-2 rounded-xl border border-(--line) bg-(--fg)/[0.03] p-3 text-xs text-(--muted)">
                  <div className="flex items-center justify-between font-medium text-(--fg)">
                    <span>Leaders: {activeCell.leaders}</span>
                    <span className="text-ember">{activeCell.meetingDay}s</span>
                  </div>
                  <p className="mt-1">{activeCell.meetingTime} · {activeCell.venue}</p>
                </div>
              </div>

              <div>
                <label htmlFor="preferred-day" className="block text-xs font-semibold tracking-wide text-(--fg)">
                  Preferred Meeting Day *
                </label>
                <select
                  id="preferred-day"
                  value={preferredDay}
                  onChange={(e) => setPreferredDay(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm font-medium text-(--fg) focus:border-ember focus:outline-none"
                >
                  {PREFERRED_DAYS.map((day) => (
                    <option key={day} value={day} className="bg-(--bg) text-(--fg)">
                      {day} {day === activeCell.meetingDay ? `(Matches ${activeCell.name})` : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="full-name" className="block text-xs font-semibold tracking-wide text-(--fg)">
                  Full Name *
                </label>
                <input
                  id="full-name"
                  type="text"
                  required
                  placeholder="e.g. Esther Namubiru"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="whatsapp-phone" className="block text-xs font-semibold tracking-wide text-(--fg)">
                  WhatsApp Number *
                </label>
                <input
                  id="whatsapp-phone"
                  type="tel"
                  required
                  placeholder="+256 700 000 000"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError('');
                  }}
                  className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                />
                {phoneError && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">{phoneError}</p>
                )}
              </div>

              <div>
                <label htmlFor="campus-workplace" className="block text-xs font-semibold tracking-wide text-(--fg)">
                  Campus / Workplace / Occupation
                </label>
                <input
                  id="campus-workplace"
                  type="text"
                  placeholder="e.g. Makerere University (Law) or Stanbic Bank"
                  value={workplaceOrCampus}
                  onChange={(e) => setWorkplaceOrCampus(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="cell-note" className="block text-xs font-semibold tracking-wide text-(--fg)">
                  Anything you’d love us to know? (Optional)
                </label>
                <textarea
                  id="cell-note"
                  rows={2}
                  placeholder="A prayer request, or whether you are new to Watoto Church..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-1.5 w-full resize-none rounded-xl border border-(--line) bg-(--bg) px-3.5 py-2.5 text-sm text-(--fg) placeholder:text-(--muted)/60 focus:border-ember focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="press flex w-full items-center justify-center rounded-full bg-ember py-3.5 text-sm font-semibold text-white shadow-md disabled:opacity-70"
                >
                  {submitting ? 'Connecting you to Cell...' : `Confirm & Join ${activeCell.name}`}
                </button>
              </div>

              <p className="text-center text-[11px] text-(--muted)">
                We respect your privacy. A cell leader will WhatsApp you to welcome you personally.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-ember/15 text-2xl text-ember">
              ✓
            </div>
            <p className="mt-4 text-xs font-semibold tracking-wider text-ember uppercase">Welcome to the Family</p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              You are connected, <span className="font-serif font-normal text-ember italic">{fullName || 'Friend'}!</span>
            </h3>
            <p className="mt-3 text-sm text-(--muted)">
              We have notified <strong>{activeCell.leaders}</strong> from <strong>{activeCell.name}</strong>. They will reach out to you on WhatsApp at <strong>{phone}</strong> before the next meeting.
            </p>

            <div className="mt-6 rounded-2xl border border-(--line) bg-(--fg)/[0.03] p-4 text-left text-sm">
              <div className="flex items-center justify-between border-b border-(--line) pb-2">
                <span className="text-xs text-(--muted)">Selected Cell</span>
                <span className="font-semibold text-(--fg)">{activeCell.name}</span>
              </div>
              <div className="flex items-center justify-between border-b border-(--line) py-2">
                <span className="text-xs text-(--muted)">Preferred Meeting Day</span>
                <span className="font-semibold text-ember">{preferredDay} ({activeCell.meetingDay}s)</span>
              </div>
              <div className="flex items-center justify-between border-b border-(--line) py-2">
                <span className="text-xs text-(--muted)">Time</span>
                <span className="font-medium text-(--fg)">{activeCell.meetingTime}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-(--muted)">Location</span>
                <span className="font-medium text-(--fg)">{activeCell.venue}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${activeCell.whatsappContact.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hi ${activeCell.leaders}, I just signed up for ${activeCell.name} on the History Makers platform! My name is ${fullName} (preferred meeting day: ${preferredDay}).`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="press flex items-center justify-center gap-2 rounded-full bg-ember py-3 text-sm font-semibold text-white shadow-xs"
              >
                <span>Say Hello on WhatsApp ({activeCell.whatsappContact})</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="press rounded-full border border-(--line) py-3 text-sm font-medium text-(--fg)"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
