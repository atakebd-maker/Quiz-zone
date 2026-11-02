import { QuizCategory, QuizQuestion, Language } from '../types/quiz';
import { BANGLA_RIDDLES_CATEGORY } from './banglaRiddlesData';

export { BANGLA_RIDDLES_CATEGORY, BANGLA_RIDDLES_DATA } from './banglaRiddlesData';

export const QUIZ_CATEGORIES: QuizCategory[] = [
  BANGLA_RIDDLES_CATEGORY,
  {
    id: 'easy-riddles',
    slug: 'easy-riddles',
    title: 'সহজ বাংলা ধাঁধা (Easy Riddles)',
    titleEn: 'Easy Bengali Riddles',
    description: 'ছোট-বড় সবার জন্য চিরচেনা ও আকর্ষণীয় চিরায়ত বাংলা গ্রামীণ ধাঁধা ও মজার উত্তর।',
    descriptionEn: 'Classic, delightful, and fun traditional Bengali folk riddles with clever answers for all ages.',
    iconName: 'Sparkles',
    colorScheme: 'sky',
    featured: true,
    popular: true,
    difficulty: 'Beginner',
    difficultyEn: 'Easy Level',
    questions: [
      {
        id: 'er-1',
        categoryId: 'easy-riddles',
        question: 'দাঁত আছে কিন্তু কামড়াতে পারে না, সেটি কী?',
        questionEn: 'It has teeth but cannot bite, what is it?',
        options: ['চিরুনি', 'করাত', 'চাবি', 'কাঁটাচামচ'],
        optionsEn: ['Comb', 'Saw', 'Key', 'Fork'],
        correctIndex: 0,
        explanation: 'চিরুনির লম্বা সারি সারি দাঁত থাকে যার সাহায্যে চুল আঁচড়ানো হয়, কিন্তু এটি জীবন্ত নয় বলে কামড়াতে পারে না।',
        explanationEn: 'A comb has rows of teeth used for grooming hair, but being inanimate, it cannot bite.',
        interestingFact: 'প্রাচীন মিশরে প্রায় ৫ হাজার বছর আগেও হাতির দাঁত ও কাঠের তৈরি চিরুনির প্রচলন ছিল।',
        interestingFactEn: 'Combs made of ivory and carved wood were already in use in ancient Egypt over 5,000 years ago.'
      },
      {
        id: 'er-2',
        categoryId: 'easy-riddles',
        question: 'যত কাটবে তত বড় হবে, সেটি কী?',
        questionEn: 'The more you cut away from it, the bigger it gets. What is it?',
        options: ['গাছ', 'গর্ত', 'কাপড়', 'নদী'],
        optionsEn: ['Tree', 'Hole', 'Cloth', 'River'],
        correctIndex: 1,
        explanation: 'মাটি যত বেশি কেটে সরানো হবে, গর্তের আকার তত বেশি বড় ও গভীর হতে থাকবে।',
        explanationEn: 'The more soil or material you dig out and remove, the larger and deeper the hole becomes.',
        interestingFact: 'রাশিয়ার কোলা সুপারডিপ বোরহোল মানুষের খনন করা গভীরতম কৃত্রিম গর্ত, যার গভীরতা প্রায় ১২.২ কিমি!',
        interestingFactEn: "Russia's Kola Superdeep Borehole is the deepest man-made hole on Earth, reaching over 12.2 km depth!"
      },
      {
        id: 'er-3',
        categoryId: 'easy-riddles',
        question: 'মুখ আছে কিন্তু কথা বলতে পারে না, সেটি কী?',
        questionEn: 'It has a mouth but cannot speak, what is it?',
        options: ['কলসি', 'বই', 'আয়না', 'মোবাইল'],
        optionsEn: ['Water Pitcher / Clay Pot', 'Book', 'Mirror', 'Mobile Phone'],
        correctIndex: 0,
        explanation: 'মাটির বা ধাতুর কলসির ওপরের খোলা অংশকে ‘মুখ’ বলা হলেও এটি নির্জীব বলে কথা বলতে পারে না।',
        explanationEn: 'The open top rim of a clay pitcher is called its mouth, yet it cannot utter words.',
        interestingFact: 'মাটির কলসির ক্ষুদ্র ক্ষুদ্র রন্ধ্র দিয়ে পানি বাষ্পীভূত হয়ে ভেতরের পানি প্রাকৃতিকভাবে ঠান্ডা থাকে।',
        interestingFactEn: 'Water evaporating through microscopic pores in earthenware pots keeps the water naturally chilled.'
      },
      {
        id: 'er-4',
        categoryId: 'easy-riddles',
        question: 'হাত আছে কিন্তু তালি দিতে পারে না, সেটি কী?',
        questionEn: 'It has hands but cannot clap, what is it?',
        options: ['রোবট', 'ঘড়ি', 'পুতুল', 'গাছের ডাল'],
        optionsEn: ['Robot', 'Clock', 'Doll', 'Tree Branch'],
        correctIndex: 1,
        explanation: 'ঘড়ির ঘণ্টার কাঁটা এবং মিনিটের কাঁটাকে ইংরেজিতে ‘Hands of a clock’ বা ঘড়ির হাত বলা হয়।',
        explanationEn: "A clock features hour and minute hands, but it cannot clap them together.",
        interestingFact: '১৪শ শতাব্দীতে ইউরোপে প্রথম যান্ত্রিক ঘড়ি আবিষ্কৃত হয়েছিল যার তখন শুধু ঘণ্টার কাঁটা ছিল।',
        interestingFactEn: 'The first mechanical clocks built in 14th-century Europe had only an hour hand.'
      },
      {
        id: 'er-5',
        categoryId: 'easy-riddles',
        question: 'পা নেই তবুও চলে, সেটি কী?',
        questionEn: 'It has no legs yet it constantly runs. What is it?',
        options: ['নদী', 'মেঘ', 'বাতাস', 'ট্রেন'],
        optionsEn: ['River', 'Cloud', 'Wind', 'Train'],
        correctIndex: 0,
        explanation: 'নদীর কোনো পা বা অঙ্গ নেই, তবুও মাধ্যাকর্ষণের টানে পানির ধারা অবিরাম সাগরের দিকে বয়ে চলে।',
        explanationEn: 'A river has no physical legs, yet gravitational flow carries its water continuously towards the sea.',
        interestingFact: 'নদীকে জীবন্ত সত্তা হিসেবে আইনগত অধিকার দেওয়ার নজির প্রথম স্থাপন করেছিল নিউজিল্যান্ডের হোয়ানগানুই নদী।',
        interestingFactEn: "New Zealand's Whanganui River was the first river in the world granted the legal rights of a living entity."
      },
      {
        id: 'er-6',
        categoryId: 'easy-riddles',
        question: 'মাথা আছে, লেজ আছে, কিন্তু শরীর নেই। সেটি কী?',
        questionEn: 'It has a head and a tail, but no body. What is it?',
        options: ['সাপ', 'মুদ্রা (কয়েন)', 'ঘুড়ি', 'তীর'],
        optionsEn: ['Snake', 'Coin (Heads & Tails)', 'Kite', 'Arrow'],
        correctIndex: 1,
        explanation: 'টাকার মুদ্রার এপিঠকে বলা হয় ‘হেড’ (মাথা) এবং ওপিঠকে বলা হয় ‘টেইল’ (লেজ), কিন্তু এর কোনো শরীর নেই।',
        explanationEn: 'A currency coin has two faces known as "heads" and "tails", but possesses no physical body.',
        interestingFact: 'খ্রিস্টপূর্ব ৭ম শতকে বর্তমান তুরস্কের লিডিয়া রাজ্যে বিশ্বের প্রথম ধাতব মুদ্রার প্রচলন হয়েছিল।',
        interestingFactEn: 'The earliest known metal coinage was minted in Lydia (modern-day Turkey) during the 7th century BC.'
      },
      {
        id: 'er-7',
        categoryId: 'easy-riddles',
        question: 'পানি খেলে মরে যায়, সেটি কী?',
        questionEn: 'It dies as soon as it drinks water. What is it?',
        options: ['তৃষ্ণা', 'আগুন', 'বরফ', 'বিদ্যুৎ'],
        optionsEn: ['Thirst', 'Fire', 'Ice', 'Electricity'],
        correctIndex: 1,
        explanation: 'আগুন জ্বলতে অক্সিজেন ও তাপ লাগে; পানি ঢাললে তাপমাত্রা কমে যায় ও অক্সিজেন বাধাগ্রস্ত হয়ে আগুন নিভে বা মারা যায়।',
        explanationEn: 'Water cools the burning fuel below its ignition temperature and cuts off oxygen, quenching the fire.',
        interestingFact: 'আগুন কোনো পদার্থ নয়, এটি মূলত দ্রুত রাসায়নিক জারণের (Combustion) দৃশ্যমান তাপ ও আলোক রূপ।',
        interestingFactEn: 'Fire is not matter; it is the visible heat and light released during rapid chemical combustion.'
      },
      {
        id: 'er-8',
        categoryId: 'easy-riddles',
        question: 'যতই শুকায় ততই ভিজে, সেটি কী?',
        questionEn: 'The more it dries other things, the wetter it gets. What is it?',
        options: ['তোয়ালে', 'রোদ', 'স্পঞ্জ', 'মাটি'],
        optionsEn: ['Towel', 'Sunlight', 'Sponge', 'Soil'],
        correctIndex: 0,
        explanation: 'তোয়ালে দিয়ে কোনো কিছু যত বেশি মোছা বা শুকানো হয়, তোয়ালে নিজে পানি শুষে তত বেশি ভিজে যায়।',
        explanationEn: 'As a towel dries water off your body or dishes, it absorbs the moisture and becomes wet.',
        interestingFact: 'মাইক্রোফাইবার তোয়ালে তার নিজস্ব ওজনের প্রায় ৭ গুণ বেশি পানি ধারণ করতে সক্ষম।',
        interestingFactEn: 'A high-grade microfiber towel can absorb up to seven times its dry weight in moisture.'
      },
      {
        id: 'er-9',
        categoryId: 'easy-riddles',
        question: 'আকাশে থাকে, রাতে আলো দেয়, সেটি কী?',
        questionEn: 'It lives in the night sky and provides gentle illumination. What is it?',
        options: ['সূর্য', 'চাঁদ', 'গ্রহাণু', 'কৃত্রিম উপগ্রহ'],
        optionsEn: ['Sun', 'Moon', 'Asteroid', 'Artificial Satellite'],
        correctIndex: 1,
        explanation: 'চাঁদ পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ যা রাতে সূর্যের আলো প্রতিফলিত করে পৃথিবীতে স্নিগ্ধ আলো দেয়।',
        explanationEn: 'The Moon is Earth’s sole natural satellite, reflecting solar light down to the planet at night.',
        interestingFact: 'চাঁদের নিজস্ব কোনো আলো নেই; এটি সূর্যের আলোর মাত্র ১২ শতাংশের মতো আলো প্রতিফলিত করে।',
        interestingFactEn: 'The Moon has no light of its own; its dusty surface reflects only about 12% of sunlight (albedo).'
      },
      {
        id: 'er-10',
        categoryId: 'easy-riddles',
        question: 'নিজের ঘর নিজের পিঠে নিয়ে চলে, সেটি কী?',
        questionEn: 'It carries its own house on its back wherever it travels. What is it?',
        options: ['কচ্ছপ', 'শামুক', 'কাঁকড়া', 'উইপোকা'],
        optionsEn: ['Tortoise', 'Snail', 'Crab', 'Termite'],
        correctIndex: 1,
        explanation: 'শামুকের শরীরের ওপর একটি শক্ত ক্যালসিয়াম কার্বনেটের খোলস থাকে যা তাদের আজীবন ঘর ও আত্মরক্ষার বর্ম।',
        explanationEn: 'A snail grows a protective calcium carbonate shell on its back that serves as its lifelong home.',
        interestingFact: 'কিছু প্রজাতির সামুদ্রিক শামুক একটানা ৩ বছর পর্যন্ত ঘুমিয়ে থাকতে পারে!',
        interestingFactEn: 'Certain snail species are known to enter dormant aestivation or sleep for up to three straight years!'
      }
    ]
  },
  {
    id: 'hard-riddles',
    slug: 'hard-riddles',
    title: 'কঠিন বাংলা ধাঁধা (Hard Riddles)',
    titleEn: 'Hard Bengali Riddles',
    description: 'গভীর চিন্তা ও তীক্ষ্ণ মেধার জটিল রূপক ধাঁধা, যা আপনাকে ভাবিয়ে তুলবে।',
    descriptionEn: 'Deep thinking, intricate metaphorical riddles, and tricky enigmas to test sharp analytical minds.',
    iconName: 'HelpCircle',
    colorScheme: 'indigo',
    popular: true,
    difficulty: 'Advanced',
    difficultyEn: 'Advanced Level',
    questions: [
      {
        id: 'hr-1',
        categoryId: 'hard-riddles',
        question: 'আমি সবসময় সামনে এগিয়ে যাই, কখনো পেছনে ফিরি না। আমি কে?',
        questionEn: 'I always move forward and never look back. Who am I?',
        options: ['নদী', 'সময়', 'বাতাস', 'বয়স'],
        optionsEn: ['River', 'Time', 'Wind', 'Age'],
        correctIndex: 1,
        explanation: 'মহাবিশ্বের নিয়মে সময় (Time) সর্বদা সামনের দিকে চলমান, সময়কে কখনো অতীত বা পেছনের দিকে ফেরানো যায় না।',
        explanationEn: 'According to the thermodynamic arrow of time, time strictly progresses forward and cannot be reversed.',
        interestingFact: 'পদার্থবিজ্ঞানে একে ‘সময়ের তীর’ (Arrow of Time) বলা হয়, যা এনট্রপির বৃদ্ধির সাথে জড়িত।',
        interestingFactEn: 'In modern physics, the concept of the Arrow of Time is fundamentally tied to the increase of entropy.'
      },
      {
        id: 'hr-2',
        categoryId: 'hard-riddles',
        question: 'আমার শহর আছে কিন্তু বাড়ি নেই। নদী আছে কিন্তু পানি নেই। আমি কী?',
        questionEn: 'I have cities without houses, forests without trees, and rivers without water. What am I?',
        options: ['ছবি', 'মানচিত্র (Map)', 'স্বপ্ন', 'মরুভূমি'],
        optionsEn: ['Photograph', 'Map', 'Dream', 'Desert'],
        correctIndex: 1,
        explanation: 'মানচিত্রে রাস্তাঘাট, শহর, বন ও নদীর নিখুঁত প্রতিকৃতি আঁকা থাকে কিন্তু বাস্তব বাড়িঘর বা তরল পানি থাকে না।',
        explanationEn: 'A map depicts cities, boundaries, mountains, and waterways without containing physical buildings or water.',
        interestingFact: 'পৃথিবীর প্রাচীনতম মানচিত্র প্রায় খ্রিস্টপূর্ব ৬ষ্ঠ শতকের প্রাচীন ব্যাবিলনে মাটির ফলকে খোদাই করা হয়েছিল।',
        interestingFactEn: 'The oldest known world map was etched on a Babylonian clay tablet dating back to the 6th century BC.'
      },
      {
        id: 'hr-3',
        categoryId: 'hard-riddles',
        question: 'আমাকে যত বেশি নেবে, তত বেশি পিছনে রেখে যাবে। আমি কী?',
        questionEn: 'The more you take of me, the more you leave behind. What am I?',
        options: ['স্মৃতি', 'পদচিহ্ন (Footsteps)', 'নিঃশ্বাস', 'টাকা'],
        optionsEn: ['Memories', 'Footsteps', 'Breaths', 'Money'],
        correctIndex: 1,
        explanation: 'হাঁটার সময় আপনি যত বেশি কদম বা পদক্ষেপ নেবেন, পেছনে ঠিক তত বেশি পায়ের ছাপ বা পদচিহ্ন ফেলে আসবেন।',
        explanationEn: 'Each physical step you take leaves behind another distinct footprint in your wake.',
        interestingFact: 'চাঁদে বাতাস না থাকায় অ্যাপোলো নভোচারীদের পায়ের ছাপ কোটি কোটি বছর অক্ষত থাকবে।',
        interestingFactEn: 'Because there is no atmosphere or wind on the Moon, Apollo astronaut footprints will remain for millions of years.'
      },
      {
        id: 'hr-4',
        categoryId: 'hard-riddles',
        question: 'এমন একটি জিনিস, যা আলোতে তোমার সঙ্গে থাকে কিন্তু অন্ধকারে হারিয়ে যায়?',
        questionEn: 'It follows you closely in the light, but completely vanishes in total darkness. What is it?',
        options: ['বন্ধু', 'ছায়া', 'চোখ', 'পোশাক'],
        optionsEn: ['Friend', 'Shadow', 'Eyes', 'Clothing'],
        correctIndex: 1,
        explanation: 'আলো বাধাগ্রস্ত হলে ছায়া তৈরি হয়। তাই আলোতে ছায়া থাকে, কিন্তু সম্পূর্ণ অন্ধকারে ছায়া অদৃশ্য হয়ে যায়।',
        explanationEn: 'A shadow forms when an opaque object blocks light rays; in the absence of light, no shadow can exist.',
        interestingFact: 'মহাকাশে কোনো বস্তুর ছায়া সম্পূর্ণ নিখুঁত কালো হয় কারণ সেখানে আলো বিচ্ছুরণের মতো কোনো বায়ুমণ্ডল নেই।',
        interestingFactEn: 'In outer space, shadows appear pitch black because there is no surrounding atmosphere to scatter ambient light.'
      },
      {
        id: 'hr-5',
        categoryId: 'hard-riddles',
        question: 'আমি কথা বলি না, তবুও তোমার কথা ফিরিয়ে দিই। আমি কে?',
        questionEn: 'I cannot speak on my own, yet I return every word you utter. Who am I?',
        options: ['আয়না', 'প্রতিধ্বনি (Echo)', 'টিয়া পাখি', 'রেকর্ডার'],
        optionsEn: ['Mirror', 'Echo', 'Parrot', 'Voice Recorder'],
        correctIndex: 1,
        explanation: 'পাহাড় বা বড় কক্ষে শব্দ ধাক্কা খেয়ে ফিরে আসাকে প্রতিধ্বনি বলা হয়। এটি নিজে কিছু না বলে আপনার কথাই ফিরিয়ে দেয়।',
        explanationEn: 'An echo is the acoustic reflection of sound waves bouncing back from a distant rigid boundary.',
        interestingFact: 'বাদুড় অন্ধকারে পথ চলতে এবং শিকার ধরতে প্রতিধ্বনি বা ইকোলোকেশন (Echolocation) ব্যবহার করে।',
        interestingFactEn: 'Bats use biological echolocation by emitting ultrasonic pulses to navigate and hunt in total darkness.'
      },
      {
        id: 'hr-6',
        categoryId: 'hard-riddles',
        question: 'চোখ আছে কিন্তু দেখতে পায় না, সেটি কী?',
        questionEn: 'It has an eye but cannot see anything. What is it?',
        options: ['সূঁচ', 'নারিকেল', 'আলু', 'বোতাম'],
        optionsEn: ['Sewing Needle', 'Coconut', 'Potato', 'Button'],
        correctIndex: 0,
        explanation: 'সূঁচের যে সূক্ষ্ম ছিদ্র দিয়ে সুতো পরানো হয় তাকে সূঁচের চোখ বলা হয়, কিন্তু এতে কোনো দৃষ্টিশক্তি নেই।',
        explanationEn: 'The small hole at the end of a sewing needle where thread passes through is called its eye.',
        interestingFact: 'হাড়ের তৈরি সূঁচের সন্ধান পাওয়া গেছে যা প্রায় ৬০,০০০ বছর আগে প্রাচীন মানুষ ব্যবহার করত।',
        interestingFactEn: 'Archaeologists have discovered polished bone needles used by prehistoric humans over 60,000 years ago.'
      },
      {
        id: 'hr-7',
        categoryId: 'hard-riddles',
        question: 'কোন জিনিসের চাবি আছে কিন্তু তালা খুলতে পারে না?',
        questionEn: 'What item has many keys, but cannot open a single door or lock?',
        options: ['পিয়ানো', 'কীবোর্ড (Keyboard)', 'টাইপরাইটার', 'নোটবুক'],
        optionsEn: ['Piano', 'Computer Keyboard', 'Typewriter', 'Notebook'],
        correctIndex: 1,
        explanation: 'কম্পিউটার কীবোর্ডের বাটনগুলোকে ইংরেজিতে ‘Keys’ (চাবি) বলা হয়, কিন্তু এগুলো দিয়ে কোনো দরজার তালা খোলা যায় না।',
        explanationEn: 'A computer keyboard consists of dozens of input keys, none of which open a physical padlock.',
        interestingFact: 'আজকের আধুনিক কীবোর্ডে বহুল ব্যবহৃত QWERTY লেআউটটি ১৮৭৩ সালে ক্রিস্টোফার শোলস নকশা করেছিলেন।',
        interestingFactEn: 'The iconic QWERTY keyboard layout was engineered by Christopher Sholes in 1873 to prevent mechanical jams.'
      },
      {
        id: 'hr-8',
        categoryId: 'hard-riddles',
        question: 'জন্মের পর ওড়ে, জীবনের সময় বসে থাকে আর মৃত্যুর পর অদৃশ্য হয়ে যায়—সেটি কী?',
        questionEn: 'It flies when born, lies quietly during life, and vanishes when it dies. What is it?',
        options: ['বরফকুচি', 'তুষার বা স্নোফ্লেক (Snowflake)', 'ধোঁয়া', 'জলীয় বাষ্প'],
        optionsEn: ['Ice cube', 'Snowflake', 'Smoke', 'Water Vapor'],
        correctIndex: 1,
        explanation: 'তুষার মেঘ থেকে বাতাসে ভেসে পড়ে, মাটিতে বরফ হয়ে জমে থাকে এবং গলে গেলে বাষ্পীভূত হয়ে যায়।',
        explanationEn: 'A snowflake drifts through the air upon forming, rests on the ground, and evaporates into vapor when melted.',
        interestingFact: 'পৃথিবীতে আজ পর্যন্ত কোনো দুটি স্নোফ্লেকের আণবিক নকশা হুবহু একই রকম পাওয়া যায়নি।',
        interestingFactEn: 'Due to infinite variations in humidity and temperature, no two natural snowflakes have ever been found identical.'
      }
    ]
  },
  {
    id: 'brain-teasers',
    slug: 'brain-teasers',
    title: 'বুদ্ধির খেলা (Brain Teasers)',
    titleEn: 'Brain Teasers & Mind Games',
    description: 'ট্রিকি প্রশ্ন ও তাৎক্ষণিক আইকিউ যাচাইয়ের চমকপ্রদ বুদ্ধিমত্তার খেলা।',
    descriptionEn: 'Tricky logic puzzles, lateral thinking questions, and rapid IQ challenges to sharpen cognitive agility.',
    iconName: 'Brain',
    colorScheme: 'teal',
    featured: true,
    popular: true,
    difficulty: 'Intermediate',
    difficultyEn: 'Medium Level',
    questions: [
      {
        id: 'bt-1',
        categoryId: 'brain-teasers',
        question: 'এক কেজি তুলা আর এক কেজি লোহা—কোনটি বেশি ভারী?',
        questionEn: 'Which is heavier: one kilogram of cotton or one kilogram of iron?',
        options: ['এক কেজি লোহা', 'এক কেজি তুলা', 'দুটিই সমান ভারী', 'লোহার ঘনত্ব বেশি বলে তুলা'],
        optionsEn: ['1 kg of iron', '1 kg of cotton', 'Both weigh exactly the same', 'Iron because of higher density'],
        correctIndex: 2,
        explanation: 'যেহেতু উভয়ের ভরই ঠিক ১ কেজি করে নির্ধারণ করা হয়েছে, তাই তুলা বা লোহা যাই হোক না কেন উভয়ের ওজন সমান।',
        explanationEn: 'Because both quantities are specified as exactly one kilogram of mass, both weigh identical amounts.',
        interestingFact: 'লোহার ঘনত্ব তুলার চেয়ে অনেক বেশি হওয়ায় এক কেজি লোহার আয়তন হবে খুব ছোট, আর তুলার বস্তা হবে অনেক বড়।',
        interestingFactEn: 'Because iron has vastly higher density than cotton, 1 kg of iron takes up a tiny volume compared to cotton.'
      },
      {
        id: 'bt-2',
        categoryId: 'brain-teasers',
        question: 'একটি মোরগ ঘরের চালের ঠিক মাঝখানে ডিম পাড়ল। ডিমটি কোন দিকে পড়বে?',
        questionEn: 'A rooster lays an egg right on the peak of a barn roof. Which side will it roll down?',
        options: ['ডান দিকে', 'বাম দিকে', 'সোজা নিচে', 'মোরগ ডিম পাড়ে না'],
        optionsEn: ['To the right', 'To the left', 'Straight down', 'Roosters do not lay eggs'],
        correctIndex: 3,
        explanation: 'মোরগ পুরুষ পাখি, তাই মোরগ কখনো ডিম পাড়ে না; ডিম পাড়ে কেবল মুরগি!',
        explanationEn: 'Roosters are male gallinaceous birds and biologically do not lay eggs; only hens lay eggs.',
        interestingFact: 'একটি সুস্থ মুরগি বছরে গড়ে ২৫০ থেকে ৩০০টি পর্যন্ত ডিম পাড়তে পারে।',
        interestingFactEn: 'A healthy domestic hen can lay an average of 250 to 300 eggs per year under optimal conditions.'
      },
      {
        id: 'bt-3',
        categoryId: 'brain-teasers',
        question: '৫টি আম থেকে তুমি ২টি আম তুলে নিলে তোমার কাছে কয়টি আম থাকবে?',
        questionEn: 'If there are 5 mangoes on a table and you take 2, how many do you have?',
        options: ['৩টি আম', '২টি আম', '৫টি আম', 'কোনোটিই নয়'],
        optionsEn: ['3 mangoes', '2 mangoes', '5 mangoes', 'None'],
        correctIndex: 1,
        explanation: 'প্রশ্নে বলা হয়েছে "তুমি ২টি নিলে তোমার কাছে কয়টি থাকবে"—যেহেতু তুমি ২টি আম নিজের হাতে নিয়েছ, তোমার কাছে ২টিই থাকবে!',
        explanationEn: 'You took 2 mangoes with your own hands, so you personally possess 2 mangoes.',
        interestingFact: 'আমকে দক্ষিণ এশিয়ার অনেক দেশে ‘ফলের রাজা’ বলা হয় এবং এটি ভারতের জাতীয় ফল।',
        interestingFactEn: 'The mango is widely hailed as the "King of Fruits" across South Asia and is the national fruit of India.'
      },
      {
        id: 'bt-4',
        categoryId: 'brain-teasers',
        question: 'একটি চারকোনা ঘরের ৪টি কোণে ৪টি বিড়াল বসে আছে। প্রতিটি বিড়ালের সামনে ৩টি করে বিড়াল থাকলে মোট কয়টি বিড়াল?',
        questionEn: 'A square room has 4 corners with a cat sitting in each. Each cat sees 3 cats facing it. How many cats in total?',
        options: ['১৬টি বিড়াল', '১২টি বিড়াল', '৪টি বিড়াল', '৮টি বিড়াল'],
        optionsEn: ['16 cats', '12 cats', '4 cats', '8 cats'],
        correctIndex: 2,
        explanation: 'ঘরের ৪ কোণে বসে থাকা ৪টি বিড়ালের প্রত্যেকেই বাকি ৩টি বিড়ালকে নিজের সামনে দেখতে পায়। সুতরাং মোট বিড়াল মাত্র ৪টি।',
        explanationEn: 'Each of the 4 cats seated in the four corners directly faces the other 3 cats across the room; total is 4.',
        interestingFact: 'বিড়ালদের দৃষ্টিসীমা প্রায় ২০০ ডিগ্রি, যা মানুষের (১৮০ ডিগ্রি) চেয়েও বিস্তৃত।',
        interestingFactEn: 'Cats boast a visual field of approximately 200 degrees, compared to about 180 degrees for humans.'
      },
      {
        id: 'bt-5',
        categoryId: 'brain-teasers',
        question: 'বছরের কোন মাসে ২৮ দিন থাকে?',
        questionEn: 'Which month of the calendar year has 28 days?',
        options: ['শুধুমাত্র ফেব্রুয়ারি মাসে', 'লিপ ইয়ারে ফেব্রুয়ারি', 'সব মাসেই কমপক্ষে ২৮ দিন থাকে', 'ডিসেম্বর মাসে'],
        optionsEn: ['Only February', 'Only in Leap Years', 'All 12 months have at least 28 days', 'December'],
        correctIndex: 2,
        explanation: 'বছরের ১২টি মাসের প্রতিটিতেই (জানুয়ারি থেকে ডিসেম্বর) কমপক্ষে ২৮ দিন তো অবশ্যই থাকে!',
        explanationEn: 'Every single month of the Gregorian calendar (from January to December) contains at least 28 days.',
        interestingFact: 'ফেব্রুয়ারি মাসে সাধারণ বছরে ২৮ দিন এবং প্রতি চার বছর পর পর অধিবর্ষে (Leap Year) ২৯ দিন থাকে।',
        interestingFactEn: 'February has 28 days in standard astronomical calendar years and 29 days during Leap Years.'
      },
      {
        id: 'bt-6',
        categoryId: 'brain-teasers',
        question: 'একটি গাছে ১০টি পাখি বসে ছিল। শিকারি গুলি করে ১টি পাখি মারল। গাছে আর কয়টি পাখি থাকবে?',
        questionEn: '10 birds were perched on a tree branch. A hunter fires a shotgun and kills 1 bird. How many remain on the tree?',
        options: ['৯টি পাখি', '৮টি পাখি', 'সাধারণত কোনো পাখি থাকবে না', '১টি পাখি'],
        optionsEn: ['9 birds', '8 birds', 'None (the rest fly away)', '1 bird'],
        correctIndex: 2,
        explanation: 'বন্দুকের গুলির প্রচণ্ড শব্দ শুনে গাছের বাকি ৯টি পাখি তৎক্ষণাৎ ভয়ে উড়ে চলে যাবে, তাই গাছে আর কোনো পাখি থাকবে না।',
        explanationEn: 'The deafening blast of gunfire startles all remaining 9 birds, causing them to immediately take flight.',
        interestingFact: 'পাখিদের শ্রবণশক্তি মানুষের চেয়ে অনেক বেশি স্পর্শকাতর এবং আকস্মিক শব্দে এদের পলায়ন প্রবৃত্তি দ্রুত জাগে।',
        interestingFactEn: 'Avian hearing is finely tuned to sudden pitch shifts, triggering rapid collective startle reflexes.'
      },
      {
        id: 'bt-7',
        categoryId: 'brain-teasers',
        question: 'এমন কী জিনিস, যা তোমার নিজের কিন্তু অন্য মানুষেরা তোমার চেয়ে বেশি ব্যবহার করে?',
        questionEn: 'What belongs exclusively to you, but is spoken and used far more by other people?',
        options: ['তোমার মোবাইল', 'তোমার নাম', 'তোমার জুতো', 'তোমার ছাতা'],
        optionsEn: ['Your phone', 'Your name', 'Your shoes', 'Your umbrella'],
        correctIndex: 1,
        explanation: 'আপনার নাম আপনার নিজের পরিচয় হলেও আপনাকে ডাকার জন্য অন্য মানুষেরাই এটি সবচেয়ে বেশি মুখে উচ্চারণ করে।',
        explanationEn: 'While your given name belongs to your identity, family, friends, and colleagues speak it far more often.',
        interestingFact: 'মনোবিজ্ঞানীদের মতে, নিজের নাম শুনতে পাওয়া মানুষের মস্তিষ্কে সবচেয়ে আনন্দদায়ক অনুভূতিগুলোর একটি।',
        interestingFactEn: 'Neuroimaging studies show hearing one’s own name triggers heightened activation in the brain’s reward centers.'
      }
    ]
  },
  {
    id: 'funny-questions',
    slug: 'funny-questions',
    title: 'মজার প্রশ্ন (Funny Questions)',
    titleEn: 'Funny & Tricky Questions',
    description: 'হাস্যরসাত্মক ও মজাদার সব প্যাঁচালো প্রশ্ন, যা শুনলে মুখে হাসি ফুটবে।',
    descriptionEn: 'Humorous, witty wordplay, clever puns, and amusing trick questions to brighten your mood.',
    iconName: 'Clapperboard',
    colorScheme: 'indigo',
    popular: true,
    difficulty: 'Beginner',
    difficultyEn: 'Easy Level',
    questions: [
      {
        id: 'fq-1',
        categoryId: 'funny-questions',
        question: 'কোন মাছ কখনোই পানিতে সাঁতার কাটতে পারে না?',
        questionEn: 'Which fish can never swim in water?',
        options: ['মৃত মাছ', 'বোয়াল মাছ', 'রূপচাঁদা', 'কই মাছ'],
        optionsEn: ['A dead fish', 'Catfish', 'Pomfret', 'Climbing perch'],
        correctIndex: 0,
        explanation: 'যে মাছ মারা যায়, সে আর পানিতে সাঁতার কাটার শক্তি রাখে না; কেবল ভেসে থাকে!',
        explanationEn: 'A dead fish lacks voluntary muscular movement and simply floats with the currents.',
        interestingFact: 'বেশিরভাগ মাছের শরীরে ‘সুইম ব্লাডার’ বা বায়ুথলি থাকে যা তাদের পানিতে ভারসাম্য বজায় রাখতে সাহায্য করে।',
        interestingFactEn: 'Most teleost fish possess an internal gas-filled swim bladder to control hydrostatic buoyancy.'
      },
      {
        id: 'fq-2',
        categoryId: 'funny-questions',
        question: 'কোন জিনিস ভাঙলে মানুষের মন খারাপ হওয়ার বদলে মানুষ বেশি খুশি হয়?',
        questionEn: 'What item makes people celebrate and cheer when broken, rather than upset?',
        options: ['রেকর্ড (World Record)', 'মোবাইল স্ক্রিন', 'কাঁচের গ্লাস', 'হৃদয়'],
        optionsEn: ['A World Record', 'Smartphone screen', 'Glass tumbler', 'Human heart'],
        correctIndex: 0,
        explanation: 'খেলাধুলা বা অন্য কোনো প্রতিযোগিতায় পূর্ববর্তী বিশ্বরেকর্ড ভাঙতে পারলে মানুষ অত্যন্ত আনন্দিত ও গর্বিত হয়।',
        explanationEn: 'Breaking an athletic or skill world record is an occasion for global celebration and prestige.',
        interestingFact: 'গিনেস ওয়ার্ল্ড রেকর্ডস প্রথম প্রকাশিত হয়েছিল ১৯৫৫ সালে এবং এটি প্রতি বছর সর্বাধিক বিক্রীত বইয়ের একটি।',
        interestingFactEn: 'Guinness World Records was founded in 1955 and remains one of the world’s most syndicated publications.'
      },
      {
        id: 'fq-3',
        categoryId: 'funny-questions',
        question: 'কোন জিনিসকে উল্টালে তার মান আরও বেড়ে যায়?',
        questionEn: 'Which number increases in numerical value when flipped upside down?',
        options: ['সংখ্যা ৬', 'সংখ্যা ৯', 'একটি গ্লাস', 'পেন্সিল'],
        optionsEn: ['The number 6', 'The number 9', 'A drinking glass', 'A pencil'],
        correctIndex: 0,
        explanation: 'সংখ্যা ৬-কে যদি উল্টে দেওয়া হয় তবে তা সংখ্যা ৯-এ পরিণত হয়, যা মানের দিক থেকে বড়!',
        explanationEn: 'When the digit 6 is rotated 180 degrees, it transforms into 9, gaining a greater numerical value.',
        interestingFact: '৬ হলো গণিতের প্রথম ‘নিখুঁত সংখ্যা’ (Perfect Number), কারণ ১ + ২ + ৩ = ৬।',
        interestingFactEn: '6 is the smallest mathematical perfect number, because the sum of its proper divisors 1 + 2 + 3 equals 6.'
      },
      {
        id: 'fq-4',
        categoryId: 'funny-questions',
        question: 'কোন ড্রাইভারের কোনো গাড়ি বা লাইসেন্স প্রয়োজন হয় না?',
        questionEn: 'Which driver operates without driving any car, truck, or holding a vehicle license?',
        options: ['স্ক্রু ড্রাইভার (Screwdriver)', 'বাস ড্রাইভার', 'ট্রেন চালক', 'লরি ড্রাইভার'],
        optionsEn: ['Screwdriver', 'Bus driver', 'Train operator', 'Truck driver'],
        correctIndex: 0,
        explanation: 'স্ক্রু ড্রাইভার হলো স্ক্রু শক্ত করার বা খোলার একটি যান্ত্রিক হাতলযুক্ত হাতিয়ার, কোনো মানুষ বা গাড়িচালক নয়!',
        explanationEn: 'A screwdriver is a manual or powered hand tool designed for turning threaded fasteners.',
        interestingFact: 'স্ক্রু ড্রাইভারের আদি রূপ পঞ্চদশ শতাব্দীর শেষের দিকে জার্মানিতে ব্যবহৃত হতো।',
        interestingFactEn: 'Early documented screwdrivers with pear-shaped handles appeared in late 15th-century Germany.'
      },
      {
        id: 'fq-5',
        categoryId: 'funny-questions',
        question: 'এমন কী জিনিস যা টানলে ছোট হয়?',
        questionEn: 'What object gets steadily shorter and smaller every time you take a pull or drag?',
        options: ['বিড়ি বা সিগারেট', 'রশি', 'ইলাস্টিক রাবার', 'চুলের ফিতা'],
        optionsEn: ['A cigarette', 'A rope', 'An elastic rubber band', 'A hair ribbon'],
        correctIndex: 0,
        explanation: 'সিগারেট বা বিড়িতে টান দিলে আগুন পুড়ে তা ক্রমাগত আকারে ছোট হতে থাকে।',
        explanationEn: 'Taking a drag on a lit cigarette burns down the tobacco and paper, shortening its total length.',
        interestingFact: 'ধূমপানের ক্ষতিকর প্রভাবে মানুষের ফুসফুসের ক্ষমতা দ্রুত হ্রাস পায়, তাই এটি বর্জনীয়।',
        interestingFactEn: 'Smoking causes severe respiratory damage and reduces vital lung capacity; quitting restores circulation.'
      },
      {
        id: 'fq-6',
        categoryId: 'funny-questions',
        question: 'কোন ফল আমরা কখনোই বাজার থেকে কিনে খেতে পারি না?',
        questionEn: 'Which "fruit" can you never purchase with money at any grocery market?',
        options: ['পরীক্ষার ফল বা কর্মফল', 'কাঁঠাল', 'আমলকী', 'কলা'],
        optionsEn: ['Exam result / Fruits of labor', 'Jackfruit', 'Amla', 'Banana'],
        correctIndex: 0,
        explanation: 'পরীক্ষার রেজাল্ট বা নিজের কাজের ফলাফল বাজারে টাকা দিয়ে কেনা যায় না, তা অর্জন করতে হয়!',
        explanationEn: 'Academic exam grades and the rewarding "fruits of one’s labor" must be earned through hard work.',
        interestingFact: '‘ফল’ শব্দটি বাংলায় খাদ্যোপযোগী ফল এবং কোনো কাজের পরিণতি উভয় অর্থেই চমৎকারভাবে ব্যবহৃত হয়।',
        interestingFactEn: 'The word "Phal" in Bengali elegantly denotes both edible fruit and the outcome/consequence of an action.'
      }
    ]
  },
  {
    id: 'general-knowledge',
    slug: 'general-knowledge',
    title: 'সাধারণ জ্ঞান (General Knowledge)',
    titleEn: 'General Knowledge (GK)',
    description: 'বাংলাদেশ ও আন্তর্জাতিক জগতের প্রয়োজনীয় মৌলিক ও তথ্যবহুল সাধারণ জ্ঞান।',
    descriptionEn: 'Essential facts, global geography, national emblems, and core trivia from Bangladesh and across the world.',
    iconName: 'Compass',
    colorScheme: 'blue',
    featured: true,
    popular: true,
    difficulty: 'All Levels',
    difficultyEn: 'All Levels',
    questions: [
      {
        id: 'gk-1',
        categoryId: 'general-knowledge',
        question: 'গণপ্রজাতন্ত্রী বাংলাদেশের রাজধানীর নাম কী?',
        questionEn: 'What is the official capital city of the People’s Republic of Bangladesh?',
        options: ['চট্টগ্রাম', 'ঢাকা', 'সিলেট', 'রাজশাহী'],
        optionsEn: ['Chittagong', 'Dhaka', 'Sylhet', 'Rajshahi'],
        correctIndex: 1,
        explanation: 'ঢাকা বাংলাদেশের রাজধানী ও প্রধান প্রশাসনিক, অর্থনৈতিক এবং সাংস্কৃতিক কেন্দ্র। এটি ১৬১০ সালে প্রথম সুবাহ বাংলার রাজধানী হয়।',
        explanationEn: 'Dhaka is the political, financial, and cultural epicenter of Bangladesh, first made capital of Mughal Bengal in 1610.',
        interestingFact: 'বুড়িগঙ্গা নদীর তীরে গড়ে ওঠা এই ঐতিহাসিক শহরটি চারশ বছরেরও বেশি পুরনো ঐতিহ্যবাহী প্রাচীন নগরী।',
        interestingFactEn: 'Situated on the Buriganga River, Dhaka has over 400 years of recorded urbanization and heritage.'
      },
      {
        id: 'gk-2',
        categoryId: 'general-knowledge',
        question: 'বাংলাদেশের জাতীয় ফুল কোনটি?',
        questionEn: 'Which is the national flower of Bangladesh?',
        options: ['গোলাপ', 'সাদা শাপলা', 'বেলি', 'সূর্যমুখী'],
        optionsEn: ['Rose', 'White Water Lily (Shapla)', 'Jasmine', 'Sunflower'],
        correctIndex: 1,
        explanation: 'সাদা শাপলা (Nymphaea nouchali) বাংলাদেশের জাতীয় ফুল। এটি এদেশের নদী-নালা ও হাওর-বিলের শোভা বৃদ্ধি করে।',
        explanationEn: 'The White Water Lily (Nymphaea nouchali) is the national flower, blossoming across local wetlands and rivers.',
        interestingFact: 'বাংলাদেশের জাতীয় প্রতীকের কেন্দ্রেও পানিতে ভাসমান একটি শাপলা ফুল খচিত রয়েছে।',
        interestingFactEn: 'The national emblem of Bangladesh features a water lily floating on water at its core.'
      },
      {
        id: 'gk-3',
        categoryId: 'general-knowledge',
        question: 'বাংলাদেশের জাতীয় ফল কোনটি?',
        questionEn: 'What is the national fruit of Bangladesh?',
        options: ['আম', 'লিচু', 'কাঁঠাল', 'কলা'],
        optionsEn: ['Mango', 'Litchi', 'Jackfruit (Kathal)', 'Banana'],
        correctIndex: 2,
        explanation: 'কাঁঠাল (Artocarpus heterophyllus) বাংলাদেশের জাতীয় ফল। এর মিষ্ট স্বাদ এবং পুষ্টিগুণ অত্যন্ত সমৃদ্ধ।',
        explanationEn: 'Jackfruit (Artocarpus heterophyllus) is the national fruit of Bangladesh, noted for its rich nutrients.',
        interestingFact: 'কাঁঠাল গাছের তৈরি ফল পৃথিবীর সবচেয়ে বড় আকৃতির গাছে ধরা ফল, যার ওজন ৫০ কেজি পর্যন্ত হতে পারে!',
        interestingFactEn: 'Jackfruit is the largest tree-borne fruit in the world, with single specimens reaching up to 50 kg!'
      },
      {
        id: 'gk-4',
        categoryId: 'general-knowledge',
        question: 'পৃথিবীর বৃহত্তম ও গভীরতম মহাসাগর কোনটি?',
        questionEn: 'Which is the largest and deepest ocean on planet Earth?',
        options: ['আটলান্টিক মহাসাগর', 'ভারত মহাসাগর', 'প্রশান্ত মহাসাগর', 'উত্তর মহাসাগর'],
        optionsEn: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
        correctIndex: 2,
        explanation: 'প্রশান্ত মহাসাগর (Pacific Ocean) পৃথিবীর মোট পৃষ্ঠের প্রায় এক-তৃতীয়াংশ জুড়ে বিস্তৃত এবং পৃথিবীর বৃহত্তম মহাসাগর।',
        explanationEn: 'The Pacific Ocean is the largest and deepest ocean, covering over 30% of the Earth’s total surface area.',
        interestingFact: 'পৃথিবীর সমস্ত মহাদেশের মোট ভূখণ্ডকে একত্র করলেও তা প্রশান্ত মহাসাগরের চেয়ে আয়তনে ছোট হবে!',
        interestingFactEn: 'All of Earth’s continents combined in total land area could comfortably fit inside the Pacific basin.'
      },
      {
        id: 'gk-5',
        categoryId: 'general-knowledge',
        question: 'পৃথিবীর ঘূর্ণনের কারণে স্বাভাবিকভাবে সূর্য কোন দিকে উদিত হয়?',
        questionEn: 'Due to Earth’s prograde rotation, in which direction does the Sun appear to rise?',
        options: ['পশ্চিম দিকে', 'উত্তর দিকে', 'পূর্ব দিকে', 'দক্ষিণ দিকে'],
        optionsEn: ['West', 'North', 'East', 'South'],
        correctIndex: 2,
        explanation: 'পৃথিবী নিজ অক্ষে পশ্চিম থেকে পূর্ব দিকে ঘোরে, তাই পৃথিবী থেকে তাকালে সূর্যকে পূর্ব দিকে উদিত হতে দেখা যায়।',
        explanationEn: 'Earth rotates from west to east on its celestial axis, creating the visual effect of sunrise in the east.',
        interestingFact: 'শুক্র গ্রহ উল্টো দিকে ঘোরে বলে সেখানে পশ্চিম আকাশে সূর্য ওঠে এবং পূর্বে অস্ত যায়।',
        interestingFactEn: 'Venus displays retrograde rotation; on Venus, the Sun rises in the west and sets in the east.'
      },
      {
        id: 'gk-6',
        categoryId: 'general-knowledge',
        question: 'পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ কোনটি?',
        questionEn: 'What is the sole natural satellite orbiting planet Earth?',
        options: ['মঙ্গল', 'চাঁদ', 'সূর্য', 'ধ্রুবতারা'],
        optionsEn: ['Mars', 'The Moon', 'The Sun', 'Polaris'],
        correctIndex: 1,
        explanation: 'চাঁদ হলো পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ, যা গড়ে প্রায় ৩,৮৪,৪০০ কিলোমিটার দূর থেকে পৃথিবীকে প্রদক্ষিণ করছে।',
        explanationEn: 'The Moon is Earth’s only permanent natural satellite, orbiting at an average distance of 384,400 km.',
        interestingFact: 'চাঁদের মহাকর্ষীয় টানের কারণেই পৃথিবীর সমুদ্রে নিয়মিত জোয়ার ও ভাটার সৃষ্টি হয়।',
        interestingFactEn: 'The Moon’s gravitational pull is the primary cosmic driver creating oceanic high and low tides on Earth.'
      },
      {
        id: 'gk-7',
        categoryId: 'general-knowledge',
        question: 'বিশুদ্ধ পানির রাসায়নিক সংকেত কোনটি?',
        questionEn: 'What is the standard chemical formula for pure water?',
        options: ['CO₂', 'H₂O', 'NaCl', 'O₂'],
        optionsEn: ['CO₂', 'H₂O', 'NaCl', 'O₂'],
        correctIndex: 1,
        explanation: 'পানির রাসায়নিক সংকেত H₂O, যার অর্থ প্রতিটি পানির অণুতে ২টি হাইড্রোজেন পরমাণু ও ১টি অক্সিজেন পরমাণু সমযোজী বন্ধনে যুক্ত।',
        explanationEn: 'Water consists of two hydrogen atoms covalently bonded to one oxygen atom (H₂O).',
        interestingFact: 'পানি একমাত্র প্রাকৃতিকভাবে প্রাপ্ত পদার্থ যা স্বাভাবিক পৃথিবীতে কঠিন (বরফ), তরল (পানি) ও গ্যাসীয় (বাষ্প)—এই তিন অবস্থাতেই পাওয়া যায়।',
        interestingFactEn: 'Water is the only natural substance on Earth that naturally occurs in all three physical states: solid, liquid, and gas.'
      }
    ]
  },
  {
    id: 'kids-quiz',
    slug: 'kids-quiz',
    title: 'শিশুদের কুইজ (Kids Quiz)',
    titleEn: 'Kids Quiz & Fun Learning',
    description: 'ছোট্ট বন্ধুদের আনন্দ দিতে বর্ণমালা, পশুপাখি, রঙ ও মজার শিশুতোষ প্রশ্ন।',
    descriptionEn: 'Engaging, colorful, and educational trivia on animals, rainbow hues, letters, and nature for kids.',
    iconName: 'PawPrint',
    colorScheme: 'teal',
    popular: true,
    difficulty: 'Beginner',
    difficultyEn: 'Easy Level',
    questions: [
      {
        id: 'kq-1',
        categoryId: 'kids-quiz',
        question: 'আমাদের জাতীয় পশুর নাম কী?',
        questionEn: 'What is the national animal of Bangladesh?',
        options: ['সিংহ', 'রয়েল বেঙ্গল টাইগার', 'হাতি', 'হরিণ'],
        optionsEn: ['Lion', 'Royal Bengal Tiger', 'Elephant', 'Spotted Deer'],
        correctIndex: 1,
        explanation: 'সুন্দরবনের বিশ্বখ্যাত রয়েল বেঙ্গল টাইগার হলো বাংলাদেশের জাতীয় পশু।',
        explanationEn: 'The magnificent Royal Bengal Tiger inhabiting the Sundarbans mangrove forest is the national animal.',
        interestingFact: 'বাঘের গায়ের ডোরাকাটা দাগ মানুষের আঙুলের ছাপের মতো প্রতিটি বাঘের জন্য একেবারেই অনন্য।',
        interestingFactEn: 'Every individual tiger features a completely unique stripe pattern, much like human fingerprints.'
      },
      {
        id: 'kq-2',
        categoryId: 'kids-quiz',
        question: 'রামধনু বা রংধনুতে মোট কয়টি রঙ থাকে?',
        questionEn: 'How many primary colors make up a natural rainbow in the sky?',
        options: ['৫টি', '৬টি', '৭টি', '৮টি'],
        optionsEn: ['5', '6', '7', '8'],
        correctIndex: 2,
        explanation: 'রংধনুতে মোট ৭টি রঙ থাকে: বেগুনি, নীল, আসমানী, সবুজ, হলুদ, কমলা ও লাল (বেনীআসহকলা)।',
        explanationEn: 'A visible spectrum rainbow contains 7 distinct colors: Violet, Indigo, Blue, Green, Yellow, Orange, and Red (VIBGYOR).',
        interestingFact: 'বৃষ্টির ফোঁটায় সূর্যের আলোর প্রতিসরণ ও প্রতিফলনের মাধ্যমে আকাশে এই রঙের খেলা তৈরি হয়।',
        interestingFactEn: 'Rainbows are optical phenomena formed when sunlight refracts and internally reflects inside raindrops.'
      },
      {
        id: 'kq-3',
        categoryId: 'kids-quiz',
        question: 'বাংলা বর্ণমালায় মোট কয়টি স্বরবর্ণ রয়েছে?',
        questionEn: 'How many vowels (Swarabarna) exist in the standard Bengali alphabet?',
        options: ['৯টি', '১০টি', '১১টি', '১২টি'],
        optionsEn: ['9', '10', '11', '12'],
        correctIndex: 2,
        explanation: 'বাংলা ভাষায় মোট ১১টি স্বরবর্ণ রয়েছে (অ, আ, ই, ঈ, উ, ঊ, ঋ, এ, ঐ, ও, ঔ)।',
        explanationEn: 'The modern Bengali orthography comprises exactly 11 distinct vowel letters (Swarabarna).',
        interestingFact: 'বাংলা লিপির উৎপত্তি হয়েছে প্রাচীন ব্রাহ্মী লিপি থেকে।',
        interestingFactEn: 'The Bengali writing script historically evolved from the ancient Eastern Brahmi lipi.'
      },
      {
        id: 'kq-4',
        categoryId: 'kids-quiz',
        question: 'দুধে কোন ভিটামিনটি প্রাকৃতিকভাবে থাকে না?',
        questionEn: 'Which essential vitamin is virtually absent in fresh natural cow’s milk?',
        options: ['ভিটামিন এ', 'ভিটামিন সি', 'ভিটামিন ডি', 'ক্যালসিয়াম'],
        optionsEn: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Calcium'],
        correctIndex: 1,
        explanation: 'দুধ একটি প্রায় আদর্শ খাবার হলেও এতে ভিটামিন সি এবং আয়রন পর্যাপ্ত পরিমাণে থাকে না।',
        explanationEn: 'While fresh milk is rich in proteins, calcium, and B vitamins, it lacks meaningful amounts of Vitamin C.',
        interestingFact: 'লেবু, আমলকী ও পেয়ারায় প্রচুর পরিমাণে ভিটামিন সি থাকে যা শরীরের রোগ প্রতিরোধ বাড়ায়।',
        interestingFactEn: 'Guavas, citrus fruits, and amla are powerhouses of ascorbic acid (Vitamin C).'
      },
      {
        id: 'kq-5',
        categoryId: 'kids-quiz',
        question: 'কোন পাখিকে বাংলাদেশের জাতীয় পাখি বলা হয়?',
        questionEn: 'Which bird is officially recognized as the national bird of Bangladesh?',
        options: ['দোয়েল', 'ময়না', 'টিয়া', 'কোকিল'],
        optionsEn: ['Oriental Magpie-Robin (Doel)', 'Myna', 'Parrot', 'Cuckoo'],
        correctIndex: 0,
        explanation: 'কালো ও সাদা রঙের মিষ্টি সুরেলা দোয়েল হলো বাংলাদেশের জাতীয় পাখি।',
        explanationEn: 'The melodious black-and-white Oriental Magpie-Robin (Doel) is the proud national bird of Bangladesh.',
        interestingFact: 'দোয়েল পাখি লেজ উঁচু করে নাচিয়ে চমৎকার শিস দিয়ে মিষ্টি গান গায়।',
        interestingFactEn: 'Magpie-robins are celebrated songbirds that cock their tails upright when whistling intricate territorial melodies.'
      },
      {
        id: 'kq-6',
        categoryId: 'kids-quiz',
        question: 'গাছের সবুজ পাতার রান্নায় খাদ্য তৈরিতে কোন গ্যাসটি বাতাস থেকে গ্রহণ করে?',
        questionEn: 'Which atmospheric gas do green plant leaves absorb to perform photosynthesis?',
        options: ['অক্সিজেন', 'কার্বন ডাই অক্সাইড', 'নাইট্রোজেন', 'হিলিয়াম'],
        optionsEn: ['Oxygen', 'Carbon Dioxide (CO₂)', 'Nitrogen', 'Helium'],
        correctIndex: 1,
        explanation: 'গাছ সালোকসংশ্লেষণ প্রক্রিয়ায় বাতাস থেকে কার্বন ডাই অক্সাইড গ্রহণ করে এবং মানুষের জন্য অক্সিজেন ছাড়ে।',
        explanationEn: 'Plants take in carbon dioxide through leaf stomata and release life-giving oxygen via photosynthesis.',
        interestingFact: 'গাছের পাতার ক্লোরোফিল সূর্যের আলোকে রাসায়নিক শক্তিতে রূপান্তর করতে পারে।',
        interestingFactEn: 'Chlorophyll molecules inside chloroplasts absorb solar photons and convert them into chemical energy.'
      }
    ]
  },
  {
    id: 'math-puzzles',
    slug: 'math-puzzles',
    title: 'গণিতের ধাঁধা (Math Puzzles)',
    titleEn: 'Math Puzzles & Number Games',
    description: 'সংখ্যার জাদু, ধারার প্যাটার্ন, জ্যামিতি ও মজাদার পাটিগণিত ধাঁধা।',
    descriptionEn: 'Number patterns, algebra teasers, geometry tricks, and entertaining arithmetic challenges.',
    iconName: 'Calculator',
    colorScheme: 'blue',
    difficulty: 'Intermediate',
    difficultyEn: 'Medium Level',
    questions: [
      {
        id: 'mp-1',
        categoryId: 'math-puzzles',
        question: 'একটি ব্যাগে ৩টি লাল ও ২টি নীল বল আছে। না দেখে তুললে লাল বল পাওয়ার সম্ভাবনা কত?',
        questionEn: 'A bag contains 3 red balls and 2 blue balls. What is the probability of blindly drawing a red ball?',
        options: ['১/৫', '২/৫', '৩/৫', '১/২'],
        optionsEn: ['1/5', '2/5', '3/5', '1/2'],
        correctIndex: 2,
        explanation: 'মোট বল ৫টি এবং অনুকূল ঘটনা ৩টি লাল বল। অতএব সম্ভাবনা = ৩/৫ বা ৬০%।',
        explanationEn: 'With 3 favorable red balls out of 5 total outcomes, probability = 3/5 or 60%.',
        interestingFact: 'সম্ভাবনা তত্ত্বের উৎপত্তি হয়েছিল সপ্তদশ শতাব্দীতে পাস্কাল ও ফার্মার মধ্যকার চিঠিপত্রের মাধ্যমে।',
        interestingFactEn: 'Mathematical probability theory arose in 1654 from letters between Blaise Pascal and Pierre de Fermat.'
      },
      {
        id: 'mp-2',
        categoryId: 'math-puzzles',
        question: 'যদি ২ + ৩ = ১৩, ৩ + ৪ = ২৫ হয়, তবে ৪ + ৫ = কত?',
        questionEn: 'If 2 + 3 = 13, and 3 + 4 = 25, then what is 4 + 5 equal to?',
        options: ['৩৫', '৪১', '৪৫', '৩৬'],
        optionsEn: ['35', '41', '45', '36'],
        correctIndex: 1,
        explanation: 'প্যাটার্নটি হলো বর্গের যোগফল: ২² + ৩² = ৪ + ৯ = ১৩; ৩² + ৪² = ৯ + ১৬ = ২৫; সুতরাং ৪² + ৫² = ১৬ + ২৫ = ৪১!',
        explanationEn: 'The sequence sums the squares: 2² + 3² = 4 + 9 = 13; 3² + 4² = 9 + 16 = 25; so 4² + 5² = 16 + 25 = 41.',
        interestingFact: 'পিথাগোরাসের উপপাদ্যে সমকোণী ত্রিভুজের অতিভুজের ক্ষেত্রে এই বর্গের সূত্র বহুল ব্যবহৃত হয়।',
        interestingFactEn: 'This square sum relationship mirrors the Pythagorean theorem where a² + b² = c² in right-angled triangles.'
      },
      {
        id: 'mp-3',
        categoryId: 'math-puzzles',
        question: 'কোন সংখ্যাকে সেই সংখ্যা দিয়েই ভাগ করলে ভাগফল সর্বদা কত হয় (০ ব্যতীত)?',
        questionEn: 'What is always the quotient when any non-zero number is divided by itself?',
        options: ['০', '১', 'সেই সংখ্যাটি নিজে', 'অসীম'],
        optionsEn: ['0', '1', 'The number itself', 'Infinity'],
        correctIndex: 1,
        explanation: 'যেকোনো অশূন্য সংখ্যাকে নিজের দ্বারা ভাগ করলে ফলাফল সর্বদা ১ হয় (যেমন: ৭ ÷ ৭ = ১)।',
        explanationEn: 'Dividing any non-zero real number by itself yields the multiplicative identity 1 (e.g. 7 ÷ 7 = 1).',
        interestingFact: 'তবে শূন্যকে শূন্য দিয়ে ভাগ করলে (০/০) তা গণিতে অনির্ণেয় (Indeterminate) হিসেবে গণ্য হয়।',
        interestingFactEn: 'However, dividing zero by zero (0/0) is undefined and considered indeterminate in calculus.'
      },
      {
        id: 'mp-4',
        categoryId: 'math-puzzles',
        question: '১ থেকে ১০০ পর্যন্ত লিখতে গিয়ে সংখ্যা ‘৯’ মোট কতবার আসে?',
        questionEn: 'How many times does the digit "9" appear when writing all integers from 1 to 100?',
        options: ['১০ বার', '১৯ বার', '২০ বার', '২১ বার'],
        optionsEn: ['10 times', '19 times', '20 times', '21 times'],
        correctIndex: 2,
        explanation: 'এককের ঘরে ৯, ১৯, ২৯... ৯৯ (১০ বার) এবং দশকের ঘরে ৯০ থেকে ৯৯ (১০ বার) মিলিয়ে মোট ২০ বার আসে!',
        explanationEn: '9 occurs 10 times in the units place (9, 19... 99) and 10 times in the tens place (90-99), totaling 20.',
        interestingFact: 'একইভাবে ১ থেকে ১০০ এর মধ্যে ২ থেকে ৯ পর্যন্ত প্রতিটি অঙ্কই ঠিক ২০ বার করে আসে।',
        interestingFactEn: 'Every single non-zero digit from 2 through 9 occurs exactly 20 times between numbers 1 and 100.'
      },
      {
        id: 'mp-5',
        categoryId: 'math-puzzles',
        question: 'ত্রিভুজের তিনটি কোণের অনুপাত ১:২:৩ হলে বৃহত্তম কোণটির মান কত ডিগ্রি?',
        questionEn: 'If the three angles of a triangle are in ratio 1:2:3, what is the measure of the largest angle in degrees?',
        options: ['৬০ ডিগ্রি', '৭৫ ডিগ্রি', '৯০ ডিগ্রি', '১২০ ডিগ্রি'],
        optionsEn: ['60 degrees', '75 degrees', '90 degrees', '120 degrees'],
        correctIndex: 2,
        explanation: '১x + ২x + ৩x = ৬x = ১৮০°; অতএব x = ৩০°। বৃহত্তম কোণটি ৩x = ৩ × ৩০° = ৯০° (সমকোণ)।',
        explanationEn: '1x + 2x + 3x = 6x = 180°, so x = 30°. The largest angle is 3 × 30° = 90° (a right angle).',
        interestingFact: '৩০°-৬০°-৯০° সমকোণী ত্রিভুজের বাহুগুলোর অনুপাত সর্বদা ১ : √৩ : ২ হয়।',
        interestingFactEn: 'A 30°-60°-90° special triangle always possesses side lengths in exact proportion 1 : √3 : 2.'
      },
      {
        id: 'mp-6',
        categoryId: 'math-puzzles',
        question: 'একটি বৃত্তের ব্যাসার্ধ দ্বিগুণ করা হলে তার ক্ষেত্রফল কত গুণ বৃদ্ধি পাবে?',
        questionEn: 'If the radius of a circle is doubled, by what factor does its total area increase?',
        options: ['২ গুণ', '৩ গুণ', '৪ গুণ', '৮ গুণ'],
        optionsEn: ['2 times', '3 times', '4 times', '8 times'],
        correctIndex: 2,
        explanation: 'বৃত্তের ক্ষেত্রফলের সূত্র πr²। ব্যাসার্ধ ২r হলে ক্ষেত্রফল হয় π(২r)² = ৪πr², অর্থাৎ পূর্বের ৪ গুণ!',
        explanationEn: 'Area = πr². Doubling radius to 2r yields π(2r)² = 4πr², quadrupling the original area.',
        interestingFact: 'বৃত্তের পরিধি ও ব্যাসের অনুপাত সর্বদা ধ্রুবক পাই (π), যার মান প্রায় ৩.১৪১৫৯।',
        interestingFactEn: 'The ratio of a circle’s circumference to diameter is always the irrational mathematical constant Pi (~3.14159).'
      }
    ]
  },
  {
    id: 'logical-questions',
    slug: 'logical-questions',
    title: 'যুক্তির প্রশ্ন (Logical Questions)',
    titleEn: 'Logical Reasoning Questions',
    description: 'যৌক্তিক বিশ্লেষণ, সম্পর্ক নির্ণয় এবং চিন্তাশক্তি বৃদ্ধির লজিক্যাল ধাঁধা।',
    descriptionEn: 'Deductive reasoning, relational brainteasers, and analytical logic puzzles to stimulate problem-solving.',
    iconName: 'Landmark',
    colorScheme: 'indigo',
    difficulty: 'Advanced',
    difficultyEn: 'Advanced Level',
    questions: [
      {
        id: 'lq-1',
        categoryId: 'logical-questions',
        question: 'রহিম করিমের বাবার একমাত্র ছেলের সন্তান। রহিমের সাথে করিমের সম্পর্ক কী?',
        questionEn: 'Rahim is the child of the only son of Karim’s father. What is the relationship between Karim and Rahim?',
        options: ['করিম রহিমের বাবা', 'করিম রহিমের চাচা', 'করিম রহিমের দাদা', 'করিম রহিমের ভাই'],
        optionsEn: ['Karim is Rahim’s father', 'Karim is Rahim’s uncle', 'Karim is Rahim’s grandfather', 'Karim is Rahim’s brother'],
        correctIndex: 0,
        explanation: 'করিমের বাবার একমাত্র ছেলে করিম নিজেই! আর রহিম যদি করিমের সন্তান হয়, তবে করিম হলো রহিমের বাবা।',
        explanationEn: 'The only son of Karim’s father is Karim himself. Since Rahim is his child, Karim is Rahim’s father.',
        interestingFact: 'রক্তের সম্পর্কের যুক্তির ধাঁধা মানুষের মস্তিষ্কের প্রাক-ফ্রন্টাল কর্টেক্সের কার্যক্ষমতা বাড়ায়।',
        interestingFactEn: 'Kinship logic puzzles activate the human prefrontal cortex responsible for relational reasoning.'
      },
      {
        id: 'lq-2',
        categoryId: 'logical-questions',
        question: 'একটি বৈদ্যুতিক ট্রেন ঘণ্টায় ১০০ কিমি বেগে উত্তর দিকে যাচ্ছে এবং বাতাস বইছে দক্ষিণ দিকে। ট্রেনের ধোঁয়া কোন দিকে যাবে?',
        questionEn: 'An electric train travels north at 100 km/h while wind blows from the south. Which direction does the smoke drift?',
        options: ['উত্তর দিকে', 'দক্ষিণ দিকে', 'পূর্ব দিকে', 'বৈদ্যুতিক ট্রেনের ধোঁয়া থাকে না'],
        optionsEn: ['To the north', 'To the south', 'To the east', 'Electric trains do not emit smoke'],
        correctIndex: 3,
        explanation: 'বৈদ্যুতিক ট্রেন বিদ্যুতে চলে, এতে কোনো কয়লা বা ডিজেল পুড়ে ধোঁয়া উৎপন্ন হয় না!',
        explanationEn: 'Fully electric trains operate on overhead pantograph or third-rail electricity and emit zero locomotive smoke.',
        interestingFact: 'বিশ্বের প্রথম বৈদ্যুতিক যাত্রীবাহী ট্রেন ১৮৭৯ সালে বার্লিনে সিমেন্স কোম্পানি তৈরি করেছিল।',
        interestingFactEn: 'The world’s first passenger electric railway was showcased in Berlin in 1879 by Werner von Siemens.'
      },
      {
        id: 'lq-3',
        categoryId: 'logical-questions',
        question: 'যদি গতকালের আগের দিন সোমবার হয়, তবে আগামীকালের পরের দিন কী বার হবে?',
        questionEn: 'If the day before yesterday was Monday, what day of the week will it be the day after tomorrow?',
        options: ['বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
        optionsEn: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
        correctIndex: 2,
        explanation: 'গতকালের আগের দিন সোমবার হলে আজ বুধবার। সুতরাং আগামীকাল বৃহস্পতিবার এবং আগামীকালের পরের দিন শুক্রবার!',
        explanationEn: 'If the day before yesterday was Monday, today is Wednesday. Tomorrow is Thursday, and the day after is Friday.',
        interestingFact: 'সপ্তাহের সাত দিনের নামকরণ প্রাচীন ব্যাবিলনে সাতটি দৃশ্যমান মহাজাগতিক বস্তুর নামানুসারে করা হয়েছিল।',
        interestingFactEn: 'The seven-day week system was pioneered in ancient Babylon, named after the 7 visible celestial bodies.'
      },
      {
        id: 'lq-4',
        categoryId: 'logical-questions',
        question: 'সব গোলাপই ফুল। কিছু ফুল দ্রুত শুকিয়ে যায়। এই তথ্য থেকে নিশ্চিতভাবে কোনটি সত্য?',
        questionEn: 'Premise: "All roses are flowers. Some flowers wilt quickly." Which conclusion is definitively true?',
        options: ['সব গোলাপই দ্রুত শুকায়', 'কিছু গোলাপ ফুল নাও হতে পারে', 'গোলাপ হলো এক প্রকার ফুল', 'সব ফুলই লাল রঙের'],
        optionsEn: ['All roses wilt quickly', 'Some roses might not be flowers', 'A rose is a type of flower', 'All flowers are red'],
        correctIndex: 2,
        explanation: 'প্রথম তথ্যে সরাসরি বলা হয়েছে ‘সব গোলাপই ফুল’, সুতরাং গোলাপ যে এক প্রকার ফুল তা নিশ্চিত সত্য।',
        explanationEn: 'The premise explicitly states "All roses are flowers", making "a rose is a type of flower" undeniably true.',
        interestingFact: 'যুক্তিশাস্ত্রে এই ধরণের সিদ্ধান্ত গ্রহণকে ন্যায়শাস্ত্র বা সিলোজিসম (Syllogism) বলা হয়।',
        interestingFactEn: 'Aristotle codified this formal deductive structure of categorical premises as a Syllogism.'
      },
      {
        id: 'lq-5',
        categoryId: 'logical-questions',
        question: 'তুমি একটি দৌড় প্রতিযোগিতায় দৌড়াচ্ছ এবং তুমি ২য় স্থানে থাকা প্রতিযোগীকে পেছনে ফেলে দিলে। তুমি এখন কোন স্থানে আছ?',
        questionEn: 'You are running in a marathon and you overtake the person in second place. What position are you in now?',
        options: ['১ম স্থান', '২য় স্থান', '৩য় স্থান', 'শেষ স্থান'],
        optionsEn: ['1st place', '2nd place', '3rd place', 'Last place'],
        correctIndex: 1,
        explanation: 'যে ২য় স্থানে ছিল তাকে অতিক্রম করায় তুমি তার জায়গাটি অর্থাৎ ২য় স্থান দখল করেছ, ১ম স্থান নয়!',
        explanationEn: 'By overtaking the runner who held 2nd place, you assume their previous position, which is 2nd place.',
        interestingFact: 'মানুষের সহজাত প্রবৃত্তি দ্রুত অনুমান করতে গিয়ে সাধারণ ভুলের ফাঁদে পড়ে, যা কগনিটিভ বায়াস।',
        interestingFactEn: 'This classic trick question illustrates intuitive cognitive bias where people mistakenly jump to "1st place".'
      },
      {
        id: 'lq-6',
        categoryId: 'logical-questions',
        question: 'একজন ডাক্তার রোগীকে ৩টি ট্যাবলেট দিয়ে বললেন প্রতি আধা ঘণ্টা পর পর ১টি করে খেতে। ৩টি ট্যাবলেট শেষ করতে কত সময় লাগবে?',
        questionEn: 'A physician gives a patient 3 pills, prescribing 1 pill every 30 minutes. How long does it take to consume all 3 pills?',
        options: ['দেড় ঘণ্টা', '১ ঘণ্টা', 'আধা ঘণ্টা', '২ ঘণ্টা'],
        optionsEn: ['1.5 hours', '1 hour (60 minutes)', '30 minutes', '2 hours'],
        correctIndex: 1,
        explanation: 'প্রথম ট্যাবলেটটি শুরুতেই খাওয়া হবে (০ মিনিট), দ্বিতীয়টি ৩০ মিনিটে এবং তৃতীয়টি ৬০ মিনিটে (১ ঘণ্টায়)। মোট সময় ১ ঘণ্টা!',
        explanationEn: 'Pill #1 is taken immediately at minute 0, Pill #2 at minute 30, and Pill #3 at minute 60 (1 total hour elapsed).',
        interestingFact: 'ট্যাবলেটের ক্ষেত্রে সময়ের ব্যবধান ওষুধ রক্তে সুষম ঘনত্ব বজায় রাখার জন্য চিকিৎসাবিজ্ঞানে অপরিহার্য।',
        interestingFactEn: 'Timed intervals in pharmaceutical dosing ensure sustained, safe therapeutic drug concentration in the bloodstream.'
      }
    ]
  },
  {
    id: 'science',
    slug: 'science',
    title: 'বিজ্ঞান কুইজ (Science Quiz)',
    titleEn: 'Science & Nature Quiz',
    description: 'পদার্থ, রসায়ন, মহাকাশ বিজ্ঞান, জীবদেহ ও প্রকৃতির চমকপ্রদ বৈজ্ঞানিক সত্য।',
    descriptionEn: 'Fascinating scientific laws in physics, chemistry, biology, human physiology, and deep space cosmos.',
    iconName: 'FlaskConical',
    colorScheme: 'cyan',
    featured: true,
    difficulty: 'Intermediate',
    difficultyEn: 'Medium Level',
    questions: [
      {
        id: 'sci-1',
        categoryId: 'science',
        question: 'শূন্য মাধ্যমে আলোর গতিবেগ প্রতি সেকেন্ডে প্রায় কত?',
        questionEn: 'What is the approximate speed of light through a vacuum per second?',
        options: ['১,৫০,০০০ কিমি', '২,৯৯,৭৯২ কিমি', '৩,৮৪,৪০০ কিমি', '১০,৮০,০০০ কিমি'],
        optionsEn: ['150,000 km/s', '299,792 km/s (~300,000 km/s)', '384,400 km/s', '1,080,000 km/s'],
        correctIndex: 1,
        explanation: 'শূন্যে আলোর সঠিক গতিবেগ ২৯৯,৭৯২,৪৫৮ মিটার/সেকেন্ড বা প্রতি সেকেন্ডে প্রায় ৩ লাখ কিলোমিটার।',
        explanationEn: 'Light travels in a vacuum at exactly 299,792,458 m/s, roughly 300,000 kilometers per second.',
        interestingFact: 'সূর্য থেকে পৃথিবীতে আলো পৌঁছাতে প্রায় ৮ মিনিট ২০ সেকেন্ড সময় লাগে।',
        interestingFactEn: 'Sunlight takes approximately 8 minutes and 20 seconds to traverse space and reach Earth’s surface.'
      },
      {
        id: 'sci-2',
        categoryId: 'science',
        question: 'পৃথিবীর বায়ুমণ্ডলে পরিমাণের দিক থেকে সবচেয়ে বেশি কোন গ্যাসটি বিদ্যমান?',
        questionEn: 'Which gas is the most abundant by volume in Earth’s atmosphere?',
        options: ['অক্সিজেন', 'কার্বন ডাই অক্সাইড', 'নাইট্রোজেন', 'আর্গন'],
        optionsEn: ['Oxygen', 'Carbon Dioxide', 'Nitrogen (N₂)', 'Argon'],
        correctIndex: 2,
        explanation: 'বায়ুমণ্ডলে প্রায় ৭৮.০৮% নাইট্রোজেন এবং প্রায় ২০.৯৫% অক্সিজেন রয়েছে।',
        explanationEn: 'Nitrogen gas comprises roughly 78.08% of Earth’s dry atmosphere, followed by oxygen at 20.95%.',
        interestingFact: 'নাইট্রোজেন অণুর শক্তিশালী ত্রিবন্ধনের কারণে সাধারণ তাপমাত্রায় এটি সহজে অন্য কোনো মৌলের সাথে বিক্রিয়া করে না।',
        interestingFactEn: 'The robust triple covalent bond in N₂ makes atmospheric nitrogen relatively inert at standard temperatures.'
      },
      {
        id: 'sci-3',
        categoryId: 'science',
        question: 'জীবদেহের কোষের ‘পাওয়ার হাউস’ বা শক্তিকেন্দ্র কাকে বলা হয়?',
        questionEn: 'Which cellular organelle is universally dubbed the "Powerhouse of the Cell"?',
        options: ['রাইবোজোম', 'গলগি বডি', 'মাইটোকন্ড্রিয়া', 'এন্ডোপ্লাজমিক রেটিকুলাম'],
        optionsEn: ['Ribosome', 'Golgi apparatus', 'Mitochondria', 'Endoplasmic Reticulum'],
        correctIndex: 2,
        explanation: 'মাইটোকন্ড্রিয়ায় কোষীয় শ্বসনের মাধ্যমে এটিপি (ATP) রূপে রাসায়নিক শক্তি উৎপন্ন হয়।',
        explanationEn: 'Mitochondria generate the majority of cellular adenosine triphosphate (ATP) via aerobic cellular respiration.',
        interestingFact: 'মাইটোকন্ড্রিয়ার নিজস্ব ডিএনএ রয়েছে যা মায়ের মাধ্যমে বংশানুক্রমে সন্তানের শরীরে আসে।',
        interestingFactEn: 'Mitochondria possess their own distinct circular DNA, inherited almost exclusively from the maternal lineage.'
      },
      {
        id: 'sci-4',
        categoryId: 'science',
        question: '২৫ ডিগ্রি সেলসিয়াস তাপমাত্রায় বিশুদ্ধ নিরপেক্ষ পানির পিএইচ (pH) মান কত?',
        questionEn: 'What is the pH level of pure neutral distilled water at 25°C?',
        options: ['৫', '৭', '৯', '১৪'],
        optionsEn: ['5', '7 (Neutral)', '9', '14'],
        correctIndex: 1,
        explanation: 'লগারিদমিক স্কেলে ৭ হলো সম্পূর্ণ নিরপেক্ষ মান, যেখানে অ্যাসিড বা ক্ষার কোনটিই বেশি নয়।',
        explanationEn: 'On the logarithmic pH scale, a value of 7 represents exact chemical neutrality between H⁺ and OH⁻ ions.',
        interestingFact: 'যেহেতু পিএইচ একটি লগারিদমিক স্কেল, তাই পিএইচ ৬-এর পানি পিএইচ ৭-এর চেয়ে ১০ গুণ বেশি অ্যাসিডিক।',
        interestingFactEn: 'Because pH is logarithmic, a solution at pH 6 contains tenfold more hydrogen ion concentration than pH 7.'
      },
      {
        id: 'sci-5',
        categoryId: 'science',
        question: 'মহাকর্ষ সূত্র এবং গতির ৩টি মৌলিক সূত্র কে প্রণয়ন করেছিলেন?',
        questionEn: 'Who formulated the universal law of gravitation and the three foundational laws of classical motion?',
        options: ['গ্যালিলিও গ্যালিলি', 'স্যার আইজ্যাক নিউটন', 'অ্যালবার্ট আইনস্টাইন', 'ইয়োহানেস কেপলার'],
        optionsEn: ['Galileo Galilei', 'Sir Isaac Newton', 'Albert Einstein', 'Johannes Kepler'],
        correctIndex: 1,
        explanation: '১৬৮৭ সালে স্যার আইজ্যাক নিউটন তাঁর ঐতিহাসিক গ্রন্থ ‘প্রিন্সিপিয়া ম্যাথমেটিকা’-তে গতি ও মহাকর্ষ সূত্র প্রকাশ করেন।',
        explanationEn: 'Sir Isaac Newton laid the foundation of classical mechanics in his 1687 masterpiece "Philosophiae Naturalis Principia Mathematica".',
        interestingFact: 'গ্রহগুলোর গতিপথের গণিত সমাধান করার জন্যই নিউটন ক্যালকুলাস আবিষ্কার করেছিলেন।',
        interestingFactEn: 'Newton pioneered fluxional calculus specifically to calculate the geometric orbits of gravitational bodies.'
      },
      {
        id: 'sci-6',
        categoryId: 'science',
        question: 'পরম শূন্য তাপমাত্রা (Absolute Zero) সেলসিয়াস স্কেলে কত ডিগ্রির সমান?',
        questionEn: 'What is the temperature of Absolute Zero equivalent to on the Celsius scale?',
        options: ['০°C', '-১০০°C', '-২৭৩.১৫°C', '-৪৫৯.৬৭°C'],
        optionsEn: ['0°C', '-100°C', '-273.15°C', '-459.67°C'],
        correctIndex: 2,
        explanation: 'পরম শূন্য তাপমাত্রা হলো ০ কেলভিন বা -২৭৩.১৫ ডিগ্রি সেলসিয়াস, যেখানে পরমাণুর তাপীয় কম্পন সম্পূর্ণ থেমে যায়।',
        explanationEn: 'Absolute zero corresponds to 0 Kelvin or −273.15°C, where all classical thermodynamic particle kinetic motion ceases.',
        interestingFact: 'পরম শূন্য তাপমাত্রার কাছাকাছি পৌঁছালে পদার্থের পঞ্চম অবস্থা ‘বোস-আইনস্টাইন কনডেনসেট’ সৃষ্টি হয়।',
        interestingFactEn: 'Cooling dilute bosons near absolute zero produces the exotic fifth state of matter: Bose-Einstein Condensate.'
      }
    ]
  },
  {
    id: 'bangladesh',
    slug: 'bangladesh',
    title: 'বাংলাদেশ বিষয়ক কুইজ (Bangladesh Quiz)',
    titleEn: 'Bangladesh Heritage Quiz',
    description: 'বাংলাদেশের মুক্তিযুদ্ধ, ভূগোল, নদ-নদী, জাতীয় ঐতিহ্য ও গৌরবময় ইতিহাস।',
    descriptionEn: 'The 1971 Liberation War, natural geography, cultural landmarks, national pride, and rich history of Bangladesh.',
    iconName: 'Landmark',
    colorScheme: 'teal',
    featured: true,
    popular: true,
    difficulty: 'Intermediate',
    difficultyEn: 'Medium Level',
    questions: [
      {
        id: 'bd-1',
        categoryId: 'bangladesh',
        question: 'বাংলাদেশের জাতীয় সংগীত ‘আমার সোনার বাংলা’-র রচয়িতা কে?',
        questionEn: 'Who composed the lyrics and melody of Bangladesh’s national anthem "Amar Sonar Bangla"?',
        options: ['কাজী নজরুল ইসলাম', 'রবীন্দ্রনাথ ঠাকুর', 'জসীম উদ্‌দীন', 'জীবনানন্দ দাশ'],
        optionsEn: ['Kazi Nazrul Islam', 'Rabindranath Tagore', 'Jasimuddin', 'Jibanananda Das'],
        correctIndex: 1,
        explanation: 'বিশ্বকবি রবীন্দ্রনাথ ঠাকুর ১৯০৫ সালে বঙ্গভঙ্গ আন্দোলনের প্রেক্ষাপটে ‘আমার সোনার বাংলা’ গানটি রচনা করেন।',
        explanationEn: 'Nobel laureate Rabindranath Tagore penned "Amar Sonar Bangla" in 1905 during the Partition of Bengal movement.',
        interestingFact: '১৯৭১ সালে মুক্তিযুদ্ধের সময় স্বাধীন বাংলা বেতার কেন্দ্র থেকে গানটি প্রচারিত হয়ে মুক্তিযোদ্ধাদের অনুপ্রাণিত করত।',
        interestingFactEn: 'During the 1971 Liberation War, the song was broadcasted by Swadhin Bangla Betar Kendra, rallying freedom fighters.'
      },
      {
        id: 'bd-2',
        categoryId: 'bangladesh',
        question: 'বাংলাদেশের একমাত্র পাহাড়ি দ্বীপ কোনটি?',
        questionEn: 'Which is the sole mountainous/hilly island in Bangladesh?',
        options: ['সেন্টমার্টিন', 'মহেশখালী', 'হাতিয়া', 'মনপুরা'],
        optionsEn: ['Saint Martin’s', 'Maheshkhali', 'Hatiya', 'Monpura'],
        correctIndex: 1,
        explanation: 'কক্সবাজার জেলায় অবস্থিত মহেশখালী হলো বাংলাদেশের একমাত্র পাহাড়ি দ্বীপ, যার চূড়ায় ঐতিহাসিক আদিনাথ মন্দির রয়েছে।',
        explanationEn: 'Maheshkhali in Cox’s Bazar is the only hilly island in Bangladesh, crowned by the ancient Adinath temple.',
        interestingFact: 'সেন্টমার্টিন হলো বাংলাদেশের একমাত্র প্রবাল দ্বীপ, আর মহেশখালী পাহাড়ি দ্বীপ।',
        interestingFactEn: 'While Saint Martin’s is the sole coral reef island, Maheshkhali is uniquely distinguished by its coastal hills.'
      },
      {
        id: 'bd-3',
        categoryId: 'bangladesh',
        question: 'মুক্তিযুদ্ধে অসামান্য বীরত্বের জন্য বীরশ্রেষ্ঠ খেতাবে ভূষিত বীরের সংখ্যা কতজন?',
        questionEn: 'How many martyred freedom fighters were awarded the supreme military title of "Bir Sreshtho" for valor in 1971?',
        options: ['৫ জন', '৭ জন', '১১ জন', '১৪ জন'],
        optionsEn: ['5 heroes', '7 heroes', '11 heroes', '14 heroes'],
        correctIndex: 1,
        explanation: '১৯৭১ সালের মুক্তিযুদ্ধে সর্বোচ্চ আত্মত্যাগের স্বীকৃতিস্বরূপ ৭ জন শহীদ বীর মুক্তিযোদ্ধাকে ‘বীরশ্রেষ্ঠ’ খেতাব দেওয়া হয়।',
        explanationEn: 'Seven immortal martyrs were bestowed with "Bir Sreshtho", the highest gallantry award of Bangladesh.',
        interestingFact: 'বীরশ্রেষ্ঠদের মধ্যে তিনজন সেনাবাহিনীর, দুজন নৌবাহিনীর, একজন বিমানবাহিনীর এবং একজন রাইফেলসের সদস্য ছিলেন।',
        interestingFactEn: 'The 7 Bir Sreshtho awardees represented the Army (3), Navy (2), Air Force (1), and East Pakistan Rifles (1).'
      },
      {
        id: 'bd-4',
        categoryId: 'bangladesh',
        question: 'বিশ্বের বৃহত্তম অবিচ্ছিন্ন প্রাকৃতিক বালুকাময় সমুদ্রসৈকত কোনটি?',
        questionEn: 'Which is the world’s longest unbroken natural sandy sea beach?',
        options: ['কুয়াকাটা সৈকত', 'কক্সবাজার সমুদ্রসৈকত', 'পাটায়া সৈকত', 'মায়ামি সৈকত'],
        optionsEn: ['Kuakata Beach', 'Cox’s Bazar Beach', 'Pattaya Beach', 'Miami Beach'],
        correctIndex: 1,
        explanation: 'কক্সবাজার সমুদ্রসৈকত প্রায় ১২০ কিলোমিটার দীর্ঘ, যা বিশ্বের দীর্ঘতম প্রাকৃতিক বালুকাময় সমুদ্রসৈকত।',
        explanationEn: 'Cox’s Bazar stretches over 120 continuous kilometers, making it the longest unbroken natural sand beach in the world.',
        interestingFact: 'কুয়াকাটা সৈকত হলো এমন এক বিরল স্থান যেখান থেকে একই সাথে সূর্যোদয় ও সূর্যাস্ত দুটোই দেখা যায়।',
        interestingFactEn: 'Kuakata beach in Patuakhali is one of the rare coastal spots where both sunrise and sunset can be viewed over water.'
      },
      {
        id: 'bd-5',
        categoryId: 'bangladesh',
        question: 'ইউনেস্কো ঘোষিত বিশ্ব ঐতিহ্যবাহী ম্যানগ্রোভ বন সুন্দরবনের সিংহভাগ কোন দেশে অবস্থিত?',
        questionEn: 'In which nation is the majority (~60%) of the UNESCO World Heritage Sundarbans mangrove forest located?',
        options: ['ভারতে', 'মিয়ানমারে', 'বাংলাদেশে', 'নেপালে'],
        optionsEn: ['India', 'Myanmar', 'Bangladesh', 'Nepal'],
        correctIndex: 2,
        explanation: 'সুন্দরবনের মোট আয়তনের প্রায় ৬০ শতাংশ অংশ বাংলাদেশে এবং বাকি ৪০ শতাংশ ভারতে অবস্থিত।',
        explanationEn: 'Approximately 60% of the world’s largest contiguous mangrove forest lies within sovereign Bangladeshi territory.',
        interestingFact: 'সুন্দরবনের নামকরণ হয়েছে সুন্দরী গাছের প্রাচুর্য এবং প্রকৃতির অনুপম সৌন্দর্যের কারণে।',
        interestingFactEn: 'The Sundarbans owes its historic name to the abundant mangrove tree species known locally as "Sundari" (Heritiera fomes).'
      },
      {
        id: 'bd-6',
        categoryId: 'bangladesh',
        question: 'বাংলাদেশের জাতীয় কবি কাজী নজরুল ইসলামের সমাধিস্থল কোথায় অবস্থিত?',
        questionEn: 'Where is the eternal resting place and mausoleum of National Poet Kazi Nazrul Islam located?',
        options: ['ময়মনসিংহের ত্রিশালে', 'ঢাকা বিশ্ববিদ্যালয় মসজিদ প্রাঙ্গণে', 'বাংলা একাডেমি প্রাঙ্গণে', 'মিরপুর বুদ্ধিজীবী কবরস্থানে'],
        optionsEn: ['Trishal in Mymensingh', 'Dhaka University Central Mosque Premises', 'Bangla Academy Compound', 'Mirpur Martyred Intellectuals Graveyard'],
        correctIndex: 1,
        explanation: 'জাতীয় কবি কাজী নজরুল ইসলামকে তাঁর ইচ্ছা অনুযায়ী ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় মসজিদের পাশে রাষ্ট্রীয় মর্যাদায় সমাহিত করা হয়।',
        explanationEn: 'National Poet Kazi Nazrul Islam was laid to rest with full state honors beside the Dhaka University Central Mosque.',
        interestingFact: 'কবি তাঁর গানে লিখেছিলেন: "মসজিদেরই পাশে আমায় কবর দিও ভাই, যেন গোরে থেকেও মোয়াজ্জিনের আজান শুনতে পাই।"',
        interestingFactEn: 'In his famous song, Nazrul passionately wrote: "Bury me beside a mosque, brother, so from my grave I may hear the Muezzin’s call."'
      }
    ]
  }
];

export function getCategoryById(id: string): QuizCategory | undefined {
  return QUIZ_CATEGORIES.find((c) => c.id === id || c.slug === id);
}

export function getAllCategories(): QuizCategory[] {
  return QUIZ_CATEGORIES;
}

export function getRandomQuiz(): QuizCategory {
  const randomIndex = Math.floor(Math.random() * QUIZ_CATEGORIES.length);
  return QUIZ_CATEGORIES[randomIndex];
}

// Localized Category Helper
export function getLocalizedCategory(category: QuizCategory, lang: Language): QuizCategory {
  if (lang === 'bn') return category;
  return {
    ...category,
    title: category.titleEn || category.title,
    description: category.descriptionEn || category.description,
    difficulty: (category.difficultyEn || category.difficulty) as any,
    questions: category.questions.map((q) => getLocalizedQuestion(q, lang))
  };
}

// Localized Question Helper
export function getLocalizedQuestion(question: QuizQuestion, lang: Language): QuizQuestion {
  if (lang === 'bn') return question;
  return {
    ...question,
    question: question.questionEn || question.question,
    options: question.optionsEn || question.options,
    explanation: question.explanationEn || question.explanation,
    interestingFact: question.interestingFactEn || question.interestingFact
  };
}

export function getDailyQuizForDate(
  dateStr: string,
  lang: Language = 'bn'
): { title: string; dateFormatted: string; questions: QuizQuestion[] } {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);

  const allQuestions = QUIZ_CATEGORIES.flatMap((c) => c.questions);
  const selectedQuestions: QuizQuestion[] = [];
  const seenIds = new Set<string>();

  for (let i = 0; i < 7; i++) {
    const index = (absHash + i * 17) % allQuestions.length;
    let candidate = allQuestions[index];
    if (seenIds.has(candidate.id)) {
      for (let j = 0; j < allQuestions.length; j++) {
        const nextCandidate = allQuestions[(index + j) % allQuestions.length];
        if (!seenIds.has(nextCandidate.id)) {
          candidate = nextCandidate;
          break;
        }
      }
    }
    seenIds.add(candidate.id);
    selectedQuestions.push(getLocalizedQuestion(candidate, lang));
  }

  const d = new Date(dateStr + 'T12:00:00');
  const dateFormatted = d.toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const title =
    lang === 'bn'
      ? `দৈনিক কুইজ ও ধাঁধা · ${dateFormatted}`
      : `Daily Quiz & Riddles · ${dateFormatted}`;

  return {
    title,
    dateFormatted,
    questions: selectedQuestions
  };
}
