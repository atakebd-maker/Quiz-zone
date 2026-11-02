import { QuizResult, Language } from '../types/quiz';

/**
 * Loads an image with a timeout so canvas generation never hangs.
 */
function loadImage(src: string, timeoutMs = 2500): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    let resolved = false;

    const timer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(null);
      }
    }, timeoutMs);

    img.onload = () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timer);
        resolve(img);
      }
    };

    img.onerror = () => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timer);
        resolve(null);
      }
    };

    img.src = src;
  });
}

/**
 * Helper to wrap text into multiple lines for Canvas rendering.
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine ? `${currentLine} ${words[i]}` : words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

/**
 * Generates high-resolution IQ Certificate / Result Card as a canvas data URL
 */
export async function generateIQCardDataUrl(
  result: QuizResult,
  lang: Language
): Promise<string> {
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue if font API not available
    }
  }

  // Preload logo and 3D icon
  const [logoImg, iconImg] = await Promise.all([
    loadImage('/assets/aistudio/1000049976-removebg-preview_84ab076e.png'),
    loadImage('/assets/aistudio/8604d18d-da6f-4811-9e44-dc4522cd26b0_094fab74.png')
  ]);

  const width = 1200;
  const height = 750;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  const isEn = lang === 'en';
  const iq = result.estimatedIQ || 110;
  const categoryTitle = isEn
    ? result.categoryTitleEn || result.categoryTitle
    : result.categoryTitle;
  const iqClassification = isEn
    ? result.iqClassificationEn || result.iqClassification
    : result.iqClassification;
  const iqDesc = isEn
    ? result.iqDescriptionEn || result.iqDescription
    : result.iqDescription;

  // Tier color themes
  let primaryHue = '#3b82f6'; // blue
  let glowColor = 'rgba(59, 130, 246, 0.35)';
  let accentColor = '#60a5fa';
  if (iq >= 135) {
    primaryHue = '#a855f7'; // purple
    glowColor = 'rgba(168, 85, 247, 0.4)';
    accentColor = '#f43f5e';
  } else if (iq >= 120) {
    primaryHue = '#10b981'; // emerald
    glowColor = 'rgba(16, 185, 129, 0.4)';
    accentColor = '#34d399';
  } else if (iq >= 90) {
    primaryHue = '#f59e0b'; // amber
    glowColor = 'rgba(245, 158, 11, 0.35)';
    accentColor = '#fbbf24';
  }

  // 1. Background Gradient (Dark Navy / Indigo Luxury Certificate)
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, '#070f26');
  bgGrad.addColorStop(0.5, '#0b193d');
  bgGrad.addColorStop(1, '#08112b');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle radial glows
  const radialGlow = ctx.createRadialGradient(width / 2, 290, 20, width / 2, 290, 450);
  radialGlow.addColorStop(0, glowColor);
  radialGlow.addColorStop(1, 'rgba(7, 15, 38, 0)');
  ctx.fillStyle = radialGlow;
  ctx.fillRect(0, 0, width, height);

  // 2. Decorative Double Border
  // Outer frame
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 2;
  ctx.strokeRect(24, 24, width - 48, height - 48);

  // Inner ornate border with rounded corners
  ctx.strokeStyle = 'rgba(234, 179, 8, 0.55)'; // Gold border
  ctx.lineWidth = 3;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  // Corner ornaments
  const cornerSize = 24;
  ctx.fillStyle = '#fbbf24';
  // Top-left
  ctx.fillRect(33, 33, cornerSize, 4);
  ctx.fillRect(33, 33, 4, cornerSize);
  // Top-right
  ctx.fillRect(width - 33 - cornerSize, 33, cornerSize, 4);
  ctx.fillRect(width - 37, 33, 4, cornerSize);
  // Bottom-left
  ctx.fillRect(33, height - 37, cornerSize, 4);
  ctx.fillRect(33, height - 33 - cornerSize, 4, cornerSize);
  // Bottom-right
  ctx.fillRect(width - 33 - cornerSize, height - 37, cornerSize, 4);
  ctx.fillRect(width - 37, height - 33 - cornerSize, 4, cornerSize);

  // 3. Top Header Bar: Logo, Certificate Ribbon, Icon
  // Draw Logo on left
  if (logoImg) {
    const logoRatio = logoImg.width / logoImg.height;
    const logoH = 54;
    const logoW = logoH * logoRatio;
    ctx.drawImage(logoImg, 60, 56, logoW, logoH);
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 30px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Quiz Zone BD', 60, 95);
  }

  // Draw 3D Icon on right
  if (iconImg) {
    const iconSize = 64;
    ctx.drawImage(iconImg, width - 60 - iconSize, 52, iconSize, iconSize);
  }

  // Certificate Header Ribbon in center
  ctx.textAlign = 'center';
  ctx.fillStyle = '#93c5fd';
  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '2px';
  ctx.fillText(
    isEn ? 'OFFICIAL COGNITIVE ASSESSMENT REPORT' : 'অফিশিয়াল আইকিউ ও বুদ্ধিমত্তা মূল্যায়ন সার্টিফিকেট',
    width / 2,
    72
  );
  ctx.letterSpacing = '0px';

  // Subtitle with Category Badge
  ctx.fillStyle = '#e2e8f0';
  ctx.font = 'bold 15px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    `${isEn ? 'Category' : 'ক্যাটাগরি'}: ${categoryTitle} · ${isEn ? '1-Minute Timer Session' : '১ মিনিট টাইমার সেশন'}`,
    width / 2,
    98
  );

  // Divider line
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(60, 126);
  ctx.lineTo(width - 60, 126);
  ctx.stroke();

  // 4. Central Hero IQ Circle Badge
  const centerX = width / 2;
  const centerY = 250;
  const badgeRadius = 90;

  // Outer glowing ring
  ctx.beginPath();
  ctx.arc(centerX, centerY, badgeRadius + 12, 0, Math.PI * 2);
  ctx.fillStyle = glowColor;
  ctx.fill();

  // Badge gradient background
  const badgeGrad = ctx.createLinearGradient(
    centerX - badgeRadius,
    centerY - badgeRadius,
    centerX + badgeRadius,
    centerY + badgeRadius
  );
  badgeGrad.addColorStop(0, '#1e293b');
  badgeGrad.addColorStop(1, '#0f172a');
  ctx.beginPath();
  ctx.arc(centerX, centerY, badgeRadius, 0, Math.PI * 2);
  ctx.fillStyle = badgeGrad;
  ctx.fill();

  // Gold / Accent ring border
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 5;
  ctx.stroke();

  // "ESTIMATED IQ" label
  ctx.textAlign = 'center';
  ctx.fillStyle = '#cbd5e1';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '3px';
  ctx.fillText(isEn ? 'ESTIMATED IQ' : 'আনুমানিক আইকিউ', centerX, centerY - 38);
  ctx.letterSpacing = '0px';

  // Giant IQ number
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 68px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`${iq}`, centerX, centerY + 28);

  // Under-score star accents
  ctx.fillStyle = '#fbbf24';
  ctx.font = '16px sans-serif';
  ctx.fillText('★ ★ ★', centerX, centerY + 58);

  // 5. Classification Pill below circle
  const pillY = centerY + 120;
  const pillText = ` ${iqClassification} `;
  ctx.font = 'bold 22px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  const pillMetrics = ctx.measureText(pillText);
  const pillW = Math.max(pillMetrics.width + 50, 320);
  const pillH = 46;

  // Draw rounded pill
  ctx.fillStyle = primaryHue;
  ctx.beginPath();
  ctx.roundRect(centerX - pillW / 2, pillY - pillH / 2, pillW, pillH, 23);
  ctx.fill();

  // Pill border
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Pill text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(pillText, centerX, pillY + 7);

  // 6. Three Metric Cards (Score, Time, Speed)
  const cardY = 460;
  const cardW = 320;
  const cardH = 80;
  const gap = 30;
  const startX = centerX - (cardW * 3 + gap * 2) / 2;

  const avgTimePerQuestion =
    result.totalQuestions > 0 && result.totalTimeSeconds
      ? Math.round(result.totalTimeSeconds / result.totalQuestions)
      : 25;

  const metricsData = [
    {
      title: isEn ? 'Score & Accuracy' : 'স্কোর ও সঠিকতা',
      value: `${result.scoreRatio} (${result.percentage}%)`,
      color: '#38bdf8'
    },
    {
      title: isEn ? 'Total Time Spent' : 'মোট ব্যয়িত সময়',
      value: `${result.totalTimeSeconds || 45}s`,
      color: '#c084fc'
    },
    {
      title: isEn ? 'Average Speed' : 'প্রশ্ন প্রতি গড় সময়',
      value: `${avgTimePerQuestion}s / ${isEn ? 'Question' : 'প্রশ্ন'}`,
      color: '#34d399'
    }
  ];

  metricsData.forEach((m, idx) => {
    const x = startX + idx * (cardW + gap);

    // Card background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.roundRect(x, cardY, cardW, cardH, 16);
    ctx.fill();

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Text inside card
    ctx.textAlign = 'center';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
    ctx.fillText(m.title, x + cardW / 2, cardY + 28);

    ctx.fillStyle = m.color;
    ctx.font = 'extrabold 22px "Plus Jakarta Sans", "Hind Siliguri", sans-serif';
    ctx.fillText(m.value, x + cardW / 2, cardY + 60);
  });

  // 7. Analysis & Cognitive Assessment Paragraph
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e2e8f0';
  ctx.font = '15px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';

  const descLines = wrapText(ctx, iqDesc, 960);
  let textY = 580;
  descLines.slice(0, 3).forEach((line) => {
    ctx.fillText(line, centerX, textY);
    textY += 24;
  });

  // 8. Footer Section: Verified Seal, Date, Website
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(60, 668);
  ctx.lineTo(width - 60, 668);
  ctx.stroke();

  // Bottom left: Verified Seal
  ctx.textAlign = 'left';
  ctx.fillStyle = '#10b981';
  ctx.font = 'bold 14px "Plus Jakarta Sans", "Hind Siliguri", sans-serif';
  ctx.fillText('✔ VERIFIED COGNITIVE EVALUATION', 60, 700);

  // Bottom center: Completion date
  const now = new Date();
  const dateStr = now.toLocaleDateString(isEn ? 'en-US' : 'bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  ctx.textAlign = 'center';
  ctx.fillStyle = '#94a3b8';
  ctx.font = '13px "Hind Siliguri", "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`${isEn ? 'Evaluated on' : 'মূল্যায়ন তারিখ'}: ${dateStr}`, centerX, 700);

  // Bottom right: Domain
  ctx.textAlign = 'right';
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Quiz Zone BD · Brain & Riddles', width - 60, 700);

  return canvas.toDataURL('image/png');
}

/**
 * Triggers direct download of the IQ card PNG image
 */
export async function downloadIQCardImage(
  result: QuizResult,
  lang: Language
): Promise<void> {
  const dataUrl = await generateIQCardDataUrl(result, lang);
  const link = document.createElement('a');
  const catSlug = (result.categoryId || 'quiz').replace(/[^a-zA-Z0-9_-]/g, '_');
  const iq = result.estimatedIQ || 110;
  link.download = `QuizZoneBD_IQ_${iq}_${catSlug}.png`;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
