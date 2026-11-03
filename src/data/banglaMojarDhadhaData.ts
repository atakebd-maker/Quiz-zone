import { QuizCategory, QuizQuestion } from '../types/quiz';

/**
 * Completely new 15-question Bengali Riddles Question Bank
 * Category: বাংলা মজার ধাঁধা (Bangla Riddles)
 * All questions, options, correct answers, and explanations as provided by user.
 */
export const BANGLA_MOJAR_DHADHA_QUESTIONS: QuizQuestion[] = [
  {
    id: 'bmd-1',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি ঘরে ৫টি মোমবাতি জ্বলছিল। বাতাসে ২টি নিভে গেল। সকালে ঘরে কয়টি মোমবাতি অবশিষ্ট থাকবে?',
    questionEn: 'In a room, 5 candles were burning. Wind blew out 2. In the morning, how many candles remain in the room?',
    options: ['২টি', '৩টি', '৫টি', '০টি'],
    optionsEn: ['2', '3', '5', '0'],
    correctIndex: 0, // A. ২টি
    explanation: '২টি মোমবাতি নিভে যাওয়ার পর সেগুলোই অবশিষ্ট থাকবে। বাকি ৩টি জ্বলতে জ্বলতে শেষ হয়ে যাবে।',
    explanationEn: 'The 2 candles that were blown out remained preserved. The remaining 3 kept burning until completely consumed.',
    interestingFact: 'মোমবাতির শিখার তাপমাত্রা বাইরের দিকে প্রায় ১৪০০ ডিগ্রি সেলসিয়াসে পৌঁছাতে পারে।',
    interestingFactEn: 'The outer edge of a candle flame can reach temperatures of up to 1,400 degrees Celsius.'
  },
  {
    id: 'bmd-2',
    categoryId: 'bangla-mojar-dhadha',
    question: 'এমন কোন জিনিস আছে, যা যত বেশি ভাগ করা হয়, তত বেশি মানুষের কাছে পৌঁছায়?',
    questionEn: 'What is that thing which, the more it is shared, reaches more people?',
    options: ['টাকা', 'জ্ঞান', 'খাবার', 'জমি'],
    optionsEn: ['Money', 'Knowledge', 'Food', 'Land'],
    correctIndex: 1, // B. জ্ঞান
    explanation: 'জ্ঞান অন্যদের সঙ্গে ভাগ করলে তা আরও বেশি মানুষের মধ্যে ছড়িয়ে পড়ে।',
    explanationEn: 'Sharing knowledge with others spreads it among more people without diminishing.',
    interestingFact: 'জ্ঞান চর্চা ও অন্যকে শেখালে নিজের মস্তিষ্কে স্মৃতিশক্তি প্রায় ৯০% পর্যন্ত বৃদ্ধি পায়।',
    interestingFactEn: 'Teaching others is proven to increase memory retention by up to 90%.'
  },
  {
    id: 'bmd-3',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি সংখ্যাকে নিজের সঙ্গে গুণ করলে ৪৯ হয়। সংখ্যাটি কত?',
    questionEn: 'Multiplying a number by itself gives 49. What is the number?',
    options: ['৬', '৭', '৮', '৯'],
    optionsEn: ['6', '7', '8', '9'],
    correctIndex: 1, // B. ৭
    explanation: '৭ × ৭ = ৪৯।',
    explanationEn: '7 × 7 = 49.',
    interestingFact: '৪৯ একটি পূর্ণ বর্গসংখ্যা এবং ৭ হলো একটি মৌলিক সংখ্যা।',
    interestingFactEn: '49 is a perfect square number and 7 is a prime number.'
  },
  {
    id: 'bmd-4',
    categoryId: 'bangla-mojar-dhadha',
    question: 'তুমি যত সামনে এগোবে, তোমার পেছনে তত বেশি কী তৈরি হবে?',
    questionEn: 'The more you move forward, the more of what is left behind you?',
    options: ['আলো', 'শব্দ', 'পদচিহ্ন', 'ছায়া'],
    optionsEn: ['Light', 'Sound', 'Footsteps', 'Shadow'],
    correctIndex: 2, // C. পদচিহ্ন
    explanation: 'হাঁটতে থাকলে পেছনে একের পর এক পদচিহ্ন তৈরি হয়।',
    explanationEn: 'As you keep walking forward, footsteps are continuously created and left behind.',
    interestingFact: 'চাঁদের বুকে বাতাস না থাকায় ১৯৬৯ সালে নিল আর্মস্ট্রংয়ের ফেলা পদচিহ্ন কোটি বছর স্থায়ী থাকবে।',
    interestingFactEn: 'Because there is no wind on the Moon, Neil Armstrong’s 1969 footprints will remain for millions of years.'
  },
  {
    id: 'bmd-5',
    categoryId: 'bangla-mojar-dhadha',
    question: 'এমন কোন জিনিস আছে, যা কেনার সময় কালো, ব্যবহারের সময় লাল এবং শেষে সাদা হয়ে যায়?',
    questionEn: 'What is black when bought, red when used, and white when finished?',
    options: ['কয়লা', 'লোহা', 'কাঠ', 'কাগজ'],
    optionsEn: ['Coal', 'Iron', 'Wood', 'Paper'],
    correctIndex: 0, // A. কয়লা
    explanation: 'কয়লা প্রথমে কালো থাকে, জ্বললে লাল হয় এবং পুড়ে ছাই হলে সাদা হয়ে যায়।',
    explanationEn: 'Coal is black originally, glows glowing red while burning, and turns into white-grey ash.',
    interestingFact: 'কয়লা মূলত লক্ষ লক্ষ বছর আগে মাটির নিচে চাপা পড়া প্রাচীন উদ্ভিদের জীবাশ্ম রূপ।',
    interestingFactEn: 'Coal is a fossil fuel formed from compressed terrestrial vegetation over millions of years.'
  },
  {
    id: 'bmd-6',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি বইয়ের ১০০টি পৃষ্ঠা আছে। তুমি যদি ১ থেকে ১০০ পর্যন্ত সব পৃষ্ঠা নম্বর লেখো, তাহলে ৯ সংখ্যাটি কতবার লিখতে হবে?',
    questionEn: 'A book has 100 pages. If you write page numbers from 1 to 100, how many times will the digit 9 appear?',
    options: ['১০ বার', '১৯ বার', '২০ বার', '২১ বার'],
    optionsEn: ['10 times', '19 times', '20 times', '21 times'],
    correctIndex: 2, // C. ২০ বার
    explanation: 'এককের ঘরে ৯ মোট ১০ বার এবং দশকের ঘরে ৯ মোট ১০ বার আসে। মোট ২০ বার।',
    explanationEn: 'The digit 9 appears 10 times in the ones place (9, 19, 29, ..., 99) and 10 times in the tens place (90 to 99). Total = 20 times.',
    interestingFact: '১ থেকে ১০০ পর্যন্ত যেকোনো অশূন্য সংখ্যা (১ থেকে ৯) ঠিক ২০ বার করে আসে!',
    interestingFactEn: 'From 1 to 100, every non-zero single digit (1 to 9) appears exactly 20 times!'
  },
  {
    id: 'bmd-7',
    categoryId: 'bangla-mojar-dhadha',
    question: 'কোন জিনিসটি তোমার সামনে থাকে, কিন্তু তুমি কখনো সেটিকে ধরতে পারো না?',
    questionEn: 'What is always in front of you, but you can never physically grasp it?',
    options: ['বাতাস', 'ভবিষ্যৎ', 'আলো', 'ছায়া'],
    optionsEn: ['Air', 'The Future', 'Light', 'Shadow'],
    correctIndex: 1, // B. ভবিষ্যৎ
    explanation: 'ভবিষ্যৎ সবসময় সামনে থাকে, কিন্তু তাকে হাতে ধরা যায় না।',
    explanationEn: 'The future is always lying ahead of us, yet it can never be physically caught.',
    interestingFact: 'পদার্থবিদ্যায় সময়ের এই একমুখী সম্মুখ প্রবাহকে ‘অ্যারো অব টাইম’ (Arrow of Time) বলা হয়।',
    interestingFactEn: 'In modern physics, the thermodynamic forward direction of time is known as the Arrow of Time.'
  },
  {
    id: 'bmd-8',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি ঘড়ি প্রতি ঘণ্টায় ৫ মিনিট পিছিয়ে যায়। সকাল ৮টায় সঠিক সময় দেখানো হলে ৪ ঘণ্টা পর ঘড়িটি কতটা পিছিয়ে থাকবে?',
    questionEn: 'A clock loses 5 minutes every hour. If set correctly at 8 AM, how many minutes will it lag after 4 hours?',
    options: ['৫ মিনিট', '১০ মিনিট', '১৫ মিনিট', '২০ মিনিট'],
    optionsEn: ['5 minutes', '10 minutes', '15 minutes', '20 minutes'],
    correctIndex: 3, // D. ২০ মিনিট
    explanation: '৪ × ৫ = ২০ মিনিট।',
    explanationEn: '4 × 5 = 20 minutes.',
    interestingFact: 'মহাকাশে বা তীব্র মহাকর্ষীয় ক্ষেত্রে ঘড়ির সময় সাধারণ ঘড়ির চেয়ে তুলনামূলকভাবে ধীর গতিতে চলে।',
    interestingFactEn: 'According to Einstein’s general relativity, gravity causes gravitational time dilation.'
  },
  {
    id: 'bmd-9',
    categoryId: 'bangla-mojar-dhadha',
    question: 'কোন জিনিসটি ভাঙলে কোনো শব্দ হয় না, কিন্তু মানুষের মনে অনেক কষ্ট দিতে পারে?',
    questionEn: 'What makes no sound when broken, but causes profound heartache to people?',
    options: ['কাঁচ', 'প্রতিশ্রুতি', 'কাঠ', 'পাথর'],
    optionsEn: ['Glass', 'A Promise', 'Wood', 'Stone'],
    correctIndex: 1, // B. প্রতিশ্রুতি
    explanation: 'প্রতিশ্রুতি ভঙ্গ হলে মানুষের বিশ্বাস ও মনে কষ্ট তৈরি হতে পারে।',
    explanationEn: 'Breaking a promise shatters mutual trust and causes deep emotional pain without making physical sound.',
    interestingFact: 'মনোবিজ্ঞানীদের মতে, বিশ্বাস ও প্রতিশ্রুতি বজায় রাখা মানুষের মানসিক শান্তির অন্যতম প্রধান শর্ত।',
    interestingFactEn: 'Psychological studies highlight trust as the single strongest pillar in interpersonal wellbeing.'
  },
  {
    id: 'bmd-10',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি ঝুড়িতে ১২টি আম আছে। ১২ জনকে একটি করে আম দেওয়ার পরও ঝুড়িতে একটি আম রয়ে গেল। কীভাবে সম্ভব?',
    questionEn: 'A basket has 12 mangoes. After giving 12 people one mango each, one mango still remains in the basket. How?',
    options: ['একটি আম নকল ছিল', 'একজনকে ঝুড়িসহ আম দেওয়া হয়েছে', 'দুটি আম একসঙ্গে দেওয়া হয়েছে', 'ঝুড়িতে লুকানো আম ছিল'],
    optionsEn: ['One mango was fake', 'One person was given the mango with the basket', 'Two mangoes given together', 'A mango was hidden'],
    correctIndex: 1, // B. একজনকে ঝুড়িসহ আম দেওয়া হয়েছে
    explanation: 'শেষ ব্যক্তিকে আমসহ ঝুড়িটি দেওয়া হয়েছে।',
    explanationEn: 'The last recipient received the 12th mango while still inside the basket.',
    interestingFact: 'বাংলাদেশ বিশ্বে আম উৎপাদনে অন্যতম শীর্ষ দেশ, যেখানে প্রতি বছর প্রায় ১৫ লক্ষ টন আম উৎপাদিত হয়।',
    interestingFactEn: 'Bangladesh produces approximately 1.5 million metric tons of mangoes annually.'
  },
  {
    id: 'bmd-11',
    categoryId: 'bangla-mojar-dhadha',
    question: 'এমন কোন জিনিস আছে, যা তুমি অন্যকে দিলে তোমার কাছেও থেকে যায়?',
    questionEn: 'What is something you can give to someone else, yet it still stays with you?',
    options: ['টাকা', 'কলম', 'হাসি', 'জামা'],
    optionsEn: ['Money', 'Pen', 'A Smile', 'Shirt'],
    correctIndex: 2, // C. হাসি
    explanation: 'তুমি অন্যকে হাসি উপহার দিলেও নিজের হাসি হারাও না।',
    explanationEn: 'Smiling at someone shares warmth with them without taking your own smile away.',
    interestingFact: 'একটি আন্তরিক হাসির জন্য মুখের প্রায় ১২টি পেশির সমন্বিত সঞ্চালন প্রয়োজন হয়।',
    interestingFactEn: 'A genuine smile activates roughly a dozen coordinated facial muscles and releases endorphins.'
  },
  {
    id: 'bmd-12',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি গাড়ি উত্তর দিকে যাচ্ছে। চালক ডান দিকে ঘুরলেন, তারপর আবার ডান দিকে ঘুরলেন। এখন গাড়িটি কোন দিকে যাচ্ছে?',
    questionEn: 'A car is heading North. The driver turns right, then turns right again. Which direction is the car heading now?',
    options: ['উত্তর', 'দক্ষিণ', 'পূর্ব', 'পশ্চিম'],
    optionsEn: ['North', 'South', 'East', 'West'],
    correctIndex: 1, // B. দক্ষিণ
    explanation: 'উত্তর থেকে ডান দিকে ঘুরলে পূর্ব এবং আবার ডান দিকে ঘুরলে দক্ষিণ হয়।',
    explanationEn: 'Turning right from North heads East; turning right again heads South (180-degree turnaround).',
    interestingFact: 'মহাসড়কে দুটি ৯০ ডিগ্রি সমকোণে ডান বাঁক নেওয়ার অর্থ গাড়িটির দিক সম্পূর্ণ উল্টো (১৮০ ডিগ্রি) হওয়া।',
    interestingFactEn: 'Two consecutive 90-degree right turns constitute a complete 180-degree reversal of bearing.'
  },
  {
    id: 'bmd-13',
    categoryId: 'bangla-mojar-dhadha',
    question: 'কোন জিনিসের কোনো পা নেই, কিন্তু সারা পৃথিবী ঘুরে বেড়াতে পারে?',
    questionEn: 'What has no legs, yet can travel across the whole world?',
    options: ['ডাকটিকিট', 'চেয়ার', 'টেবিল', 'দরজা'],
    optionsEn: ['Postage Stamp', 'Chair', 'Table', 'Door'],
    correctIndex: 0, // A. ডাকটিকিট
    explanation: 'চিঠির সঙ্গে ডাকটিকিট বিভিন্ন দেশ ও জায়গায় ভ্রমণ করতে পারে।',
    explanationEn: 'Affixed to an envelope, a postage stamp journeys to every corner of the world.',
    interestingFact: 'ডাকটিকিট সংগ্রহ ও গবেষণার বিজ্ঞানসম্মত শখকে বলা হয় ফিলাটেলি (Philately)।',
    interestingFactEn: 'The systematic hobby and study of collecting postage stamps is termed philately.'
  },
  {
    id: 'bmd-14',
    categoryId: 'bangla-mojar-dhadha',
    question: 'একটি পরীক্ষায় তুমি দ্বিতীয় স্থানে থাকা ব্যক্তিকে অতিক্রম করলে, তোমার অবস্থান কত হবে?',
    questionEn: 'In a competition, if you overtake the person in second place, what is your position?',
    options: ['প্রথম', 'দ্বিতীয়', 'তৃতীয়', 'চতুর্থ'],
    optionsEn: ['1st', '2nd', '3rd', '4th'],
    correctIndex: 1, // B. দ্বিতীয়
    explanation: 'দ্বিতীয় স্থানে থাকা ব্যক্তিকে অতিক্রম করলে তুমি তার জায়গা নেবে।',
    explanationEn: 'By overtaking the person currently in 2nd place, you step into 2nd place; 1st remains ahead.',
    interestingFact: 'এই বিখ্যাত বিভ্রান্তিকর লজিক ধাঁধাটি মানুষের তাৎক্ষণিক স্বতঃসিদ্ধ প্রবণতাকে চ্যালেঞ্জ করে।',
    interestingFactEn: 'This classic lateral puzzle tests reflexive thinking versus analytical logic.'
  },
  {
    id: 'bmd-15',
    categoryId: 'bangla-mojar-dhadha',
    question: 'এমন কোন জিনিস আছে, যা দিয়ে তুমি অনেক কিছু দেখতে পারো, কিন্তু সেটি নিজে কিছুই দেখতে পারে না?',
    questionEn: 'What allows you to see many things clearly, yet has no vision of its own?',
    options: ['আয়না', 'ক্যামেরা', 'চশমা', 'টেলিস্কোপ'],
    optionsEn: ['Mirror', 'Camera', 'Spectacles / Glasses', 'Telescope'],
    correctIndex: 2, // C. চশমা
    explanation: 'চশমা মানুষের দৃষ্টিশক্তি উন্নত করতে সাহায্য করে, কিন্তু নিজে দেখতে পারে না।',
    explanationEn: 'Eyeglasses correct and enhance human vision, yet they possess no sensory sight of their own.',
    interestingFact: 'ত্রয়োদশ শতাব্দীর শেষভাগে ইতালির পিসা বা ভেনিসে বিশ্বের প্রথম পরিধানযোগ্য চশমা উদ্ভাবিত হয়েছিল।',
    interestingFactEn: 'Wearable corrective spectacles were first invented in northern Italy in the late 13th century.'
  }
];

export const BANGLA_MOJAR_DHADHA_CATEGORY: QuizCategory = {
  id: 'bangla-mojar-dhadha',
  slug: 'bangla-mojar-dhadha',
  title: 'বাংলা মজার ধাঁধা (Bangla Riddles)',
  titleEn: 'Bangla Riddles & Brain Teasers',
  description: '১৫টি আকর্ষণীয় ও নতুন বাংলা মজার ধাঁধা! বুদ্ধিমত্তা যাচাই করুন, জানুন তাৎক্ষণিক সঠিক উত্তর ও চমৎকার ব্যাখ্যা।',
  descriptionEn: 'A brand new set of 15 clever Bengali riddles with instant feedback, explanations, and score evaluation.',
  iconName: 'Sparkles',
  colorScheme: 'indigo',
  featured: true,
  popular: true,
  recentlyAdded: true,
  difficulty: 'All Levels',
  difficultyEn: 'All Levels',
  questions: BANGLA_MOJAR_DHADHA_QUESTIONS
};
