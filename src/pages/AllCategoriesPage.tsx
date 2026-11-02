import React, { useState, useMemo } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { QUIZ_CATEGORIES } from '../data/quizData';
import { QuizCategory, Language } from '../types/quiz';
import { QuizCard } from '../components/QuizCard';
import { getCategoryHighScore } from '../utils/quizStorage';
import { AdBanner } from '../components/AdBanner';
import { translations } from '../utils/translations';

interface AllCategoriesPageProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onSelectCategory: (category: QuizCategory) => void;
  lang: Language;
}

export const AllCategoriesPage: React.FC<AllCategoriesPageProps> = ({
  onNavigate,
  onSelectCategory,
  lang
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const t = translations[lang];
  const isEn = lang === 'en';

  const filteredCategories = useMemo(() => {
    let result = QUIZ_CATEGORIES;

    if (difficultyFilter !== 'All') {
      result = result.filter((c) => c.difficulty === difficultyFilter);
    }

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter((c) => {
        const titleBn = c.title.toLowerCase();
        const titleEn = (c.titleEn || '').toLowerCase();
        const descBn = c.description.toLowerCase();
        const descEn = (c.descriptionEn || '').toLowerCase();
        return (
          titleBn.includes(q) ||
          titleEn.includes(q) ||
          descBn.includes(q) ||
          descEn.includes(q)
        );
      });
    }

    return result;
  }, [searchQuery, difficultyFilter]);

  const difficultyTabs = [
    { id: 'All', label: isEn ? 'All Quizzes' : 'সকল কুইজ' },
    { id: 'Beginner', label: isEn ? 'Easy' : 'সহজ' },
    { id: 'Intermediate', label: isEn ? 'Medium' : 'মধ্যম' },
    { id: 'All Levels', label: isEn ? 'All Levels' : 'উন্মুক্ত' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          {t.categoryBreadcrumbHome}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold">{t.allCategoriesTitle}</span>
      </nav>

      {/* Header */}
      <header className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
          {isEn ? 'Quiz Zone BD Collection' : 'Quiz Zone BD কুইজ ভান্ডার'}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {isEn ? 'Explore All 10 Riddle & Quiz Categories' : 'সকল ১০টি বাংলা ধাঁধা ও কুইজ ক্যাটাগরি অন্বেষণ করুন'}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          {isEn
            ? 'Test your cognitive agility in Bengali riddles, brain teasers, math puzzles, science, and Bangladesh heritage. Every quiz features instant explanations, interesting facts, and estimated IQ scores.'
            : 'সহজ ও কঠিন বাংলা ধাঁধা, বুদ্ধির খেলা, যুক্তির প্রশ্ন, বিজ্ঞান ও বাংলাদেশ বিষয়াবলী—যেকোনো বিষয়ে আপনার মেধা পরীক্ষা করুন। প্রতিটি কুইজে রয়েছে সঠিক উত্তর, তথ্যবহুল ব্যাখ্যা এবং আকর্ষণীয় অজানা তথ্য।'}
        </p>
      </header>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-blue-100 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
          />
        </div>

        {/* Difficulty segmented control */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-stretch sm:self-auto">
          {difficultyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setDifficultyFilter(tab.id)}
              className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                difficultyFilter === tab.id
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ad Banner on All Categories Page */}
      <div className="flex justify-center my-3">
        <AdBanner refreshKey={`all-cats-${difficultyFilter}`} />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCategories.map((category) => (
          <QuizCard
            key={category.id}
            category={category}
            onSelect={onSelectCategory}
            highScore={getCategoryHighScore(category.id)}
            lang={lang}
          />
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
          <p className="text-slate-600 text-sm">
            {isEn
              ? 'No quiz categories found matching your query.'
              : 'আপনার অনুসন্ধানের সাথে মিলে এমন কোনো কুইজ ক্যাটাগরি পাওয়া যায়নি।'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setDifficultyFilter('All');
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            {isEn ? 'Reset Filter' : 'ফিল্টার রিসেট করুন'}
          </button>
        </div>
      )}
    </div>
  );
};
