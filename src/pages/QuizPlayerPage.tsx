import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Lightbulb,
  AlertCircle,
  Clock,
  RotateCcw,
  Hourglass,
  Brain
} from 'lucide-react';
import { QuizCategory, QuizQuestion, QuizResult, Language } from '../types/quiz';
import { AdBanner } from '../components/AdBanner';
import { calculateIQ } from '../utils/iqCalculator';
import { translations } from '../utils/translations';
import { getLocalizedQuestion } from '../data/quizData';

interface QuizPlayerPageProps {
  category: QuizCategory;
  questions: QuizQuestion[];
  isDaily?: boolean;
  onFinishQuiz: (result: QuizResult) => void;
  onExit: () => void;
  lang: Language;
}

const QUESTION_TIME_LIMIT = 60; // 60 seconds (1 minute per question)

interface QuestionState {
  selectedIndex: number | null;
  isSubmitted: boolean;
  timeLeft: number;
  isTimeUp: boolean;
  timeSpent: number;
}

export const QuizPlayerPage: React.FC<QuizPlayerPageProps> = ({
  category,
  questions,
  isDaily,
  onFinishQuiz,
  onExit,
  lang
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[lang];
  const isEn = lang === 'en';

  // Per-question tracking state so users can navigate back & forth
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(() =>
    questions.map(() => ({
      selectedIndex: null,
      isSubmitted: false,
      timeLeft: QUESTION_TIME_LIMIT,
      isTimeUp: false,
      timeSpent: 0
    }))
  );

  const [showRestartConfirm, setShowRestartConfirm] = useState(false);

  const totalQuestions = questions.length;
  // Localize current question on the fly
  const rawQ = questions[currentIndex];
  const currentQ = getLocalizedQuestion(rawQ, lang);

  const currentState = questionStates[currentIndex] || {
    selectedIndex: null,
    isSubmitted: false,
    timeLeft: QUESTION_TIME_LIMIT,
    isTimeUp: false,
    timeSpent: 0
  };

  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isFirstQuestion = currentIndex === 0;

  // Option letters: ক, খ, গ, ঘ in Bengali, A, B, C, D in English
  const optionLetters = isEn ? ['A', 'B', 'C', 'D'] : ['ক', 'খ', 'গ', 'ঘ'];

  // Current score calculations so far
  const submittedQuestions = questionStates.filter((s) => s.isSubmitted);
  const correctCountSoFar = questionStates.reduce((acc, state, idx) => {
    if (state.isSubmitted && state.selectedIndex === questions[idx].correctIndex) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const incorrectCountSoFar = submittedQuestions.length - correctCountSoFar;

  // Active question 1-minute countdown timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If current question is already submitted or timed out, do not run timer
    if (currentState.isSubmitted || currentState.isTimeUp) {
      return;
    }

    timerRef.current = setInterval(() => {
      setQuestionStates((prev) => {
        const next = [...prev];
        const cur = next[currentIndex];
        if (!cur || cur.isSubmitted || cur.isTimeUp) return prev;

        const updatedTimeLeft = cur.timeLeft - 1;
        const updatedTimeSpent = cur.timeSpent + 1;

        if (updatedTimeLeft <= 0) {
          // Time is up!
          next[currentIndex] = {
            ...cur,
            timeLeft: 0,
            timeSpent: updatedTimeSpent,
            isTimeUp: true,
            isSubmitted: true
          };
          return next;
        }

        next[currentIndex] = {
          ...cur,
          timeLeft: updatedTimeLeft,
          timeSpent: updatedTimeSpent
        };
        return next;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, currentState.isSubmitted, currentState.isTimeUp]);

  // Handle option select
  const handleSelectOption = (index: number) => {
    if (currentState.isSubmitted || currentState.isTimeUp) return;

    setQuestionStates((prev) => {
      const next = [...prev];
      const cur = next[currentIndex];
      next[currentIndex] = {
        ...cur,
        selectedIndex: index,
        isSubmitted: true
      };
      return next;
    });
  };

  // Move to next question or complete quiz
  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentIndex((i) => i + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleCompleteQuiz();
    }
  };

  // Move to previous question
  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentIndex((i) => i - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Finish quiz and evaluate result
  const handleCompleteQuiz = () => {
    // Calculate final scores
    let correct = 0;
    let totalTime = 0;

    const recordedAnswers = questions.map((q, idx) => {
      const state = questionStates[idx] || {
        selectedIndex: null,
        isSubmitted: false,
        timeLeft: 0,
        isTimeUp: true,
        timeSpent: QUESTION_TIME_LIMIT
      };

      const isCorrect = state.selectedIndex === q.correctIndex;
      if (isCorrect) correct += 1;
      totalTime += state.timeSpent || (QUESTION_TIME_LIMIT - state.timeLeft);

      const locQ = getLocalizedQuestion(q, lang);

      return {
        questionId: q.id,
        questionText: locQ.question,
        questionTextEn: q.questionEn || q.question,
        options: locQ.options,
        optionsEn: q.optionsEn || q.options,
        selectedIndex: state.selectedIndex ?? -1,
        correctIndex: q.correctIndex,
        isCorrect,
        explanation: locQ.explanation,
        explanationEn: q.explanationEn || q.explanation,
        interestingFact: locQ.interestingFact,
        interestingFactEn: q.interestingFactEn || q.interestingFact,
        timeTakenSeconds: state.timeSpent || 0
      };
    });

    const incorrect = totalQuestions - correct;
    const percentage = Math.round((correct / totalQuestions) * 100);

    // Calculate IQ & cognitive speed analysis
    const iqAnalysis = calculateIQ(correct, totalQuestions, totalTime, lang);

    const performanceMessage =
      percentage >= 80
        ? isEn ? 'Brilliant performance! Exceptional intellect!' : 'অনবদ্য মেধা! অসাধারণ পারদর্শিতা দেখিয়েছেন!'
        : percentage >= 60
        ? isEn ? 'Well done! Great general knowledge.' : 'দারুণ প্রচেষ্টা! আপনার সাধারণ জ্ঞান প্রশংসনীয়।'
        : isEn ? 'Good effort! Regular practice leads to mastery.' : 'ভালো চেষ্টা! নিয়মিত অনুশীলনে জ্ঞান আরও সমৃদ্ধ হবে।';

    const categoryTitle = isEn ? category.titleEn || category.title : category.title;

    const result: QuizResult = {
      categoryId: category.id,
      categoryTitle,
      categoryTitleEn: category.titleEn || category.title,
      isDaily,
      totalQuestions,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      scoreRatio: `${correct}/${totalQuestions}`,
      percentage,
      performanceMessage,
      completedAt: new Date().toISOString(),
      estimatedIQ: iqAnalysis.iqScore,
      iqClassification: iqAnalysis.classification,
      iqClassificationEn: iqAnalysis.classificationEn,
      iqDescription: iqAnalysis.description,
      iqDescriptionEn: iqAnalysis.descriptionEn,
      totalTimeSeconds: totalTime,
      answers: recordedAnswers
    };

    onFinishQuiz(result);
  };

  // Restart quiz completely
  const handleRestartQuiz = () => {
    setQuestionStates(
      questions.map(() => ({
        selectedIndex: null,
        isSubmitted: false,
        timeLeft: QUESTION_TIME_LIMIT,
        isTimeUp: false,
        timeSpent: 0
      }))
    );
    setCurrentIndex(0);
    setShowRestartConfirm(false);
  };

  // Timer color and styling based on seconds left
  const timeLeft = currentState.timeLeft;
  const timerPercentage = (timeLeft / QUESTION_TIME_LIMIT) * 100;
  let timerColor = 'text-blue-600 bg-blue-50 border-blue-200';
  let barColor = 'bg-blue-600';
  if (timeLeft <= 10) {
    timerColor = 'text-rose-600 bg-rose-50 border-rose-300 animate-pulse';
    barColor = 'bg-rose-500';
  } else if (timeLeft <= 25) {
    timerColor = 'text-amber-600 bg-amber-50 border-amber-200';
    barColor = 'bg-amber-500';
  }

  // Answer feedback message
  const isSelected = currentState.selectedIndex !== null;
  const isCorrect = isSelected && currentState.selectedIndex === currentQ.correctIndex;
  const encouragingMessage = isCorrect
    ? t.encouragingCorrect[currentIndex % t.encouragingCorrect.length]
    : t.gentleIncorrect[currentIndex % t.gentleIncorrect.length];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 space-y-6">
      {/* Top Header: Category, Progress & Controls */}
      <div className="bg-white rounded-2xl border border-blue-100 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                {isEn ? category.titleEn || category.title : category.title}
              </span>
              {isDaily && (
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {t.navDaily}
                </span>
              )}
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-slate-800 mt-1">
              {t.questionProgress} {currentIndex + 1} / {totalQuestions}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowRestartConfirm(true)}
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              title={t.restartQuizBtn}
              aria-label={t.restartQuizBtn}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onExit}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {t.exitQuizBtn}
            </button>
          </div>
        </div>

        {/* 1-Minute Question Timer & Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.questionTimerLabel}:</span>
            </span>
            <div className={`px-2.5 py-0.5 rounded-full border text-xs font-extrabold flex items-center gap-1 ${timerColor}`}>
              <Hourglass className="w-3.5 h-3.5" />
              <span>
                {timeLeft} {t.secondsSuffix}
              </span>
            </div>
          </div>
          {/* Visual Timer Progress Bar */}
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ease-linear rounded-full ${barColor}`}
              style={{ width: `${timerPercentage}%` }}
            />
          </div>
        </div>

        {/* Live Score Counter Badge */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{correctCountSoFar} {t.correctCountLabel}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
              <XCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>{incorrectCountSoFar} {t.incorrectCountLabel}</span>
            </span>
          </div>
          <div className="flex items-center gap-1 font-medium text-blue-700 bg-blue-50/70 px-2 py-0.5 rounded">
            <Brain className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.heroBadge.split('·')[1]?.trim() || 'আইকিউ মেধা'}</span>
          </div>
        </div>
      </div>

      {/* Primary Ad Slot Directly above question */}
      <AdBanner refreshKey={`quiz-q-top-${currentIndex}`} />

      {/* Main Question Card */}
      <div className="bg-white rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Question Text */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
            <Sparkles className="w-4 h-4" />
            <span>{isEn ? `Question ${currentIndex + 1} of ${totalQuestions}` : `প্রশ্ন নং ${currentIndex + 1}`}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* Time's up banner if expired */}
        {currentState.isTimeUp && currentState.selectedIndex === null && (
          <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs font-medium">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{t.timesUpAlert}</span>
          </div>
        )}

        {/* 4 Interactive Answer Options */}
        <div className="grid grid-cols-1 gap-3" role="radiogroup" aria-label="Question options">
          {currentQ.options.map((option, idx) => {
            const isChosen = currentState.selectedIndex === idx;
            const isThisCorrect = idx === currentQ.correctIndex;
            const isLocked = currentState.isSubmitted || currentState.isTimeUp;

            let buttonStyle =
              'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/40 text-slate-800';

            if (isLocked) {
              if (isThisCorrect) {
                buttonStyle =
                  'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-bold shadow-xs';
              } else if (isChosen && !isThisCorrect) {
                buttonStyle = 'border-rose-400 bg-rose-50/90 text-rose-950';
              } else {
                buttonStyle = 'border-slate-100 bg-slate-50/60 text-slate-400 opacity-60';
              }
            } else if (isChosen) {
              buttonStyle = 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-xs';
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectOption(idx)}
                disabled={isLocked}
                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-3 text-sm sm:text-base cursor-pointer disabled:cursor-default ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isLocked && isThisCorrect
                        ? 'bg-emerald-600 text-white'
                        : isLocked && isChosen && !isThisCorrect
                        ? 'bg-rose-600 text-white'
                        : isChosen
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <span className="font-medium">{option}</span>
                </div>

                {isLocked && isThisCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isLocked && isChosen && !isThisCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Explanation & Feedback Box */}
        {(currentState.isSubmitted || currentState.isTimeUp) && (
          <div className="space-y-4 pt-4 border-t border-slate-100 animate-fadeIn">
            {/* Encouraging / Gentle Notification */}
            <div
              className={`p-3.5 rounded-xl text-xs font-bold flex items-center gap-2.5 ${
                isCorrect
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-50 text-amber-900 border border-amber-200'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              )}
              <span>{encouragingMessage}</span>
            </div>

            {/* In-depth Explanation */}
            {currentQ.explanation && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>{t.explanationTitle}:</span>
                </span>
                <p className="leading-relaxed text-slate-600 pt-0.5">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Intriguing Fun Fact */}
            {currentQ.interestingFact && (
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-xs sm:text-sm text-blue-900 space-y-1">
                <span className="font-bold text-blue-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>{t.funFactTitle}:</span>
                </span>
                <p className="leading-relaxed text-blue-800 pt-0.5">
                  {currentQ.interestingFact}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Ad Placement directly beneath answer explanation */}
      <AdBanner refreshKey={`quiz-q-bottom-${currentIndex}`} />

      {/* Navigation Controls: Previous / Next / Finish */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handlePrevious}
          disabled={isFirstQuestion}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.prevQuestionBtn}</span>
        </button>

        <button
          onClick={handleNext}
          className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-extrabold shadow-sm transition-all cursor-pointer ${
            isLastQuestion
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span>{isLastQuestion ? t.finishQuizBtn : t.nextQuestionBtn}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Restart confirmation modal */}
      {showRestartConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">
              {t.confirmRestartTitle}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t.confirmRestartDesc}
            </p>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setShowRestartConfirm(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
              >
                {t.confirmRestartNo}
              </button>
              <button
                onClick={handleRestartQuiz}
                className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-xs cursor-pointer"
              >
                {t.confirmRestartYes}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
