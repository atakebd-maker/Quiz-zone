import React from 'react';
import { HelpCircle, Heart, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { QUIZ_CATEGORIES } from '../data/quizData';
import { Language } from '../types/quiz';
import { translations } from '../utils/translations';

interface FooterProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const t = translations[lang];
  const isEn = lang === 'en';

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & mission */}
          <div className="md:col-span-1 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none transition-transform active:scale-95 block"
              aria-label="Quiz Zone BD Home"
            >
              <img
                src="/assets/aistudio/1000049976-removebg-preview_84ab076e.png"
                alt="Quiz Zone BD"
                className="h-11 sm:h-12 w-auto object-contain brightness-110"
              />
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footerAboutText}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.footerNoSignup}</span>
            </div>
          </div>

          {/* Core Categories Col 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {t.footerPopularCol}
            </h4>
            <ul className="space-y-2 text-xs">
              {QUIZ_CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', { id: cat.id })}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {isEn ? cat.titleEn || cat.title : cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Categories Col 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {t.footerScienceCol}
            </h4>
            <ul className="space-y-2 text-xs">
              {QUIZ_CATEGORIES.slice(5, 10).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', { id: cat.id })}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {isEn ? cat.titleEn || cat.title : cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Learning */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {t.footerQuickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('daily')}
                  className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.navDaily}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {t.allCategoriesTitle}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {t.navHistory}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sitemap')}
                  className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.navSitemap}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{t.footerCopyright}</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>{t.footerMadeWithLove}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>· {t.footerOpenEducation}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
