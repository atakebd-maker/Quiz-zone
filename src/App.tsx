/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { AllCategoriesPage } from './pages/AllCategoriesPage';
import { DailyQuizPage } from './pages/DailyQuizPage';
import { QuizPlayerPage } from './pages/QuizPlayerPage';
import { QuizResultPage } from './pages/QuizResultPage';
import { HistoryPage } from './pages/HistoryPage';
import { SitemapPage } from './pages/SitemapPage';
import { QUIZ_CATEGORIES, getCategoryById } from './data/quizData';
import { QuizCategory, QuizQuestion, QuizResult, Language } from './types/quiz';
import { getUserStats, saveQuizResult, hasCompletedDailyToday } from './utils/quizStorage';
import { updateSEO } from './utils/seo';
import { AdBanner } from './components/AdBanner';

const getInitialLang = (): Language => {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const paramLang = searchParams.get('lang');
    if (paramLang === 'en' || paramLang === 'bn') {
      return paramLang;
    }
    const saved = localStorage.getItem('quiz_zone_lang');
    if (saved === 'en' || saved === 'bn') {
      return saved;
    }
  } catch {
    // sandbox fallback
  }
  return 'bn';
};

export default function App() {
  const [lang, setLang] = useState<Language>(getInitialLang);
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParams, setRouteParams] = useState<Record<string, string>>({});
  
  // Active quiz session state
  const [activeCategory, setActiveCategory] = useState<QuizCategory | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [isDailySession, setIsDailySession] = useState<boolean>(false);
  const [lastQuizResult, setLastQuizResult] = useState<QuizResult | null>(null);

  // User state
  const [stats, setStats] = useState(getUserStats());
  const dailyCompleted = hasCompletedDailyToday();

  // Helper to sync route & language from URL parameters
  const syncFromUrl = useCallback(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const page = searchParams.get('page') || 'home';
      const id = searchParams.get('id') || '';
      const paramLang = searchParams.get('lang');

      if (paramLang === 'en' || paramLang === 'bn') {
        setLang(paramLang);
        try {
          localStorage.setItem('quiz_zone_lang', paramLang);
        } catch {
          // ignore
        }
        document.documentElement.lang = paramLang;
      }

      const params: Record<string, string> = {};
      if (id) params.id = id;

      setCurrentRoute(page);
      setRouteParams(params);

      if (page === 'category' && id) {
        const cat = getCategoryById(id);
        if (cat) setActiveCategory(cat);
      }
    } catch {
      setCurrentRoute('home');
    }
  }, []);

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    syncFromUrl();
    const handlePopState = () => syncFromUrl();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [syncFromUrl]);

  // Sync lang to document html element
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Ensure current URL contains lang param on initial mount
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (!url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        window.history.replaceState({}, '', url.toString());
      }
    } catch {
      // ignore
    }
  }, [lang]);

  // Language switch handler
  const handleLanguageChange = useCallback((newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('quiz_zone_lang', newLang);
    } catch {
      // ignore
    }
    document.documentElement.lang = newLang;

    // Persist to current URL immediately so if user copies current address bar, it contains &lang=...
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', newLang);
      window.history.pushState({}, '', url.toString());
    } catch {
      // ignore
    }
  }, []);

  // Navigate function that preserves active language in browser URL history
  const navigate = useCallback(
    (page: string, params: Record<string, string> = {}) => {
      setCurrentRoute(page);
      setRouteParams(params);

      const url = new URL(window.location.href);
      url.searchParams.set('page', page);
      url.searchParams.set('lang', lang);
      if (params.id) {
        url.searchParams.set('id', params.id);
      } else {
        url.searchParams.delete('id');
      }

      try {
        window.history.pushState({}, '', url.toString());
      } catch {
        // sandbox fallback
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [lang]
  );

  // Sync SEO whenever route or language changes
  useEffect(() => {
    const isEn = lang === 'en';

    if (currentRoute === 'home') {
      updateSEO({
        title: isEn
          ? 'Home – Interactive Bengali Riddles & General Knowledge Quizzes'
          : 'হোম – জ্ঞান যাচাই করুন ও কুইজ খেলুন',
        description: isEn
          ? 'Quiz Zone BD - 10 engaging categories of Bengali riddles, brain teasers, daily challenges, and instant IQ evaluation.'
          : 'Quiz Zone BD (কুইজ জোন বিডি) - ১০টি বিভাগে আকর্ষণীয় কুইজ, ধাঁধা, দৈনিক চ্যালেঞ্জ ও তাৎক্ষণিক আইকিউ মেধা বিশ্লেষণ।',
        canonicalPath: `/?page=home&lang=${lang}`,
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Quiz Zone BD',
          inLanguage: lang,
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          description: isEn
            ? 'Interactive bilingual riddles and quiz platform - Quiz Zone BD.'
            : 'অনলাইন বাংলা কুইজ ও ধাঁধা প্ল্যাটফর্ম - Quiz Zone BD.',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'BDT' }
        }
      });
    } else if (currentRoute === 'category' && routeParams.id) {
      const cat = getCategoryById(routeParams.id);
      if (cat) {
        const title = isEn ? cat.titleEn || cat.title : cat.title;
        const desc = isEn ? cat.descriptionEn || cat.description : cat.description;
        updateSEO({
          title: `${title} – Quiz Zone BD`,
          description: desc,
          canonicalPath: `/?page=category&id=${cat.id}&lang=${lang}`,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: title,
            inLanguage: lang,
            description: desc,
            educationalLevel: cat.difficulty,
            hasPart: cat.questions.map((q) => ({
              '@type': 'Question',
              name: isEn ? q.questionEn || q.question : q.question,
              text: isEn ? q.questionEn || q.question : q.question
            }))
          }
        });
      }
    } else if (currentRoute === 'daily') {
      updateSEO({
        title: isEn
          ? 'Daily Quiz – Daily 7-Question Knowledge Challenge'
          : 'দৈনিক কুইজ – আজকের বিশেষ জ্ঞান পরীক্ষা',
        description: isEn
          ? 'Play 7 curated questions every single day and keep your brain sharp with streak tracking on Quiz Zone BD.'
          : 'প্রতিদিনের নতুন ৭টি প্রশ্নের দৈনিক কুইজ খেলুন এবং নিজের স্ট্রিক অক্ষুণ্ণ রাখুন।',
        canonicalPath: `/?page=daily&lang=${lang}`
      });
    } else if (currentRoute === 'categories') {
      updateSEO({
        title: isEn
          ? 'All 10 Quiz & Riddle Categories'
          : 'সকল ১০টি কুইজ ও ধাঁধা ক্যাটাগরি',
        description: isEn
          ? 'Explore easy riddles, hard riddles, brain teasers, math puzzles, science, and Bangladesh heritage quizzes.'
          : 'সহজ ধাঁধা, কঠিন ধাঁধা, বুদ্ধির খেলা, বিজ্ঞান, গণিত ও বাংলাদেশ বিষয়াবলীসহ সকল কুইজ অন্বেষণ করুন।',
        canonicalPath: `/?page=categories&lang=${lang}`
      });
    } else if (currentRoute === 'history') {
      updateSEO({
        title: isEn
          ? 'My Quiz Progress & Score Records'
          : 'আমার কুইজ অগ্রগতি ও স্কোর রেকর্ড',
        description: isEn
          ? 'View your completed quiz sessions, accuracy rate, cognitive milestones, and daily streak.'
          : 'আপনার সমাপ্ত কুইজ সেশন, সঠিকতার হার ও দৈনিক স্ট্রিক দেখুন।',
        canonicalPath: `/?page=history&lang=${lang}`
      });
    } else if (currentRoute === 'sitemap') {
      updateSEO({
        title: isEn
          ? 'Sitemap & Active Page Index'
          : 'সাইটম্যাপ ও সক্রিয় পেজ ইনডেক্স',
        description: isEn
          ? 'Complete index of active URLs and topics across Quiz Zone BD.'
          : 'Quiz Zone BD-এর সমস্ত কার্যকরী ইউআরএল ও বিষয়ের সম্পূর্ণ তালিকা।',
        canonicalPath: `/?page=sitemap&lang=${lang}`
      });
    }
  }, [currentRoute, routeParams.id, lang]);

  // Handler to start a standard category quiz
  const handleStartCategoryQuiz = useCallback(
    (category: QuizCategory, count?: number, shuffle = true) => {
      let qList = [...category.questions];
      if (shuffle) {
        qList = qList.sort(() => Math.random() - 0.5);
      }
      if (count && count > 0) {
        qList = qList.slice(0, count);
      }
      setActiveCategory(category);
      setActiveQuestions(qList);
      setIsDailySession(false);
      navigate('quiz', { id: category.id });
    },
    [navigate]
  );

  // Handler to start a custom quiz (e.g. Daily Quiz)
  const handleStartCustomQuiz = useCallback(
    (category: QuizCategory, customQuestions: QuizQuestion[], isDaily: boolean) => {
      setActiveCategory(category);
      setActiveQuestions(customQuestions);
      setIsDailySession(isDaily);
      navigate('quiz', { id: category.id });
    },
    [navigate]
  );

  // Handler when quiz session completes
  const handleFinishQuiz = useCallback(
    (result: QuizResult) => {
      const updatedStats = saveQuizResult(result);
      setStats(updatedStats);
      setLastQuizResult(result);
      navigate('result');
    },
    [navigate]
  );

  // Render current view
  const renderContent = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigate}
            onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
            lang={lang}
          />
        );

      case 'categories':
        return (
          <AllCategoriesPage
            onNavigate={navigate}
            onSelectCategory={(cat) => navigate('category', { id: cat.id })}
            lang={lang}
          />
        );

      case 'category': {
        const cat = getCategoryById(routeParams.id || '') || activeCategory || QUIZ_CATEGORIES[0];
        return (
          <CategoryPage
            category={cat}
            onNavigate={navigate}
            onStartQuiz={(c, count, shuffle) => handleStartCategoryQuiz(c, count, shuffle)}
            lang={lang}
          />
        );
      }

      case 'daily':
        return (
          <DailyQuizPage
            onNavigate={navigate}
            onStartCustomQuiz={handleStartCustomQuiz}
            lang={lang}
          />
        );

      case 'quiz': {
        if (!activeCategory || activeQuestions.length === 0) {
          const fallbackCat = getCategoryById(routeParams.id || '') || QUIZ_CATEGORIES[0];
          return (
            <CategoryPage
              category={fallbackCat}
              onNavigate={navigate}
              onStartQuiz={(c, count, shuffle) => handleStartCategoryQuiz(c, count, shuffle)}
              lang={lang}
            />
          );
        }
        return (
          <QuizPlayerPage
            category={activeCategory}
            questions={activeQuestions}
            isDaily={isDailySession}
            onFinishQuiz={handleFinishQuiz}
            onExit={() => navigate('category', { id: activeCategory.id })}
            lang={lang}
          />
        );
      }

      case 'result': {
        if (!lastQuizResult) {
          return (
            <HomePage
              onNavigate={navigate}
              onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
              lang={lang}
            />
          );
        }
        return (
          <QuizResultPage
            result={lastQuizResult}
            onPlayAgain={() => {
              if (activeCategory) {
                handleStartCategoryQuiz(activeCategory);
              } else {
                navigate('categories');
              }
            }}
            onBackToCategories={() => navigate('categories')}
            lang={lang}
          />
        );
      }

      case 'history':
        return (
          <HistoryPage
            onNavigate={navigate}
            onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
            lang={lang}
          />
        );

      case 'sitemap':
        return <SitemapPage onNavigate={navigate} lang={lang} />;

      default:
        return (
          <HomePage
            onNavigate={navigate}
            onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
            lang={lang}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white antialiased">
      <Navbar
        currentRoute={currentRoute}
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onNavigate={navigate}
        onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
        dailyCompletedToday={dailyCompleted}
        streakCount={stats.streakDays}
      />

      <main className="flex-1 w-full" id="main-content">
        {renderContent()}
      </main>

      {/* Global Ad Placement Above Footer */}
      <div className="w-full flex justify-center py-4 bg-white/60 border-t border-slate-100">
        <AdBanner refreshKey={`global-${currentRoute}`} />
      </div>

      <Footer onNavigate={navigate} lang={lang} />
    </div>
  );
}
