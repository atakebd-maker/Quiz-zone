import React from 'react';
import { HelpCircle, Heart, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { QUIZ_CATEGORIES } from '../data/quizData';

interface FooterProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & mission */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <HelpCircle className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Quiz<span className="text-blue-400">Pulse</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Test your knowledge, explore captivating facts, and cultivate curiosity across 16 authentic categories. Free, instant, and accessible for everyone.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>No registration or API keys required</span>
            </div>
          </div>

          {/* Core Categories Col 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Popular Quizzes
            </h4>
            <ul className="space-y-2 text-xs">
              {QUIZ_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', { id: cat.id })}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Categories Col 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Knowledge & Sciences
            </h4>
            <ul className="space-y-2 text-xs">
              {QUIZ_CATEGORIES.slice(5, 10).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', { id: cat.id })}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Learning */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Explore & Sitemap
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('daily')}
                  className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Today’s Daily Challenge</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  All 16 Quiz Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  My Progress & Statistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sitemap')}
                  className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>HTML & XML Sitemap</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} QuizPulse. Built for lifelong learners, students, and trivia enthusiasts worldwide.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for genuine knowledge sharing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
