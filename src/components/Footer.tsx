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
                Quiz <span className="text-blue-400">Zone</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              আপনার সাধারণ জ্ঞান বৃদ্ধি করুন, চমকপ্রদ তথ্য জানুন এবং ১৬টি ভিন্ন ক্যাটাগরিতে নিয়মিত কুইজ খেলুন। সম্পূর্ণ বিনামূল্যে ও বাংলায়।
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>কোনো রেজিস্ট্রেশন বা সাবস্ক্রিপশন প্রয়োজন নেই</span>
            </div>
          </div>

          {/* Core Categories Col 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              জনপ্রিয় কুইজসমূহ
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
              বিজ্ঞান ও সাধারণ জ্ঞান
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
              কুইজ জোন এক্সপ্লোর করুন
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('daily')}
                  className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>আজকের দৈনিক কুইজ</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  সকল ১৬টি কুইজ ক্যাটাগরি
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('history')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  আমার কুইজ অগ্রগতি ও স্কোর
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sitemap')}
                  className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                  <span>সম্পূর্ণ সাইটম্যাপ</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Quiz Zone (কুইজ জোন)। জ্ঞানপিপাসু ও শিক্ষার্থীদের জন্য নিবেদিত।</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>ভালোবাসার সাথে প্রস্তুত</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>সবার জন্য উন্মুক্ত জ্ঞান চর্চা</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
