import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Lightbulb,
  AlertCircle,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';
import { QuizCategory, QuizQuestion, QuizResult } from '../types/quiz';

interface QuizPlayerPageProps {
  category: QuizCategory;
  questions: QuizQuestion[];
  isDaily?: boolean;
  onFinishQuiz: (result: QuizResult) => void;
  onExit: () => void;
}

const ENCOURAGING_CORRECT_MESSAGES = [
  'Amazing!',
  'Well done!',
  'You’re doing great!',
  'Brilliant thinking!',
  'Superb knowledge!',
  'Fantastic work!'
];

const GENTLE_INCORRECT_MESSAGES = [
  'Good effort! Every attempt makes you smarter.',
  'Not quite, but that’s a wonderful learning opportunity!',
  'Almost there! Curiosity is the key to knowledge.',
  'Great try! Keep going, you’re learning fast.'
];

export const QuizPlayerPage: React.FC<QuizPlayerPageProps> = ({
  category,
  questions,
  isDaily,
  onFinishQuiz,
  onExit
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [sessionAnswers, setSessionAnswers] = useState<
    QuizResult['answers']
  >([]);

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Options letter tags: A, B, C, D
  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return; // Prevent changing after submission
    setSelectedOptionIndex(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOptionIndex === null) return;
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (selectedOptionIndex === null) return;

    const isCorrect = selectedOptionIndex === currentQ.correctIndex;

    const answerRecord = {
      questionId: currentQ.id,
      questionText: currentQ.question,
      options: currentQ.options,
      selectedIndex: selectedOptionIndex,
      correctIndex: currentQ.correctIndex,
      isCorrect,
      explanation: currentQ.explanation,
      interestingFact: currentQ.interestingFact
    };

    const updatedAnswers = [...sessionAnswers, answerRecord];
    setSessionAnswers(updatedAnswers);

    if (isLastQuestion) {
      // Calculate final results
      const correctCount = updatedAnswers.filter((a) => a.isCorrect).length;
      const incorrectCount = totalQuestions - correctCount;
      const percentage = Math.round((correctCount / totalQuestions) * 100);

      let performanceMessage = '';
      if (percentage === 100) {
        performanceMessage = 'Outstanding! You answered every question correctly!';
      } else if (percentage >= 80) {
        performanceMessage = 'Excellent work! You have great knowledge!';
      } else if (percentage >= 50) {
        performanceMessage = 'Good effort! Keep learning and improving!';
      } else {
        performanceMessage = 'Don’t give up! Every attempt makes you smarter.';
      }

      const result: QuizResult = {
        categoryId: category.id,
        categoryTitle: isDaily ? 'Daily Quiz' : category.title,
        isDaily: !!isDaily,
        totalQuestions,
        correctAnswers: correctCount,
        incorrectAnswers: incorrectCount,
        scoreRatio: `${correctCount}/${totalQuestions}`,
        percentage,
        performanceMessage,
        completedAt: new Date().toISOString(),
        answers: updatedAnswers
      };

      onFinishQuiz(result);
    } else {
      // Proceed to next question
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
    }
  };

  const isCurrentCorrect =
    isAnswerSubmitted && selectedOptionIndex === currentQ.correctIndex;
  const isCurrentIncorrect =
    isAnswerSubmitted && selectedOptionIndex !== currentQ.correctIndex;

  // Pick deterministic encouraging message based on index
  const cheerMessage =
    ENCOURAGING_CORRECT_MESSAGES[currentIndex % ENCOURAGING_CORRECT_MESSAGES.length];
  const gentleMessage =
    GENTLE_INCORRECT_MESSAGES[currentIndex % GENTLE_INCORRECT_MESSAGES.length];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6">
      {/* Quiz Top bar: Header & Progress */}
      <div className="bg-white rounded-2xl border border-blue-100 p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onExit}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Exit Quiz</span>
          </button>

          <div className="text-right">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              {isDaily ? 'Daily Quiz' : category.title}
            </span>
          </div>
        </div>

        {/* Progress Bar & Counter */}
        <div>
          <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1.5">
            <span>
              Question <strong className="text-blue-600">{currentIndex + 1}</strong> of {totalQuestions}
            </span>
            <span>{progressPercent}% Complete</span>
          </div>

          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <section className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Question Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Question {currentIndex + 1}</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
            {currentQ.question}
          </h2>
        </div>

        {/* 4 Answer Options (A, B, C, D) */}
        <div className="space-y-3" role="radiogroup" aria-label="Answer options">
          {currentQ.options.map((optionText, index) => {
            const letter = optionLetters[index];
            const isSelected = selectedOptionIndex === index;

            // Post-submission styling
            let optionStyles = 'border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/40 text-slate-800';
            let badgeStyles = 'bg-slate-100 text-slate-700 border-slate-200';

            if (!isAnswerSubmitted) {
              if (isSelected) {
                optionStyles = 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-600/30';
                badgeStyles = 'bg-blue-600 text-white border-blue-600';
              }
            } else {
              // Answer is submitted
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
                disabled={isAnswerSubmitted}
                onClick={() => handleSelectOption(index)}
                className={`w-full text-left p-4 rounded-xl border flex items-center justify-between gap-4 transition-all duration-150 cursor-pointer ${optionStyles} ${
                  isAnswerSubmitted ? 'cursor-default' : ''
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

                {isAnswerSubmitted && index === currentQ.correctIndex && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswerSubmitted && isSelected && index !== currentQ.correctIndex && (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Validation reminder if user hasn't selected */}
        {selectedOptionIndex === null && !isAnswerSubmitted && (
          <p className="text-xs text-slate-600 flex items-center gap-1.5 italic">
            <AlertCircle className="w-3.5 h-3.5 text-blue-500" />
            Please select one answer to continue.
          </p>
        )}

        {/* Action Button: Check Answer or Next Question */}
        <div className="pt-2">
          {!isAnswerSubmitted ? (
            <button
              type="button"
              disabled={selectedOptionIndex === null}
              onClick={handleCheckAnswer}
              className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-150 flex items-center justify-center gap-2 ${
                selectedOptionIndex !== null
                  ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Check Answer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="space-y-4">
              {/* Answer Feedback Banner */}
              {isCurrentCorrect && (
                <div className="p-4 sm:p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-extrabold text-base text-emerald-800">
                      Excellent! Your answer is correct!
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-700 pl-7 font-medium">
                    {cheerMessage} You chose <strong>{currentQ.options[currentQ.correctIndex]}</strong>.
                  </p>
                </div>
              )}

              {isCurrentIncorrect && (
                <div className="p-4 sm:p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-slate-900 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="font-extrabold text-base text-slate-900">
                      {gentleMessage}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 pl-7">
                    The correct answer is Option {optionLetters[currentQ.correctIndex]}:{' '}
                    <strong className="text-blue-700">{currentQ.options[currentQ.correctIndex]}</strong>
                  </p>
                </div>
              )}

              {/* Explanation & Learning Fact */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Explanation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Did You Know?</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    {currentQ.interestingFact}
                  </p>
                </div>
              </div>

              {/* Next Question / Finish Button */}
              <button
                type="button"
                onClick={handleNextQuestion}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{isLastQuestion ? 'Complete Quiz & View Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
