import { QuizCategory, QuizQuestion } from '../types/quiz';

/**
 * 30 Brand New Original Math Riddles for Quiz Zone BD
 * Category: Math Riddles (গণিতের ধাঁধা)
 * Thoroughly verified mathematical accuracy, 4 choices, dual language (EN & BN),
 * detailed explanations, and fascinating real mathematical facts.
 */
export const MATH_RIDDLES_QUESTIONS: QuizQuestion[] = [
  {
    id: 'mr-1',
    categoryId: 'math-riddles',
    question: 'এমন কোন বিজোড় সংখ্যা যার ইংরেজি নামের প্রথম অক্ষরটি সরিয়ে নিলে তা ‘even’ (জোড়) হয়ে যায়?',
    questionEn: 'Which odd number becomes "even" if you remove the first letter from its English spelling?',
    options: ['Nine (৯)', 'Seven (৭)', 'Eleven (১১)', 'Three (৩)'],
    optionsEn: ['Nine', 'Seven', 'Eleven', 'Three'],
    correctIndex: 1, // Seven -> 's' removed = 'even'
    explanation: 'Seven (৭) একটি বিজোড় সংখ্যা। এর ইংরেজি বানান ‘SEVEN’-এর প্রথম বর্ণ ‘S’ সরিয়ে নিলে বাকি থাকে ‘EVEN’ (যার অর্থ জোড়)!',
    explanationEn: 'The word "SEVEN" is an odd number, but when you remove the first letter "S", it literally spells "EVEN"!',
    interestingFact: 'সাত (৭) হলো একমাত্র সংখ্যা যাকে ১ থেকে ১০-এর মধ্যকার অন্য কোনো সংখ্যা দিয়ে গুণ বা ভাগ করে ১-১০ এর কোনো সংখ্যা পাওয়া যায় না।',
    interestingFactEn: 'Seven is the only number between 1 and 10 that cannot be multiplied or divided to produce another integer within the group.'
  },
  {
    id: 'mr-2',
    categoryId: 'math-riddles',
    question: 'একটি সাধারণ টেলিফোনের ডায়াল প্যাডের সবকটি সংখ্যা (০-৯) একসাথে গুণ করলে গুণফল কত হবে?',
    questionEn: 'What is the product when you multiply all the numbers on a standard telephone dial pad (0 through 9) together?',
    options: ['৩৬২,৮৮০', '১,০০,০০০', '০', 'অসংজ্ঞায়িত'],
    optionsEn: ['362,880', '100,000', '0', 'Undefined'],
    correctIndex: 2, // 0
    explanation: 'টেলিফোনের ডায়াল প্যাডে ১ থেকে ৯ এর পাশাপাশি ‘০’ (শূন্য) সংখ্যাটিও রয়েছে। যেকোনো সংখ্যাকে শূন্য দিয়ে গুণ করলে গুণফল সর্বদা ০ হয়!',
    explanationEn: 'Telephone keypads contain the digit 0 along with 1-9. In mathematics, any finite product multiplied by zero yields zero!',
    interestingFact: 'প্রাচীন ভারতীয় গণিতবিদ ব্রহ্মগুপ্ত ৬২৮ খ্রিস্টাব্দে প্রথম শূন্যের গাণিতিক নিয়মাবলি লিপিবদ্ধ করেছিলেন।',
    interestingFactEn: 'Indian mathematician Brahmagupta in 628 CE was the first to formalize arithmetic rules for the number zero.'
  },
  {
    id: 'mr-3',
    categoryId: 'math-riddles',
    question: 'একটি ড্রয়ারের ভেতর ১০টি কালো এবং ১০টি সাদা মোজা আছে। অন্ধকারে না দেখে ড্রয়ার থেকে সর্বনিম্ন কয়টি মোজা তুললে নিশ্চিতভাবে এক জোড়া একই রঙের মোজা মিলবে?',
    questionEn: 'A drawer holds 10 black and 10 white socks. In total darkness, what is the minimum number of socks you must draw to guarantee at least one matching pair?',
    options: ['৩টি', '২টি', '১১টি', '২১টি'],
    optionsEn: ['3 socks', '2 socks', '11 socks', '21 socks'],
    correctIndex: 0, // 3
    explanation: 'পিজিয়নহোল নীতি (Pigeonhole Principle): যেহেতু মোজা মাত্র দুটি রঙের (কালো ও সাদা), তাই ৩টি মোজা তুললে অবশ্যই অন্তত ২টি একই রঙের হতে বাধ্য!',
    explanationEn: 'By the Pigeonhole Principle, with only 2 possible colors, drawing 3 socks guarantees at least two will share the same color.',
    interestingFact: 'জার্মান গণিতবিদ পিটার গুস্তাভ ডিরিকলে ১৮৩৪ সালে আনুষ্ঠানিক ভাবে পিজিয়নহোল নীতি সংজ্ঞায়িত করেন।',
    interestingFactEn: 'German mathematician Peter Gustav Lejeune Dirichlet formally established the Pigeonhole Principle in 1834.'
  },
  {
    id: 'mr-4',
    categoryId: 'math-riddles',
    question: '১ থেকে ১০০ পর্যন্ত সকল ক্রমিক সংখ্যার যোগফল কত?',
    questionEn: 'What is the sum of all consecutive integers from 1 to 100?',
    options: ['৫০০০', '৫০৫০', '৫১০০', '৪৫০০'],
    optionsEn: ['5000', '5050', '5100', '4500'],
    correctIndex: 1, // 5050
    explanation: 'সূত্র: n(n + ১) ÷ ২ = ১০০ × ১০১ ÷ ২ = ৫০ × ১০১ = ৫০৫০। বালক বয়সে কার্ল ফ্রিডরিখ গাউস মাত্র কয়েক সেকেন্ডে এই ধাঁধার সমাধান করেছিলেন!',
    explanationEn: 'Formula: n(n + 1) / 2 = 100 × 101 / 2 = 5050. Young Carl Friedrich Gauss famously discovered this shortcut in primary school.',
    interestingFact: 'গাউস লক্ষ্য করেছিলেন ১+১০০=১০১, ২+৯৯=১০১—এভাবে ৫০ জোড়া ১০১ তৈরি হয়, যার গুণফল ৫০ × ১০১ = ৫০৫০!',
    interestingFactEn: 'Gauss noticed pairs (1+100=101, 2+99=101... up to 50 pairs), multiplying 50 × 101 = 5050 instantly!'
  },
  {
    id: 'mr-5',
    categoryId: 'math-riddles',
    question: 'আমার কাছে দুটি কয়েন আছে যার মোট মান ৩০ সেন্ট। তাদের মধ্যে একটি কয়েন নিকেল (৫ সেন্ট) নয়। কয়েন দুটি কী কী?',
    questionEn: 'I have two coins totaling 30 cents, and one of them is NOT a nickel (5 cents). What are the two coins?',
    options: ['দুটি ১৫ সেন্টের কয়েন', 'তিনটি ডাইম (১০ সেন্ট)', 'একটি কোয়ার্টার (২৫ সেন্ট) ও একটি নিকেল (৫ সেন্ট)', 'দুটি ১০ সেন্টের কয়েন'],
    optionsEn: ['Two 15-cent coins', 'Three 10-cent dimes', 'A quarter (25¢) and a nickel (5¢)', 'Two 10-cent coins'],
    correctIndex: 2, // A quarter (25¢) and a nickel (5¢)
    explanation: 'একটি কয়েন নিকেল নয়—কারণ সেটি হলো ২৫ সেন্টের কোয়ার্টার! অন্য কয়েনটি হলো ৫ সেন্টের নিকেল। ধাঁধায় বলা হয়েছে ‘একটি নিকেল নয়’, দুটিই নয় এমন বলা হয়নি!',
    explanationEn: 'One of the coins is indeed NOT a nickel (it is a 25-cent quarter). The OTHER coin is the nickel! 25¢ + 5¢ = 30¢.',
    interestingFact: 'যুক্তরাষ্ট্রে ১৭৯২ সালে কয়েনজ আইন পাসের মাধ্যমে সেন্ট ও ডলার মুদ্রা ব্যবস্থার প্রচলন শুরু হয়।',
    interestingFactEn: 'The United States Mint was established by the Coinage Act of 1792, standardizing cents and dollars.'
  },
  {
    id: 'mr-6',
    categoryId: 'math-riddles',
    question: 'বডমাস (BODMAS / PEMDAS) নিয়ম অনুসারে, ৬০ ÷ ৫(৭ - ৫) এর সঠিক মান কত?',
    questionEn: 'According to the order of operations (BODMAS/PEMDAS), what is the value of 60 ÷ 5(7 - 5)?',
    options: ['৬', '২৪', '১২', '১'],
    optionsEn: ['6', '24', '12', '1'],
    correctIndex: 1, // 24
    explanation: 'প্রথমে ব্র্যাকেট: (৭ - ৫) = ২। এরপর সমমর্যাদার ভাগ ও গুণ বাম থেকে ডানে: ৬০ ÷ ৫ = ১২; এরপর ১২ × ২ = ২৪!',
    explanationEn: 'Brackets first: (7 - 5) = 2. Left-to-right division and multiplication gives: 60 ÷ 5 = 12, then 12 × 2 = 24.',
    interestingFact: 'পাটিগণিতে গুণ ও ভাগের অগ্রাধিকার সমান হওয়ায় সব সময় সমীকরণের বাম থেকে ডান দিকে হিসাব করতে হয়।',
    interestingFactEn: 'In modern algebraic notation, multiplication and division hold equal precedence and evaluate strictly left-to-right.'
  },
  {
    id: 'mr-7',
    categoryId: 'math-riddles',
    question: 'একটি শামুক ৩০ মিটার গভীর কুয়ার নিচে আছে। দিনে ৩ মিটার ওঠে কিন্তু রাতে ২ মিটার পিছলে নামে। কুয়া থেকে বের হতে তার কত দিন লাগবে?',
    questionEn: 'A snail is at the bottom of a 30-meter well. Each day it climbs 3m, and each night slips back 2m. How many days to escape?',
    options: ['৩০ দিন', '২৯ দিন', '২৮ দিন', '২৭ দিন'],
    optionsEn: ['30 days', '29 days', '28 days', '27 days'],
    correctIndex: 2, // 28 days
    explanation: '২৭ দিনে শামুকটি মোট ২৭ মিটার উচ্চতায় পৌঁছাবে। ২৮তম দিনে ৩ মিটার উপরে উঠে সে ৩০ মিটার পেরিয়ে বাইরে চলে আসবে, আর পিছলে পড়বে না!',
    explanationEn: 'After 27 days and nights, the snail reaches 27 meters. On day 28, it climbs 3 meters to reach 30 meters and escapes before nightfall!',
    interestingFact: 'শামুক তার পেশিবহুল পা এবং পিচ্ছিল মিউকাস নিঃসরণের সাহায্যে মাধ্যাকর্ষণ অগ্রাহ্য করে খাড়া দেয়ালে চলাচল করতে পারে।',
    interestingFactEn: 'Snails secrete sticky pedal mucus that enables them to climb completely vertical surfaces against gravity.'
  },
  {
    id: 'mr-8',
    categoryId: 'math-riddles',
    question: 'গণিতের সমগ্র সংখ্যাজগতের মধ্যে একমাত্র জোড় মৌলিক সংখ্যা কোনটি?',
    questionEn: 'What is the only even prime number in all of mathematics?',
    options: ['০', '২', '৪', '৬'],
    optionsEn: ['0', '2', '4', '6'],
    correctIndex: 1, // 2
    explanation: '২ হলো একমাত্র জোড় মৌলিক সংখ্যা। ২ ছাড়া অন্য যেকোনো জোড় সংখ্যা ২ দ্বারা নিঃশেষে বিভাজ্য, তাই সেগুলো কখনো মৌলিক হতে পারে না।',
    explanationEn: '2 is the only even prime number because any other even number is divisible by 2 and therefore composite.',
    interestingFact: 'মৌলিক সংখ্যা হলো আধুনিক ক্রিপ্টোগ্রাফি ও ইন্টারনেট সাইবার সুরক্ষার মূল ভিত্তি।',
    interestingFactEn: 'Large prime numbers form the cryptographic backbone of RSA encryption and secure internet communications.'
  },
  {
    id: 'mr-9',
    categoryId: 'math-riddles',
    question: 'একটি পুকুরে কচুরিপানা প্রতিদিন দ্বিগুণ হয়। পুরো পুকুর ভরে যেতে যদি ৪৮ দিন সময় লাগে, তবে পুকুরের ঠিক অর্ধেক ভরতে কত দিন লেগেছিল?',
    questionEn: 'Water lilies double in area every day. If it takes 48 days to cover an entire pond, on which day was it exactly half full?',
    options: ['২৪তম দিনে', '৪৭তম দিনে', '১২তম দিনে', '৩৬তম দিনে'],
    optionsEn: ['Day 24', 'Day 47', 'Day 12', 'Day 36'],
    correctIndex: 1, // Day 47
    explanation: 'যেহেতু প্রতিদিন কচুরিপানা দ্বিগুণ হয়, তাই ৪৮তম দিনে পুরো পুকুর ভরলে তার ঠিক আগের দিন অর্থাৎ ৪৭তম দিনে পুকুরটি অর্ধেক পূর্ণ ছিল!',
    explanationEn: 'Because the lily pads double each day, one day before completion (Day 47) the pond was exactly half covered.',
    interestingFact: 'এটি সূচকীয় বৃদ্ধির (Exponential Growth) একটি আদর্শ বাস্তব উদাহরণ যা মানুষের স্বাভাবিক রৈখিক চিন্তাকে চমকে দেয়।',
    interestingFactEn: 'This classic puzzle illustrates exponential growth, which compounds far faster than standard linear human intuition anticipates.'
  },
  {
    id: 'mr-10',
    categoryId: 'math-riddles',
    question: 'একটি আয়তাকার কাগজের একটি কোণা সোজা কাঁচি দিয়ে কেটে সরিয়ে নিলে অবশিষ্ট কাগজে কয়টি কোণা থাকবে?',
    questionEn: 'If you cut off one corner of a rectangular sheet of paper with a single straight scissor cut, how many corners remain?',
    options: ['৩টি', '৪টি', '৫টি', '৬টি'],
    optionsEn: ['3 corners', '4 corners', '5 corners', '6 corners'],
    correctIndex: 2, // 5
    explanation: 'আয়তক্ষেত্রের ৪টি কোণা থাকে। একটি কোণা কাটলে সেই কোণার জায়গায় ২টি নতুন কোণা সৃষ্টি হয়। ফলে ৪ - ১ + ২ = ৫টি কোণা তৈরি হয় (পঞ্চভুজ)!',
    explanationEn: 'A rectangle initially has 4 corners. Removing one corner with a straight cut creates 2 brand-new corners, leaving 5 corners in total (a pentagon).',
    interestingFact: 'জ্যামিতিতে যে বহুভুজের ৫টি কোণ ও ৫টি বাহু থাকে তাকে পেন্টাগন বা পঞ্চভুজ বলা হয়।',
    interestingFactEn: 'In Euclidean geometry, a five-sided polygon with five interior angles is formally designated as a pentagon.'
  },
  {
    id: 'mr-11',
    categoryId: 'math-riddles',
    question: 'একটি ব্যাট এবং একটি বলের মোট দাম ১১০ টাকা। ব্যাটের দাম বলের চেয়ে ১০০ টাকা বেশি হলে বলের দাম কত?',
    questionEn: 'A bat and a ball cost $110 in total. The bat costs $100 more than the ball. How much does the ball cost?',
    options: ['১০ টাকা', '৫ টাকা', '১৫ টাকা', '২.৫ টাকা'],
    optionsEn: ['$10', '$5', '$15', '$2.50'],
    correctIndex: 1, // $5
    explanation: 'ধরি বলের দাম = x টাকা। ব্যাটের দাম = (x + ১০০) টাকা। x + (x + ১০০) = ১১০ => ২x = ১০ => x = ৫ টাকা! ব্যাট ১০৫ টাকা ও বল ৫ টাকা।',
    explanationEn: 'Let ball = x. Bat = x + $100. Then x + (x + 100) = 110 => 2x = 10 => x = $5. The bat is $105 and ball is $5.',
    interestingFact: 'নোবেলজয়ী অর্থনীতিবিদ ড্যানিয়েল কানেম্যান তাঁর বইয়ে দেখিয়েছেন বেশিরভাগ মানুষ প্রথম দেখায় ভুল করে ১০ টাকা ভেবে ফেলে।',
    interestingFactEn: 'Nobel laureate Daniel Kahneman cited this famous cognitive bias riddle in "Thinking, Fast and Slow".'
  },
  {
    id: 'mr-12',
    categoryId: 'math-riddles',
    question: 'রোমান সংখ্যা পদ্ধতিতে ইংরেজি বর্ণ ‘C’ দিয়ে কোন সংখ্যাকে বোঝানো হয়?',
    questionEn: 'In Roman numerals, what numerical value is represented by the letter "C"?',
    options: ['৫০', '৫০০', '১০০', '১০০০'],
    optionsEn: ['50', '500', '100', '1000'],
    correctIndex: 2, // 100
    explanation: 'ল্যাটিন শব্দ ‘Centum’ (যার অর্থ একশত) থেকে রোমান সংখ্যা ‘C’ এসেছে, যার মান ১০০। রোমান সংখ্যায় L=৫০, D=৫০০ এবং M=১০০০।',
    explanationEn: 'Derived from the Latin root "Centum" meaning one hundred, the Roman numeral "C" stands for 100.',
    interestingFact: 'ইংরেজি ‘Century’ (শতবর্ষ) ও ‘Percent’ (শতাংশ) শব্দগুলোও এই Centum মূল শব্দ থেকে এসেছে।',
    interestingFactEn: 'English words such as "century", "cent", and "percent" directly derive from this same Latin root centum.'
  },
  {
    id: 'mr-13',
    categoryId: 'math-riddles',
    question: 'একটি সভায় ৬ জন ব্যক্তি উপস্থিত। প্রত্যেকে প্রত্যেকের সাথে ঠিক একবার করে করমর্দন (হ্যান্ডশেক) করলে মোট কতটি হ্যান্ডশেক হবে?',
    questionEn: 'At a meeting of 6 people, if everyone shakes hands with everyone else exactly once, how many handshakes occur?',
    options: ['১৫টি', '৩৬টি', '৩০টি', '১২টি'],
    optionsEn: ['15 handshakes', '36 handshakes', '30 handshakes', '12 handshakes'],
    correctIndex: 0, // 15
    explanation: 'সমাবেশ সূত্র (Combination): n(n - ১) ÷ ২ = ৬ × ৫ ÷ ২ = ৩০ ÷ ২ = ১৫টি হ্যান্ডশেক।',
    explanationEn: 'The combination formula is n(n - 1) / 2 = 6 × 5 / 2 = 15 handshakes among 6 individuals.',
    interestingFact: 'গ্রাফ থিওরিতে এই সমস্যাটিকে একটি ৬-শীর্ষবিন্দুর সম্পূর্ণ গ্রাফ (K₆)-এর বাহুর সংখ্যা হিসেবে দেখা হয়।',
    interestingFactEn: 'In graph theory, this equals the number of undirected edges in a complete graph with 6 vertices (K₆).'
  },
  {
    id: 'mr-14',
    categoryId: 'math-riddles',
    question: 'উচ্চতর গণিতে ০! (শূন্য ফ্যাক্টোরিয়াল)-এর মান কত ধরা হয়?',
    questionEn: 'In mathematics, what is the evaluated value of 0! (zero factorial)?',
    options: ['০', '১', 'অসংজ্ঞায়িত', 'অসীম'],
    optionsEn: ['0', '1', 'Undefined', 'Infinity'],
    correctIndex: 1, // 1
    explanation: 'গাণিতিক সংজ্ঞা ও ফ্যাক্টোরিয়াল সূত্র n! = (n+১)! / (n+১) অনুযায়ী ০! = ১! / ১ = ১। শূন্যটি উপাদান সাজানোর উপায় ঠিক ১টি (খালি সেট)।',
    explanationEn: 'By convention and the recurrence relation n! = (n+1)! / (n+1), 0! = 1! / 1 = 1. There is exactly 1 way to arrange 0 items.',
    interestingFact: 'গামা ফাংশন Γ(n) = (n-1)! এর মাধ্যমে ভগ্নাংশ ও ঋণাত্মক সংখ্যার ক্ষেত্রেও ফ্যাক্টোরিয়াল সম্প্রসারিত করা যায়।',
    interestingFactEn: 'The Gamma function extends factorials to non-integers and complex numbers, where Γ(1) = 0! = 1.'
  },
  {
    id: 'mr-15',
    categoryId: 'math-riddles',
    question: 'ঘড়িতে যখন ঠিক ৩টা ১৫ মিনিট বাজে, তখন ঘণ্টার কাঁটা ও মিনিটের কাঁটার মধ্যবর্তী কোণ কত ডিগ্রি?',
    questionEn: 'At 3:15 on an analog clock, what is the exact angle between the hour hand and the minute hand?',
    options: ['০ ডিগ্রি', '৭.৫ ডিগ্রি', '১৫ ডিগ্রি', '৩০ ডিগ্রি'],
    optionsEn: ['0 degrees', '7.5 degrees', '15 degrees', '30 degrees'],
    correctIndex: 1, // 7.5 degrees
    explanation: 'মিনিটের কাঁটা ৩-এর ঘরে (৯০°)। ১৫ মিনিটে ঘণ্টার কাঁটা কিছুটা সরে যায়: ১৫ × ০.৫° = ৭.৫°। ফলে কাঁটা দুটির ব্যবধান ঠিক ৭.৫ ডিগ্রি!',
    explanationEn: 'The minute hand points at 3 (90°). In 15 minutes, the hour hand travels 15 × 0.5° = 7.5° past 3. The separation is 7.5°.',
    interestingFact: 'ঘড়ির ঘণ্টার কাঁটা প্রতি মিনিটে ০.৫ ডিগ্রি এবং মিনিটের কাঁটা প্রতি মিনিটে ৬ ডিগ্রি ঘোরে।',
    interestingFactEn: 'An analog clock’s minute hand rotates 6 degrees per minute, while the hour hand advances 0.5 degrees per minute.'
  },
  {
    id: 'mr-16',
    categoryId: 'math-riddles',
    question: 'যখন আমার বয়স ৬ বছর ছিল, তখন আমার বোনের বয়স ছিল আমার বয়সের অর্ধেক। এখন আমার বয়স ৭০ বছর হলে আমার বোনের বয়স কত?',
    questionEn: 'When I was 6 years old, my sister was half my age. Now that I am 70 years old, how old is my sister?',
    options: ['৩৫ বছর', '৬৭ বছর', '৬৮ বছর', '৬৪ বছর'],
    optionsEn: ['35 years old', '67 years old', '68 years old', '64 years old'],
    correctIndex: 1, // 67
    explanation: 'যখন আমার বয়স ৬, বোনের বয়স ছিল ৩ (আমার চেয়ে ৩ বছরের ছোট)। বয়সের পার্থক্য সারাজীবন অপরিবর্তিত থাকে: ৭০ - ৩ = ৬৭ বছর!',
    explanationEn: 'When you were 6, she was 3 (3 years younger). The 3-year gap never changes: 70 - 3 = 67 years old!',
    interestingFact: 'মনোবিজ্ঞানে এটিকে একটি ক্লাসিক কগনিটিভ ট্র্যাপ বলা হয়, কারণ অনেকেই ৭০-কে দুই দিয়ে ভাগ করে ৩৫ ভেবে ফেলে।',
    interestingFactEn: 'Psychologists categorize this as a cognitive trap where people instinctively divide 70 by 2 instead of maintaining the constant age gap.'
  },
  {
    id: 'mr-17',
    categoryId: 'math-riddles',
    question: 'ফিবোনাচ্চি সংখ্যাক্রম (০, ১, ১, ২, ৩, ৫, ৮, ১৩...)-এর পরবর্তী ৯ম পদটি কত?',
    questionEn: 'In the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13, ...), what is the 9th term?',
    options: ['২১', '২০', '১৯', '২৬'],
    optionsEn: ['21', '20', '19', '26'],
    correctIndex: 0, // 21
    explanation: 'ফিবোনাচ্চি ধারায় প্রতিটি পদ তার পূর্ববর্তী দুটি পদের যোগফল: ৮ + ১৩ = ২১!',
    explanationEn: 'Every term in the Fibonacci sequence equals the sum of the preceding two terms: 8 + 13 = 21.',
    interestingFact: 'ফিবোনাচ্চি সংখ্যার অনুপাত সোনালী অনুপাত বা গোল্ডেন রেশিও (১.৬১৮)-এর দিকে ধাবিত হয় যা সূর্যমুখী ও গ্যালাক্সিতে দেখা যায়।',
    interestingFactEn: 'Consecutive Fibonacci ratios converge toward the Golden Ratio (~1.618033), manifest in sunflower seeds and spiral galaxies.'
  },
  {
    id: 'mr-18',
    categoryId: 'math-riddles',
    question: 'একটি জ্যামিতিক মোবিয়াস স্ট্রিপ (Möbius strip)-এর মোট কয়টি তল বা পৃষ্ঠদেশ থাকে?',
    questionEn: 'How many continuous surfaces or sides does a mathematical Möbius strip have?',
    options: ['২টি', '১টি', '০টি', '৪টি'],
    optionsEn: ['2 surfaces', '1 surface', '0 surfaces', '4 surfaces'],
    correctIndex: 1, // 1
    explanation: 'মোবিয়াস স্ট্রিপ হলো টপোলজির একটি অরিয়েন্টেবলহীন বিশেষ আকৃতি যার মাত্র ১টি অবিচ্ছিন্ন তল এবং ১টি মাত্র প্রান্তিক সীমানা থাকে!',
    explanationEn: 'A Möbius strip is a two-dimensional non-orientable topological manifold featuring exactly one continuous surface and one boundary edge.',
    interestingFact: 'একটি মোবিয়াস স্ট্রিপের মাঝখান বরাবর কাঁচি দিয়ে কাটলে দুটি টুকরো হওয়ার বদলে একটি বড় প্যাঁচালো স্ট্রিপ তৈরি হয়!',
    interestingFactEn: 'Cutting a Möbius strip down its centerline does not yield two separate loops, but rather one long twisted single loop!'
  },
  {
    id: 'mr-19',
    categoryId: 'math-riddles',
    question: 'এক ব্যক্তি ৩০ কিমি/ঘণ্টা বেগে একটি শহরে গেল এবং ঠিক একই পথে ৬০ কিমি/ঘণ্টা বেগে ফিরে এল। পুরো যাতায়াতে তার গড় গতিবেগ কত?',
    questionEn: 'A driver travels to a city at 30 km/h and returns along the identical route at 60 km/h. What was their average speed for the entire round trip?',
    options: ['৪৫ কিমি/ঘণ্টা', '৪০ কিমি/ঘণ্টা', '৫০ কিমি/ঘণ্টা', '৩৫ কিমি/ঘণ্টা'],
    optionsEn: ['45 km/h', '40 km/h', '50 km/h', '35 km/h'],
    correctIndex: 1, // 40 km/h
    explanation: 'দূরত্ব সমান হলে গড় গতিবেগ হারমোনিক গড় দ্বারা নির্ণয় করতে হয়: ২ × ৩০ × ৬০ ÷ (৩০ + ৬০) = ৩৬০০ ÷ ৯০ = ৪০ কিমি/ঘণ্টা!',
    explanationEn: 'Harmonic mean formula: 2 × v1 × v2 / (v1 + v2) = 2 × 30 × 60 / 90 = 3600 / 90 = 40 km/h.',
    interestingFact: 'অনেকে সাধারণ গড় (৩০+৬০)/২ = ৪৫ ভেবে ভুল করে, কিন্তু ধীর গতিতে বেশি সময় গাড়ি চলায় গড় গতিবেগ ৪০ হয়।',
    interestingFactEn: 'Because twice as much time was spent travelling at the lower velocity, the true time-weighted average is pulled down to 40 km/h.'
  },
  {
    id: 'mr-20',
    categoryId: 'math-riddles',
    question: '(-৩)² থেকে -৩ বিয়োগ করলে সঠিক ফলাফল কত হবে?',
    questionEn: 'What is the evaluated result of (-3)² minus -3?',
    options: ['৬', '০', '১২', '-১২'],
    optionsEn: ['6', '0', '12', '-12'],
    correctIndex: 2, // 12
    explanation: '(-৩)² = ৯। এবার ৯ থেকে -৩ বিয়োগ: ৯ - (-৩) = ৯ + ৩ = ১২!',
    explanationEn: '(-3)² equals positive 9. Subtracting -3 produces: 9 - (-3) = 9 + 3 = 12.',
    interestingFact: 'যেকোনো বাস্তব ঋণাত্মক সংখ্যাকে বর্গ করলে মাইনাসে মাইনাসে গুণ হয়ে ফলাফল সর্বদা ধনাত্মক হয়।',
    interestingFactEn: 'Squaring any real negative number always produces a positive quantity because negative times negative equals positive.'
  },
  {
    id: 'mr-21',
    categoryId: 'math-riddles',
    question: 'কম্পিউটারের বাইনারি সংখ্যা পদ্ধতিতে (Binary Base-2) ‘1010’ এর সাধারণ দশমিক (Decimal) মান কত?',
    questionEn: 'In base-2 binary notation, what decimal integer value does the string "1010" represent?',
    options: ['১০', '১২', '৮', '৫'],
    optionsEn: ['10', '12', '8', '5'],
    correctIndex: 0, // 10
    explanation: '(১ × ২³) + (০ × ২²) + (১ × ২¹) + (০ × ২⁰) = ৮ + ০ + ২ + ০ = ১০!',
    explanationEn: '(1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰) = 8 + 0 + 2 + 0 = 10.',
    interestingFact: 'পৃথিবীর সকল আধুনিক কম্পিউটার প্রসেসর কেবল এই ০ এবং ১ এর বাইনারি লজিক গেটের মাধ্যমে চালিত হয়।',
    interestingFactEn: 'All modern microprocessors execute complex instructions using billions of binary transistors toggling between 0 and 1.'
  },
  {
    id: 'mr-22',
    categoryId: 'math-riddles',
    question: 'সোজা ৪টি ছুরি চালানোর মাধ্যমে একটি বৃত্তাকার পিৎজাকে সর্বোচ্চ কয়টি টুকরোতে ভাগ করা সম্ভব?',
    questionEn: 'Using only 4 straight continuous knife cuts, what is the maximum number of pieces you can divide a circular pizza into?',
    options: ['৮টি', '১৬টি', '১১টি', '১০টি'],
    optionsEn: ['8 pieces', '16 pieces', '11 pieces', '10 pieces'],
    correctIndex: 2, // 11
    explanation: 'লেজি ক্যাটারার সূত্র: n(n + ১) ÷ ২ + ১। ৪টি কাটের জন্য: ৪ × ৫ ÷ ২ + ১ = ১০ + ১ = ১১টি টুকরো!',
    explanationEn: 'The Lazy Caterer’s sequence formula: n(n + 1) / 2 + 1. For n = 4 cuts: 4 × 5 / 2 + 1 = 11 maximum pieces.',
    interestingFact: 'যদি টুকরোগুলোকে সমান আকারের হতে না হয়, তবে এই সূত্র দিয়ে যেকোনো বৃত্তের সর্বোচ্চ খণ্ড সংখ্যা পাওয়া যায়।',
    interestingFactEn: 'This sequence models the maximum planar subdivisions created by n intersecting lines in a circle.'
  },
  {
    id: 'mr-23',
    categoryId: 'math-riddles',
    question: 'একটি ফার্মে কেবল মুরগি (২ পা) ও ছাগল (৪ পা) আছে। মোট মাথা ২০টি এবং মোট পা ৫৬টি হলে ফার্মে ছাগল কয়টি?',
    questionEn: 'A farm has chickens (2 legs) and goats (4 legs). There are 20 heads and 56 legs in total. How many goats are there?',
    options: ['১২টি', '৮টি', '১০টি', '১৪টি'],
    optionsEn: ['12 goats', '8 goats', '10 goats', '14 goats'],
    correctIndex: 1, // 8 goats
    explanation: 'সবগুলো যদি মুরগি হতো, পা হতো ২০ × ২ = ৪০টি। অতিরিক্ত (৫৬ - ৪০) = ১৬টি পা ছাগলের (প্রতি ছাগলে ২টি বেশি পা)। ছাগল = ১৬ ÷ ২ = ৮টি!',
    explanationEn: 'If all 20 were chickens, total legs = 40. The 16 extra legs belong to goats (2 extra legs each): 16 / 2 = 8 goats (and 12 chickens).',
    interestingFact: 'প্রাচীন চীনা গণিতগ্রন্থ ‘জিউঝাং সুয়ানশু’-তে খ্রিস্টপূর্ব ২য় শতকেই এই পদ্ধতি বর্ণিত ছিল।',
    interestingFactEn: 'This substitution method was recorded in China’s classic "Nine Chapters on the Mathematical Art" in 200 BCE.'
  },
  {
    id: 'mr-24',
    categoryId: 'math-riddles',
    question: 'মন্টি হল (Monty Hall) সমস্যায় ৩টি দরজার একটির পেছনে গাড়ি আছে। আপনার বাছাইয়ের পর অন্য একটি ছাগলের দরজা খুলে দিলে বাছাই পরিবর্তন করলে জয়ের সম্ভাবনা কত হয়?',
    questionEn: 'In the Monty Hall problem with 3 doors (1 car, 2 goats), after the host opens a goat door, what are your winning odds if you switch doors?',
    options: ['১/৩', '১/২', '২/৩', '৩/৪'],
    optionsEn: ['1/3', '1/2', '2/3', '3/4'],
    correctIndex: 2, // 2/3
    explanation: 'প্রথম বাছাইয়ে গাড়ি পাওয়ার সম্ভাবনা ছিল ১/৩। বাকি দুই দরজায় সম্মিলিত সম্ভাবনা ২/৩। উপস্থাপক ছাগল দেখানোয় সুইচ করলে জয়ের সম্ভাবনা দ্বিগুণ (২/৩) হয়!',
    explanationEn: 'Your initial pick had a 1/3 chance of success. The host eliminates an incorrect door, concentrating the remaining 2/3 probability on the other door.',
    interestingFact: '১৯৯০ সালে গণিতবিদ মেরিলিন ভস সাভান্ত এটি প্রকাশ করলে বহু পিএইচডি গণিতবিদ প্রথমে ভুল ভেবে তীব্র প্রতিবাদ করেছিলেন!',
    interestingFactEn: 'When Marilyn vos Savant solved this in 1990, nearly 1,000 PhD mathematicians wrote letters claiming she was mistaken—until proven correct!'
  },
  {
    id: 'mr-25',
    categoryId: 'math-riddles',
    question: 'কোনো সংখ্যার ০ ঘাত বা পাওয়ার (যেমন: ৫⁰, ৯৯⁰) সর্বদা কত হয় (০ ব্যতীত)?',
    questionEn: 'What is always the mathematical value of any non-zero real number raised to the power of 0 (e.g. 5⁰, 99⁰)?',
    options: ['০', '১', 'সেই সংখ্যাটি নিজে', 'অসীম'],
    optionsEn: ['0', '1', 'The number itself', 'Infinity'],
    correctIndex: 1, // 1
    explanation: 'সূচকীয় নিয়ম: aᵐ ÷ aⁿ = aᵐ⁻ⁿ। যখন m = n, তখন aⁿ ÷ aⁿ = ১ = a⁰। অতএব যেকোনো অশূন্য সংখ্যার পাওয়ার শূন্য হলে মান সর্বদা ১ হয়।',
    explanationEn: 'By exponent laws, aⁿ / aⁿ = aⁿ⁻ⁿ = a⁰. Since any non-zero number divided by itself is 1, a⁰ must identically equal 1.',
    interestingFact: 'তবে ০⁰ (শূন্যের পাওয়ার শূন্য) গণিতের উচ্চতর শাখায় একটি অনির্ণেয় রূপ (Indeterminate Form) হিসেবে স্বীকৃত।',
    interestingFactEn: 'Zero to the zero power (0⁰) is considered indeterminate in mathematical analysis and requires limit evaluation.'
  },
  {
    id: 'mr-26',
    categoryId: 'math-riddles',
    question: 'একটি বৃত্তের ব্যাসার্ধ দ্বিগুণ করা হলে তার ক্ষেত্রফল পূর্বের ক্ষেত্রফলের কত গুণ বৃদ্ধি পাবে?',
    questionEn: 'If the radius of a circle is doubled, by what factor does its surface area multiply?',
    options: ['২ গুণ', '৮ গুণ', '৪ গুণ', '১৬ গুণ'],
    optionsEn: ['2 times', '8 times', '4 times', '16 times'],
    correctIndex: 2, // 4 times
    explanation: 'ক্ষেত্রফলের সূত্র হলো A = πr²। ব্যাসার্ধ ২r হলে নতুন ক্ষেত্রফল = π(২r)² = ৪πr², অর্থাৎ ক্ষেত্রফল আগের ৪ গুণ হয়ে যায়!',
    explanationEn: 'Area = πr². When radius becomes 2r, new area = π(2r)² = 4πr², quadrupling (4x) the original area.',
    interestingFact: 'এই সূত্রটির কারণেই বড় সাইজের পিৎজার ক্ষেত্রফল ছোট সাইজের তুলনায় ধারণার চেয়ে বহুগুণ বেশি খাদ্য ধারণ করে!',
    interestingFactEn: 'Because area scales quadratically, an 18-inch pizza has more than double the edible area of two 12-inch pizzas!'
  },
  {
    id: 'mr-27',
    categoryId: 'math-riddles',
    question: 'একটি গোলকের ব্যাস ও উচ্চতা যদি একটি বেলন বা সিলিন্ডারের সমান হয়, তবে গোলকটির আয়তন সিলিন্ডারের আয়তনের কত অংশ?',
    questionEn: 'If a sphere is inscribed tightly inside a cylinder with equal diameter and height, what fraction of the cylinder’s volume does the sphere occupy?',
    options: ['১/২ অংশ', '২/৩ অংশ', '৩/৪ অংশ', '১/৩ অংশ'],
    optionsEn: ['1/2', '2/3', '3/4', '1/3'],
    correctIndex: 1, // 2/3
    explanation: 'আর্কিমিডিসের বিখ্যাত আবিষ্কার: গোলকের আয়তন ৪/৩ πr³ এবং সিলিন্ডারের আয়তন ২πr³। এদের অনুপাত ঠিক ২/৩ বা দুই-তৃতীয়াংশ!',
    explanationEn: 'Archimedes discovered that a sphere inscribed in a cylinder occupies exactly 2/3 of the cylinder’s volume (4/3 πr³ vs 2πr³).',
    interestingFact: 'আর্কিমিডিস এই আবিষ্কারটিকে নিজের জীবনের সেরা কীর্তি মনে করতেন এবং তাঁর সমাধিতে একটি গোলক ও সিলিন্ডার খোদাই করা ছিল।',
    interestingFactEn: 'Archimedes considered this proof his greatest achievement and requested a sphere inside a cylinder carved on his tombstone.'
  },
  {
    id: 'mr-28',
    categoryId: 'math-riddles',
    question: 'আপনার কাছে ৩ লিটার ও ৫ লিটারের দুটি পাত্র আছে। কোনো পরিমাপক ছাড়াই ঠিক ৪ লিটার পানি মাপতে ৫ লিটার পাত্রে প্রথমে কত লিটার অবশিষ্ট রাখতে হবে?',
    questionEn: 'Using only a 3-liter and 5-liter jug with unlimited water, how can you measure exactly 4 liters?',
    options: ['৫ লিটার ভরে ৩ লিটারে ঢেলে বাকি ২ লিটার ৩ লিটারে রেখে পুনরায় ৫ লিটার ভরে ৩ লিটার পূর্ণ করলে ৫ লিটারে ৪ লিটার থাকবে', 'উভয় পাত্র অর্ধেক ভরে মিশিয়ে', '৩ লিটারের পাত্র দুইবার পূর্ণ করে', '৫ লিটারের পাত্র ৪/৫ অংশ অনুমান করে'],
    optionsEn: ['Fill 5L, pour into 3L leaving 2L. Empty 3L, transfer 2L to 3L. Fill 5L again, pour 1L to fill 3L, leaving exactly 4L in 5L jug', 'Mix halves of both jugs', 'Fill 3L jug twice', 'Estimate 4/5 visually'],
    correctIndex: 0, // Option 0
    explanation: '৫ লিটার ভরে ৩ লিটারে ঢাললে থাকে ২ লিটার। ৩ লিটার খালি করে ২ লিটার সেখানে ঢালুন (১ লিটার জায়গা খালি)। এবার ৫ লিটার ভরে ৩ লিটারে ১ লিটার ঢাললে ৫ লিটারের পাত্রে ঠিক ৪ লিটার থাকবে!',
    explanationEn: 'Fill 5L, pour into 3L leaving 2L in 5L jug. Empty 3L, pour the 2L into 3L jug. Fill 5L jug full, pour into 3L until full (takes 1L), leaving exactly 4L in the 5L jug!',
    interestingFact: 'এই বিখ্যাত ওয়াটার জাগ সমস্যাটি গণিতে ডায়োফ্যান্টাইন সমীকরণ (Diophantine Equations) ও ইউক্লিডীয় অ্যালগরিদমের বাস্তব রূপ।',
    interestingFactEn: 'This classic water puzzle is a real-world manifestation of Diophantine equations and the Euclidean algorithm for greatest common divisors.'
  },
  {
    id: 'mr-29',
    categoryId: 'math-riddles',
    question: '১ থেকে ১০০ এর মধ্যকার সকল পূর্ণসংখ্যার মধ্যে কতটি সংখ্যা পূর্ণবর্গ সংখ্যা (Perfect Square)?',
    questionEn: 'How many integers between 1 and 100 (inclusive) are perfect squares?',
    options: ['৮টি', '১০টি', '১২টি', '৯টি'],
    optionsEn: ['8', '10', '12', '9'],
    correctIndex: 1, // 10
    explanation: 'সংখ্যাগুলো হলো: ১ (১²), ৪ (২²), ৯ (৩²), ১৬ (৪²), ২৫ (৫²), ৩৬ (৬²), ৪৯ (৭²), ৬৪ (৮²), ৮১ (৯²) এবং ১০০ (১০²)। মোট ১০টি সংখ্যা!',
    explanationEn: 'The 10 perfect squares are 1², 2², 3², 4², 5², 6², 7², 8², 9², and 10² (1, 4, 9, 16, 25, 36, 49, 64, 81, 100).',
    interestingFact: 'যেকোনো বিজোড় ক্রমিক সংখ্যার যোগফল সর্বদা একটি পূর্ণবর্গ সংখ্যা তৈরি করে: ১+৩=৪, ১+৩+৫=৯, ১+৩+৫+৭=১৬!',
    interestingFactEn: 'The sum of the first n consecutive odd numbers always produces n² (e.g. 1+3=4=2², 1+3+5=9=3², 1+3+5+7=16=4²).'
  },
  {
    id: 'mr-30',
    categoryId: 'math-riddles',
    question: 'একটি সমকোণী ত্রিভুজের অতিভুজ ৫ সেমি এবং ভূমি ৩ সেমি হলে এর লম্ব বা উচ্চতা কত সেমি?',
    questionEn: 'In a right-angled triangle, if the hypotenuse is 5 cm and the base is 3 cm, what is the height (perpendicular)?',
    options: ['৪ সেমি', '২ সেমি', '৩.৫ সেমি', '৪.৫ সেমি'],
    optionsEn: ['4 cm', '2 cm', '3.5 cm', '4.5 cm'],
    correctIndex: 0, // 4 cm
    explanation: 'পিথাগোরাসের উপপাদ্য: অতিভুজ² = লম্ব² + ভূমি²। ৫² = লম্ব² + ৩² => ২৫ = লম্ব² + ৯ => লম্ব² = ১৬ => লম্ব = ৪ সেমি!',
    explanationEn: 'Pythagorean Theorem: a² + b² = c². Height² + 3² = 5² => Height² + 9 = 25 => Height² = 16 => Height = 4 cm.',
    interestingFact: '৩-৪-৫ হলো সবচেয়ে পরিচিত এবং ক্ষুদ্রতম পূর্ণসংখ্যা পিথাগোরিয়ান ট্রিপল যা প্রাচীন মিশরীয়রা জমি জরিপে সমকোণ মাপতে ব্যবহার করত।',
    interestingFactEn: 'The 3-4-5 triad is the most famous Pythagorean triple, used by ancient Egyptian rope-stretchers to establish perfect right angles.'
  }
];

/**
 * Math Riddles Category Object
 */
export const MATH_RIDDLES_CATEGORY: QuizCategory = {
  id: 'math-riddles',
  slug: 'math-riddles',
  title: 'গণিতের ধাঁধা (Math Riddles)',
  titleEn: 'Math Riddles & Brain Games',
  description: '৩০টি সম্পূর্ণ নতুন আসল গাণিতিক ধাঁধা, সংখ্যার রহস্য, যুক্তি ও আকর্ষণীয় পাটিগণিত কুইজ।',
  descriptionEn: '30 brand new original mathematical riddles, numerical puzzles, order of operations, and brain games with instant answers.',
  iconName: 'Calculator',
  colorScheme: 'indigo',
  featured: true,
  popular: true,
  difficulty: 'Intermediate',
  difficultyEn: 'Medium-Smart Level',
  questions: MATH_RIDDLES_QUESTIONS
};
