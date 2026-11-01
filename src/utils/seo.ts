export interface SEOConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: Record<string, unknown>;
}

export function updateSEO({ title, description, canonicalPath, jsonLd }: SEOConfig) {
  // Update document title with Quiz Zone
  document.title = `${title} | Quiz Zone`;

  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // Update og:title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${title} | Quiz Zone`);

  // Update og:description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  // Update twitter:title and twitter:description
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', `${title} | Quiz Zone`);

  let twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', description);

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  const baseUrl = window.location.origin;
  const path = canonicalPath || window.location.search || '/';
  canonical.setAttribute('href', `${baseUrl}${path}`);

  // Update dynamic JSON-LD structured data
  const existingScript = document.getElementById('dynamic-quiz-jsonld');
  if (existingScript) {
    existingScript.remove();
  }

  if (jsonLd) {
    const script = document.createElement('script');
    script.id = 'dynamic-quiz-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
