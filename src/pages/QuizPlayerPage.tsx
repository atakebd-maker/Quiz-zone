import React, { useState, useEffect, useRef } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Lightbulb,
  AlertCircle,
  HelpCircle,
  Clock,
  RotateCcw,
  Hourglass,
  Brain
} from 'lucide-react';
import { QuizCategory, QuizQuestion, QuizResult } from '../types/quiz';
import { AdBanner } from '../components/AdBanner';
import { calculateIQ } from '../utils/iqCalculator';

interface QuizPlayerPageProps {
  category: QuizCategory;
  questions: QuizQuestion[];
  isDaily?: boolean;
  onFinishQuiz: (result: QuizResult) => void;
  onExit: () => void;
}

const QUESTION_TIME_LIMIT = 60; // 60 seconds (1 minute per question)

const ENCOURAGING_CORRECT_MESSAGES = [
  'অসাধারণ! আপনার উত্তরটি সঠিক হয়েছে!',
  'দারুণ হয়েছে! আপনি অসাধারণ মেধার পরিচয় দিচ্ছেন!',
  'খুব ভালো করছেন! সঠিক উত্তরের জন্য অভিনন্দন!',
  'অনবদ্য বুদ্ধিমত্তা! চমৎকার পারদর্শিতা!',
  'অসাধারণ মেধা! আপনার সাধারণ জ্ঞান সত্যিই প্রশংসনীয়!'
];

const GENTLE_INCORRECT_MESSAGES = [
  'ভালো চেষ্টা! প্রতিটি ভুলই নতুন কিছু শেখার চমৎকার সুযোগ।',
  'খুব কাছাকাছি ছিলেন! জানার আগ্রহই মানুষকে প্রকৃত জ্ঞানী করে তোলে।',
  'সুন্দর প্রচেষ্টা! মন খারাপ করবেন না, প্রতিটি ধাঁধা আপনাকে আরও বুদ্ধিমান করছে।'
];

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
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  const currentQ = questions[currentIndex];
  const currentState = questionStates[currentIndex] || {
    selectedIndex: null,
    isSubmitted: false,
    timeLeft: QUESTION_TIME_LIMIT,
    isTimeUp: false,
    timeSpent: 0
  };

  const isLastQuestion = currentIndex === totalQuestions - 1;
  const isFirstQuestion = currentIndex === 0;

  // Bengali option labels: ক, খ, গ, ঘ
  const optionLetters = ['ক', 'খ', 'গ', 'ঘ'];

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
  useEffect(() => {
    if (currentState.isSubmitted || currentState.isTimeUp) {
      return;
    }

    const timer = setInterval(() => {
      setQuestionStates((prevStates) => {
        const next = [...prevStates];
        const cur = next[currentIndex];
        if (!cur || cur.isSubmitted || cur.isTimeUp) return prevStates;

        if (cur.timeLeft <= 1) {
          next[currentIndex] = {
            ...cur,
            timeLeft: 0,
            isTimeUp: true,
            isSubmitted: true,
            timeSpent: cur.timeSpent + 1
          };
          return next;
        }

        next[currentIndex] = {
          ...cur,
          timeLeft: cur.timeLeft - 1,
          timeSpent: cur.timeSpent + 1
        };
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, currentState.isSubmitted, currentState.isTimeUp]);

  // Handle option selection
  const handleSelectOption = (optionIndex: number) => {
    if (currentState.isSubmitted) return;
    setQuestionStates((prev) => {
      const next = [...prev];
      next[currentIndex] = {
        ...next[currentIndex],
        selectedIndex: optionIndex
      };
      return next;
    });
  };

  // Submit/Check answer for active question
  const handleCheckAnswer = () => {
    if (currentState.selectedIndex === null) return;
    setQuestionStates((prev) => {
      const next = [...prev];
      next[currentIndex] = {
        ...next[currentIndex],
        isSubmitted: true
      };
      return next;
    });
  };

  // Navigate to previous question
  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Finish quiz and calculate IQ
  const handleCompleteQuiz = () => {
    const finalAnswers = questions.map((q, idx) => {
      const state = questionStates[idx];
      const selected = state.selectedIndex !== null ? state.selectedIndex : -1;
      const isCorrect = selected === q.correctIndex;
      return {
        questionId: q.id,
        questionText: q.question,
        options: q.options,
        selectedIndex: selected,
        correctIndex: q.correctIndex,
        isCorrect,
        explanation: q.explanation,
        interestingFact: q.interestingFact,
        timeTakenSeconds: state.timeSpent
      };
    });

    const correctCount = finalAnswers.filter((a) => a.isCorrect).length;
    const incorrectCount = totalQuestions - correctCount;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const totalTime = questionStates.reduce((acc, s) => acc + s.timeSpent, 0);

    let performanceMessage = '';
    if (percentage === 100) {
      performanceMessage = 'অসাধারণ! আপনি প্রতিটি ধাঁধা ও প্রশ্নের সঠিক উত্তর দিয়েছেন!';
    } else if (percentage >= 80) {
      performanceMessage = 'চমৎকার কাজ! আপনার তীক্ষ্ণ বুদ্ধি ও সাধারণ জ্ঞান প্রশংসনীয়!';
    } else if (percentage >= 50) {
      performanceMessage = 'ভালো প্রচেষ্টা! নিয়মিত কুইজ ও ধাঁধা খেললে মেধা আরও বাড়বে!';
    } else {
      performanceMessage = 'হাল ছাড়বেন না! প্রতিটি চেষ্টাই আপনাকে আরও বুদ্ধিমান ও অভিজ্ঞ করছে।';
    }

    // IQ calculation factoring accuracy and average time per question
    const iqAnalysis = calculateIQ(correctCount, totalQuestions, totalTime);

    const result: QuizResult = {
      categoryId: category.id,
      categoryTitle: isDaily ? 'দৈনিক কুইজ ও ধাঁধা' : category.title,
      isDaily: !!isDaily,
      totalQuestions,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      scoreRatio: `${correctCount}/${totalQuestions}`,
      percentage,
      performanceMessage,
      completedAt: new Date().toISOString(),
      estimatedIQ: iqAnalysis.iqScore,
      iqClassification: iqAnalysis.classification,
      iqDescription: iqAnalysis.description,
      totalTimeSeconds: totalTime,
      answers: finalAnswers
    };

    onFinishQuiz(result);
  };

  // Navigate to next question or complete quiz
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      handleCompleteQuiz();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Restart Quiz action
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

  // Formatting timer
  const formattedMinutes = String(Math.floor(currentState.timeLeft / 60)).padStart(2, '0');
  const formattedSeconds = String(currentState.timeLeft % 60).padStart(2, '0');
  const timerPercent = (currentState.timeLeft / QUESTION_TIME_LIMIT) * 100;

  let timerColorClass = 'text-blue-600 bg-blue-50 border-blue-200';
  let timerBarColor = 'bg-blue-600';
  if (currentState.timeLeft <= 10) {
    timerColorClass = 'text-rose-600 bg-rose-50 border-rose-200 animate-pulse';
    timerBarColor = 'bg-rose-500';
  } else if (currentState.timeLeft <= 20) {
    timerColorClass = 'text-amber-600 bg-amber-50 border-amber-200';
    timerBarColor = 'bg-amber-500';
  }

  const isCurrentCorrect =
    currentState.isSubmitted && currentState.selectedIndex === currentQ.correctIndex;
  const isCurrentIncorrect =
    currentState.isSubmitted &&
    currentState.selectedIndex !== null &&
    currentState.selectedIndex !== currentQ.correctIndex;
  const isCurrentTimedOut =
    currentState.isSubmitted && currentState.isTimeUp && currentState.selectedIndex === null;

  const cheerMessage =
    ENCOURAGING_CORRECT_MESSAGES[currentIndex % ENCOURAGING_CORRECT_MESSAGES.length];
  const gentleMessage =
    GENTLE_INCORRECT_MESSAGES[currentIndex % GENTLE_INCORRECT_MESSAGES.length];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      {/* Quiz Top bar: Header, Live Score & 1-Minute Timer */}
      <div className="bg-white rounded-2xl border border-blue-100 p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onExit}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>বের হন</span>
            </button>

            <button
              onClick={() => setShowRestartConfirm(true)}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-blue-600 transition-colors cursor-pointer ml-1"
              title="কুইজ পুনরায় শুরু করুন"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">পুনরায় শুরু</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Score Counter */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs font-semibold text-slate-600">
              <span className="text-emerald-700">সঠিক: {correctCountSoFar}</span>
              <span className="text-slate-300">·</span>
              <span className="text-rose-600">ভুল: {incorrectCountSoFar}</span>
            </div>

            {/* 1-Minute Live Countdown Timer */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border transition-colors shadow-2xs ${timerColorClass}`}
              title="প্রতি প্রশ্নে ১ মিনিট (৬০ সেকেন্ড) সময়"
            >
              <Clock className="w-3.5 h-3.5" />
              <span className="font-mono text-sm tracking-wider">
                {formattedMinutes}:{formattedSeconds}
              </span>
              {currentState.timeLeft <= 10 && !currentState.isSubmitted && (
                <span className="hidden sm:inline text-[11px] font-bold">সময় শেষ প্রায়!</span>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar & Question Counter */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1.5">
            <span className="flex items-center gap-2">
              <span className="text-blue-700 font-bold">{isDaily ? 'দৈনিক কুইজ' : category.title}</span>
              <span className="text-slate-300">·</span>
              <span>
                প্রশ্ন <strong className="text-blue-600 font-bold">{currentIndex + 1}</strong> / {totalQuestions}
              </span>
            </span>
            <span className="flex items-center gap-1 text-slate-500 font-medium">
              <Hourglass className="w-3 h-3 text-slate-400" />
              <span>বাকি সময়: {currentState.timeLeft} সেকেন্ড</span>
            </span>
          </div>

          {/* Dual bar: Quiz completion + Active Question Timer */}
          <div className="space-y-1.5">
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
            {/* 1-Minute Countdown visual bar */}
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ease-linear ${timerBarColor}`}
                style={{ width: `${timerPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Question & Riddle Card */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Question Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>ধাঁধা / প্রশ্ন নম্বর {currentIndex + 1}</span>
            </div>

            <div className="text-[11px] font-semibold text-slate-400">
              সময়সীমা: ১ মিনিট (৬০ সেকেন্ড)
            </div>
          </div>

          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* Ad Banner Above Options (বিজ্ঞাপন ১) */}
        <AdBanner refreshKey={`q-top-${currentIndex}`} className="my-2" />

        {/* 4 Answer Options (ক, খ, গ, ঘ) */}
        <div className="space-y-3" role="radiogroup" aria-label="উত্তরের বিকল্পসমূহ">
          {currentQ.options.map((optionText, index) => {
            const letter = optionLetters[index];
            const isSelected = currentState.selectedIndex === index;

            let optionStyles = 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/40 text-slate-800';
            let badgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';

            if (!currentState.isSubmitted) {
              if (isSelected) {
                optionStyles = 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/30';
                badgeStyles = 'bg-blue-600 text-white border-blue-600';
              }
            } else {
              if (index === currentQ.correctIndex) {
                optionStyles = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 ring-2 ring-emerald-500/30';
                badgeStyles = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && index !== currentQ.correctIndex) {
                optionStyles = 'border-rose-300 bg-rose-50/70 text-rose-950';
                badgeStyles = 'bg-rose-500 text-white border-rose-500';
              } else {
                optionStyles = 'border-slate-200 bg-slate-50/60 opacity-60 text-slate-600';
                badgeStyles = 'bg-slate-200 text-slate-500 border-slate-300';
              }
            }

            return (
              <button
                key={index}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={currentState.isSubmitted}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between gap-4 transition-all duration-150 cursor-pointer ${optionStyles} ${
                  currentState.isSubmitted ? 'cursor-default' : ''
                }`}
              >
                <div className="flex items-center gap-3.5 flex-1">
                  <span
                    className={`w-8 h-8 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${badgeStyles}`}
                  >
                    {letter}
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">
                    {optionText}
                  </span>
                </div>

                {currentState.isSubmitted && index === currentQ.correctIndex && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {currentState.isSubmitted && isSelected && index !== currentQ.correctIndex && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Ad Banner Below Options (বিজ্ঞাপন ২) */}
        <AdBanner refreshKey={`q-bot-${currentIndex}`} className="my-2" />

        {/* Reminder if user hasn't selected */}
        {currentState.selectedIndex === null && !currentState.isSubmitted && (
          <p className="text-xs text-slate-600 flex items-center gap-1.5 italic">
            <AlertCircle className="w-3.5 h-3.5 text-blue-500" />
            ১ মিনিটের মধ্যে একটি সঠিক উত্তর বেছে নিয়ে &ldquo;উত্তর যাচাই করুন&rdquo; চাপুন।
          </p>
        )}

        {/* Feedback Banner & Explanation if submitted */}
        {currentState.isSubmitted && (
          <div className="space-y-4 pt-2">
            {isCurrentCorrect && (
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="font-extrabold text-base text-emerald-800">
                    চমৎকার! আপনার উত্তরটি সঠিক হয়েছে!
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-700 pl-7 font-medium">
                  {cheerMessage} সঠিক উত্তর: <strong>{currentQ.options[currentQ.correctIndex]}</strong>
                </p>
              </div>
            )}

            {isCurrentIncorrect && (
              <div className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-slate-900 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="font-extrabold text-base text-slate-900">
                    {gentleMessage}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 pl-7">
                  সঠিক উত্তরটি হলো বিকল্প {optionLetters[currentQ.correctIndex]}:{' '}
                  <strong className="text-blue-700">{currentQ.options[currentQ.correctIndex]}</strong>
                </p>
              </div>
            )}

            {isCurrentTimedOut && (
              <div className="p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                  <span className="font-extrabold text-base text-amber-900">
                    সময় শেষ হয়ে গেছে! (১ মিনিট উত্তীর্ণ)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 pl-7">
                  এই ধাঁধার সঠিক উত্তরটি ছিল বিকল্প {optionLetters[currentQ.correctIndex]}:{' '}
                  <strong className="text-amber-950 font-bold">{currentQ.options[currentQ.correctIndex]}</strong>
                </p>
              </div>
            )}

            {/* Explanation & Did You Know fact */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  <span>ব্যাখ্যা</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200/60 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>আপনি কি জানেন?</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  {currentQ.interestingFact}
                </p>
              </div>
            </div>

            {/* Ad Banner After Explanation (বিজ্ঞাপন ৩) */}
            <AdBanner refreshKey={`q-exp-${currentIndex}`} className="my-2" />
          </div>
        )}

        {/* Action Controls: Previous Question, Check Answer & Next Question Buttons */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
          {/* Previous Question Button */}
          <button
            type="button"
            onClick={handlePreviousQuestion}
            disabled={isFirstQuestion}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm border transition-colors ${
              !isFirstQuestion
                ? 'border-slate-300 bg-white hover:bg-slate-50 text-slate-700 cursor-pointer shadow-2xs'
                : 'border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed opacity-50'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>পূর্ববর্তী প্রশ্ন</span>
          </button>

          <div className="flex-1 w-full flex items-center justify-end gap-3">
            {!currentState.isSubmitted ? (
              /* Check Answer Button */
              <button
                type="button"
                disabled={currentState.selectedIndex === null}
                onClick={handleCheckAnswer}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-xs ${
                  currentState.selectedIndex !== null
                    ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white cursor-pointer'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                <span>উত্তর যাচাই করুন</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            ) : (
              /* Next Question / Finish Quiz Button */
              <button
                type="button"
                onClick={handleNextQuestion}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md transition-all cursor-pointer"
              >
                <span>
                  {isLastQuestion ? 'কুইজ সম্পন্ন করুন ও আইকিউ (IQ) দেখুন' : 'পরবর্তী প্রশ্ন'}
                </span>
                {isLastQuestion ? (
                  <Brain className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Restart Quiz Confirmation Modal */}
      {showRestartConfirm && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border border-slate-100 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <RotateCcw className="w-5 h-5" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-base font-bold text-slate-900">
                কুইজ কি পুনরায় শুরু করতে চান?
              </h3>
              <p className="text-xs text-slate-500">
                পুনরায় শুরু করলে বর্তমান কুইজের অগ্রগতি এবং উত্তর রিসেট হয়ে যাবে।
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setShowRestartConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                বাতিল করুন
              </button>
              <button
                onClick={handleRestartQuiz}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 cursor-pointer shadow-xs"
              >
                হ্যাঁ, শুরু করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
