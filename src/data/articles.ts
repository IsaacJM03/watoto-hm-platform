export type ArticleCategory =
  | 'Calling & Marketplace'
  | 'Culture & Dating'
  | 'Spiritual Formation'
  | 'Mental Health & Grace'
  | 'Leadership & Discipleship';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  excerpt: string;
  pullQuote: string;
  content: {
    sectionHeading?: string;
    paragraphs: string[];
  }[];
  keyTakeaway: string;
}

export const ARTICLE_CATEGORIES: ('All Essays' | ArticleCategory)[] = [
  'All Essays',
  'Calling & Marketplace',
  'Culture & Dating',
  'Spiritual Formation',
  'Mental Health & Grace',
  'Leadership & Discipleship',
];

export const ARTICLES: Article[] = [
  {
    id: 'navigating-ambition-and-calling',
    title: 'Navigating Ambition & Calling: Why Success Without Christ is Exhausting',
    slug: 'navigating-ambition-and-calling',
    category: 'Calling & Marketplace',
    readTime: '5 min read',
    publishDate: 'March 28, 2026',
    author: {
      name: 'Timothy Katende',
      role: 'Marketplace Lead & Strategy Consultant',
      avatarInitials: 'TK',
    },
    excerpt:
      'We were told our twenties are for climbing corporate ladders, scaling personal brands, and securing the bag at all costs. But what happens when you reach the top of the ladder only to realize it was leaning against the wrong wall?',
    pullQuote:
      'Ambition disconnected from Christ is just vanity with a business plan. The gospel frees you from using your career as a savior.',
    content: [
      {
        sectionHeading: 'The Golden Calf of Hustle Culture',
        paragraphs: [
          'If you walk into any cafe in Kololo or workspace in downtown Kampala at 8:00 AM on a Tuesday, you will feel the palpable hum of young ambition. Pitch decks on screens, resumes polished with every modern buzzword, and conversation revolving around the next round of capital or the next promotion.',
          'There is nothing inherently sinful about excellence. In fact, Proverbs commends diligence and skillful work before kings. But somewhere along the line, the city convinced our generation that our productivity equals our righteousness.',
          'When work becomes your righteousness, rest begins to feel like disobedience. Every email unanswered becomes a panic attack; every delay in career progression feels like existential rejection.',
        ],
      },
      {
        sectionHeading: 'The Exhaustion of Self-Justification',
        paragraphs: [
          'In Ecclesiastes, Solomon observes the builder who worked with all wisdom, skill, and knowledge, only to leave his wealth to someone who did not labor for it. He calls it "a great evil and a chasing after wind."',
          'Why is modern careerism so exhausting? Because we are asking our careers to do what only the Cross of Jesus Christ was designed to do: justify us, validate our existence, and prove that our lives matter.',
          'When you know you are already chosen, blood-bought, and crowned with everlasting honor by the Creator of the universe, you don’t need the company title to validate your soul. You can work with ruthless excellence—not out of desperation to become someone, but from the unshakeable reality that you already belong.',
        ],
      },
      {
        sectionHeading: 'Sabbath as Kingdom Resistance',
        paragraphs: [
          'In an economy that treats young adults as disposable units of labor, Sabbath rest is an act of spiritual warfare. It is your weekly declaration to the principalities of Kampala that you are a son of God, not a slave of Pharaoh.',
          'Anchor your Mondays in prayer. Give your best hours to God’s assignments. But never sacrifice your communion with Jesus or your fellowship in community on the altar of temporal promotion.',
        ],
      },
    ],
    keyTakeaway:
      'Work passionately from approval, never for approval. Jesus is already your ultimate reward.',
  },
  {
    id: 'dating-in-your-twenties-intentionality',
    title: 'Dating in Your 20s: Intentionality Over Situationships',
    slug: 'dating-in-your-twenties-intentionality',
    category: 'Culture & Dating',
    readTime: '6 min read',
    publishDate: 'March 14, 2026',
    author: {
      name: 'Joanita Nassiwa & Brian K.',
      role: 'HM Young Adult Mentors',
      avatarInitials: 'JN',
    },
    excerpt:
      'Ambiguity feels safe because it shields our fragile egos from rejection. But kingdom love is bold, clear, and covenant-minded. Why our generation must reclaim intentional courtship.',
    pullQuote:
      'If you are enjoying the emotional intimacy of a spouse without the clarity of commitment, someone is being defrauded.',
    content: [
      {
        sectionHeading: 'The Rise of Emotional Squatting',
        paragraphs: [
          'A "situationship" is what happens when two people want the benefits of marriage without the vulnerability of vows. You text every morning, share your deepest fears, call late into the night, and attend cell group together. But if someone asks, "Are you two together?", you retreat into vague mumbling about "vibing" and "seeing where things go."',
          'Let’s be honest: ambiguity is cowardice disguised as casualness. It protects the initiator from taking responsibility and leaves the other person constantly second-guessing their worth.',
          'The apostle Paul warned believers against defrauding one another in relationships. To defraud means to promise or awaken emotions and desires that you have no intention of fulfilling.',
        ],
      },
      {
        sectionHeading: 'Kingdom Clarity: The Courage to Speak',
        paragraphs: [
          'God is not the author of confusion. In the Scriptures, when Christ calls us, He is unmistakably clear: "Follow Me." When biblical men pursued women of honor, they did so in the light of day, before family and community.',
          'Brothers: if you admire a godly woman, honor her by asking her out with clarity. State your intentions. If she says no, accept it with grace and respect. If she says yes, lead the connection with purity, honoring her boundaries and walking with mentors.',
          'Sisters: you are a daughter of the King. You do not have to settle for crumbs of attention or audition for someone’s validation. Require clarity early. A man who fears God will never be intimidated by your standards.',
        ],
      },
      {
        sectionHeading: 'Community as the Safe Haven',
        paragraphs: [
          'Never date in the shadows. The best dating relationships in History Makers are those surrounded by wise friends, cell leaders, and mature mentors who can speak truth when romantic infatuation clouds judgment.',
        ],
      },
    ],
    keyTakeaway:
      'Clarity is kindness. Refuse ambiguity and pursue relationships that reflect Christ’s sacrificial covenant with His Church.',
  },
  {
    id: 'when-god-feels-silent-in-between',
    title: 'When God Feels Silent: A Theology of the In-Between',
    slug: 'when-god-feels-silent-in-between',
    category: 'Spiritual Formation',
    readTime: '7 min read',
    publishDate: 'February 24, 2026',
    author: {
      name: 'Pastor Joshua Mwesigwa',
      role: 'HM Discipleship Pastor',
      avatarInitials: 'JM',
    },
    excerpt:
      'Silence is not absence. In the painful gaps between answered prayers, God does His deepest surgical work on our secret idols. Learning to wait without growing cynical.',
    pullQuote:
      'God does not waste the silence. When His voice is quiet, His hands are actively sculpting your character for the weight of your calling.',
    content: [
      {
        sectionHeading: 'The Dread of the Waiting Room',
        paragraphs: [
          'In university and early adulthood, life feels like one high-stakes crossroads after another: Will I get the scholarship? Will this job interview pan out? Will the medical report come back clean? Will I ever meet someone?',
          'We pray, fast, attend all-night prayer watches at Downtown, and sow seeds of faith. And sometimes... nothing happens. The phone does not ring. The sky feels like brass.',
          'The modern church often struggles to teach the spiritual discipline of lament. We have songs for the breakthrough and testimonies for the victory, but what do you do on a Tuesday afternoon when God feels a million miles away?',
        ],
      },
      {
        sectionHeading: 'David in the Cave of Adullam',
        paragraphs: [
          'Remember David. He was anointed king of Israel as a teenager by Samuel. Yet within years, he was not sitting on a golden throne in Jerusalem—he was hiding in a damp cave in the wilderness, surrounded by debtors and outlaws, running from Saul’s spears.',
          'Did the anointing fail? Did God change His mind? Not for a second. The cave of Adullam was where David learned to say: "The Lord is my shepherd; I shall not want." God had to empty David of self-reliance so that when he finally wore the crown, he would rule with a heart after God.',
          'Silence is God’s greenhouse. It forces our shallow, transaction-based faith to mature into deep, unshakeable covenant trust.',
        ],
      },
      {
        sectionHeading: 'Staying Faithful in the Routine',
        paragraphs: [
          'When you cannot trace God’s hand, trust His character. Keep showing up to your cell group. Keep reading your Bible even when the pages feel dry. Keep loving your roommates. The dawn is coming.',
        ],
      },
    ],
    keyTakeaway:
      'God’s delays are not His denials. Let the silence burn away your idols and deepen your roots in His goodness.',
  },
  {
    id: 'marketplace-priests-nine-to-five-altar',
    title: 'Marketplace Priests: Your 9-to-5 Is an Altar',
    slug: 'marketplace-priests-nine-to-five-altar',
    category: 'Calling & Marketplace',
    readTime: '4 min read',
    publishDate: 'February 10, 2026',
    author: {
      name: 'Sarah Katende',
      role: 'Corporate Finance Director & HM Elder',
      avatarInitials: 'SK',
    },
    excerpt:
      'Sunday is not the only place where God’s glory dwells. When you audit a balance sheet with ruthless integrity or care for a difficult customer, you are exercising royal priesthood in the city.',
    pullQuote:
      'The sacred-secular divide is an unbiblical myth. The hospital ward, the courtroom, and the startup office are holy ground when occupied by a child of God.',
    content: [
      {
        sectionHeading: 'Dismantling the Two-Tier Christian',
        paragraphs: [
          'For generations, young believers were subtly taught that "full-time ministry" only belongs to pastors, missionaries, and worship leaders. Everyone else—engineers, doctors, bankers, traders—was relegated to second-class status, useful primarily for funding the church budget.',
          'This is a distortion of the New Testament. 1 Peter 2:9 does not say "Only the clergy are a royal priesthood." It says: "You are a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness."',
          'When Joseph was prime minister of Egypt, he did not run church services; he managed national agricultural logistics during a famine. Daniel was prime minister of Babylon. Nehemiah was a city planner and governor.',
        ],
      },
      {
        sectionHeading: 'Excellence as Spiritual Warfare',
        paragraphs: [
          'How do you proclaim His praises in corporate Kampala? It begins with unshakeable competence. Christians should never produce sloppy code, arrive thirty minutes late to client meetings, or submit half-hearted reports and blame it on "spiritual warfare."',
          'When your work is undeniable in quality, people want to know the spirit that operates inside you. That is when your verbal witness carries weight.',
          'And when corruption knocks on your door—the pressure to falsify tax returns, pay a bribe, or exploit an employee—your refusal to bend is a spiritual declaration that Jesus Christ is Lord over your sector.',
        ],
      },
    ],
    keyTakeaway:
      'Whatever you do, work heartily as unto the Lord. Your workplace is your parish.',
  },
  {
    id: 'mental-health-crisis-university-grace',
    title: 'The Mental Health Crisis in University: Grace for the Overwhelmed',
    slug: 'mental-health-crisis-university-grace',
    category: 'Mental Health & Grace',
    readTime: '6 min read',
    publishDate: 'January 19, 2026',
    author: {
      name: 'Dr. Mercy Atuhaire',
      role: 'Resident Physician & HM Peer Counselor',
      avatarInitials: 'MA',
    },
    excerpt:
      'Panic attacks and depressive seasons are not a failure of faith; they are alarms telling us that the human vessel cannot carry alone what only the Cross was designed to bear.',
    pullQuote:
      'Taking medication or seeing a Christian counselor does not undermine the power of prayer; it acknowledges that God works through both providence and miracle to heal the whole person.',
    content: [
      {
        sectionHeading: 'Breaking the Silence of the Ivory Tower',
        paragraphs: [
          'Across Makerere, Kyambogo, MUBS, and universities nationwide, student counselors report unprecedented spikes in severe clinical anxiety, panic disorders, and depression.',
          'The convergence of economic uncertainty, social media comparison, family financial pressures, and academic competition has created a pressure cooker. Tragically, in many Christian circles, the response to someone having a panic attack is still: "You lack faith. Pray harder."',
          'This misdiagnosis crushes broken reeds. Scripture never presents holy people as immune to emotional distress. Elijah sat under a broom tree wishing for death (1 Kings 19). David wrote psalms soaked in sorrow and sleeplessness (Psalm 42). Jesus Himself sweated drops like blood in the garden of Gethsemane under agonizing anguish.',
        ],
      },
      {
        sectionHeading: 'The Ministry of Sleep, Food, and Community',
        paragraphs: [
          'When Elijah was suicidal and exhausted, God did not rebuke his theology. God sent an angel with warm bread and fresh water, and let Elijah sleep. Twice.',
          'Sometimes the most spiritual thing you can do for your soul tonight is turn off your phone at 10 PM, eat a proper meal, and sleep eight hours. Your body is a temple of the Holy Spirit, not an engine to be run into the ground.',
          'And if your anxiety persists, reach out. History Makers has trained peer mentors, counseling partnerships, and cell communities ready to walk beside you without shame.',
        ],
      },
    ],
    keyTakeaway:
      'There is no condemnation in Christ Jesus. You do not have to fight the darkness alone.',
  },
];
