export type CellFocus = 'Campus' | 'Marketplace' | 'Creatives' | 'Young Professionals';
export type MeetingDay = 'Wednesday' | 'Thursday' | 'Saturday';

export interface Cell {
  id: string;
  name: string;
  leaders: string;
  zone: string;
  campus: string;
  meetingDay: MeetingDay;
  meetingTime: string;
  venue: string;
  focus: CellFocus;
  tagline: string;
  description: string;
  membersCount: number;
  whatsappContact: string;
}

export const ZONES = [
  'All Zones',
  'Makerere (MUK)',
  'Kyambogo (KYU)',
  'Nakawa & MUBS',
  'Downtown',
  'Ntinda & Naalya',
  'Bugolobi',
  'Kansanga & Ggaba',
  'Lubowa & Entebbe Road',
] as const;

export const DAYS: ('All Days' | MeetingDay)[] = ['All Days', 'Wednesday', 'Thursday', 'Saturday'];

export const FOCUS_TRACKS: ('All Tracks' | CellFocus)[] = [
  'All Tracks',
  'Campus',
  'Young Professionals',
  'Marketplace',
  'Creatives',
];

export const CELLS: Cell[] = [
  {
    id: 'lumumba-makerere',
    name: 'Lumumba & Complex Cell',
    leaders: 'Joshua Kigozi & Peace Ainembabazi',
    zone: 'Makerere (MUK)',
    campus: 'Makerere Main Campus',
    meetingDay: 'Thursday',
    meetingTime: '6:30 PM – 8:00 PM',
    venue: 'Mitchel Hall Quad / Complex Hall Common Room',
    focus: 'Campus',
    tagline: 'Discipleship in the heart of the Ivory Tower.',
    description:
      'A vibrant home for undergrads across Lumumba, Mary Stuart, Mitchel, and Kikoni hostels. We unpack real campus pressures, academic anxieties, and walking in bold faith.',
    membersCount: 16,
    whatsappContact: '+256 701 442 819',
  },
  {
    id: 'innovation-downtown',
    name: 'The Innovation Hub Cell',
    leaders: 'Brian K. & Tracy Namubiru',
    zone: 'Downtown',
    campus: 'Downtown & Nakasero',
    meetingDay: 'Wednesday',
    meetingTime: '6:30 PM – 8:00 PM',
    venue: 'Lumumba Avenue Tech Loft (opp. French School)',
    focus: 'Marketplace',
    tagline: 'Christ in code, capital, and corporate corridors.',
    description:
      'Engineers, analysts, product managers, and founders meeting weekly to anchor career ambition in kingdom calling. We talk workplace integrity, ethics, and sacrificial leadership.',
    membersCount: 19,
    whatsappContact: '+256 772 884 102',
  },
  {
    id: 'kyambogo-north',
    name: 'Kyambogo Banda Gate Cell',
    leaders: 'Samuel Ochieng & Mercy Atuhaire',
    zone: 'Kyambogo (KYU)',
    campus: 'Kyambogo University',
    meetingDay: 'Thursday',
    meetingTime: '6:00 PM – 7:30 PM',
    venue: 'Banda Upper Gate Fellowship Green',
    focus: 'Campus',
    tagline: 'Resilient faith through academic pressures.',
    description:
      'Connecting students across engineering, education, and vocational faculties. A tight-knit community where you are known, loved, and mentored.',
    membersCount: 14,
    whatsappContact: '+256 754 119 403',
  },
  {
    id: 'bugolobi-creatives',
    name: 'Bugolobi Creatives & Media Cell',
    leaders: 'David Mugisha & Chloe Kemigisha',
    zone: 'Bugolobi',
    campus: 'Bugolobi & Industrial Area',
    meetingDay: 'Saturday',
    meetingTime: '4:30 PM – 6:15 PM',
    venue: 'Spring Road Studio Garden',
    focus: 'Creatives',
    tagline: 'Reclaiming storytelling, art, and culture for the King.',
    description:
      'Designers, photographers, musicians, writers, and digital creators exploring craft as worship and navigating client pressures with biblical excellence.',
    membersCount: 17,
    whatsappContact: '+256 703 662 901',
  },
  {
    id: 'ntinda-professionals',
    name: 'Ntinda Young Professionals',
    leaders: 'Andrew Ssemakula & Joanita Nassiwa',
    zone: 'Ntinda & Naalya',
    campus: 'Ntinda Hub',
    meetingDay: 'Wednesday',
    meetingTime: '7:00 PM – 8:30 PM',
    venue: 'Ministers’ Village Garden',
    focus: 'Young Professionals',
    tagline: 'Early careers, ethical boldness, and kingdom stewardship.',
    description:
      'Young lawyers, doctors, finance professionals, and civil servants navigating the transition from university to career, financial stewardship, and intentional mentorship.',
    membersCount: 15,
    whatsappContact: '+256 782 509 331',
  },
  {
    id: 'mubs-kataza',
    name: 'MUBS Kataza Marketplace Cell',
    leaders: 'Kevin Mwesigwa & Fiona Akello',
    zone: 'Nakawa & MUBS',
    campus: 'MUBS Nakawa',
    meetingDay: 'Wednesday',
    meetingTime: '6:00 PM – 7:30 PM',
    venue: 'Kataza Hostel Green, Nakawa',
    focus: 'Campus',
    tagline: 'Kingdom economics and integrity before graduation.',
    description:
      'Business, finance, and procurement students gathering for sharp discussions on integrity, career preparation, and living unashamedly for Jesus.',
    membersCount: 18,
    whatsappContact: '+256 706 912 405',
  },
  {
    id: 'kansanga-shore',
    name: 'Kansanga & Ggaba International Cell',
    leaders: 'Emmanuel Opio & Grace Nabatanzi',
    zone: 'Kansanga & Ggaba',
    campus: 'KIU & Cavendish Hub',
    meetingDay: 'Thursday',
    meetingTime: '6:30 PM – 8:00 PM',
    venue: 'Ggaba Road Coffee Hub Terrace',
    focus: 'Young Professionals',
    tagline: 'A home away from home across cultures.',
    description:
      'A warm, multicultural fellowship welcoming university students and young expat professionals from across East Africa. Rich hospitality and honest conversations.',
    membersCount: 13,
    whatsappContact: '+256 777 341 829',
  },
  {
    id: 'lubowa-hill',
    name: 'Lubowa Hill Fellowship',
    leaders: 'Timothy & Sarah Katende',
    zone: 'Lubowa & Entebbe Road',
    campus: 'Entebbe Corridor',
    meetingDay: 'Saturday',
    meetingTime: '5:00 PM – 6:45 PM',
    venue: 'Quality Hill Living Room, Lubowa',
    focus: 'Young Professionals',
    tagline: 'Deep roots, intentional hospitality, and kingdom homes.',
    description:
      'Young adults in their mid-to-late 20s cultivating rooted faith, generous hospitality, and mutual accountability outside the city rush.',
    membersCount: 12,
    whatsappContact: '+256 781 229 018',
  },
  {
    id: 'entebbe-runway',
    name: 'Entebbe Runway Cell',
    leaders: 'Daniel Okello & Hope Tumusiime',
    zone: 'Lubowa & Entebbe Road',
    campus: 'Entebbe Municipality',
    meetingDay: 'Thursday',
    meetingTime: '7:00 PM – 8:30 PM',
    venue: 'Manyago Entebbe',
    focus: 'Marketplace',
    tagline: 'Light by the lake, salt in aviation and public service.',
    description:
      'Serving young adults stationed in Entebbe across government ministries, aviation, conservation, and health sectors.',
    membersCount: 11,
    whatsappContact: '+256 702 119 550',
  },
];
