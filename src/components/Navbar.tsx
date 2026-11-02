import React, { useState } from 'react';
import {
  HelpCircle,
  CalendarCheck,
  Grid,
  History,
  Dices,
  Menu,
  X,
  Map,
  Languages
} from 'lucide-react';
import { getRandomQuiz } from '../data/quizData';
import { QuizCategory, Language } from '../types/quiz';
import { translations } from '../utils/translations';

interface NavbarProps {
  currentRoute: string;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onStartQuiz: (category: QuizCategory, count?: number) => void;
  dailyCompletedToday: boolean;
  streakCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  lang,
  onLanguageChange,
  onNavigate,
  onStartQuiz,
  dailyCompletedToday,
  streakCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleRandomPlay = () => {
    const randomCat = getRandomQuiz();
    onStartQuiz(randomCat);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: t.navHome, icon: null },
    { id: 'categories', label: t.navAllCategories, icon: Grid },
    { id: 'daily', label: t.navDaily, icon: CalendarCheck, special: true },
    { id: 'history', label: t.navHistory, icon: History },
    { id: 'sitemap', label: t.navSitemap, icon: Map }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo - Quiz Zone BD */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-0.5 shrink-0 transition-transform active:scale-95"
            aria-label={`${t.brandName} ${t.navHome}`}
          >
            <img
              src="/assets/aistudio/1000049976-removebg-preview_84ab076e.png"
              alt="Quiz Zone BD"
              className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[240px] object-contain drop-shadow-xs"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-blue-500" />}
                  <span>{link.label}</span>
                  {link.id === 'daily' && streakCount > 0 && (
                    <span className="text-[11px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                      🔥 {streakCount} {t.dailyStreak}
                    </span>
                  )}
                  {link.id === 'daily' && dailyCompletedToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5" title={t.todayCompleted} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar: Language Switcher (বাংলা / English) & Random Quiz Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Top Language Switcher Bar with বাংলা and English clearly visible */}
            <div
              className="inline-flex items-center p-1 bg-slate-100/90 rounded-lg border border-slate-200/90 shadow-2xs"
              role="group"
              aria-label={t.switchLanguage}
            >
              <div className="hidden sm:flex items-center pl-1.5 pr-1 text-slate-400">
                <Languages className="w-3.5 h-3.5" />
              </div>
              
              {/* বাংলা Button */}
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-blue-600 text-white shadow-xs scale-100 ring-1 ring-blue-700'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
                aria-pressed={lang === 'bn'}
              >
                বাংলা
              </button>

              {/* English Button */}
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-md transition-all duration-150 cursor-pointer ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow-xs scale-100 ring-1 ring-blue-700'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/70'
                }`}
                aria-pressed={lang === 'en'}
              >
                English
              </button>
            </div>

            {/* Quick Random Play Button */}
            <button
              onClick={handleRandomPlay}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs"
              title={t.randomQuiz}
            >
              <Dices className="w-4 h-4" />
              <span className="hidden lg:inline">{t.randomQuiz}</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-4 space-y-2 shadow-lg">
          {/* Mobile Language Selector inside dropdown for extra convenience */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-blue-600" />
              <span>{t.switchLanguage}</span>
            </span>
            <div className="inline-flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'bn' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'en' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-700'
                }`}
              >
                English
              </button>
            </div>
          </div>

          {navLinks.map((link) => {
            const isActive = currentRoute === link.id;
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {Icon && <Icon className="w-4 h-4 text-blue-500" />}
                  <span>{link.label}</span>
                </div>
                {link.id === 'daily' && streakCount > 0 && (
                  <span className="text-xs font-semibold text-amber-700">
                    🔥 {streakCount} {t.dailyStreak}
                  </span>
                )}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={handleRandomPlay}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-xs"
            >
              <Dices className="w-4 h-4" />
              <span>{t.randomQuiz}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
