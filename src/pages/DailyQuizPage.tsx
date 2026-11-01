import React, { useMemo } from 'react';
import {
  Calendar,
  Flame,
  CheckCircle2,
  Clock,
  Play,
  ArrowLeft,
  Share2,
  HelpCircle
} from 'lucide-react';
import { getDailyQuizForDate, getCategoryById } from '../data/quizData';
import { getTodayDateString, getUserStats, hasCompletedDailyToday } from '../utils/quizStorage';
import { QuizCategory, QuizQuestion } from '../types/quiz';

interface DailyQuizPageProps {
  onNavigate: (route: string) => void;
  onStartCustomQuiz: (category: QuizCategory, customQuestions: QuizQuestion[], isDaily: boolean) => void;
}

export const DailyQuizPage: React.FC<DailyQuizPageProps> = ({
  onNavigate,
  onStartCustomQuiz
}) => {
  const todayStr = getTodayDateString();
  const dailyData = useMemo(() => getDailyQuizForDate(todayStr), [todayStr]);
  const userStats = getUserStats();
  const alreadyCompleted = hasCompletedDailyToday();

  // Find previous daily results
  const todayResult = userStats.history.find(
    (h) => h.isDaily && h.completedAt.startsWith(todayStr)
  );

  const handleStart = () => {
    const parentCategory = getCategoryById('daily-quiz') || {
      id: 'daily-quiz',
      slug: 'daily-quiz',
      title: 'Daily Quiz',
      description: 'Daily challenge across varied trivia subjects',
      iconName: 'CalendarCheck',
      colorScheme: 'blue',
      difficulty: 'All Levels',
      questions: dailyData.questions
    };

    onStartCustomQuiz(parentCategory, dailyData.questions, true);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Daily Quiz Feature Banner */}
      <header className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-white/20 text-white border border-white/30 backdrop-blur-xs">
              <Flame className="w-3.5 h-3.5 text-amber-300" />
              Daily Quiz Feature
            </span>

            <div className="flex items-center gap-2 text-xs font-semibold bg-blue-900/40 px-3 py-1 rounded-full border border-blue-400/30">
              <Calendar className="w-3.5 h-3.5 text-blue-200" />
              <span>{dailyData.dateFormatted}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Daily Challenge for Today
            </h1>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
              Every day brings a fresh 7-question test spanning geography, science, history, arts, and technology. Complete it today to maintain your learning streak!
            </p>
          </div>

          {/* Quick status bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-blue-100 pt-2 border-t border-blue-400/30">
            <div className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-blue-300" />
              <span>{dailyData.questions.length} Questions</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-300" />
              <span>~3-4 Minutes</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Current Streak: {userStats.streakDays} {userStats.streakDays === 1 ? 'day' : 'days'}</span>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleStart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm bg-white text-blue-800 hover:bg-blue-50 active:bg-blue-100 shadow-md transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-blue-800" />
              <span>{alreadyCompleted ? 'Play Daily Quiz Again' : 'Begin Daily Quiz Now'}</span>
            </button>

            {alreadyCompleted && todayResult && (
              <div className="flex items-center gap-2 text-xs text-emerald-200 font-semibold px-3 py-2 bg-emerald-900/30 rounded-lg border border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Today’s Score: {todayResult.scoreRatio} ({todayResult.percentage}%)</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Today's Question Preview & Curriculum */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">
            What You Will Learn Today
          </h2>
          <span className="text-xs text-slate-500">7 Handcrafted Questions</span>
        </div>

        <div className="space-y-3 pt-2">
          {dailyData.questions.map((q, idx) => (
            <div
              key={q.id}
              className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-100 flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-800">
                  {q.question}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span>Multiple Choice (4 options)</span>
                  <span>·</span>
                  <span>Instant Answer & Explanation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Streak explanation */}
      <section className="bg-blue-50/50 rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>How Daily Streaks Work</span>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Come back every 24 hours to take the new daily quiz. Each consecutive day completed adds to your learning streak, stored right on your browser.
          </p>
        </div>
        <div className="text-center sm:text-right shrink-0 bg-white p-3.5 rounded-xl border border-blue-100">
          <div className="text-2xl font-black text-amber-600">
            {userStats.streakDays}
          </div>
          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Days Active
          </div>
        </div>
      </section>
    </article>
  );
};
