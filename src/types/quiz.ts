export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string]; // Exactly 4 options
  correctIndex: number; // 0, 1, 2, or 3
  explanation: string;
  interestingFact: string;
  categoryId: string;
}

export interface QuizCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  colorScheme: 'blue' | 'sky' | 'indigo' | 'cyan' | 'teal';
  featured?: boolean;
  popular?: boolean;
  recentlyAdded?: boolean;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  questions: QuizQuestion[];
}

export interface QuizResult {
  categoryId: string;
  categoryTitle: string;
  isDaily?: boolean;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  scoreRatio: string;
  percentage: number;
  performanceMessage: string;
  completedAt: string;
  answers: {
    questionId: string;
    questionText: string;
    options: [string, string, string, string];
    selectedIndex: number;
    correctIndex: number;
    isCorrect: boolean;
    explanation: string;
    interestingFact: string;
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
