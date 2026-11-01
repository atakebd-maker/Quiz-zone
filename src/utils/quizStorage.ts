import { QuizResult, UserStats } from '../types/quiz';

const STORAGE_KEY = 'quizpulse_user_stats_v1';

const DEFAULT_STATS: UserStats = {
  totalQuizzesTaken: 0,
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  streakDays: 0,
  lastDailyDate: null,
  history: []
};

export function getTodayDateString(): string {
  // ISO date YYYY-MM-DD
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw) as UserStats;
    return {
      totalQuizzesTaken: parsed.totalQuizzesTaken || 0,
      totalQuestionsAnswered: parsed.totalQuestionsAnswered || 0,
      totalCorrect: parsed.totalCorrect || 0,
      streakDays: parsed.streakDays || 0,
      lastDailyDate: parsed.lastDailyDate || null,
      history: Array.isArray(parsed.history) ? parsed.history : []
    };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveQuizResult(result: QuizResult): UserStats {
  const current = getUserStats();
  const today = getTodayDateString();

  let streak = current.streakDays;
  let newLastDaily = current.lastDailyDate;

  if (result.isDaily) {
    if (current.lastDailyDate !== today) {
      // Check if last daily was yesterday
      if (current.lastDailyDate) {
        const last = new Date(current.lastDailyDate);
        const cur = new Date(today);
        const diffDays = Math.round((cur.getTime() - last.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          streak += 1;
        } else if (diffDays > 1) {
          streak = 1;
        }
      } else {
        streak = 1;
      }
      newLastDaily = today;
    }
  }

  const updated: UserStats = {
    totalQuizzesTaken: current.totalQuizzesTaken + 1,
    totalQuestionsAnswered: current.totalQuestionsAnswered + result.totalQuestions,
    totalCorrect: current.totalCorrect + result.correctAnswers,
    streakDays: streak,
    lastDailyDate: newLastDaily,
    history: [result, ...current.history].slice(0, 50) // keep last 50
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }

  return updated;
}

export function getCategoryHighScore(categoryId: string): number | null {
  const stats = getUserStats();
  const matched = stats.history.filter((h) => h.categoryId === categoryId);
  if (matched.length === 0) return null;
  return Math.max(...matched.map((m) => m.percentage));
}

export function hasCompletedDailyToday(): boolean {
  const stats = getUserStats();
  const today = getTodayDateString();
  return stats.lastDailyDate === today;
}
