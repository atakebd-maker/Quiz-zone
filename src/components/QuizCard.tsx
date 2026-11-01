import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { QuizCategory } from '../types/quiz';
import { CategoryIcon } from './CategoryIcon';

interface QuizCardProps {
  category: QuizCategory;
  onSelect: (category: QuizCategory) => void;
  highScore?: number | null;
}

export const QuizCard: React.FC<QuizCardProps> = ({ category, onSelect, highScore }) => {
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
    <div
      onClick={() => onSelect(category)}
      className="group relative bg-white rounded-xl border border-blue-100/80 p-5 shadow-xs hover:shadow-md hover:border-blue-400/80 transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            <CategoryIcon name={category.iconName} className="w-5 h-5" />
          </div>

          {highScore !== null && highScore !== undefined && (
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50/80 border border-emerald-200/60 px-2 py-0.5 rounded">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>সেরা: {highScore}%</span>
            </div>
          )}
        </div>

        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1.5">
          {category.title}
        </h3>

        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {category.description}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span>{category.questions.length}টি প্রশ্ন</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{getDifficultyLabel(category.difficulty)}</span>
        </div>

        <span className="inline-flex items-center gap-1 font-medium text-blue-600 group-hover:translate-x-0.5 transition-transform">
          খেলুন <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
