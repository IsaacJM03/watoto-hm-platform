import assert from 'node:assert/strict';
import { CELLS, ZONES, DAYS, FOCUS_TRACKS } from '../src/data/cells.ts';
import { TESTIMONIES, TESTIMONY_CATEGORIES } from '../src/data/testimonies.ts';
import { ARTICLES, ARTICLE_CATEGORIES } from '../src/data/articles.ts';

console.log('--- Running Watoto HM Platform Deep Verification Suite ---');

// 1. Cells Verification
console.log('1. Verifying CELLS dataset...');
assert.ok(CELLS.length >= 8, `Expected at least 8 cells, found ${CELLS.length}`);

for (const cell of CELLS) {
  assert.ok(cell.id && cell.id.length > 2, `Cell id missing: ${cell.id}`);
  assert.ok(cell.name && cell.name.length > 3, `Cell name missing: ${cell.name}`);
  assert.ok(cell.leaders && cell.leaders.length > 3, `Cell leaders missing: ${cell.leaders}`);
  assert.ok(cell.venue && cell.venue.length > 3, `Cell venue missing: ${cell.venue}`);
  assert.ok(ZONES.includes(cell.zone as (typeof ZONES)[number]), `Invalid zone: ${cell.zone}`);
  assert.ok(DAYS.includes(cell.meetingDay), `Invalid meetingDay: ${cell.meetingDay}`);
  assert.ok(FOCUS_TRACKS.includes(cell.focus), `Invalid focus: ${cell.focus}`);
  assert.ok(cell.membersCount > 0, `Members count must be positive`);
  assert.ok(cell.whatsappContact.startsWith('+256'), `WhatsApp contact must be Ugandan +256: ${cell.whatsappContact}`);
}
console.log(`✓ All ${CELLS.length} cells validated.`);

// 2. Cell Directory Filter Logic Test
console.log('2. Verifying Cell Directory search & filter simulation...');
const searchSim = (q: string, zone = 'All Zones', day = 'All Days', track = 'All Tracks') => {
  const query = q.toLowerCase().trim();
  return CELLS.filter((c) => {
    const matchZone = zone === 'All Zones' || c.zone === zone;
    const matchDay = day === 'All Days' || c.meetingDay === day;
    const matchTrack = track === 'All Tracks' || c.focus === track;
    const matchSearch =
      !query ||
      c.name.toLowerCase().includes(query) ||
      c.zone.toLowerCase().includes(query) ||
      c.leaders.toLowerCase().includes(query) ||
      c.campus.toLowerCase().includes(query) ||
      c.venue.toLowerCase().includes(query) ||
      c.focus.toLowerCase().includes(query) ||
      c.meetingDay.toLowerCase().includes(query);
    return matchZone && matchDay && matchTrack && matchSearch;
  });
};

assert.equal(searchSim('', 'Makerere (MUK)').length, 1);
assert.equal(searchSim('', 'All Zones', 'Wednesday').length, 3);
assert.equal(searchSim('Mitchel').length, 1);
assert.equal(searchSim('entebbe').length, 2); // Lubowa & Entebbe road has Entebbe runway
assert.equal(searchSim('creatives').length, 1);
assert.equal(searchSim('thursday').length, 4);
console.log('✓ Cell search & filtering logic tested with 6 distinct queries.');

// 3. Testimonies Verification
console.log('3. Verifying TESTIMONIES dataset...');
assert.ok(TESTIMONIES.length >= 6, `Expected at least 6 testimonies, found ${TESTIMONIES.length}`);

for (const t of TESTIMONIES) {
  assert.ok(t.id && t.id.length > 2, `Testimony id missing`);
  assert.ok(t.name && t.name.length > 2, `Testimony name missing`);
  assert.ok(t.role && t.role.length > 2, `Testimony role missing`);
  assert.ok(t.location && t.location.length > 2, `Testimony location missing`);
  assert.ok(t.age >= 18 && t.age <= 35, `Testimony age out of young adult range: ${t.age}`);
  assert.ok(TESTIMONY_CATEGORIES.includes(t.category), `Invalid category: ${t.category}`);
  assert.ok(t.pullQuote && t.pullQuote.length > 15, `Pull quote too short`);
  assert.ok(t.fullStory && t.fullStory.length >= 3, `Full story must have >= 3 paragraphs`);
  assert.ok(t.turningPoint && t.turningPoint.length > 10, `Turning point missing`);
  assert.ok(t.scriptureAnchor && t.scriptureAnchor.length > 5, `Scripture anchor missing`);
  assert.ok(t.encouragement && t.encouragement.length > 10, `Encouragement missing`);
}
console.log(`✓ All ${TESTIMONIES.length} testimonies validated.`);

// 4. Articles Verification
console.log('4. Verifying ARTICLES dataset...');
assert.ok(ARTICLES.length >= 5, `Expected at least 5 articles, found ${ARTICLES.length}`);

const slugs = new Set<string>();
for (const a of ARTICLES) {
  assert.ok(a.id && a.id.length > 2, `Article id missing`);
  assert.ok(a.title && a.title.length > 5, `Article title missing: ${a.title}`);
  assert.ok(a.slug && a.slug.length > 2, `Article slug missing: ${a.slug}`);
  assert.ok(!slugs.has(a.slug), `Duplicate slug: ${a.slug}`);
  slugs.add(a.slug);
  assert.ok(ARTICLE_CATEGORIES.includes(a.category), `Invalid category: ${a.category}`);
  assert.ok(a.author.name && a.author.avatarInitials, `Author missing in ${a.id}`);
  assert.ok(a.content && a.content.length >= 2, `Article content sections must be >= 2`);
  assert.ok(a.keyTakeaway && a.keyTakeaway.length > 10, `Key takeaway missing`);
}
console.log(`✓ All ${ARTICLES.length} articles validated.`);

// 5. Deep-link Slug Resolution Test
console.log('5. Verifying Hash Deep-Link Resolution...');
for (const a of ARTICLES) {
  const hash = `#journal-${a.slug}`;
  const extractedSlug = hash.replace('#journal-', '');
  const matched = ARTICLES.find((item) => item.slug === extractedSlug);
  assert.equal(matched?.id, a.id, `Hash failed to resolve article ${a.id}`);
}
console.log('✓ Hash deep-linking correctly resolves 100% of article slugs.');

// 6. Cell Sign-Up Preferred Day Contract Test
console.log('6. Verifying Cell Sign-Up Preferred Day Contract...');
const preferredDays = ['Wednesday', 'Thursday', 'Saturday', 'Flexible / Any Day'];
for (const cell of CELLS) {
  assert.ok(
    preferredDays.some((d) => d === cell.meetingDay),
    `Cell meeting day ${cell.meetingDay} must match available preferred days`,
  );
}
console.log('✓ Preferred days contractual alignment verified.');

console.log('--- ALL DEEP VERIFICATION CHECKS PASSED SUCCESSFULLY ---');
