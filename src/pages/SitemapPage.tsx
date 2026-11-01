import React, { useState } from 'react';
import {
  FileCode,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  CalendarCheck,
  FolderOpen
} from 'lucide-react';
import { QUIZ_CATEGORIES } from '../data/quizData';

interface SitemapPageProps {
  onNavigate: (route: string, params?: Record<string, string>) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [showRawXml, setShowRawXml] = useState(false);

  const mainPages = [
    { title: 'Quiz Zone BD হোমপেজ', path: '/?page=home', description: 'মূল ল্যান্ডিং পেজ যেখানে রয়েছে দৈনিক কুইজ, ক্যাটাগরি ও সার্চ সুবিধা।' },
    { title: 'সকল কুইজ ক্যাটাগরি', path: '/?page=categories', description: '১৬টি ভিন্ন কুইজ বিষয় ও লেভেলের সম্পূর্ণ ক্যাটালগ।' },
    { title: 'দৈনিক কুইজ চ্যালেঞ্জ', path: '/?page=daily', description: 'প্রতিদিনের নতুন ৭টি প্রশ্নের বিশেষ চ্যালেঞ্জ ও স্ট্রিক ট্র্যাকার।' },
    { title: 'ব্যক্তিগত অগ্রগতি ও স্কোর', path: '/?page=history', description: 'ব্যবহারকারীর অতীতের কুইজের ইতিহাস ও সঠিকতার পরিসংখ্যান।' },
    { title: 'সাইটম্যাপ ও ইনডেক্স', path: '/?page=sitemap', description: 'Quiz Zone BD-এর সমস্ত সক্রিয় ইউআরএল ও পেজের নির্দেশিকা।' }
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://quizpulse.app/</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://quizpulse.app/?page=categories</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://quizpulse.app/?page=daily</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
${QUIZ_CATEGORIES.map(
  (c) => `  <url>
    <loc>https://quizpulse.app/?page=category&amp;id=${c.id}</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
).join('\n')}
  <url>
    <loc>https://quizpulse.app/?page=sitemap</loc>
    <lastmod>2026-10-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  const handleCopyXml = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(xmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="ব্রেডক্রাম্ব">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          হোম
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold">এইচটিএমএল ও এক্সএমএল সাইটম্যাপ</span>
      </nav>

      <header className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
          SEO ইনডেক্স ও ইউআরএল ম্যানিফেস্ট
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Quiz Zone BD ওয়েবসাইট সাইটম্যাপ
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Quiz Zone BD-এ শুধুমাত্র সক্রিয় ও কার্যকরী লিংক ও পেজসমূহ অন্তর্ভুক্ত রয়েছে। সরাসরি যেকোনো কুইজ ক্যাটাগরিতে যেতে বা এসইও এক্সএমএল কোড দেখতে নিচের বিকল্পগুলো ব্যবহার করুন।
        </p>
      </header>

      {/* XML Actions */}
      <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
        <button
          onClick={() => setShowRawXml(!showRawXml)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors cursor-pointer"
        >
          <FileCode className="w-4 h-4" />
          <span>{showRawXml ? 'এক্সএমএল কোড লুকান' : 'এক্সএমএল সাইটম্যাপ দেখুন'}</span>
        </button>

        <button
          onClick={handleCopyXml}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span>এক্সএমএল কপি করা হয়েছে!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-500" />
              <span>এক্সএমএল ক্লিপবোর্ডে কপি করুন</span>
            </>
          )}
        </button>

        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors ml-auto"
        >
          <span>/sitemap.xml ফাইল খুলুন</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {showRawXml && (
        <div className="p-4 bg-slate-900 rounded-xl text-slate-200 font-mono text-xs overflow-x-auto shadow-inner max-h-96">
          <pre>{xmlContent}</pre>
        </div>
      )}

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core application routes */}
        <section className="bg-white rounded-2xl border border-blue-100 p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <FolderOpen className="w-4 h-4 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              মূল পেজসমূহ ({mainPages.length}টি)
            </h2>
          </div>

          <div className="space-y-3">
            {mainPages.map((page, i) => (
              <div
                key={i}
                className="p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={page.path}
                    onClick={(e) => {
                      e.preventDefault();
                      const url = new URL(page.path, window.location.origin);
                      const pageParam = url.searchParams.get('page') || 'home';
                      onNavigate(pageParam);
                    }}
                    className="font-bold text-sm text-blue-700 hover:underline"
                  >
                    {page.title}
                  </a>
                  <span className="text-[10px] font-mono text-slate-400">
                    {page.path}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">{page.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 16 Category Routes */}
        <section className="bg-white rounded-2xl border border-blue-100 p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <CalendarCheck className="w-4 h-4 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              ১৬টি কুইজ ক্যাটাগরির লিংক ({QUIZ_CATEGORIES.length}টি)
            </h2>
          </div>

          <div className="space-y-2 max-h-[460px] overflow-y-auto pr-2">
            {QUIZ_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 flex items-center justify-between transition-colors"
              >
                <div>
                  <button
                    onClick={() => onNavigate('category', { id: cat.id })}
                    className="font-semibold text-xs text-slate-900 hover:text-blue-700 text-left block cursor-pointer"
                  >
                    {cat.title}
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">
                    ?page=category&id={cat.id}
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('category', { id: cat.id })}
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>প্রবেশ করুন</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
