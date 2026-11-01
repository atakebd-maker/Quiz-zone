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
import { QUIZ_CATEGORIES, getCategoryById, getDailyQuizForDate } from './data/quizData';
import { QuizCategory, QuizQuestion, QuizResult } from './types/quiz';
import { getUserStats, saveQuizResult, hasCompletedDailyToday, getTodayDateString } from './utils/quizStorage';
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

      // If route is category and id provided, locate category
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
        title: 'QuizPulse – Test Your Knowledge with Interactive Online Quizzes',
        description: 'Explore 16+ free quiz categories, participate in our daily challenge, test your knowledge with instant answers, and track your scores.',
        canonicalPath: '/?page=home',
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'QuizPulse',
          applicationCategory: 'EducationalApplication',
          operatingSystem: 'All',
          description: 'Interactive online quiz website featuring 16 categories, daily quizzes, and instant feedback.',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
        }
      });
    } else if (currentRoute === 'category' && routeParams.id) {
      const cat = getCategoryById(routeParams.id);
      if (cat) {
        updateSEO({
          title: `${cat.title} – Free Interactive Trivia & Learning`,
          description: `Play the ${cat.title}. ${cat.description} Features 4-choice questions, detailed explanations, and fun facts.`,
          canonicalPath: `/?page=category&id=${cat.id}`,
          jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: cat.title,
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
        title: 'Daily Quiz Challenge – Fresh Questions Every Day',
        description: 'Challenge yourself with today’s handpicked 7-question trivia quiz. Learn new facts and maintain your daily streak on QuizPulse.',
        canonicalPath: '/?page=daily'
      });
    } else if (currentRoute === 'categories') {
      updateSEO({
        title: 'All 16 Quiz Categories – Explore Subjects & Trivia',
        description: 'Browse all 16 quiz categories on QuizPulse including World Geography, Countries, Science, History, Technology, Mathematics, and more.',
        canonicalPath: '/?page=categories'
      });
    } else if (currentRoute === 'history') {
      updateSEO({
        title: 'My Learning Progress & Past Quizzes',
        description: 'Track your quiz completion scores, accuracy percentages, and daily streaks on QuizPulse.',
        canonicalPath: '/?page=history'
      });
    } else if (currentRoute === 'sitemap') {
      updateSEO({
        title: 'Sitemap & Real URL Index – QuizPulse',
        description: 'Comprehensive directory of all accessible quiz categories, daily challenges, and educational trivia pages.',
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
          // Fallback if refreshed directly on quiz URL
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
