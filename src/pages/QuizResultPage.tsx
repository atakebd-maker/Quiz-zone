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
  Lightbulb,
  Brain,
  Clock,
  Zap,
  Target,
  Check,
  Download,
  Eye,
  Loader2
} from 'lucide-react';
import { QuizResult, Language } from '../types/quiz';
import { Confetti } from '../components/Confetti';
import { AdBanner } from '../components/AdBanner';
import { IQCardModal } from '../components/IQCardModal';
import { downloadIQCardImage } from '../utils/generateIQCardImage';
import { translations } from '../utils/translations';

interface QuizResultPageProps {
  result: QuizResult;
  onPlayAgain: () => void;
  onBackToCategories: () => void;
  lang: Language;
}

export const QuizResultPage: React.FC<QuizResultPageProps> = ({
  result,
  onPlayAgain,
  onBackToCategories,
  lang
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [downloadingCard, setDownloadingCard] = useState(false);
  const [cardDownloaded, setCardDownloaded] = useState(false);

  const t = translations[lang];
  const isEn = lang === 'en';

  const isCelebratory = result.percentage >= 80;
  const avgTimePerQuestion =
    result.totalQuestions > 0 && result.totalTimeSeconds
      ? Math.round(result.totalTimeSeconds / result.totalQuestions)
      : 25;

  const handleShare = () => {
    const origin = window.location.origin || '';
    const shareUrl = `${origin}/?page=category&id=${result.categoryId}&lang=${lang}`;
    const catName = isEn ? result.categoryTitleEn || result.categoryTitle : result.categoryTitle;
    const classification = isEn
      ? result.iqClassificationEn || result.iqClassification
      : result.iqClassification;

    const text = isEn
      ? `I scored ${result.scoreRatio} (${result.percentage}%) on Quiz Zone BD in "${catName}" with an estimated IQ of ${result.estimatedIQ || 115} (${classification})! Challenge yourself here: ${shareUrl}`
      : `আমি Quiz Zone BD-তে "${catName}" কুইজে ${result.scoreRatio} (${result.percentage}%) পেয়েছি এবং আমার আনুমানিক আইকিউ (IQ) হলো ${result.estimatedIQ || 115} (${classification})! আপনি কত স্কোর করতে পারবেন? লিঙ্ক: ${shareUrl}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleDirectDownload = async () => {
    setDownloadingCard(true);
    try {
      await downloadIQCardImage(result, lang);
      setCardDownloaded(true);
      setTimeout(() => setCardDownloaded(false), 3000);
    } catch (err) {
      console.error('Failed to download card:', err);
    } finally {
      setDownloadingCard(false);
    }
  };

  // Determine IQ ring colors
  const iq = result.estimatedIQ || 110;
  let iqColor = 'from-blue-600 to-indigo-600';
  let iqBadgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
  if (iq >= 135) {
    iqColor = 'from-purple-600 to-pink-600';
    iqBadgeColor = 'bg-purple-50 text-purple-700 border-purple-200';
  } else if (iq >= 120) {
    iqColor = 'from-emerald-600 to-teal-600';
    iqBadgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (iq >= 110) {
    iqColor = 'from-blue-600 to-cyan-600';
    iqBadgeColor = 'bg-blue-50 text-blue-700 border-blue-200';
  } else if (iq >= 90) {
    iqColor = 'from-amber-500 to-orange-500';
    iqBadgeColor = 'bg-amber-50 text-amber-700 border-amber-200';
  }

  const categoryTitle = isEn
    ? result.categoryTitleEn || result.categoryTitle
    : result.categoryTitle;
  const iqClassification = isEn
    ? result.iqClassificationEn || result.iqClassification
    : result.iqClassification;
  const iqDesc = isEn
    ? result.iqDescriptionEn || result.iqDescription
    : result.iqDescription;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {isCelebratory && <Confetti durationMs={4000} />}

      {/* Main Results Card */}
      <section className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-10 shadow-sm text-center relative overflow-hidden">
        {/* Decorative Top Accent */}
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6" />

        <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-4">
          <Trophy className="w-3.5 h-3.5 text-blue-600" />
          <span>{categoryTitle}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          {t.resultCelebrationTitle}
        </h1>

        <p className="text-sm text-slate-600 max-w-lg mx-auto mb-8">
          {result.performanceMessage}
        </p>

        {/* Big Score & Metric Ring Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mb-8">
          <div className="bg-blue-50/60 border border-blue-100 p-4 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider mb-1">
              {t.resultScoreSummary}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-700">
              {result.scoreRatio}
            </span>
          </div>

          <div className="bg-emerald-50/60 border border-emerald-100 p-4 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider mb-1">
              {t.resultAccuracy}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
              {result.percentage}%
            </span>
          </div>

          <div className="bg-purple-50/60 border border-purple-100 p-4 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider mb-1">
              {t.resultTotalTime}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-purple-700">
              {result.totalTimeSeconds || 45}s
            </span>
          </div>

          <div className="bg-amber-50/60 border border-amber-100 p-4 rounded-2xl">
            <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider mb-1">
              {t.resultAvgTime}
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-amber-700">
              {avgTimePerQuestion}s
            </span>
          </div>
        </div>

        {/* Dedicated IQ Evaluation Highlight Box with Download Certificate Card */}
        <div className="bg-gradient-to-b from-slate-50 via-blue-50/30 to-indigo-50/40 rounded-2xl border-2 border-blue-200/90 p-5 sm:p-7 max-w-2xl mx-auto mb-8 text-left space-y-4 shadow-sm relative overflow-hidden">
          {/* Subtle watermark badge in background */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none select-none">
            <Brain className="w-44 h-44 text-blue-800" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 block">
                  {t.estimatedIQTitle}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  IQ {iq}
                </span>
              </div>
            </div>

            <div className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border ${iqBadgeColor} shadow-2xs self-start sm:self-auto`}>
              {iqClassification}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            {iqDesc}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-1">
            <span className="flex items-center gap-1 font-semibold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded-md">
              <Zap className="w-3.5 h-3.5" />
              <span>{isEn ? 'Speed & Accuracy Matrix' : 'গতি ও সঠিকতা সমন্বয়'}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-md">
              <Target className="w-3.5 h-3.5" />
              <span>{isEn ? 'Cognitive Agility Index' : 'বুদ্ধিবৃত্তিক মূল্যায়ন'}</span>
            </span>
          </div>

          {/* Download IQ Card Action Bar inside Highlight Box */}
          <div className="pt-3 border-t border-blue-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/70 -mx-5 sm:-mx-7 -mb-5 sm:-mb-7 p-4 sm:px-6 rounded-b-2xl">
            <div className="flex items-center gap-2 text-xs text-slate-600 font-bold">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{isEn ? 'High-Res Downloadable IQ Card' : 'উচ্চ রেজোলিউশন আইকিউ কার্ড ও রিপোর্ট'}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCardModalOpen(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-extrabold transition-all shadow-2xs cursor-pointer"
                title={isEn ? 'Preview Card' : 'কার্ডটি দেখুন'}
              >
                <Eye className="w-4 h-4 text-slate-500" />
                <span>{t.previewCardBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleDirectDownload}
                disabled={downloadingCard}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-black transition-all shadow-sm hover:shadow cursor-pointer disabled:opacity-60"
              >
                {downloadingCard ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{t.downloadingCard}</span>
                  </>
                ) : cardDownloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>{isEn ? 'Downloaded!' : 'ডাউনলোড সফল!'}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>{t.downloadIQCardBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleDirectDownload}
            disabled={downloadingCard}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-extrabold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md cursor-pointer disabled:opacity-60"
          >
            {downloadingCard ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t.downloadingCard}</span>
              </>
            ) : cardDownloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>{t.downloadSuccess}</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{t.downloadIQCardBtn}</span>
              </>
            )}
          </button>

          <button
            onClick={onPlayAgain}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-extrabold hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.playAgainBtn}</span>
          </button>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold hover:bg-slate-200 transition-colors cursor-pointer"
          >
            {copiedShare ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">{t.linkCopiedAlert}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-slate-500" />
                <span>{t.shareResultBtn}</span>
              </>
            )}
          </button>

          <button
            onClick={onBackToCategories}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Grid className="w-4 h-4 text-slate-400" />
            <span>{t.allCategoriesNavBtn}</span>
          </button>
        </div>
      </section>

      {/* Primary Ad Slot between Result & Review */}
      <AdBanner refreshKey="result-top-ad" />

      {/* Detailed Answers Review Accordion */}
      <section className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>{t.reviewAnswersTitle}</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {result.answers.length} {t.questionProgress}
          </span>
        </div>

        <div className="space-y-3">
          {result.answers.map((ans, idx) => {
            const isExpanded = expandedIndex === idx;
            const qText = isEn ? ans.questionTextEn || ans.questionText : ans.questionText;
            const options = isEn ? ans.optionsEn || ans.options : ans.options;
            const explanation = isEn ? ans.explanationEn || ans.explanation : ans.explanation;
            const interestingFact = isEn ? ans.interestingFactEn || ans.interestingFact : ans.interestingFact;

            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-colors"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-slate-50/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {ans.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block mb-0.5">
                        {t.questionProgress} {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-slate-900 line-clamp-2">
                        {qText}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-slate-400">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Accordion Body */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 bg-slate-50/50 border-t border-slate-100 space-y-4 text-xs sm:text-sm">
                    {/* User selection vs Correct Answer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 font-semibold block mb-1">
                          {t.reviewYourAnswer}:
                        </span>
                        <span
                          className={`font-bold ${
                            ans.isCorrect ? 'text-emerald-700' : 'text-rose-700'
                          }`}
                        >
                          {ans.selectedIndex >= 0
                            ? options[ans.selectedIndex]
                            : isEn ? 'No answer given (Time expired)' : 'কোনো উত্তর দেওয়া হয়নি (সময় শেষ)'}
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-slate-200">
                        <span className="text-slate-500 font-semibold block mb-1">
                          {t.reviewCorrectAnswer}:
                        </span>
                        <span className="font-bold text-emerald-700">
                          {options[ans.correctIndex]}
                        </span>
                      </div>
                    </div>

                    {/* Explanation */}
                    {explanation && (
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-bold text-slate-900 flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          <span>{t.explanationTitle}:</span>
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {explanation}
                        </p>
                      </div>
                    )}

                    {/* Fun Fact */}
                    {interestingFact && (
                      <div className="bg-blue-50/80 p-3.5 rounded-xl border border-blue-200 space-y-1">
                        <span className="font-bold text-blue-950 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                          <span>{t.funFactTitle}:</span>
                        </span>
                        <p className="text-blue-900 leading-relaxed">
                          {interestingFact}
                        </p>
                      </div>
                    )}

                    {/* Time taken */}
                    {ans.timeTakenSeconds !== undefined && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>
                          {t.reviewTimeTaken}: {ans.timeTakenSeconds} {t.secondsSuffix}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Secondary Bottom Ad */}
      <AdBanner refreshKey="result-bottom-ad" />

      {/* High-Resolution IQ Card Preview & Download Modal */}
      <IQCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
        result={result}
        lang={lang}
      />
    </div>
  );
};
