export interface IQAnalysis {
  iqScore: number;
  classification: string;
  badgeColor: string;
  description: string;
  percentile: string;
}

export function calculateIQ(
  correctCount: number,
  totalQuestions: number,
  totalSecondsSpent: number
): IQAnalysis {
  if (totalQuestions === 0) {
    return {
      iqScore: 100,
      classification: 'স্বাভাবিক মেধা',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-200',
      description: 'নিয়মিত কুইজ অনুশীলনের মাধ্যমে জ্ঞান সমৃদ্ধ হবে।',
      percentile: '৫০তম পার্সেন্টাইল'
    };
  }

  const accuracy = correctCount / totalQuestions;
  const avgSecondsPerQuestion = totalSecondsSpent / totalQuestions;

  // Base IQ derived from accuracy
  let baseIQ = 75 + Math.round(accuracy * 55); // 75 to 130

  // Speed bonus if accuracy is good (faster decisions reflect sharp cognitive processing)
  let speedModifier = 0;
  if (accuracy >= 0.7) {
    if (avgSecondsPerQuestion <= 15) {
      speedModifier = 12;
    } else if (avgSecondsPerQuestion <= 25) {
      speedModifier = 8;
    } else if (avgSecondsPerQuestion <= 40) {
      speedModifier = 4;
    }
  } else if (accuracy >= 0.4) {
    if (avgSecondsPerQuestion <= 25) {
      speedModifier = 4;
    }
  }

  // Final calculated IQ clamped between 70 and 145
  const finalIQ = Math.min(145, Math.max(70, baseIQ + speedModifier));

  let classification = '';
  let badgeColor = '';
  let description = '';
  let percentile = '';

  if (finalIQ >= 135) {
    classification = 'জিনিয়াস / অনন্য প্রতিভাধর (Genius)';
    badgeColor = 'text-purple-700 bg-purple-50 border-purple-200';
    description = 'আপনার যৌক্তিক বিশ্লেষণ ক্ষমতা, সাধারণ জ্ঞানের গভীরতা ও তাৎক্ষণিক সিদ্ধান্ত গ্রহণের গতি বিশ্বমানের শীর্ষ ১-২% মানুষের সমতুল্য!';
    percentile = 'শীর্ষ ১% মেধা (Top 1%)';
  } else if (finalIQ >= 120) {
    classification = 'সুতীক্ষ্ণ মেধা (Superior Intelligence)';
    badgeColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
    description = 'আপনার স্মৃতিশক্তি, তথ্য যাচাই ও সমস্যা সমাধানের গতি অসাধারণ। আপনি যেকোনো প্রতিযোগিতামূলক পরীক্ষায় শীর্ষস্থান অর্জনে সক্ষম।';
    percentile = 'শীর্ষ ১০% মেধা (Top 10%)';
  } else if (finalIQ >= 110) {
    classification = 'উন্নত বুদ্ধিমত্তা (High Average)';
    badgeColor = 'text-blue-700 bg-blue-50 border-blue-200';
    description = 'গড় মানের চেয়ে উল্লেখযোগ্যভাবে উন্নত মেধা। আপনার স্মৃতিশক্তি তীক্ষ্ণ এবং তথ্যের প্রতি মনোযোগ অত্যন্ত প্রশংসনীয়।';
    percentile = 'শীর্ষ ২৫% মেধা (Top 25%)';
  } else if (finalIQ >= 90) {
    classification = 'স্বাভাবিক বা গড় মেধা (Average)';
    badgeColor = 'text-amber-700 bg-amber-50 border-amber-200';
    description = 'স্বাভাবিক সুস্থ বুদ্ধিমত্তা। নিয়মিত কুইজ ও নতুন তথ্য অনুশীলনের মাধ্যমে এই স্কোর আরও দ্রুত বৃদ্ধি করা সম্ভব।';
    percentile = 'গড় ৫০তম পার্সেন্টাইল';
  } else {
    classification = 'উন্নতিশীল মেধা (Developing)';
    badgeColor = 'text-slate-700 bg-slate-100 border-slate-300';
    description = 'হাল ছাড়বেন না! প্রতিটি কুইজ আপনার মস্তিষ্কের নিউরাল সংযোগ ও স্মৃতিশক্তিকে আরও ক্ষিপ্র করে তোলে।';
    percentile = 'অনুশীলনশীল পর্যায়';
  }

  return {
    iqScore: finalIQ,
    classification,
    badgeColor,
    description,
    percentile
  };
}
