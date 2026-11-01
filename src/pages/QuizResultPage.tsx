import React, { useState } from 'react';
import {
  Trophy,
  RotateCcw,
  Grid,
  CheckCircle2,
  XCircle,
  Share2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Lightbulb
} from 'lucide-react';
import { QuizResult } from '../types/quiz';
import { Confetti } from '../components/Confetti';

interface QuizResultPageProps {
  result: QuizResult;
  onPlayAgain: () => void;
  onBackToCategories: () => void;
}

export const QuizResultPage: React.FC<QuizResultPageProps> = ({
  result,
  onPlayAgain,
  onBackToCategories
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const isCelebratory = result.percentage >= 80;

  const handleShare = () => {
    const text = `আমি Quiz Zone-এ ${result.categoryTitle}-এ ${result.scoreRatio} (${result.percentage}%) স্কোর করেছি! আপনি কত স্কোর করতে পারেন?`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {isCelebratory && <Confetti durationMs={4000} />}

      {/* Main Results Card */}
      <section className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-10 shadow-sm text-center relative overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6" />

        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 mx-auto mb-4 shadow-xs">
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
        </div>

        <div className="space-y-1 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {result.categoryTitle} ফলাফল
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            কুইজ সম্পন্ন হয়েছে!
          </h1>
          <p className="text-base sm:text-lg font-semibold text-blue-700 max-w-lg mx-auto pt-1">
            &ldquo;{result.performanceMessage}&rdquo;
          </p>
        </div>

        {/* Detailed Score Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto text-left mb-8">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="block text-xs font-medium text-slate-500">মোট প্রশ্ন</span>
            <span className="text-xl sm:text-2xl font-bold text-slate-900">{result.totalQuestions}টি</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <span className="block text-xs font-medium text-emerald-800">সঠিক উত্তর</span>
            <span className="text-xl sm:text-2xl font-bold text-emerald-700">
              {result.correctAnswers}টি
            </span>
          </div>

          <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-100">
            <span className="block text-xs font-medium text-rose-800">ভুল উত্তর</span>
            <span className="text-xl sm:text-2xl font-bold text-rose-600">
              {result.incorrectAnswers}টি
            </span>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100">
            <span className="block text-xs font-medium text-blue-800">চূড়ান্ত স্কোর ও সঠিকতা</span>
            <span className="text-xl sm:text-2xl font-bold text-blue-700">
              {result.scoreRatio} ({result.percentage}%)
            </span>
          </div>
        </div>

        {/* Action Buttons: Play Again & Back to Categories */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onPlayAgain}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>আবার খেলুন</span>
          </button>

          <button
            onClick={onBackToCategories}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
          >
            <Grid className="w-4 h-4 text-slate-500" />
            <span>সকল ক্যাটাগরি</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-blue-600 hover:bg-blue-50 border border-blue-200 transition-colors cursor-pointer"
            title="স্কোর কপি করুন"
          >
            <Share2 className="w-4 h-4" />
            <span>{copiedShare ? 'কপিকৃত হয়েছে!' : 'ফলাফল শেয়ার করুন'}</span>
          </button>
        </div>
      </section>

      {/* Review Breakdown Section */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              প্রশ্নভিত্তিক বিস্তারিত পর্যালোচনা
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            {result.answers.length}টি প্রশ্ন যাচাই করা হয়েছে
          </span>
        </div>

        <p className="text-xs text-slate-500">
          প্রতিটি প্রশ্নের সঠিক সমাধান, আপনার উত্তর এবং শিক্ষণীয় ব্যাখ্যা জানতে নিচে ক্লিক করুন।
        </p>

        <div className="space-y-3 pt-2">
          {result.answers.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const letters = ['ক', 'খ', 'গ', 'ঘ'];

            return (
              <div
                key={item.questionId || idx}
                className={`rounded-xl border transition-colors ${
                  item.isCorrect
                    ? 'border-emerald-200/80 bg-white'
                    : 'border-blue-200 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-4 flex items-start justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5">
                      {item.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                      )}
                    </span>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 mb-0.5">
                        প্রশ্ন নম্বর {idx + 1}
                      </div>
                      <p className="text-sm font-semibold text-slate-900 line-clamp-2">
                        {item.questionText}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-slate-400">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm space-y-3">
                    {/* Selected and Correct answer summary */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-600">আপনার উত্তর:</span>
                        <span
                          className={`font-bold ${
                            item.isCorrect ? 'text-emerald-700' : 'text-rose-600'
                          }`}
                        >
                          বিকল্প {letters[item.selectedIndex]}: {item.options[item.selectedIndex]}
                        </span>
                      </div>

                      {!item.isCorrect && (
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-600">সঠিক উত্তর:</span>
                          <span className="font-bold text-emerald-700">
                            বিকল্প {letters[item.correctIndex]}: {item.options[item.correctIndex]}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Educational explanation */}
                    <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-slate-700 text-xs uppercase tracking-wider">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                        <span>ব্যাখ্যা</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>

                    {/* Interesting fact */}
                    {item.interestingFact && (
                      <div className="p-3 bg-blue-50/70 rounded-lg space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-blue-700 text-xs uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                          <span>আপনি কি জানেন?</span>
                        </div>
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          {item.interestingFact}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
