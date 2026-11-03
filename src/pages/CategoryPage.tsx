import React, { useState } from 'react';
import {
  ChevronRight,
  Play,
  Shuffle,
  Clock,
  Sparkles,
  Trophy,
  ArrowLeft,
  Share2,
  Check
} from 'lucide-react';
import { QuizCategory, Language } from '../types/quiz';
import { CategoryIcon } from '../components/CategoryIcon';
import { QUIZ_CATEGORIES } from '../data/quizData';
import { QuizCard } from '../components/QuizCard';
import { getCategoryHighScore } from '../utils/quizStorage';
import { AdBanner } from '../components/AdBanner';
import { translations } from '../utils/translations';

interface CategoryPageProps {
  category: QuizCategory;
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onStartQuiz: (category: QuizCategory, count?: number, shuffle?: boolean) => void;
  lang: Language;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onNavigate,
  onStartQuiz,
  lang
}) => {
  const [questionCount, setQuestionCount] = useState<number>(
    category.id === 'bangla-mojar-dhadha'
      ? 15
      : Math.min(5, category.questions.length)
  );
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState(false);

  const t = translations[lang];
  const isEn = lang === 'en';
  const highScore = getCategoryHighScore(category.id);

  // Related categories
  const related = QUIZ_CATEGORIES.filter((c) => c.id !== category.id).slice(0, 3);

  const handleStart = () => {
    onStartQuiz(category, questionCount, shuffleQuestions);
  };

  const handleShare = () => {
    const origin = window.location.origin || '';
    const shareUrl = `${origin}/?page=category&id=${category.id}&lang=${lang}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const getDifficultyLabel = (diff: string) => {
    if (isEn) {
      switch (diff) {
        case 'Beginner':
          return t.difficultyBeginner;
        case 'Intermediate':
          return t.difficultyIntermediate;
        case 'Advanced':
          return t.difficultyAdvanced;
        default:
          return t.difficultyAll;
      }
    }
    switch (diff) {
      case 'Beginner':
        return t.difficultyBeginner;
      case 'Intermediate':
        return t.difficultyIntermediate;
      case 'Advanced':
        return t.difficultyAdvanced;
      default:
        return t.difficultyAll;
    }
  };

  const catTitle = isEn ? category.titleEn || category.title : category.title;
  const catDesc = isEn ? category.descriptionEn || category.description : category.description;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          {t.categoryBreadcrumbHome}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <button
          onClick={() => onNavigate('categories')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          {t.categoryBreadcrumbList}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold truncate">{catTitle}</span>
      </nav>

      {/* Hero Category Banner */}
      <header className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <CategoryIcon name={category.iconName} className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                  {getDifficultyLabel(category.difficulty)}
                </span>
                <span className="text-xs text-slate-500">
                  {isEn ? `${category.questions.length} Questions` : `${category.questions.length}টি প্রশ্ন সংকলন`}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-medium">
                  {t.timePerQuestionLabel}
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {catTitle}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                {catDesc}
              </p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
            {highScore !== null && highScore !== undefined && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3.5 py-2 rounded-xl text-xs font-bold">
                <Trophy className="w-4 h-4 text-emerald-600" />
                <span>
                  {t.highScoreLabel}: {highScore}%
                </span>
              </div>
            )}

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              title={t.shareCategoryBtn}
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{t.linkCopiedAlert}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.shareCategoryBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Ad placement directly below category hero */}
      <AdBanner refreshKey={`cat-top-${category.id}`} />

      {/* Quiz Customizer and Launch Box */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 shadow-xs">
        <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span>{isEn ? 'Quiz Session Settings' : 'কুইজ সেটিংস ও প্রস্তুতি'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Question count selector */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              {t.selectQuestionCount}
            </label>
            <div className="flex flex-wrap gap-2">
              {[5, 10, 25, 50, category.questions.length]
                .filter((v, i, a) => a.indexOf(v) === i && v <= category.questions.length)
                .map((count) => {
                  const isAll = count === category.questions.length;
                  const isSelected = questionCount === count;
                  return (
                    <button
                      key={count}
                      onClick={() => setQuestionCount(count)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'
                      }`}
                    >
                      {isAll ? (isEn ? `All (${count} Questions)` : `সবগুলো (${count}টি প্রশ্ন)`) : (isEn ? `${count} Questions` : `${count}টি প্রশ্ন`)}
                    </button>
                  );
                })}
            </div>
            {category.id === 'bangla-riddles' && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('riddles')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{isEn ? 'Switch to Interactive Riddle Game Hub (All 200)' : 'ইন্টারঅ্যাকটিভ ধাঁধা গেম হাবে যান (সকল ২০০ ধাঁধা)'}</span>
                </button>
              </div>
            )}
            <p className="text-[11px] text-slate-400">
              {isEn
                ? `You will answer ${questionCount} questions in this session with a 1-minute timer per question.`
                : `এই সেশনে আপনি মোট ${questionCount}টি প্রশ্নের উত্তর দেবেন এবং প্রতিটি প্রশ্নে ১ মিনিট সময় পাবেন।`}
            </p>
          </div>

          {/* Shuffle toggle */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              {isEn ? 'Question Order' : 'প্রশ্নের ক্রম ও বিন্যাস'}
            </label>
            <div
              onClick={() => setShuffleQuestions(!shuffleQuestions)}
              className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-colors ${
                shuffleQuestions
                  ? 'bg-blue-50/60 border-blue-200 text-blue-900'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <Shuffle className={`w-4 h-4 ${shuffleQuestions ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">{t.shuffleQuestionsLabel}</span>
              </div>
              <div
                className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                  shuffleQuestions ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'
                }`}
              >
                <div className="bg-white w-4 h-4 rounded-full shadow-xs" />
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              {isEn
                ? 'Randomizing questions each session helps test genuine retention and adaptability.'
                : 'এলোমেলো করার মাধ্যমে প্রতিবার নতুন অভিজ্ঞতার সাথে জ্ঞান পরীক্ষা করা যায়।'}
            </p>
          </div>
        </div>

        {/* Start button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>
              {isEn ? `Total Time: ~${questionCount} Minutes (1 minute per question)` : `আনুমানিক সময়: ~${questionCount} মিনিট (প্রতি প্রশ্নে ১ মিনিট)`}
            </span>
          </div>

          <button
            onClick={handleStart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-extrabold text-sm hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{t.startQuizBtn}</span>
          </button>
        </div>
      </section>

      {/* Ad Banner before related */}
      <AdBanner refreshKey={`cat-mid-${category.id}`} />

      {/* Related Categories */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">{t.relatedCategoriesTitle}</h3>
          <button
            onClick={() => onNavigate('categories')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.backToCategoriesBtn}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((cat) => (
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
    </article>
  );
};
