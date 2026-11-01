import React, { useState } from 'react';
import {
  HelpCircle,
  CalendarCheck,
  Grid,
  History,
  Dices,
  Menu,
  X,
  Map
} from 'lucide-react';
import { getRandomQuiz } from '../data/quizData';
import { QuizCategory } from '../types/quiz';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string, params?: Record<string, string>) => void;
  onStartQuiz: (category: QuizCategory, count?: number) => void;
  dailyCompletedToday: boolean;
  streakCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onStartQuiz,
  dailyCompletedToday,
  streakCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRandomPlay = () => {
    const randomCat = getRandomQuiz();
    onStartQuiz(randomCat);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'categories', label: 'All Categories', icon: Grid },
    { id: 'daily', label: 'Daily Quiz', icon: CalendarCheck, special: true },
    { id: 'history', label: 'My Progress', icon: History },
    { id: 'sitemap', label: 'Sitemap', icon: Map }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            aria-label="QuizPulse Homepage"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <HelpCircle className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                Quiz<span className="text-blue-600">Pulse</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] text-slate-600 tracking-wider uppercase ml-1.5 font-semibold">
                Online Trivia
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
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
                      🔥 {streakCount}d
                    </span>
                  )}
                  {link.id === 'daily' && dailyCompletedToday && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5" title="Completed today" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Button: Quick Play / Random */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleRandomPlay}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-xs"
              title="Pick a random quiz category"
            >
              <Dices className="w-4 h-4" />
              <span>Random Quiz</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleRandomPlay}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
              title="Random Quiz"
              aria-label="Random Quiz"
            >
              <Dices className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
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
                    🔥 {streakCount} day streak
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
