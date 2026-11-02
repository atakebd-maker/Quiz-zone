export type Language = 'bn' | 'en';

export interface QuizQuestion {
  id: string;
  categoryId: string;
  // Bengali content
  question: string;
  options: [string, string, string, string]; // Exactly 4 options
  correctIndex: number; // 0, 1, 2, or 3
  explanation: string;
  interestingFact: string;

  // English content (for bilingual support)
  questionEn?: string;
  optionsEn?: [string, string, string, string];
  explanationEn?: string;
  interestingFactEn?: string;
}

export interface QuizCategory {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  iconName: string;
  colorScheme: 'blue' | 'sky' | 'indigo' | 'cyan' | 'teal';
  featured?: boolean;
  popular?: boolean;
  recentlyAdded?: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  difficultyEn?: string;
  questions: QuizQuestion[];
}

export interface QuizResult {
  categoryId: string;
  categoryTitle: string;
  categoryTitleEn?: string;
  isDaily?: boolean;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  scoreRatio: string;
  percentage: number;
  performanceMessage: string;
  completedAt: string;
  estimatedIQ: number;
  iqClassification: string;
  iqClassificationEn?: string;
  iqDescription: string;
  iqDescriptionEn?: string;
  totalTimeSeconds: number;
  answers: {
    questionId: string;
    questionText: string;
    questionTextEn?: string;
    options: [string, string, string, string];
    optionsEn?: [string, string, string, string];
    selectedIndex: number;
    correctIndex: number;
    isCorrect: boolean;
    explanation: string;
    explanationEn?: string;
    interestingFact: string;
    interestingFactEn?: string;
    timeTakenSeconds?: number;
  }[];
}

export interface UserStats {
  totalQuizzesTaken: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  streakDays: number;
  lastDailyDate: string | null;
  history: QuizResult[];
}
