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
import { QuizCategory, Language } from '../types/quiz';
import { QuizCard } from '../components/QuizCard';
import { getCategoryHighScore, getUserStats, hasCompletedDailyToday } from '../utils/quizStorage';
import { AdBanner } from '../components/AdBanner';
import { translations } from '../utils/translations';

interface HomePageProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onStartQuiz: (category: QuizCategory, count?: number) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onStartQuiz, lang }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const userStats = getUserStats();
  const dailyDone = hasCompletedDailyToday();
  const t = translations[lang];
  const isEn = lang === 'en';

  // Format today's date according to active language
  const todayFormatted = useMemo(() => {
    return new Date().toLocaleDateString(isEn ? 'en-US' : 'bn-BD', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }, [isEn]);

  // Filtered categories based on search query (matches Bengali or English)
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return QUIZ_CATEGORIES;
    return QUIZ_CATEGORIES.filter((cat) => {
      const titleBn = cat.title.toLowerCase();
      const titleEn = (cat.titleEn || '').toLowerCase();
      const descBn = cat.description.toLowerCase();
      const descEn = (cat.descriptionEn || '').toLowerCase();
      const inQuestions = cat.questions.some(
        (qu) =>
          qu.question.toLowerCase().includes(q) ||
          (qu.questionEn && qu.questionEn.toLowerCase().includes(q))
      );
      return (
        titleBn.includes(q) ||
        titleEn.includes(q) ||
        descBn.includes(q) ||
        descEn.includes(q) ||
        inQuestions
      );
    });
  }, [searchQuery]);

  const featuredQuizzes = useMemo(
    () => QUIZ_CATEGORIES.filter((c) => c.featured && c.id !== 'daily-quiz').slice(0, 4),
    []
  );

  const popularQuizzes = useMemo(
    () => QUIZ_CATEGORIES.filter((c) => c.popular && c.id !== 'daily-quiz').slice(0, 6),
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
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-5">
            {t.heroTitle1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {t.heroTitleHighlight}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
            {t.heroSubtitle}
          </p>

          {/* Search bar & quick action */}
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-3 bg-white border border-blue-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-2xs"
              />
            </div>
            <button
              onClick={handleRandomClick}
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs"
            >
              <Dices className="w-4 h-4" />
              <span>{t.quickRandomBtn}</span>
            </button>
          </div>

          {/* Key Feature Stats Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>
                <strong>10</strong> {t.statTotalQuizzes}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>
                <strong>70+</strong> {t.statTotalQuestions}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>
                <strong>60s</strong> {t.statCategoriesCount}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
              <Trophy className="w-4 h-4 text-purple-600" />
              <span>{t.statTotalUsers}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Ad Slot: Directly below hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AdBanner refreshKey="home-hero-ad" />
      </div>

      {/* Daily Challenge Card Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/20 backdrop-blur-xs px-2.5 py-1 rounded-md text-blue-100">
                <Calendar className="w-3.5 h-3.5" />
                <span>{todayFormatted}</span>
                {userStats.streakDays > 0 && (
                  <span className="flex items-center gap-1 ml-1 text-amber-300 font-bold">
                    <Flame className="w-3.5 h-3.5 fill-amber-300" />
                    {userStats.streakDays} {t.dailyStreak}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.dailyChallengeTitle}
              </h2>
              <p className="text-sm text-blue-100 leading-relaxed">
                {t.dailyChallengeDesc}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              {dailyDone ? (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white text-sm font-semibold border border-white/30">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>{t.dailyCompletedBadge}</span>
                </div>
              ) : (
                <button
                  onClick={() => onNavigate('daily')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 text-sm font-extrabold hover:bg-blue-50 active:bg-blue-100 transition-colors shadow-sm"
                >
                  <span>{t.dailyPlayBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t.featuredTitle}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {t.featuredSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            {t.viewAll} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredQuizzes.map((cat) => (
            <QuizCard
              key={cat.id}
              category={cat}
              highScore={getCategoryHighScore(cat.id)}
              onSelect={() => onNavigate('category', { id: cat.id })}
              lang={lang}
            />
          ))}
        </div>
      </section>

      {/* Secondary Ad Slot: Mid content placement */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AdBanner refreshKey="home-mid-ad" />
      </div>

      {/* Popular Categories */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {t.popularTitle}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {t.popularSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('categories')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            {t.viewAll} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularQuizzes.map((cat) => (
            <QuizCard
              key={cat.id}
              category={cat}
              highScore={getCategoryHighScore(cat.id)}
              onSelect={() => onNavigate('category', { id: cat.id })}
              lang={lang}
            />
          ))}
        </div>
      </section>

      {/* All Categories Grid or Search Results */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {searchQuery ? (isEn ? `Search Results for "${searchQuery}"` : `"${searchQuery}" এর ফলাফল`) : t.allCategoriesTitle}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {t.allCategoriesSubtitle}
            </p>
          </div>
        </div>

        {filteredCategories.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <p className="text-slate-500 text-sm">
              {isEn ? 'No quizzes or riddles found matching your query.' : 'আপনার অনুসন্ধানের সাথে মিল রেখে কোনো কুইজ পাওয়া যায়নি।'}
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold hover:bg-blue-100"
            >
              {isEn ? 'Reset Search' : 'সার্চ রিসেট করুন'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCategories.map((cat) => (
              <QuizCard
                key={cat.id}
                category={cat}
                highScore={getCategoryHighScore(cat.id)}
                onSelect={() => onNavigate('category', { id: cat.id })}
                lang={lang}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
