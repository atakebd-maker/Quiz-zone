import React, { useState } from 'react';
import {
  FileCode,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  MapPin,
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
    { title: 'QuizPulse Homepage', path: '/?page=home', description: 'Main landing page featuring daily challenge, categories, and search.' },
    { title: 'All Quiz Categories', path: '/?page=categories', description: 'Catalog of 16 interactive quiz categories and difficulty levels.' },
    { title: 'Daily Quiz Challenge', path: '/?page=daily', description: 'Fresh 7-question daily quiz with streak tracker.' },
    { title: 'Personal Progress & Stats', path: '/?page=history', description: 'User test history, accuracy metrics, and local scores.' },
    { title: 'Sitemap & Index', path: '/?page=sitemap', description: 'Complete accessible directory of all public URLs on QuizPulse.' }
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
      <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-semibold">HTML & XML Sitemap</span>
      </nav>

      <header className="space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
          SEO Index & URL Manifest
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Website Sitemap & Real Page Index
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          QuizPulse contains only real, verified, accessible URLs without dead stubs or placeholder routes. Use this index to navigate directly to any quiz category or inspect the SEO XML markup.
        </p>
      </header>

      {/* XML Actions */}
      <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-xl border border-blue-100 shadow-xs">
        <button
          onClick={() => setShowRawXml(!showRawXml)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold transition-colors"
        >
          <FileCode className="w-4 h-4" />
          <span>{showRawXml ? 'Hide XML Source' : 'View XML Sitemap'}</span>
        </button>

        <button
          onClick={handleCopyXml}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Copied XML!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-slate-500" />
              <span>Copy XML to Clipboard</span>
            </>
          )}
        </button>

        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors ml-auto"
        >
          <span>Open /sitemap.xml</span>
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
              Core Pages & Hubs ({mainPages.length})
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
              Dedicated Category Pages ({QUIZ_CATEGORIES.length})
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
                    className="font-semibold text-xs text-slate-900 hover:text-blue-700 text-left block"
                  >
                    {cat.title}
                  </button>
                  <span className="text-[11px] text-slate-600 font-mono">
                    ?page=category&id={cat.id}
                  </span>
                </div>

                <button
                  onClick={() => onNavigate('category', { id: cat.id })}
                  className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit</span>
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
