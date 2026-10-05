export type TestimonyCategory =
  | 'Campus & Freedom'
  | 'Marketplace Integrity'
  | 'Anxiety & Healing'
  | 'Relationships & Identity'
  | 'Deliverance & Purpose';

export interface Testimony {
  id: string;
  name: string;
  role: string;
  location: string;
  age: number;
  category: TestimonyCategory;
  title: string;
  pullQuote: string;
  excerpt: string;
  fullStory: string[];
  turningPoint: string;
  scriptureAnchor: string;
  date: string;
  encouragement: string;
}

export const TESTIMONY_CATEGORIES: ('All Stories' | TestimonyCategory)[] = [
  'All Stories',
  'Campus & Freedom',
  'Marketplace Integrity',
  'Anxiety & Healing',
  'Relationships & Identity',
  'Deliverance & Purpose',
];

export const TESTIMONIES: Testimony[] = [
  {
    id: 'esther-namubiru',
    name: 'Esther N.',
    role: 'Law Student',
    location: 'Makerere University (MUK)',
    age: 22,
    category: 'Anxiety & Healing',
    title: 'The Night the Panic Stopped in Mitchel Hall',
    pullQuote:
      'I carried 4.8 GPA expectations on my shoulders and panic attacks in my room at 3 AM. Jesus didn’t just fix my grades—He gave me back my breath.',
    excerpt:
      'By second year, my identity was entirely tied to academic excellence. When panic attacks started suffocating me before jurisprudence exams, church felt like one more performance where I had to look composed.',
    fullStory: [
      'I grew up as the firstborn girl in a high-achieving family. Everyone in the village knew Esther as the sharp girl who made it on government sponsorship at Makerere Law School. What they didn’t see were the sleepless nights staring at the ceiling in Complex Hall, heart racing at 140 bpm, convinced that a single B-grade would render my entire existence meaningless.',
      'By the first semester of my second year, panic attacks were weekly occurrences. I would lock myself in the reading rooms and hyperventilate into my cardigan. I prayed desperate, transactional prayers: "God, just let me pass this exam, and I will fast for three days." I treated God like a celestial examiner.',
      'One Friday evening, a classmate in my tutorial group literally dragged me to History Makers at Downtown Kampala. I was so exhausted I could barely stand. During worship, as the room sang about being called out of darkness into marvelous light, something inside me cracked open.',
      'I collapsed onto my knees in the back row. A cell leader named Peace knelt beside me. She didn’t preach at me, diagnose me, or quote empty platitudes. She just laid a hand on my trembling shoulder and prayed: "Lord, let Esther know she is your beloved daughter before she ever reads another law book."',
      'In that quiet moment, the suffocating weight lifted off my chest. I took my first full, deep breath in eight months. The next week, I joined the Lumumba cell group. They brought me groundnuts and tea during exam week, checked on my sleep, and reminded me that my identity is anchored in Christ’s finished work, not my transcript.',
    ],
    turningPoint:
      'Kneeling in the back row of an HM Friday Night gathering when a cell sister held my shaking hand and prayed the Father’s unconditional love over my academic anxiety.',
    scriptureAnchor: '1 Peter 2:9 — “Called out of darkness into His marvelous light.”',
    date: 'March 2026',
    encouragement:
      'Your worth was never purchased by your GPA or your achievements. Christ paid for you in full. You can exhale and rest in Him.',
  },
  {
    id: 'brian-kigozi',
    name: 'Brian K.',
    role: 'Software & Operations Lead',
    location: 'Downtown Kampala',
    age: 25,
    category: 'Marketplace Integrity',
    title: 'Tearing Up the 10% Bribe: Faith in Corporate Corridors',
    pullQuote:
      'Everyone told me “This is how Kampala works; take the cut.” But my Friday nights at HM had ruined my appetite for dishonest gain.',
    excerpt:
      'In my second year managing IT procurement for a corporate firm on Jinja Road, a vendor slipped an envelope of cash into my laptop bag with a wink. The pressure to conform was immense.',
    fullStory: [
      'Corporate Kampala can be a brutal place for a twenty-something with big ambitions. You enter the marketplace with ideals, and within three months, senior colleagues quietly pull you aside and explain "the system"—how tender specifications are tweaked, how kickbacks are disguised as consultation fees, and how everyone takes their cut.',
      'We were procuring a $45,000 server infrastructure upgrade. A vendor I had vetted slipped an envelope containing several million shillings into my bag after a lunch meeting, saying, "Brian, this is just facilitation for your cooperation. The paperwork is already approved."',
      'My salary at the time was modest, and my younger brother was entering secondary school with unpaid fees. The enemy whispered all the rationalizations: "Nobody will know. You didn’t ask for it. You can even tithe on it."',
      'That Wednesday at our HM Marketplace Cell on Lumumba Avenue, we were studying Daniel chapter 1—resolving not to defile oneself with the king’s table. I couldn’t sleep that night. The conviction of the Holy Spirit was heavier than any financial burden.',
      'The next morning, I walked into the managing director’s office, placed the envelope on his desk, and laid out the vendor’s manipulation. I was terrified of being framed or quietly pushed out. Instead, the MD looked at me in disbelief. Three months later, our company instituted a new procurement ethics policy and promoted me to oversee operations.',
    ],
    turningPoint:
      'Choosing the fear of the Lord over a five-million-shilling envelope on a Tuesday afternoon, trusting God to provide for my family with clean hands.',
    scriptureAnchor:
      'Proverbs 11:1 — “Dishonest scales are an abomination to the Lord, but a just weight is His delight.”',
    date: 'February 2026',
    encouragement:
      'Integrity costs in the short run, but it purchases supernatural authority and unshakeable peace that money can never buy.',
  },
  {
    id: 'samuel-ochieng',
    name: 'Samuel O.',
    role: 'Civil Engineering Graduate',
    location: 'Kyambogo University (KYU)',
    age: 23,
    category: 'Campus & Freedom',
    title: 'From Secret Isolation to Living in the Open',
    pullQuote:
      'I lived a double life for three years—singing in worship on Friday, chained to secret shame on Tuesday midnight. The cross was bigger than my secret.',
    excerpt:
      'Shame tells you that confessing will destroy you. In reality, keeping silent was slowly killing my soul. I was paralyzed by guilt until I stepped into an HM men’s accountability circle.',
    fullStory: [
      'I was the guy on the microphone. People looked up to me on campus as spiritually mature. But when the lights went out in my Banda hostel room, I was hopelessly trapped in a pornography addiction that began in high school.',
      'The cycle of sin, repentance, intense self-loathing, and relapse had eroded any belief that God could actually deliver me. I lived in constant dread of exposure. I thought holiness meant hiding your scars better than everyone else.',
      'During an HM weekend discipleship retreat, one of the older mentors gave a teaching on James 5:16 and said: "Sin grows in the dark. As long as you keep your struggle private, the devil owns your privacy."',
      'After the session, I asked three brothers from my cell to meet me behind the main chapel. With tears running down my face, I confessed everything. I expected disgust or awkward distancing. Instead, those three men wrapped their arms around me, wept with me, prayed for deliverance, and committed to walking the road together.',
      'They put Covenant Eyes on my devices, called me at 11 PM on hard nights, and met for morning prayer at 6 AM at Banda gate. Today, I am eighteen months clean. Freedom isn’t the absence of temptation; it’s having a brotherhood where darkness has nowhere left to hide.',
    ],
    turningPoint:
      'Weeping behind the Kyambogo chapel as three brothers hugged me after my confession and refused to let me walk alone.',
    scriptureAnchor:
      'James 5:16 — “Confess your trespasses to one another, and pray for one another, that you may be healed.”',
    date: 'January 2026',
    encouragement:
      'Darkness loses all its power the moment you drag it into the light. You do not have to carry the secret anymore. Step into brotherhood.',
  },
  {
    id: 'chloe-kemigisha',
    name: 'Chloe K.',
    role: 'Creative Producer & Filmmaker',
    location: 'Bugolobi',
    age: 24,
    category: 'Relationships & Identity',
    title: 'Surviving the Situationship Maze',
    pullQuote:
      'I thought being loved meant being tolerated for convenience. God redefined my worth before I ever met someone who saw me through His eyes.',
    excerpt:
      'For almost two years, I was trapped in an ambiguous relationship with no commitment, no clarity, and endless emotional exhaustion. I kept lowering my standards, hoping love would grow from crumbs.',
    fullStory: [
      'In the creative community around Kampala, modern dating is often an exercise in emotional minimalism. No labels, no exclusivity, just "vibes" and late-night texts when it’s convenient. I convinced myself I was modern and progressive enough to handle it.',
      'In reality, my self-esteem was bleeding out. Every weekend was an anxiety-ridden game of waiting for his call, analyzing emojis, and silencing my core values just to keep him around. I was giving away the intimacy of a wife with none of the security of covenant.',
      'A friend invited me to an HM Roundtable on Relationships titled "Can We Talk About Dating?". The conversation was raw and uncompromising. A married mentor couple spoke about intentionality, honoring boundaries, and refusing to give holy things to dogs.',
      'The speaker said something that pierced my heart: "If a man is not pursuing you with clarity and Christ-like selflessness, he is consuming you for comfort." I went home that night and wept before the Lord for three hours.',
      'With the support of two sisters from the Bugolobi Creatives cell, I sent a clear, loving, but firm closure message and blocked the line. God used the next year to heal the father-wounds that made me crave cheap validation. Today, I am whole, creative, and joyful in my singleness.',
    ],
    turningPoint:
      'Realizing at an HM Roundtable that settle-for-less dating was dishonoring the price Jesus paid for my purity and dignity.',
    scriptureAnchor:
      'Psalm 139:14 — “I will praise You, for I am fearfully and wonderfully made; marvelous are Your works.”',
    date: 'March 2026',
    encouragement:
      'Do not negotiate your dignity for temporary attention. You are worth intentional, Christ-honoring clarity and covenant love.',
  },
  {
    id: 'daniel-okello',
    name: 'Daniel O.',
    role: 'Economics & Trade Undergrad',
    location: 'MUBS Nakawa',
    age: 21,
    category: 'Deliverance & Purpose',
    title: 'When the Retake Didn’t Define My Destiny',
    pullQuote:
      'I thought missing graduation meant God had abandoned me. In my darkest semester, my HM cell group was the family that held up my hands.',
    excerpt:
      'Seeing my classmates in graduation gowns while I had to repeat two papers felt like a death sentence. Depression hit so hard I didn’t want to leave my hostel room for weeks.',
    fullStory: [
      'When the MUBS graduation list came out and my registration number wasn’t there, the shame was paralyzing. My parents had sold land in Gulu to pay my tuition. I couldn’t face them. I switched off my phone and stayed in bed in Kataza for four days straight, barely eating.',
      'I felt like a complete failure. Suicidal thoughts began knocking on the door of my mind: "Everyone would be better off without you." That Thursday evening, my cell leaders from the MUBS Kataza cell knocked on my room door. When I didn’t open, they called through the window: "Dan, we have rolex and spiced chai. We’re not leaving until we eat together."',
      'They sat on my mattress, didn’t judge me, and listened to my grief for hours. Over the next semester, they organized group revision schedules, prayed over my study sessions, and paid for two textbooks I couldn’t afford.',
      'Not only did I clear both retakes with As, but that detour taught me resilience, true humility, and compassion for students on academic probation. Today, I lead the academic mentorship ministry in our campus cell, helping over 30 freshmen navigate coursework with faith.',
    ],
    turningPoint:
      'My cell group refusing to let me starve in my dark hostel room, showing up with rolex and study schedules when I had lost all will to live.',
    scriptureAnchor:
      'Romans 8:28 — “And we know that all things work together for good to those who love God, to those who are called according to His purpose.”',
    date: 'February 2026',
    encouragement:
      'A delay is not a denial, and a failure is not your final chapter. God writes His deepest redemption stories in the detours.',
  },
  {
    id: 'joanita-nassiwa',
    name: 'Joanita N.',
    role: 'Healthcare Administrator',
    location: 'Ntinda',
    age: 26,
    category: 'Anxiety & Healing',
    title: 'Forgiving My Estranged Father at an HM Gathering',
    pullQuote:
      'I held bitterness like a shield for ten years. During Friday night worship, God whispered: “You cannot carry My marvelous light while clutching old wounds.”',
    excerpt:
      'My father abandoned our family when I was fourteen. Every achievement I chased was an angry attempt to prove I didn’t need him. But the bitterness was poisoning my relationships and physical health.',
    fullStory: [
      'Bitterness can feel like power. It protects you from being vulnerable, gives you an edge in competitive environments, and fuels a relentless drive to succeed. I graduated top of my class, got a managerial position in healthcare, and thought I had won.',
      'Behind closed doors, I suffered from severe chronic migraines, panic reactions to male authority figures, and a constant cynicism about love. If anyone disappointed me even slightly, I cut them off without mercy.',
      'During an HM Friday Night series on "Royal Priesthood: Ministering Healing to Our Broken Homes", the pastor shared about how unreleased unforgiveness binds us to the very person who hurt us.',
      'During the altar call, the Holy Spirit confronted me gently: "Joanita, how long will you keep holding your father’s debt when I forgave yours?" The tears poured out uncontrollably. I fell to my knees and verbally released him to God.',
      'Right after the service, I walked into the quiet courtyard, took out my phone, and dialed his number for the first time in nine years. When he answered with a cracked voice, I simply said: "Daddy, I called to tell you that Jesus loves you, and I have forgiven you." That phone call set me free from a decade-long prison.',
    ],
    turningPoint:
      'Dialing my estranged father’s phone number from the church parking lot after Friday night worship and speaking forgiveness over ten years of silence.',
    scriptureAnchor:
      'Ephesians 4:32 — “And be kind to one another, tenderhearted, forgiving one another, even as God in Christ forgave you.”',
    date: 'January 2026',
    encouragement:
      'Forgiveness does not make the wrong right; it releases the offender into God’s hands and unchains the prisoner—who was always you.',
  },
];
