export type Language = 'bn' | 'en';

export interface TranslationDictionary {
  // Brand & General
  brandName: string;
  brandTagline: string;
  bangla: string;
  english: string;
  switchLanguage: string;

  // Nav
  navHome: string;
  navAllCategories: string;
  navDaily: string;
  navHistory: string;
  navSitemap: string;
  randomQuiz: string;
  dailyStreak: string;
  todayCompleted: string;

  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  searchPlaceholder: string;
  quickRandomBtn: string;
  exploreCategoriesBtn: string;

  // Stats Bar
  statTotalQuizzes: string;
  statTotalQuestions: string;
  statCategoriesCount: string;
  statTotalUsers: string;

  // Home Sections
  featuredTitle: string;
  featuredSubtitle: string;
  popularTitle: string;
  popularSubtitle: string;
  allCategoriesTitle: string;
  allCategoriesSubtitle: string;
  viewAll: string;
  dailyChallengeTitle: string;
  dailyChallengeDesc: string;
  dailyPlayBtn: string;
  dailyCompletedBadge: string;

  // Category Page
  categoryBreadcrumbHome: string;
  categoryBreadcrumbList: string;
  startQuizBtn: string;
  selectQuestionCount: string;
  shuffleQuestionsLabel: string;
  highScoreLabel: string;
  timePerQuestionLabel: string;
  difficultyLabel: string;
  difficultyBeginner: string;
  difficultyIntermediate: string;
  difficultyAdvanced: string;
  difficultyAll: string;
  relatedCategoriesTitle: string;
  backToCategoriesBtn: string;
  shareCategoryBtn: string;
  linkCopiedAlert: string;

  // Quiz Player
  questionProgress: string;
  questionTimerLabel: string;
  secondsSuffix: string;
  timesUpAlert: string;
  scoreTracker: string;
  correctCountLabel: string;
  incorrectCountLabel: string;
  prevQuestionBtn: string;
  nextQuestionBtn: string;
  finishQuizBtn: string;
  exitQuizBtn: string;
  restartQuizBtn: string;
  confirmRestartTitle: string;
  confirmRestartDesc: string;
  confirmRestartYes: string;
  confirmRestartNo: string;
  explanationTitle: string;
  funFactTitle: string;
  selectOptionWarning: string;
  encouragingCorrect: string[];
  gentleIncorrect: string[];

  // Quiz Result
  resultCelebrationTitle: string;
  resultScoreSummary: string;
  resultAccuracy: string;
  resultTotalTime: string;
  resultAvgTime: string;
  estimatedIQTitle: string;
  iqScaleLabel: string;
  shareResultBtn: string;
  playAgainBtn: string;
  allCategoriesNavBtn: string;
  reviewAnswersTitle: string;
  reviewCorrectAnswer: string;
  reviewYourAnswer: string;
  reviewTimeTaken: string;
  downloadIQCardBtn: string;
  downloadingCard: string;
  downloadSuccess: string;
  previewCardBtn: string;
  closeModalBtn: string;

  // Daily Quiz Page
  dailyPageTitle: string;
  dailyPageSubtitle: string;
  dailyRulesTitle: string;
  dailyRule1: string;
  dailyRule2: string;
  dailyRule3: string;
  startDailyBtn: string;
  alreadyCompletedToday: string;
  todayScoreWas: string;

  // History Page
  historyPageTitle: string;
  historyPageSubtitle: string;
  noHistoryYet: string;
  noHistoryDesc: string;
  clearHistoryBtn: string;
  totalQuizzesTaken: string;
  totalAnswered: string;
  overallAccuracy: string;
  currentStreak: string;

  // Sitemap Page
  sitemapTitle: string;
  sitemapSubtitle: string;
  sitemapMainPages: string;
  sitemapCategoriesList: string;
  sitemapDirectQuizzes: string;
  sitemapTotalUrls: string;

  // Footer
  footerAboutText: string;
  footerNoSignup: string;
  footerPopularCol: string;
  footerScienceCol: string;
  footerQuickLinks: string;
  footerCopyright: string;
  footerMadeWithLove: string;
  footerOpenEducation: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  bn: {
    brandName: 'Quiz Zone BD',
    brandTagline: 'কুইজ জোন বিডি',
    bangla: 'বাংলা',
    english: 'English',
    switchLanguage: 'ভাষা পরিবর্তন করুন',

    navHome: 'হোম',
    navAllCategories: 'সকল কুইজ',
    navDaily: 'দৈনিক কুইজ',
    navHistory: 'আমার অগ্রগতি',
    navSitemap: 'সাইটম্যাপ',
    randomQuiz: 'এলোমেলো কুইজ',
    dailyStreak: 'দিন',
    todayCompleted: 'আজ সম্পন্ন হয়েছে',

    heroBadge: '⏱️ প্রতি প্রশ্নে ১ মিনিট টাইমার · 🧠 আনুমানিক আইকিউ (IQ) মেধা বিশ্লেষণ',
    heroTitle1: 'জ্ঞান যাচাই করুন, ',
    heroTitleHighlight: 'কুইজ খেলুন এক ধাপ এগিয়ে থাকুন!',
    heroSubtitle: 'Quiz Zone BD-এ নিজেকে চ্যালেঞ্জ করুন তাৎক্ষণিক উত্তর, ব্যাখ্যা ও রোমাঞ্চকর অজানা তথ্যের সাথে। ধাঁধা, বুদ্ধির খেলা, বিজ্ঞান ও সাধারণ জ্ঞান জানুন আনন্দের সাথে।',
    searchPlaceholder: 'ধাঁধা, সাধারণ জ্ঞান বা ক্যাটাগরি খুঁজুন...',
    quickRandomBtn: 'এলোমেলো কুইজ শুরু করুন',
    exploreCategoriesBtn: 'ক্যাটাগরিগুলো দেখুন',

    statTotalQuizzes: 'মোট ক্যাটাগরি',
    statTotalQuestions: 'প্রশ্ন ও ধাঁধা',
    statCategoriesCount: '১ মিনিট টাইমার',
    statTotalUsers: 'আইকিউ মেধা যাচাই',

    featuredTitle: 'বিশেষ নির্বাচিত কুইজ ও ধাঁধা',
    featuredSubtitle: 'বুদ্ধিমত্তা ও সাধারণ জ্ঞান যাচাইয়ের জন্য আকর্ষণীয় কুইজসমূহ',
    popularTitle: 'সর্বাধিক জনপ্রিয় ক্যাটাগরি',
    popularSubtitle: 'হাজারো শিক্ষার্থীর প্রিয় বুদ্ধির খেলা ও রোমাঞ্চকর ধাঁধা',
    allCategoriesTitle: 'সকল ১০টি কুইজ ক্যাটাগরি',
    allCategoriesSubtitle: 'সহজ ধাঁধা থেকে শুরু করে বিজ্ঞান ও যুক্তির প্রশ্ন',
    viewAll: 'সবগুলো দেখুন',
    dailyChallengeTitle: 'আজকের দৈনিক কুইজ চ্যালেঞ্জ',
    dailyChallengeDesc: 'প্রতিদিন নতুন ৭টি বাছাইকৃত প্রশ্ন সমাধান করে নিজের জ্ঞান ও আইকিউ বৃদ্ধি করুন।',
    dailyPlayBtn: 'আজকের চ্যালেঞ্জ খেলুন',
    dailyCompletedBadge: 'আজকের কুইজ সম্পন্ন হয়েছে!',

    categoryBreadcrumbHome: 'হোম',
    categoryBreadcrumbList: 'ক্যাটাগরি',
    startQuizBtn: 'কুইজ শুরু করুন',
    selectQuestionCount: 'প্রশ্নের সংখ্যা নির্ধারণ করুন',
    shuffleQuestionsLabel: 'প্রশ্নগুলো এলোমেলো (Shuffle) করুন',
    highScoreLabel: 'সর্বোচ্চ স্কোর',
    timePerQuestionLabel: 'প্রতি প্রশ্নে ১ মিনিট (৬০ সেকেন্ড) সময়',
    difficultyLabel: 'কঠিন্যের মাত্রা',
    difficultyBeginner: 'সহজ লেভেল',
    difficultyIntermediate: 'মধ্যম লেভেল',
    difficultyAdvanced: 'উচ্চ লেভেল',
    difficultyAll: 'সকলের জন্য',
    relatedCategoriesTitle: 'সম্পর্কিত অন্যান্য কুইজ',
    backToCategoriesBtn: 'সব ক্যাটাগরিতে ফিরে যান',
    shareCategoryBtn: 'লিঙ্ক শেয়ার করুন',
    linkCopiedAlert: 'লিঙ্ক সফলভাবে কপি হয়েছে!',

    questionProgress: 'প্রশ্ন',
    questionTimerLabel: 'সময় বাকি',
    secondsSuffix: 'সেকেন্ড',
    timesUpAlert: 'সময় শেষ! স্বয়ংক্রিয়ভাবে সঠিক উত্তর দেখানো হচ্ছে।',
    scoreTracker: 'বর্তমান স্কোর',
    correctCountLabel: 'সঠিক',
    incorrectCountLabel: 'ভুল',
    prevQuestionBtn: 'আগের প্রশ্ন',
    nextQuestionBtn: 'পরবর্তী প্রশ্ন',
    finishQuizBtn: 'ফলাফল ও আইকিউ দেখুন',
    exitQuizBtn: 'কুইজ বন্ধ করুন',
    restartQuizBtn: 'নতুন করে শুরু করুন',
    confirmRestartTitle: 'আপনি কি নিশ্চিত?',
    confirmRestartDesc: 'নতুন করে শুরু করলে বর্তমান সেশনের অগ্রগতি ও উত্তর মুছে যাবে।',
    confirmRestartYes: 'হ্যাঁ, নতুন করে শুরু করুন',
    confirmRestartNo: 'না, খেলা চালিয়ে যান',
    explanationTitle: 'সঠিক উত্তরের ব্যাখ্যা',
    funFactTitle: 'চমকপ্রদ তথ্য',
    selectOptionWarning: 'একটি অপশন নির্বাচন করুন অথবা পরবর্তী প্রশ্নে যান',
    encouragingCorrect: [
      'অসাধারণ! আপনার উত্তরটি সঠিক হয়েছে!',
      'দারুণ হয়েছে! আপনি অসাধারণ মেধার পরিচয় দিচ্ছেন!',
      'খুব ভালো করছেন! সঠিক উত্তরের জন্য অভিনন্দন!',
      'অনবদ্য বুদ্ধিমত্তা! চমৎকার পারদর্শিতা!',
      'অসাধারণ মেধা! আপনার সাধারণ জ্ঞান সত্যিই প্রশংসনীয়!'
    ],
    gentleIncorrect: [
      'ভালো চেষ্টা! প্রতিটি ভুলই নতুন কিছু শেখার চমৎকার সুযোগ।',
      'খুব কাছাকাছি ছিলেন! জানার আগ্রহই মানুষকে প্রকৃত জ্ঞানী করে তোলে।',
      'সুন্দর প্রচেষ্টা! মন খারাপ করবেন না, প্রতিটি ধাঁধা আপনাকে আরও বুদ্ধিমান করছে।'
    ],

    resultCelebrationTitle: 'অভিনন্দন! আপনার কুইজ সম্পন্ন হয়েছে',
    resultScoreSummary: 'আপনার মোট স্কোর',
    resultAccuracy: 'সঠিকতার হার',
    resultTotalTime: 'মোট ব্যয়িত সময়',
    resultAvgTime: 'প্রশ্ন প্রতি গড় সময়',
    estimatedIQTitle: 'আপনার আনুমানিক বুদ্ধিমত্তা ও আইকিউ (IQ)',
    iqScaleLabel: 'আইকিউ মূল্যায়ন মাত্রা',
    shareResultBtn: 'ফলাফল কপি ও শেয়ার করুন',
    playAgainBtn: 'আবার কুইজ খেলুন',
    allCategoriesNavBtn: 'অন্যান্য ক্যাটাগরি এক্সপ্লোর করুন',
    reviewAnswersTitle: 'সব প্রশ্নের বিস্তারিত সমাধান ও বিশ্লেষণ',
    reviewCorrectAnswer: 'সঠিক উত্তর',
    reviewYourAnswer: 'আপনার দেওয়া উত্তর',
    reviewTimeTaken: 'ব্যয়িত সময়',
    downloadIQCardBtn: 'আইকিউ কার্ড ডাউনলোড করুন (ছবি)',
    downloadingCard: 'কার্ড প্রস্তুত হচ্ছে...',
    downloadSuccess: 'আইকিউ কার্ড ডাউনলোড সফল হয়েছে!',
    previewCardBtn: 'কার্ড প্রিভিউ দেখুন',
    closeModalBtn: 'বন্ধ করুন',

    dailyPageTitle: 'দৈনিক কুইজ ও জ্ঞান চ্যালেঞ্জ',
    dailyPageSubtitle: 'প্রতিদিন নতুন ৭টি বাছাইকৃত প্রশ্ন সমাধান করে নিজের জ্ঞান শাণিত রাখুন',
    dailyRulesTitle: 'দৈনিক কুইজের নিয়মাবলী',
    dailyRule1: 'প্রতিদিন সকাল ১২টায় স্বয়ংক্রিয়ভাবে নতুন ৭টি প্রশ্ন তৈরি হয়।',
    dailyRule2: 'প্রতিটি প্রশ্নের উত্তর দেওয়ার জন্য সর্বোচ্চ ১ মিনিট (৬০ সেকেন্ড) সময় পাবেন।',
    dailyRule3: 'কুইজ শেষে আপনার গতি ও সঠিকতার ওপর ভিত্তি করে আনুমানিক আইকিউ স্কোর প্রদান করা হবে।',
    startDailyBtn: 'আজকের দৈনিক কুইজ শুরু করুন',
    alreadyCompletedToday: 'আপনি আজকের দৈনিক কুইজ সফলভাবে সম্পন্ন করেছেন!',
    todayScoreWas: 'আজকে আপনার প্রাপ্ত স্কোর ছিল',

    historyPageTitle: 'আমার কুইজ অগ্রগতি ও স্কোর রেকর্ড',
    historyPageSubtitle: 'আপনার বিগত কুইজ সেশনের ফলাফল, আইকিউ বিশ্লেষণ ও সাফল্যের পরিসংখ্যান',
    noHistoryYet: 'এখনও কোনো কুইজ সম্পন্ন করেননি',
    noHistoryDesc: 'যেকোনো ক্যাটাগরি বেছে নিন এবং আপনার প্রথম কুইজটি শুরু করুন!',
    clearHistoryBtn: 'সব হিস্টোরি মুছে ফেলুন',
    totalQuizzesTaken: 'সম্পন্ন কুইজ',
    totalAnswered: 'উত্তর দেওয়া প্রশ্ন',
    overallAccuracy: 'সামগ্রিক সঠিকতা',
    currentStreak: 'দৈনিক স্ট্রিক',

    sitemapTitle: 'সাইটম্যাপ ও সক্রিয় পেজ ইনডেক্স',
    sitemapSubtitle: 'Quiz Zone BD-এর সমস্ত কার্যকরী ইউআরএল, ক্যাটাগরি ও কুইজ পেজ তালিকা',
    sitemapMainPages: 'মূল পেজসমূহ',
    sitemapCategoriesList: 'সকল ১০টি কুইজ ক্যাটাগরি',
    sitemapDirectQuizzes: 'সরাসরি কুইজ প্লেয়ার লিঙ্ক',
    sitemapTotalUrls: 'মোট সক্রিয় ইউআরএল',

    footerAboutText: 'আপনার বুদ্ধিমত্তা ও সাধারণ জ্ঞান বৃদ্ধি করুন, চমকপ্রদ তথ্য জানুন এবং ১০টি আকর্ষণীয় ক্যাটাগরিতে নিয়মিত কুইজ ও ধাঁধা খেলুন। সম্পূর্ণ বিনামূল্যে ও দ্বিভাষিক (বাংলা ও ইংরেজি)।',
    footerNoSignup: 'কোনো রেজিস্ট্রেশন বা সাবস্ক্রিপশন প্রয়োজন নেই',
    footerPopularCol: 'জনপ্রিয় কুইজসমূহ',
    footerScienceCol: 'বিজ্ঞান ও যুক্তির খেলা',
    footerQuickLinks: 'কুইজ জোন এক্সপ্লোর করুন',
    footerCopyright: `© ${new Date().getFullYear()} Quiz Zone BD (কুইজ জোন বিডি)। জ্ঞানপিপাসু ও শিক্ষার্থীদের জন্য নিবেদিত।`,
    footerMadeWithLove: 'ভালোবাসার সাথে প্রস্তুত',
    footerOpenEducation: 'সবার জন্য উন্মুক্ত জ্ঞান চর্চা'
  },

  en: {
    brandName: 'Quiz Zone BD',
    brandTagline: 'Interactive Riddles & Quizzes',
    bangla: 'বাংলা',
    english: 'English',
    switchLanguage: 'Switch Language',

    navHome: 'Home',
    navAllCategories: 'All Quizzes',
    navDaily: 'Daily Quiz',
    navHistory: 'My Progress',
    navSitemap: 'Sitemap',
    randomQuiz: 'Random Quiz',
    dailyStreak: 'days',
    todayCompleted: 'Completed Today',

    heroBadge: '⏱️ 1-Minute Timer Per Question · 🧠 Estimated IQ Analysis',
    heroTitle1: 'Test Your Knowledge, ',
    heroTitleHighlight: 'Play Quizzes & Stay Ahead!',
    heroSubtitle: 'Challenge yourself on Quiz Zone BD with instant answers, deep explanations, and intriguing fun facts. Explore riddles, brain teasers, science, and general knowledge with joy.',
    searchPlaceholder: 'Search riddles, quizzes, or categories...',
    quickRandomBtn: 'Start Random Quiz',
    exploreCategoriesBtn: 'Explore Categories',

    statTotalQuizzes: 'Quiz Categories',
    statTotalQuestions: 'Questions & Riddles',
    statCategoriesCount: '1-Min Timer Mode',
    statTotalUsers: 'IQ Assessment',

    featuredTitle: 'Featured Riddles & Quizzes',
    featuredSubtitle: 'Curated quizzes to challenge your intelligence and cognitive skills',
    popularTitle: 'Most Popular Categories',
    popularSubtitle: 'Loved by thousands of curious minds, students, and puzzle solvers',
    allCategoriesTitle: 'All 10 Quiz Categories',
    allCategoriesSubtitle: 'From easy traditional riddles to advanced science and logic questions',
    viewAll: 'View All',
    dailyChallengeTitle: "Today's Daily Challenge",
    dailyChallengeDesc: 'Sharpen your cognitive agility every day with 7 hand-picked questions.',
    dailyPlayBtn: "Play Today's Challenge",
    dailyCompletedBadge: "Today's Quiz Completed!",

    categoryBreadcrumbHome: 'Home',
    categoryBreadcrumbList: 'Categories',
    startQuizBtn: 'Start Quiz Now',
    selectQuestionCount: 'Select Number of Questions',
    shuffleQuestionsLabel: 'Shuffle Questions Randomly',
    highScoreLabel: 'High Score',
    timePerQuestionLabel: '1 Minute (60s) per question',
    difficultyLabel: 'Difficulty Level',
    difficultyBeginner: 'Easy Level',
    difficultyIntermediate: 'Medium Level',
    difficultyAdvanced: 'Advanced Level',
    difficultyAll: 'All Levels',
    relatedCategoriesTitle: 'Related Quizzes',
    backToCategoriesBtn: 'Back to All Categories',
    shareCategoryBtn: 'Share Link',
    linkCopiedAlert: 'Link successfully copied to clipboard!',

    questionProgress: 'Question',
    questionTimerLabel: 'Time Left',
    secondsSuffix: 'seconds',
    timesUpAlert: "Time's up! Automatically showing the correct answer.",
    scoreTracker: 'Current Score',
    correctCountLabel: 'Correct',
    incorrectCountLabel: 'Wrong',
    prevQuestionBtn: 'Previous Question',
    nextQuestionBtn: 'Next Question',
    finishQuizBtn: 'Finish & View IQ Result',
    exitQuizBtn: 'Exit Quiz',
    restartQuizBtn: 'Restart Quiz',
    confirmRestartTitle: 'Are you sure?',
    confirmRestartDesc: 'Restarting will reset your progress and answers for this session.',
    confirmRestartYes: 'Yes, Restart',
    confirmRestartNo: 'No, Keep Playing',
    explanationTitle: 'Answer Explanation',
    funFactTitle: 'Intriguing Fun Fact',
    selectOptionWarning: 'Please select an option or proceed to the next question',
    encouragingCorrect: [
      'Awesome! Your answer is correct!',
      'Brilliant! You are demonstrating exceptional intellect!',
      'Great job! Congratulations on the correct answer!',
      'Outstanding logic! Superb performance!',
      'Incredible sharpness! Your general knowledge is truly impressive!'
    ],
    gentleIncorrect: [
      'Good try! Every mistake is a great opportunity to learn.',
      'So close! Curiosity and practice are the real marks of wisdom.',
      'Nice attempt! Keep going, every puzzle trains your brain.'
    ],

    resultCelebrationTitle: 'Congratulations! Quiz Completed',
    resultScoreSummary: 'Your Total Score',
    resultAccuracy: 'Accuracy Rate',
    resultTotalTime: 'Total Time Taken',
    resultAvgTime: 'Avg Time per Question',
    estimatedIQTitle: 'Your Estimated IQ & Cognitive Analysis',
    iqScaleLabel: 'IQ Evaluation Scale',
    shareResultBtn: 'Copy & Share Result',
    playAgainBtn: 'Play Again',
    allCategoriesNavBtn: 'Explore More Categories',
    reviewAnswersTitle: 'Detailed Solutions & Review',
    reviewCorrectAnswer: 'Correct Answer',
    reviewYourAnswer: 'Your Selected Answer',
    reviewTimeTaken: 'Time Spent',
    downloadIQCardBtn: 'Download IQ Card (Image)',
    downloadingCard: 'Generating Card...',
    downloadSuccess: 'IQ Card downloaded successfully!',
    previewCardBtn: 'Preview IQ Card',
    closeModalBtn: 'Close',

    dailyPageTitle: 'Daily Quiz & Brain Challenge',
    dailyPageSubtitle: 'Stay sharp by solving 7 unique curated questions every single day',
    dailyRulesTitle: 'Daily Quiz Rules',
    dailyRule1: '7 fresh questions are generated every day at 12:00 AM.',
    dailyRule2: 'You have up to 1 minute (60 seconds) to answer each question.',
    dailyRule3: 'Get an estimated IQ score based on both your accuracy and speed.',
    startDailyBtn: 'Start Daily Quiz',
    alreadyCompletedToday: "You have completed today's daily quiz!",
    todayScoreWas: 'Your score today was',

    historyPageTitle: 'My Progress & Score Records',
    historyPageSubtitle: 'Review your past quiz sessions, IQ ratings, and learning milestones',
    noHistoryYet: 'No Quizzes Taken Yet',
    noHistoryDesc: 'Pick any category and start your first quiz challenge!',
    clearHistoryBtn: 'Clear All History',
    totalQuizzesTaken: 'Quizzes Taken',
    totalAnswered: 'Questions Answered',
    overallAccuracy: 'Overall Accuracy',
    currentStreak: 'Daily Streak',

    sitemapTitle: 'Sitemap & URL Index',
    sitemapSubtitle: 'Complete directory of active pages, categories, and direct quiz URLs',
    sitemapMainPages: 'Main Pages',
    sitemapCategoriesList: 'All 10 Quiz Categories',
    sitemapDirectQuizzes: 'Direct Quiz URLs',
    sitemapTotalUrls: 'Total Active URLs',

    footerAboutText: 'Enhance your intelligence and general knowledge with 10 exciting categories of Bengali and English riddles, brain teasers, and quizzes. Completely free and bilingual.',
    footerNoSignup: 'No sign-up or registration required',
    footerPopularCol: 'Popular Quizzes',
    footerScienceCol: 'Science & Logic',
    footerQuickLinks: 'Explore Quiz Zone',
    footerCopyright: `© ${new Date().getFullYear()} Quiz Zone BD. Dedicated to learners, students, and puzzle lovers.`,
    footerMadeWithLove: 'Crafted with care',
    footerOpenEducation: 'Open Knowledge for Everyone'
  }
};
