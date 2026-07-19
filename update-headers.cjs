const fs = require('fs');
let css = fs.readFileSync('src/styles/global.css', 'utf8');

const replacements = [
  // 1. .services__intro
  {
    search: /\.services__intro \{\n\s+display: flex;\n\s+flex-direction: column;\n\s+align-items: flex-start;\n\s+width: 100%;\n\s+margin-bottom: 2\.875rem;\n\s+\}/g,
    replace: '.services__intro {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 2.875rem;\n}'
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
    replace: '.why__title {\n    width: min(100%, 35.5rem);\n    margin-bottom: 3rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n  }'
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
  // 4. .offer__card h2
  {
    search: /\.offer__card h2 \{[\s\S]*?\}/g,
    replace: '.offer__card h2 {\n  position: absolute;\n  top: 6.25rem;\n  left: var(--offer-card-inset);\n  width: 21.5rem;\n  margin: 0;\n  color: var(--color-offer-card-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  line-height: 1.05;\n  text-align: left;\n}'
  },
  // 5. .projects__header
  {
    search: /\.projects__header \{\n\s+display: flex;\n\s+align-items: flex-end;\n\s+justify-content: space-between;\n\s+width: 100%;\n\s+margin-bottom: 1\.25rem;\n\s+\}/g,
    replace: '.projects__header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 1.25rem;\n}'
  }
];

replacements.forEach(({ search, replace }) => {
  css = css.replace(search, replace);
});

fs.writeFileSync('src/styles/global.css', css);
console.log('Updated global.css');
