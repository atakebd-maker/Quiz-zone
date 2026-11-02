import React from 'react';
import {
  Trophy,
  CheckCircle2,
  Flame,
  RotateCcw,
  BookOpen,
  ArrowLeft
} from 'lucide-react';
import { getUserStats } from '../utils/quizStorage';
import { getCategoryById } from '../data/quizData';
import { QuizCategory, Language } from '../types/quiz';
import { translations } from '../utils/translations';

interface HistoryPageProps {
  onNavigate: (route: string) => void;
  onStartQuiz: (category: QuizCategory) => void;
  lang: Language;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({
  onNavigate,
  onStartQuiz,
  lang
}) => {
  const stats = getUserStats();
  const t = translations[lang];
  const isEn = lang === 'en';

  const totalAnswered = stats.totalQuestionsAnswered;
  const overallAccuracy =
    totalAnswered > 0
      ? Math.round((stats.totalCorrect / totalAnswered) * 100)
      : 0;

  const handleRetake = (categoryId: string) => {
    const cat = getCategoryById(categoryId);
    if (cat) {
      onStartQuiz(cat);
    } else {
      onNavigate('categories');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isEn ? 'Back to Home' : 'হোমে ফিরে যান'}</span>
        </button>
      </div>

      <header className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
          {isEn ? 'Personal Cognitive Performance' : 'ব্যক্তিগত কুইজ ও মেধা বিশ্লেষণ'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {t.historyPageTitle}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          {t.historyPageSubtitle}
        </p>
      </header>

      {/* Analytics Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <Trophy className="w-4 h-4 text-blue-600" />
            <span>{t.totalQuizzesTaken}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {stats.totalQuizzesTaken}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>{t.totalAnswered}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {stats.totalQuestionsAnswered}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{t.overallAccuracy}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-700">
            {overallAccuracy}%
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-blue-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>{t.currentStreak}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-600">
            {stats.streakDays} {t.dailyStreak}
          </div>
        </div>
      </div>

      {/* History Log List */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-bold text-slate-900">
            {isEn
              ? `Past Quiz Sessions (${stats.history.length})`
              : `বিগত কুইজ সেশনসমূহ (${stats.history.length}টি)`}
          </h2>
          <span className="text-xs text-slate-500">
            {isEn ? 'Saved on your device' : 'আপনার ডিভাইসে সংরক্ষিত'}
          </span>
        </div>

        {stats.history.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {stats.history.map((record, idx) => {
              const dateFormatted = new Date(record.completedAt).toLocaleDateString(
                isEn ? 'en-US' : 'bn-BD',
                {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                }
              );

              const catName = isEn
                ? record.categoryTitleEn || record.categoryTitle
                : record.categoryTitle;

              return (
                <div
                  key={idx}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/60 p-2 rounded-xl transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">
                        {catName}
                      </span>
                      {record.isDaily && (
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          {isEn ? 'Daily' : 'দৈনিক'}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span>{dateFormatted}</span>
                      <span>·</span>
                      <span>
                        {isEn ? 'Score' : 'স্কোর'}: <strong>{record.scoreRatio}</strong>
                      </span>
                      <span>·</span>
                      <span
                        className={`font-semibold ${
                          record.percentage >= 80
                            ? 'text-emerald-600'
                            : record.percentage >= 50
                            ? 'text-blue-600'
                            : 'text-slate-600'
                        }`}
                      >
                        {record.percentage}% {isEn ? 'Accuracy' : 'সঠিকতা'}
                      </span>
                      {record.estimatedIQ && (
                        <>
                          <span>·</span>
                          <span className="text-[11px] font-extrabold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                            IQ: {record.estimatedIQ}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRetake(record.categoryId)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Play Again' : 'পুনরায় খেলুন'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 space-y-3">
            <p className="text-sm text-slate-500">
              {t.noHistoryDesc}
            </p>
            <button
              onClick={() => onNavigate('categories')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs shadow-xs hover:bg-blue-700 cursor-pointer"
            >
              {t.allCategoriesTitle}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
