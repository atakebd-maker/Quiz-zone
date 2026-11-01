import React, { useState, useMemo } from 'react';
import {
  Search,
  Dices,
  Sparkles,
  Calendar,
  Flame,
  CheckCircle2,
  Trophy,
  ArrowRight,
  TrendingUp,
  Clock,
  Layers
} from 'lucide-react';
import { QUIZ_CATEGORIES, getRandomQuiz } from '../data/quizData';
import { QuizCategory } from '../types/quiz';
import { QuizCard } from '../components/QuizCard';
import { getCategoryHighScore, getUserStats, hasCompletedDailyToday } from '../utils/quizStorage';

interface HomePageProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onStartQuiz: (category: QuizCategory, count?: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onStartQuiz }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const userStats = getUserStats();
  const dailyDone = hasCompletedDailyToday();

  // Format today's date
  const todayFormatted = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }, []);

  // Filtered categories based on search
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return QUIZ_CATEGORIES;
    return QUIZ_CATEGORIES.filter(
      (cat) =>
        cat.title.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q) ||
        cat.questions.some((qu) => qu.question.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const featuredQuizzes = useMemo(
    () => QUIZ_CATEGORIES.filter((c) => c.featured && c.id !== 'daily-quiz').slice(0, 4),
    []
  );

  const popularQuizzes = useMemo(
    () => QUIZ_CATEGORIES.filter((c) => c.popular && c.id !== 'daily-quiz').slice(0, 6),
    []
  );

  const recentlyAddedQuizzes = useMemo(
    () => QUIZ_CATEGORIES.filter((c) => c.recentlyAdded || c.id === 'fun-entertainment' || c.id === 'technology').slice(0, 4),
    []
  );

  const handleRandomClick = () => {
    const random = getRandomQuiz();
    onStartQuiz(random);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-12 pb-10 sm:pt-16 sm:pb-14 border-b border-blue-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100/60 border border-blue-200/80 px-3 py-1 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>16 Curated Categories · 100+ Free Interactive Questions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Test Your Knowledge,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              One Quiz at a Time!
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            Challenge your mind with instant answers, engaging explanations, and fascinating facts across science, geography, history, technology, and more.
          </p>

          {/* Search bar & quick action */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any quiz topic (e.g. Geography, Space, History)..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xs transition-all"
                aria-label="Search quizzes"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={handleRandomClick}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-xs transition-colors"
            >
              <Dices className="w-4 h-4" />
              <span>Random Quiz</span>
            </button>
          </div>

          {/* Key metrics / trust indicators */}
          <div className="mt-10 pt-8 border-t border-blue-100/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div className="bg-white/80 p-3 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Categories</span>
              </div>
              <div className="text-xl font-bold text-slate-900">16 Topics</div>
            </div>

            <div className="bg-white/80 p-3 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Questions</span>
              </div>
              <div className="text-xl font-bold text-slate-900">100+ Qs</div>
            </div>

            <div className="bg-white/80 p-3 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Daily Challenge</span>
              </div>
              <div className="text-xl font-bold text-slate-900">7 New Every Day</div>
            </div>

            <div className="bg-white/80 p-3 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                <Trophy className="w-3.5 h-3.5 text-indigo-600" />
                <span>Your Completed</span>
              </div>
              <div className="text-xl font-bold text-slate-900">
                {userStats.totalQuizzesTaken} {userStats.totalQuizzesTaken === 1 ? 'Quiz' : 'Quizzes'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search results banner if searching */}
      {searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Search Results for &ldquo;{searchQuery}&rdquo; ({filteredCategories.length})
            </h2>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-blue-600 hover:underline"
            >
              Reset search
            </button>
          </div>

          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredCategories.map((cat) => (
                <QuizCard
                  key={cat.id}
                  category={cat}
                  onSelect={(c) => onNavigate('category', { id: c.id })}
                  highScore={getCategoryHighScore(cat.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-600 text-sm mb-3">
                No quiz categories found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
              >
                Show All Categories
              </button>
            </div>
          )}
        </section>
      )}

      {/* Section: Daily Quiz Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-6 sm:p-8 lg:p-10 shadow-lg overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30 backdrop-blur-xs">
                  <Flame className="w-3.5 h-3.5 text-amber-300" />
                  Daily Quiz Feature
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-blue-100 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {todayFormatted}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Today’s 7-Question Intellect Challenge
              </h2>

              <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
                Published fresh every single morning. Test your curiosity across mixed topics, earn your daily streak, and compare your score!
              </p>

              <div className="flex items-center gap-4 text-xs text-blue-100 pt-1">
                <span>7 Questions</span>
                <span aria-hidden="true">·</span>
                <span>~3 Minutes</span>
                <span aria-hidden="true">·</span>
                <span>Immediate Feedback</span>
                {dailyDone && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Completed Today!
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onNavigate('daily')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-blue-700 hover:bg-blue-50 active:bg-blue-100 shadow-md transition-all duration-150"
              >
                <span>{dailyDone ? 'Replay Daily Quiz' : 'Start Daily Quiz'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Featured Quizzes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Quizzes
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Handpicked trivia sets with rich historical and scientific insights
            </p>
          </div>

          <button
            onClick={() => onNavigate('categories')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            <span>View All (16)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredQuizzes.map((cat) => (
            <QuizCard
              key={cat.id}
              category={cat}
              onSelect={(c) => onNavigate('category', { id: c.id })}
              highScore={getCategoryHighScore(cat.id)}
            />
          ))}
        </div>
      </section>

      {/* Section: Most Popular Quizzes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Most Popular Categories
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Loved by thousands of players testing their daily knowledge
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularQuizzes.map((cat) => (
            <QuizCard
              key={cat.id}
              category={cat}
              onSelect={(c) => onNavigate('category', { id: c.id })}
              highScore={getCategoryHighScore(cat.id)}
            />
          ))}
        </div>
      </section>

      {/* Section: Recently Added & Fresh Releases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Recently Added & Updated
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                New questions, verified scientific discoveries, and modern entertainment
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentlyAddedQuizzes.map((cat) => (
            <QuizCard
              key={cat.id}
              category={cat}
              onSelect={(c) => onNavigate('category', { id: c.id })}
              highScore={getCategoryHighScore(cat.id)}
            />
          ))}
        </div>
      </section>

      {/* Section: Educational & Learning Guarantee Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                1. Always Encouraging
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you score 100% or miss an answer, QuizPulse guides you with positive, supportive feedback so learning stays enjoyable and stress-free.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                2. Real Explanations & Fun Facts
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every single question features an educational explanation and a &ldquo;Did You Know?&rdquo; tidbit to broaden your horizons beyond the score.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-slate-900">
                3. Completely Accessible & Private
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No sign-up wall, no subscriptions, and your progress is saved locally directly on your device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
