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
import { QuizCategory, QuizQuestion, QuizResult } from './types/quiz';
import { getUserStats, saveQuizResult, hasCompletedDailyToday } from './utils/quizStorage';
import { updateSEO } from './utils/seo';

export default function App() {
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

  // Helper to sync route from URL parameters
  const syncFromUrl = useCallback(() => {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const page = searchParams.get('page') || 'home';
      const id = searchParams.get('id') || '';
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

  // Navigate function that also updates browser URL history
  const navigate = useCallback((page: string, params: Record<string, string> = {}) => {
    setCurrentRoute(page);
    setRouteParams(params);

    const url = new URL(window.location.href);
    url.searchParams.set('page', page);
    if (params.id) {
      url.searchParams.set('id', params.id);
    } else {
      url.searchParams.delete('id');
    }

    try {
      window.history.pushState({}, '', url.toString());
    } catch {
      // In sandboxed environments if pushState fails, route still operates via React state
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Sync SEO whenever route changes
  useEffect(() => {
    if (currentRoute === 'home') {
      updateSEO({
        title: 'হোম – জ্ঞান যাচাই করুন ও কুইজ খেলুন',
        description: 'Quiz Zone (কুইজ জোন) - ১৬টি বিভাগে ১০০+ আকর্ষণীয় কুইজ, দৈনিক চ্যালেঞ্জ ও তাৎক্ষণিক ব্যাখ্যা।',
        canonicalPath: '/?page=home',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Quiz Zone',
          inLanguage: 'bn',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          description: 'অনলাইন বাংলা কুইজ প্ল্যাটফর্ম - Quiz Zone.',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'BDT' }
        }
      });
    } else if (currentRoute === 'category' && routeParams.id) {
      const cat = getCategoryById(routeParams.id);
      if (cat) {
        updateSEO({
          title: `${cat.title} – সাধারণ জ্ঞান কুইজ ও উত্তর`,
          description: `${cat.title} খেলুন Quiz Zone-এ। ${cat.description}`,
          canonicalPath: `/?page=category&id=${cat.id}`,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: cat.title,
            inLanguage: 'bn',
            description: cat.description,
            educationalLevel: cat.difficulty,
            hasPart: cat.questions.map((q) => ({
              '@type': 'Question',
              name: q.question,
              text: q.question
            }))
          }
        });
      }
    } else if (currentRoute === 'daily') {
      updateSEO({
        title: 'দৈনিক কুইজ – আজকের বিশেষ জ্ঞান পরীক্ষা',
        description: 'প্রতিদিনের নতুন ৭টি প্রশ্নের দৈনিক কুইজ খেলুন এবং নিজের স্ট্রিক অক্ষুণ্ণ রাখুন।',
        canonicalPath: '/?page=daily'
      });
    } else if (currentRoute === 'categories') {
      updateSEO({
        title: 'সকল ১৬টি কুইজ ক্যাটাগরি',
        description: 'ভূগোল, বিজ্ঞান, ইতিহাস, গণিত, খেলাধুলা ও প্রযুক্তিসহ সকল কুইজ অন্বেষণ করুন।',
        canonicalPath: '/?page=categories'
      });
    } else if (currentRoute === 'history') {
      updateSEO({
        title: 'আমার কুইজ অগ্রগতি ও স্কোর রেকর্ড',
        description: 'আপনার সমাপ্ত কুইজ সেশন, সঠিকতার হার ও দৈনিক স্ট্রিক দেখুন।',
        canonicalPath: '/?page=history'
      });
    } else if (currentRoute === 'sitemap') {
      updateSEO({
        title: 'সাইটম্যাপ ও সক্রিয় পেজ ইনডেক্স',
        description: 'Quiz Zone-এর সমস্ত কার্যকরী ইউআরএল ও বিষয়ের সম্পূর্ণ তালিকা।',
        canonicalPath: '/?page=sitemap'
      });
    }
  }, [currentRoute, routeParams.id]);

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
          />
        );

      case 'categories':
        return (
          <AllCategoriesPage
            onNavigate={navigate}
            onSelectCategory={(cat) => navigate('category', { id: cat.id })}
          />
        );

      case 'category': {
        const cat = getCategoryById(routeParams.id || '') || activeCategory || QUIZ_CATEGORIES[0];
        return (
          <CategoryPage
            category={cat}
            onNavigate={navigate}
            onStartQuiz={(c, count, shuffle) => handleStartCategoryQuiz(c, count, shuffle)}
          />
        );
      }

      case 'daily':
        return (
          <DailyQuizPage
            onNavigate={navigate}
            onStartCustomQuiz={handleStartCustomQuiz}
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
          />
        );
      }

      case 'result': {
        if (!lastQuizResult) {
          return (
            <HomePage
              onNavigate={navigate}
              onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
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
          />
        );
      }

      case 'history':
        return (
          <HistoryPage
            onNavigate={navigate}
            onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
          />
        );

      case 'sitemap':
        return <SitemapPage onNavigate={navigate} />;

      default:
        return (
          <HomePage
            onNavigate={navigate}
            onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white antialiased">
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigate}
        onStartQuiz={(cat) => handleStartCategoryQuiz(cat)}
        dailyCompletedToday={dailyCompleted}
        streakCount={stats.streakDays}
      />

      <main className="flex-1 w-full" id="main-content">
        {renderContent()}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
