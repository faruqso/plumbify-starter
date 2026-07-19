const fs = require('fs');
let css = fs.readFileSync('src/styles/global.css', 'utf8');

const replacements = [
  // 1. .services__intro
  {
    search: /align-items: flex-start;(\s+)width: 100%;(\s+)margin-bottom: 2.875rem;/g,
    replace: 'align-items: center;$1text-align: center;$2width: 100%;$3margin-bottom: 2.875rem;'
  },
  {
    search: /\.services__intro h2 \{[\s\S]*?\}/g,
    replace: '.services__intro h2 {\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  max-width: 48ch;\n  margin: 0;\n}'
  },
  // 2. .why__title h2
  {
    search: /\.why__title h2 \{[\s\S]*?\}/g,
    replace: '.why__title h2 {\n  width: 100%;\n  color: var(--color-why-text, var(--color-text));\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  line-height: 1.15;\n}'
  },
  {
    search: /\.why__title \{\n\s+width: min\(100%, 35\.5rem\);\n\s+margin-bottom: 3rem;\n\s+\}/g,
    replace: '.why__title {\n    width: min(100%, 35.5rem);\n    margin-bottom: 3rem;\n    text-align: center;\n    align-items: center;\n  }'
  },
  // 3. .blog-grid-section__header
  {
    search: /\.blog-grid-section__header h2 \{[\s\S]*?\}/g,
    replace: '.blog-grid-section__header h2 {\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  color: var(--color-text);\n  margin-bottom: 1rem;\n}'
  },
  {
    search: /\.blog-grid-section__header \{\n\s+margin-bottom: 3\.5rem;\n\s+\}/g,
    replace: '.blog-grid-section__header {\n  margin-bottom: 3.5rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}'
  },
  // 4. .services-index-list header h2
  {
    search: /\.services-index-list header h2 \{[\s\S]*?\}/g,
    replace: '.services-index-list header h2 {\n  max-width: 13ch;\n  color: var(--color-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}'
  },
  // 5. .case-gallery header h2
  {
    search: /\.case-gallery header h2 \{[\s\S]*?\}/g,
    replace: '.case-gallery header h2 {\n  max-width: 14ch;\n  color: var(--color-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  letter-spacing: -0.04em;\n  line-height: 1;\n}'
  }
];

replacements.forEach(({ search, replace }) => {
  css = css.replace(search, replace);
});

// Remove mobile font-size overrides for these since they use clamps now
css = css.replace(/\.why__title h2 \{[\s\S]*?\}/g, (match) => {
  if (match.includes('clamp(2.25rem, 9vw, 3rem)')) return ''; // strip out the mobile override
  return match;
});

css = css.replace(/\.services-index-list header h2 \{[\s\S]*?\}/g, (match) => {
  if (match.includes('clamp(2.35rem, 6vw, 3.75rem)')) return '';
  return match;
});

fs.writeFileSync('src/styles/global.css', css);
console.log('Updated global.css');
