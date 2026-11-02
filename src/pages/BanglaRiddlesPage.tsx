import React, { useState, useMemo, useEffect } from 'react';
import {
  Sparkles,
  HelpCircle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  BookOpen,
  Gamepad2,
  Search,
  Filter,
  Share2,
  Copy,
  Check,
  Lightbulb,
  Award,
  Trophy,
  Zap,
  ChevronDown,
  ChevronUp,
  Brain,
  Download
} from 'lucide-react';
import { QuizQuestion, Language, QuizResult } from '../types/quiz';
import { BANGLA_RIDDLES_DATA, BANGLA_RIDDLES_CATEGORY } from '../data/banglaRiddlesData';
import { translations } from '../utils/translations';
import { getLocalizedQuestion } from '../data/quizData';
import { calculateIQ } from '../utils/iqCalculator';
import { saveQuizResult } from '../utils/quizStorage';
import { AdBanner } from '../components/AdBanner';
import { IQCardModal } from '../components/IQCardModal';
import { downloadIQCardImage } from '../utils/generateIQCardImage';

interface BanglaRiddlesPageProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
  lang: Language;
}

type TabType = 'play' | 'browse';

export const BanglaRiddlesPage: React.FC<BanglaRiddlesPageProps> = ({ onNavigate, lang }) => {
  const t = translations[lang];
  const isEn = lang === 'en';

  // Navigation tab
  const [activeTab, setActiveTab] = useState<TabType>('play');

  // Game session configuration
  const [gameSize, setGameSize] = useState<number>(10); // 10, 25, 50, or 200
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameQuestions, setGameQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [incorrectCount, setIncorrectCount] = useState<number>(0);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const [gameResult, setGameResult] = useState<QuizResult | null>(null);
  const [showIQModal, setShowIQModal] = useState<boolean>(false);

  // Browse mode state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Tags configuration for browsing
  const tags = useMemo(() => [
    { id: 'all', labelBn: 'সব ধাঁধা (২০০)', labelEn: 'All 200 Riddles' },
    { id: 'folk', labelBn: 'চিরায়ত লোকগাঁথা (১-২৫)', labelEn: 'Traditional Folk (1-25)', range: [0, 25] },
    { id: 'funny', labelBn: 'মজার ও প্যাঁচালো (২৬-৫০)', labelEn: 'Funny & Tricky (26-50)', range: [25, 50] },
    { id: 'nature', labelBn: 'দৈনন্দিন ও প্রকৃতি (৫১-৭৫)', labelEn: 'Daily Life (51-75)', range: [50, 75] },
    { id: 'brain', labelBn: 'বুদ্ধির খেলা ও আইকিউ (৭৬-১০০)', labelEn: 'Brain Teasers (76-100)', range: [75, 100] },
    { id: 'math', labelBn: 'গণিত ও সংখ্যা (১০১-১২৫)', labelEn: 'Math Riddles (101-125)', range: [100, 125] },
    { id: 'kids', labelBn: 'ছোটদের ধাঁধা (১২৬-১৫০)', labelEn: "Children's (126-150)", range: [125, 150] },
    { id: 'logic', labelBn: 'যুক্তি ও কাণ্ডজ্ঞান (১৫১-১৭৫)', labelEn: 'Logic & Wit (151-175)', range: [150, 175] },
    { id: 'hard', labelBn: 'কঠিন ও জটিল (১৭৬-২০০)', labelEn: 'Challenging (176-200)', range: [175, 200] }
  ], []);

  // Filtered riddles for browsing
  const filteredRiddles = useMemo(() => {
    let list = BANGLA_RIDDLES_DATA;

    // Filter by tag range
    if (selectedTag !== 'all') {
      const activeTagObj = tags.find((t) => t.id === selectedTag);
      if (activeTagObj && activeTagObj.range) {
        list = list.slice(activeTagObj.range[0], activeTagObj.range[1]);
      }
    }

    // Filter by search query
    const q = searchQuery.trim().toLowerCase();
    if (!q) return list;

    return list.filter((r) => {
      const qBn = r.question.toLowerCase();
      const qEn = (r.questionEn || '').toLowerCase();
      const expBn = r.explanation.toLowerCase();
      const factBn = r.interestingFact.toLowerCase();
      const inOptions = r.options.some((opt) => opt.toLowerCase().includes(q));
      return (
        qBn.includes(q) ||
        qEn.includes(q) ||
        expBn.includes(q) ||
        factBn.includes(q) ||
        inOptions
      );
    });
  }, [searchQuery, selectedTag, tags]);

  // Start a new interactive riddle game
  const handleStartGame = (size: number) => {
    setGameSize(size);
    // Shuffle copy of riddles
    const shuffled = [...BANGLA_RIDDLES_DATA].sort(() => Math.random() - 0.5);
    const selected = size >= 200 ? BANGLA_RIDDLES_DATA : shuffled.slice(0, size);
    
    setGameQuestions(selected);
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setCorrectCount(0);
    setIncorrectCount(0);
    setGameFinished(false);
    setGameResult(null);
    setIsPlaying(true);
  };

  // User selects an answer option
  const handleSelectOption = (idx: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    const currentQ = gameQuestions[currentIndex];
    setSelectedOption(idx);
    setShowExplanation(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
  };

  // Next riddle or finish game
  const handleNextRiddle = () => {
    if (currentIndex < gameQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Game completed: Build QuizResult & compute estimated IQ
      finishGame();
    }
  };

  const finishGame = () => {
    const totalQ = gameQuestions.length;
    const finalCorrect = correctCount + (selectedOption === gameQuestions[currentIndex]?.correctIndex ? 0 : 0);
    const percentage = Math.round((finalCorrect / totalQ) * 100);
    const timeSpent = totalQ * 25; // estimated 25 sec per riddle

    const iqData = calculateIQ(finalCorrect, totalQ, timeSpent, lang);

    const congratulatoryMessage =
      percentage >= 90
        ? isEn
          ? 'Legendary Genius! You are a master of Bengali Riddles! 🏆🎉'
          : 'অসাধারণ মেধা! আপনি খাঁটি ধাঁধার পণ্ডিত ও মেধার রাজা! 🏆🎉'
        : percentage >= 70
        ? isEn
          ? 'Brilliant Performance! Your wit and brainpower are outstanding! 🌟👏'
          : 'চমৎকার ফলাফল! আপনার বুদ্ধিমত্তা ও চিন্তাশক্তি সত্যিই অসাধারণ! 🌟👏'
        : percentage >= 50
        ? isEn
          ? 'Good Effort! Keep practicing to master all 200 riddles! 👍'
          : 'ভালো চেষ্টা! নিয়মিত চর্চা চালিয়ে যান, আপনি সেরা হবেন! 👍'
        : isEn
        ? 'Nice Try! Don’t give up, read all answers and play again! 💪'
        : 'মন খারাপ করবেন না! সবগুলো ধাঁধার উত্তর পড়ুন এবং আবার চেষ্টা করুন! 💪';

    const result: QuizResult = {
      categoryId: BANGLA_RIDDLES_CATEGORY.id,
      categoryTitle: BANGLA_RIDDLES_CATEGORY.title,
      categoryTitleEn: BANGLA_RIDDLES_CATEGORY.titleEn,
      totalQuestions: totalQ,
      correctAnswers: finalCorrect,
      incorrectAnswers: totalQ - finalCorrect,
      scoreRatio: `${finalCorrect}/${totalQ}`,
      percentage,
      performanceMessage: congratulatoryMessage,
      completedAt: new Date().toISOString(),
      estimatedIQ: iqData.iqScore,
      iqClassification: iqData.classification,
      iqClassificationEn: iqData.classificationEn,
      iqDescription: iqData.description,
      iqDescriptionEn: iqData.descriptionEn,
      totalTimeSeconds: timeSpent,
      answers: gameQuestions.map((q, idx) => {
        const isCurrent = idx === currentIndex;
        const chosen = isCurrent ? selectedOption ?? 0 : 0;
        return {
          questionId: q.id,
          questionText: q.question,
          questionTextEn: q.questionEn,
          options: q.options,
          optionsEn: q.optionsEn,
          selectedIndex: chosen,
          correctIndex: q.correctIndex,
          isCorrect: chosen === q.correctIndex,
          explanation: q.explanation,
          explanationEn: q.explanationEn,
          interestingFact: q.interestingFact,
          interestingFactEn: q.interestingFactEn
        };
      })
    };

    saveQuizResult(result);
    setGameResult(result);
    setGameFinished(true);
  };

  // Toggle answer reveal in browse mode
  const toggleAnswer = (id: string) => {
    setOpenAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Copy riddle text to clipboard
  const handleCopyRiddle = (q: QuizQuestion) => {
    const text = `🤔 বাংলা ধাঁধা: ${q.question}\n\nবিকল্প:\nক) ${q.options[0]}\nখ) ${q.options[1]}\nগ) ${q.options[2]}\nঘ) ${q.options[3]}\n\n✅ উত্তর: ${q.options[q.correctIndex]}\n💡 ব্যাখ্যা: ${q.explanation}\n\nখেলুন Quiz Zone BD-এ: ${window.location.origin}/?page=riddles`;
    
    try {
      navigator.clipboard.writeText(text);
      setCopiedId(q.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
    }
  };

  const currentQ = gameQuestions[currentIndex] ? getLocalizedQuestion(gameQuestions[currentIndex], lang) : null;

  return (
    <div className="min-h-screen bg-slate-50/70 pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-blue-600 via-blue-700 to-indigo-800 text-white pt-12 pb-14 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -right-12 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-yellow-300 mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>{t.riddlesHeroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-xs">
            {t.riddlesHeroTitle}
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed mb-8">
            {t.riddlesHeroSubtitle}
          </p>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 shadow-inner">
            <button
              onClick={() => {
                setActiveTab('play');
                if (!isPlaying && !gameFinished) handleStartGame(10);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'play'
                  ? 'bg-white text-blue-800 shadow-md scale-102'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>{t.riddlesTabPlay}</span>
            </button>

            <button
              onClick={() => setActiveTab('browse')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'browse'
                  ? 'bg-white text-blue-800 shadow-md scale-102'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.riddlesTabBrowse}</span>
              <span className="text-[10px] bg-amber-400 text-slate-900 px-1.5 py-0.5 rounded-full font-extrabold">
                ২০০
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-6">
        {/* TAB 1: INTERACTIVE RIDDLE GAME */}
        {activeTab === 'play' && (
          <div className="space-y-6">
            {!isPlaying && !gameFinished && (
              /* Quick Play Mode Picker */
              <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200 shadow-inner">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {isEn ? 'Choose Your Riddle Challenge' : 'ধাঁধার খেলার মোড নির্বাচন করুন'}
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {isEn
                      ? 'Select how many riddles you want to solve in this interactive session.'
                      : 'কতগুলো ধাঁধা নিয়ে খেলতে চান? প্রতিটি উত্তরের সাথে সঠিকতা, তাৎক্ষণিক ব্যাখ্যা ও মজার তথ্য দেখুন।'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto pt-2">
                  <button
                    onClick={() => handleStartGame(10)}
                    className="p-5 rounded-xl border-2 border-blue-200 hover:border-blue-500 bg-blue-50/40 hover:bg-blue-50 text-left transition-all hover:shadow-md group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">🎯</span>
                      <span className="text-xs font-bold bg-blue-600 text-white px-2 py-0.5 rounded-full">১০টি</span>
                    </div>
                    <div className="font-bold text-slate-900 group-hover:text-blue-700">
                      {t.riddlesQuick10}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEn ? 'Fast & Fun 3-min game' : 'দ্রুত ও মজার ৩ মিনিটের খেলা'}
                    </p>
                  </button>

                  <button
                    onClick={() => handleStartGame(25)}
                    className="p-5 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 bg-indigo-50/40 hover:bg-indigo-50 text-left transition-all hover:shadow-md group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">⚡</span>
                      <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full">২৫টি</span>
                    </div>
                    <div className="font-bold text-slate-900 group-hover:text-indigo-700">
                      {t.riddlesChallenge25}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEn ? 'Popular cognitive test' : 'জনপ্রিয় মেধা যাচাই পর্ব'}
                    </p>
                  </button>

                  <button
                    onClick={() => handleStartGame(50)}
                    className="p-5 rounded-xl border-2 border-amber-200 hover:border-amber-500 bg-amber-50/40 hover:bg-amber-50 text-left transition-all hover:shadow-md group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">🏆</span>
                      <span className="text-xs font-bold bg-amber-600 text-white px-2 py-0.5 rounded-full">৫০টি</span>
                    </div>
                    <div className="font-bold text-slate-900 group-hover:text-amber-700">
                      {t.riddlesMega50}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEn ? 'Deep intelligence test' : 'গভীর বুদ্ধিমত্তার মেগা চ্যালেঞ্জ'}
                    </p>
                  </button>

                  <button
                    onClick={() => handleStartGame(200)}
                    className="p-5 rounded-xl border-2 border-emerald-200 hover:border-emerald-500 bg-emerald-50/40 hover:bg-emerald-50 text-left transition-all hover:shadow-md group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">♾️</span>
                      <span className="text-xs font-bold bg-emerald-600 text-white px-2 py-0.5 rounded-full">২০০টি</span>
                    </div>
                    <div className="font-bold text-slate-900 group-hover:text-emerald-700">
                      {t.riddlesMarathon}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEn ? 'Complete collection' : 'সকল ২০০ ধাঁধার মহাযজ্ঞ'}
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* ACTIVE IN-GAME SCREEN */}
            {isPlaying && !gameFinished && currentQ && (
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
                {/* Game Progress Header */}
                <div className="bg-slate-50/90 border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-2.5 py-1 rounded-md">
                      {isEn ? `Riddle ${currentIndex + 1} of ${gameQuestions.length}` : `ধাঁধা ${currentIndex + 1} / ${gameQuestions.length}`}
                    </span>
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      {isEn ? 'Bangla Riddles' : 'বাংলা মজার ধাঁধা'}
                    </span>
                  </div>

                  {/* Live Score Counter */}
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{t.riddlesScoreCorrect}: {correctCount}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs sm:text-sm">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      <span>{t.riddlesScoreIncorrect}: {incorrectCount}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5">
                  <div
                    className="bg-blue-600 h-1.5 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / gameQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Riddle Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Question */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>{isEn ? 'Bengali Riddle' : 'বাংলা ধাঁধা'}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                      {currentQ.question}
                    </h2>
                    {isEn && currentQ.questionEn && currentQ.questionEn !== currentQ.question && (
                      <p className="text-sm sm:text-base text-slate-500 italic">
                        "{currentQ.questionEn}"
                      </p>
                    )}
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {currentQ.options.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQ.correctIndex;
                      const hasAnswered = selectedOption !== null;

                      let btnStyle = 'border-slate-200 bg-white text-slate-800 hover:border-blue-400 hover:bg-blue-50/50';

                      if (hasAnswered) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-500/20';
                        } else if (isSelected) {
                          btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-500/20';
                        } else {
                          btnStyle = 'border-slate-200 bg-slate-50/60 text-slate-400 opacity-60';
                        }
                      }

                      const optionLetters = ['ক', 'খ', 'গ', 'ঘ'];
                      const optionLettersEn = ['A', 'B', 'C', 'D'];

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          disabled={hasAnswered}
                          className={`flex items-center gap-3.5 p-4 rounded-xl border-2 text-left transition-all font-medium text-sm sm:text-base shadow-xs ${btnStyle} ${
                            !hasAnswered ? 'cursor-pointer hover:shadow-sm active:scale-99' : 'cursor-default'
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                              hasAnswered && isCorrect
                                ? 'bg-emerald-600 text-white'
                                : hasAnswered && isSelected
                                ? 'bg-rose-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {isEn ? optionLettersEn[idx] : optionLetters[idx]}
                          </span>

                          <span className="flex-1 font-semibold">{opt}</span>

                          {hasAnswered && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {hasAnswered && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Immediate Explanation Card */}
                  {showExplanation && (
                    <div className="mt-6 rounded-xl p-5 border border-blue-200 bg-gradient-to-r from-blue-50/90 via-sky-50/60 to-white space-y-3 animate-fade-in">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-blue-600 text-white uppercase tracking-wider">
                          {isEn ? 'Correct Answer' : 'সঠিক উত্তর'}
                        </span>
                        <span className="text-base sm:text-lg font-extrabold text-blue-900">
                          {currentQ.options[currentQ.correctIndex]}
                        </span>
                      </div>

                      <div className="text-sm text-slate-700 leading-relaxed border-t border-blue-100 pt-3">
                        <strong className="text-slate-900 font-bold block mb-1">
                          💡 {isEn ? 'Explanation:' : 'ব্যাখ্যা:'}
                        </strong>
                        <p>{currentQ.explanation}</p>
                      </div>

                      {currentQ.interestingFact && (
                        <div className="text-xs sm:text-sm text-indigo-900 bg-indigo-50/80 rounded-lg p-3 border border-indigo-100/80">
                          <strong className="font-bold flex items-center gap-1.5 mb-1 text-indigo-800">
                            <Lightbulb className="w-4 h-4 text-indigo-600" />
                            <span>{isEn ? 'Intriguing Fact:' : 'মজার তথ্য:'}</span>
                          </strong>
                          <p>{currentQ.interestingFact}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setIsPlaying(false);
                        setGameFinished(false);
                      }}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      ← {isEn ? 'Exit Game' : 'খেলা থেকে ফিরুন'}
                    </button>

                    {showExplanation && (
                      <button
                        onClick={handleNextRiddle}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-98"
                      >
                        <span>
                          {currentIndex < gameQuestions.length - 1
                            ? t.riddlesNext
                            : t.riddlesFinish}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* RESULTS SCREEN */}
            {gameFinished && gameResult && (
              <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-10 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center shadow-lg transform -rotate-3">
                  <Trophy className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    {t.riddlesCongratulations}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {gameResult.performanceMessage}
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {isEn
                      ? `You completed ${gameResult.totalQuestions} Bengali riddles with an accuracy of ${gameResult.percentage}%.`
                      : `আপনি সফলভাবে ${gameResult.totalQuestions}টি বাংলা ধাঁধা সম্পন্ন করেছেন এবং নির্ভুলতার হার ${gameResult.percentage}%।`}
                  </p>
                </div>

                {/* Score Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                    <div className="text-2xl font-black text-blue-700">{gameResult.scoreRatio}</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      {isEn ? 'Score Ratio' : 'স্কোর অনুপাত'}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <div className="text-2xl font-black text-emerald-700">{gameResult.percentage}%</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      {isEn ? 'Accuracy' : 'সঠিকতার হার'}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                    <div className="text-2xl font-black text-indigo-700">{gameResult.estimatedIQ}</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      {isEn ? 'Estimated IQ' : 'আনুমানিক আইকিউ'}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                    <div className="text-xs sm:text-sm font-black text-purple-700 truncate mt-1">
                      {isEn ? gameResult.iqClassificationEn : gameResult.iqClassification}
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-1">
                      {isEn ? 'Category' : 'মেধা শ্রেণি'}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <button
                    onClick={() => handleStartGame(gameSize)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{isEn ? 'Play Again' : 'আবার খেলুন'}</span>
                  </button>

                  <button
                    onClick={() => setShowIQModal(true)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>{isEn ? 'Download IQ Certificate' : 'আইকিউ সার্টিফিকেট ছবি ডাউনলোড'}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('browse')}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isEn ? 'Browse All 200 Riddles' : 'সকল ২০০ ধাঁধা পড়ুন'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INTERACTIVE BROWSER (ALL 200 RIDDLES WITH CRAWLABLE TEXT FOR SEO) */}
        {activeTab === 'browse' && (
          <div className="space-y-6">
            {/* Search and Filter Box */}
            <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={
                      isEn
                        ? 'Search 200 riddles by question, answer, or keyword...'
                        : '২০০টি ধাঁধার যেকোনো প্রশ্ন, উত্তর বা শব্দ লিখে খুঁজুন...'
                    }
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <button
                  onClick={() => handleStartGame(10)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-xs transition-all"
                >
                  <Gamepad2 className="w-4 h-4" />
                  <span>{isEn ? 'Play Quiz Mode' : 'কুইজ খেলুন'}</span>
                </button>
              </div>

              {/* Tag Chips */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
                {tags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => setSelectedTag(tag.id)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-semibold transition-colors ${
                      selectedTag === tag.id
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {isEn ? tag.labelEn : tag.labelBn}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
                <span>
                  {isEn
                    ? `Showing ${filteredRiddles.length} of ${BANGLA_RIDDLES_DATA.length} riddles`
                    : `মোট ২০০টি ধাঁধার মধ্যে ${filteredRiddles.length}টি প্রদর্শিত হচ্ছে`}
                </span>
                <button
                  onClick={() => {
                    const allState: Record<string, boolean> = {};
                    const isAllOpen = Object.keys(openAnswers).length === filteredRiddles.length;
                    if (!isAllOpen) {
                      filteredRiddles.forEach((r) => (allState[r.id] = true));
                    }
                    setOpenAnswers(allState);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                >
                  {Object.keys(openAnswers).length === filteredRiddles.length
                    ? isEn ? 'Collapse All' : 'সবগুলো লুকান'
                    : isEn ? 'Reveal All Answers' : 'সবগুলোর উত্তর দেখুন'}
                </button>
              </div>
            </div>

            {/* List of 200 Riddles */}
            <div className="space-y-4">
              {filteredRiddles.map((riddle, index) => {
                const isOpen = openAnswers[riddle.id] || false;
                const rNum = parseInt(riddle.id.replace('br-', ''), 10) || index + 1;
                const locQ = getLocalizedQuestion(riddle, lang);

                return (
                  <article
                    key={riddle.id}
                    className="bg-white rounded-xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 space-y-3">
                      {/* Riddle Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-extrabold text-xs flex items-center justify-center shrink-0">
                            #{rNum}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                            {isEn ? 'Bangla Riddle' : 'বাংলা ধাঁধা'}
                          </span>
                        </div>

                        {/* Quick Share / Copy Button */}
                        <button
                          onClick={() => handleCopyRiddle(riddle)}
                          title={isEn ? 'Copy riddle text' : 'ধাঁধাটি কপি করুন'}
                          className="text-xs text-slate-400 hover:text-blue-600 p-1.5 rounded-md hover:bg-slate-100 transition-colors inline-flex items-center gap-1 cursor-pointer"
                        >
                          {copiedId === riddle.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-bold text-[11px]">কপি হয়েছে!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline text-[11px]">কপি</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Question Text */}
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {locQ.question}
                      </h3>
                      {isEn && locQ.questionEn && locQ.questionEn !== locQ.question && (
                        <p className="text-xs sm:text-sm text-slate-500 italic">
                          "{locQ.questionEn}"
                        </p>
                      )}

                      {/* 4 Options Grid */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        {locQ.options.map((opt, oIdx) => (
                          <div
                            key={oIdx}
                            className={`text-xs px-3 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
                              isOpen && oIdx === locQ.correctIndex
                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="w-4 h-4 rounded bg-slate-200 text-slate-700 text-[10px] flex items-center justify-center font-bold">
                              {['ক', 'খ', 'গ', 'ঘ'][oIdx]}
                            </span>
                            <span className="truncate">{opt}</span>
                            {isOpen && oIdx === locQ.correctIndex && (
                              <Check className="w-3.5 h-3.5 text-emerald-600 ml-auto shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Toggle Answer Reveal */}
                      <div className="pt-2">
                        <button
                          onClick={() => toggleAnswer(riddle.id)}
                          className={`w-full py-2 px-4 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                            isOpen
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200'
                          }`}
                        >
                          <span>{isOpen ? t.riddlesHideAnswer : t.riddlesShowAnswer}</span>
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Revealed Answer & Explanation */}
                      {isOpen && (
                        <div className="mt-3 p-4 rounded-xl bg-gradient-to-r from-emerald-50/70 to-blue-50/50 border border-emerald-200/80 space-y-2.5 text-xs sm:text-sm animate-fade-in">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-xs">
                              {isEn ? 'Correct Answer' : 'সঠিক উত্তর'}
                            </span>
                            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
                              {locQ.options[locQ.correctIndex]}
                            </span>
                          </div>

                          <div className="text-slate-700 leading-relaxed">
                            <strong className="text-slate-900 font-semibold block mb-0.5">
                              {isEn ? 'Explanation:' : 'ব্যাখ্যা:'}
                            </strong>
                            <p>{locQ.explanation}</p>
                          </div>

                          {locQ.interestingFact && (
                            <div className="bg-white/80 p-2.5 rounded-lg border border-blue-100 text-blue-900 text-xs">
                              <span className="font-bold text-blue-800 flex items-center gap-1 mb-0.5">
                                <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                                {isEn ? 'Fun Fact:' : 'মজার তথ্য:'}
                              </span>
                              <p>{locQ.interestingFact}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}

              {filteredRiddles.length === 0 && (
                <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                  <div className="text-4xl mb-3">🔍</div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">
                    {isEn ? 'No riddles found' : 'কোনো ধাঁধা পাওয়া যায়নি'}
                  </h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    {isEn
                      ? 'Try searching with another keyword or pick another category tag.'
                      : 'অন্য কোনো শব্দ বা বিষয়ে অনুসন্ধান করুন অথবা অন্য ক্যাটাগরি বাছাই করুন।'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Ad Placement */}
        <div className="pt-8">
          <AdBanner refreshKey="bangla-riddles-page" />
        </div>
      </div>

      {/* IQ Modal */}
      {showIQModal && gameResult && (
        <IQCardModal
          isOpen={showIQModal}
          result={gameResult}
          lang={lang}
          onClose={() => setShowIQModal(false)}
        />
      )}
    </div>
  );
};
