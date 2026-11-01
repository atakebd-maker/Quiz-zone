import React, { useState } from 'react';
import {
  ChevronRight,
  Play,
  Shuffle,
  Clock,
  Sparkles,
  Trophy,
  ArrowLeft
} from 'lucide-react';
import { QuizCategory } from '../types/quiz';
import { CategoryIcon } from '../components/CategoryIcon';
import { QUIZ_CATEGORIES } from '../data/quizData';
import { QuizCard } from '../components/QuizCard';
import { getCategoryHighScore } from '../utils/quizStorage';
import { AdBanner } from '../components/AdBanner';

interface CategoryPageProps {
  category: QuizCategory;
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onStartQuiz: (category: QuizCategory, count?: number, shuffle?: boolean) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onNavigate,
  onStartQuiz
}) => {
  const [questionCount, setQuestionCount] = useState<number>(
    Math.min(5, category.questions.length)
  );
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);

  const highScore = getCategoryHighScore(category.id);

  // Related categories
  const related = QUIZ_CATEGORIES.filter((c) => c.id !== category.id).slice(0, 3);

  const handleStart = () => {
    onStartQuiz(category, questionCount, shuffleQuestions);
  };

  const getDifficultyLabel = (diff: string) => {
    switch (diff) {
      case 'Beginner':
        return 'সহজ লেভেল';
      case 'Intermediate':
        return 'মধ্যম লেভেল';
      case 'Advanced':
        return 'উচ্চ লেভেল';
      default:
        return 'সকলের জন্য';
    }
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="ব্রেডক্রাম্ব">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          হোম
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <button
          onClick={() => onNavigate('categories')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          ক্যাটাগরি
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold truncate">{category.title}</span>
      </nav>

      {/* Hero Category Banner */}
      <header className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-xs">
              <CategoryIcon name={category.iconName} className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>কুইজ ক্যাটাগরি</span>
                <span aria-hidden="true">·</span>
                <span>{getDifficultyLabel(category.difficulty)}</span>
                <span aria-hidden="true">·</span>
                <span>মোট {category.questions.length}টি প্রশ্ন</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {category.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>

          {highScore !== null && (
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 sm:p-4 text-center shrink-0 min-w-[120px]">
              <div className="flex items-center justify-center gap-1 text-xs font-semibold text-emerald-700 mb-0.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>আপনার সেরা স্কোর</span>
              </div>
              <div className="text-2xl font-black text-emerald-800">{highScore}%</div>
            </div>
          )}
        </div>

        {/* Action Panel to Configure and Play */}
        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Question count selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              প্রশ্ন সংখ্যা নির্ধারণ করুন:
            </label>
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => setQuestionCount(Math.min(3, category.questions.length))}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  questionCount === 3
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ৩টি দ্রুত
              </button>
              <button
                type="button"
                onClick={() => setQuestionCount(Math.min(5, category.questions.length))}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  questionCount === 5
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ৫টি সাধারণ
              </button>
              <button
                type="button"
                onClick={() => setQuestionCount(category.questions.length)}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  questionCount === category.questions.length
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                সবগুলো ({category.questions.length}টি)
              </button>
            </div>
          </div>

          {/* Randomization option */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              কুইজ সেটিংস:
            </label>
            <button
              type="button"
              onClick={() => setShuffleQuestions(!shuffleQuestions)}
              className={`w-full flex items-center justify-between px-3 py-2 border rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                shuffleQuestions
                  ? 'bg-blue-50/70 border-blue-200 text-blue-800'
                  : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Shuffle className="w-3.5 h-3.5 text-blue-600" />
                <span>এলোমেলো প্রশ্ন নির্বাচন</span>
              </span>
              <span className="text-[11px] font-bold">
                {shuffleQuestions ? 'চালু আছে' : 'ধারাবাহিক'}
              </span>
            </button>
          </div>

          {/* Start CTA */}
          <div className="md:text-right">
            <button
              type="button"
              onClick={handleStart}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>কুইজ শুরু করুন</span>
            </button>
          </div>
        </div>
      </header>

      {/* Ad Banner on Category Page */}
      <div className="flex justify-center my-2">
        <AdBanner refreshKey={`cat-${category.id}`} />
      </div>

      {/* Curriculum / What You'll Learn in this Quiz */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              এই কুইজে যে বিষয়গুলো শিখবেন
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            {category.questions.length}টি বিস্তারিত প্রশ্ন ও ব্যাখ্যা
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {category.questions.map((q, index) => (
            <div
              key={q.id}
              className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-3"
            >
              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                {index + 1}
              </span>
              <div className="space-y-1">
                <p className="text-xs font-semibold text-slate-800 line-clamp-2">
                  {q.question}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> ~৩০ সেকেন্ড
                  </span>
                  <span>·</span>
                  <span>৪টি বিকল্প উত্তর (ক-ঘ)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Categories */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            আরও কিছু কুইজ যা আপনার ভালো লাগতে পারে
          </h2>
          <button
            onClick={() => onNavigate('categories')}
            className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
          >
            সব ক্যাটাগরি দেখুন
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((cat) => (
            <QuizCard
              key={cat.id}
              category={cat}
              onSelect={(c) => onNavigate('category', { id: c.id })}
              highScore={getCategoryHighScore(cat.id)}
            />
          ))}
        </div>
      </section>

      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('categories')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>সকল ক্যাটাগরিতে ফিরে যান</span>
        </button>
      </div>
    </article>
  );
};
