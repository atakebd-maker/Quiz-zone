import React, { useState, useEffect } from 'react';
import { Download, X, Check, Loader2, Sparkles, ExternalLink } from 'lucide-react';
import { QuizResult, Language } from '../types/quiz';
import { generateIQCardDataUrl, downloadIQCardImage } from '../utils/generateIQCardImage';
import { translations } from '../utils/translations';

interface IQCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: QuizResult;
  lang: Language;
}

export const IQCardModal: React.FC<IQCardModalProps> = ({
  isOpen,
  onClose,
  result,
  lang
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [downloaded, setDownloaded] = useState<boolean>(false);

  const t = translations[lang];
  const isEn = lang === 'en';

  useEffect(() => {
    let isMounted = true;
    if (isOpen) {
      setLoading(true);
      generateIQCardDataUrl(result, lang)
        .then((url) => {
          if (isMounted) {
            setImageUrl(url);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.error('Failed to generate IQ card:', err);
          if (isMounted) setLoading(false);
        });
    } else {
      setImageUrl(null);
    }
    return () => {
      isMounted = false;
    };
  }, [isOpen, result, lang]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await downloadIQCardImage(result, lang);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                {isEn ? 'Official IQ Certificate & Cognitive Card' : 'অফিশিয়াল আইকিউ কার্ড ও মূল্যায়ন সার্টিফিকেট'}
              </h3>
              <p className="text-[11px] text-slate-400">
                {isEn ? 'High-resolution PNG image with all test metrics' : 'সব তথ্য ও স্কোর সহ উচ্চ রেজোলিউশনের ডাউনলোডযোগ্য ছবি'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center min-h-[260px] bg-slate-950/40">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-slate-300">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <p className="text-sm font-semibold">{t.downloadingCard}</p>
            </div>
          ) : imageUrl ? (
            <div className="relative group max-w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <img
                src={imageUrl}
                alt="Quiz Zone BD IQ Card"
                className="w-full h-auto object-contain max-h-[58vh] rounded-2xl select-none"
              />
            </div>
          ) : (
            <p className="text-rose-400 text-sm">
              {isEn ? 'Failed to render image. Please try again.' : 'কার্ড তৈরি করতে সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।'}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-4 border-t border-slate-800 bg-slate-950/80">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>✨ {isEn ? 'Ready to share on WhatsApp, Facebook, or Instagram' : 'ফেসবুক, হোয়াটসঅ্যাপ বা ইনস্টাগ্রামে শেয়ার করার উপযোগী'}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
            >
              {t.closeModalBtn}
            </button>

            <button
              onClick={handleDownload}
              disabled={loading || downloading}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-xs sm:text-sm font-extrabold transition-all shadow-lg shadow-blue-900/30 disabled:opacity-50 cursor-pointer"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{t.downloadingCard}</span>
                </>
              ) : downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{t.downloadSuccess}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>{t.downloadIQCardBtn}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
