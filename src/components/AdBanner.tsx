import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  label?: string;
  className?: string;
  refreshKey?: string | number;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  label = 'বিজ্ঞাপন',
  className = '',
  refreshKey
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous iframe
    containerRef.current.innerHTML = '';

    const iframe = document.createElement('iframe');
    iframe.width = '320';
    iframe.height = '50';
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.style.margin = '0 auto';
    iframe.scrolling = 'no';
    iframe.title = 'বিজ্ঞাপন';

    const adHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: transparent; display: flex; justify-content: center; align-items: center; overflow: hidden; height: 50px; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : 'd28feeec059bc52b8ae7bebb3445b784',
      'format' : 'iframe',
      'height' : 50,
      'width' : 320,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://bicea.org/22/d28feeec059bc52b8ae7bebb3445b784"></script>
</body>
</html>`;

    iframe.srcdoc = adHtml;
    containerRef.current.appendChild(iframe);
  }, [refreshKey]);

  return (
    <div className={`my-3 flex flex-col items-center justify-center ${className}`}>
      {label && (
        <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase mb-0.5">
          {label}
        </span>
      )}
      <div
        ref={containerRef}
        className="w-[320px] h-[50px] bg-slate-50 border border-slate-200/80 rounded-md overflow-hidden flex items-center justify-center shadow-2xs"
      />
    </div>
  );
};
