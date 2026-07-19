const fs = require('fs');
let css = fs.readFileSync('src/styles/global.css', 'utf8');

const replacements = [
  // 1. .services__intro layout
  {
    search: /\.services__intro \{\n\s+display: flex;\n\s+flex-direction: column;\n\s+align-items: center;\n\s+text-align: center;\n\s+width: 100%;\n\s+margin-bottom: 2\.875rem;\n\s+\}/g,
    replace: '.services__intro {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  margin-bottom: 2.875rem;\n}'
  },
  // 2. .why__title h2 color (desktop base)
  {
    search: /\.why__title h2 \{\n\s+width: 100%;\n\s+color: var\(--color-why-text, var\(--color-text\)\);\n\s+font-family: var\(--section-title-font\);\n\s+font-size: var\(--section-title-size\);\n\s+line-height: 1\.15;\n\}/g,
    replace: '.why__title h2 {\n  width: 100%;\n  color: var(--color-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  line-height: 1.15;\n}'
  },
  // 3. .why__title layout (mobile)
  {
    search: /\.why__title \{\n\s+width: min\(100%, 35\.5rem\);\n\s+margin-bottom: 3rem;\n\s+display: flex;\n\s+flex-direction: column;\n\s+align-items: center;\n\s+text-align: center;\n\s+\}/g,
    replace: '.why__title {\n    width: min(100%, 35.5rem);\n    margin-bottom: 3rem;\n  }'
  },
  // 4. .why__title h2 color (mobile)
  {
    search: /\.why__title h2 \{\n\s+width: 100%;\n\s+color: var\(--color-why-text, var\(--color-text\)\);\n\s+font-family: var\(--section-title-font\);\n\s+font-size: var\(--section-title-size\);\n\s+line-height: 1\.15;\n\}/g,
    replace: '.why__title h2 {\n  width: 100%;\n  color: var(--color-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  line-height: 1.15;\n}'
  },
  // 5. .offer__card h2 color and text-align
  {
    search: /\.offer__card h2 \{\n\s+position: absolute;\n\s+top: 6\.25rem;\n\s+left: var\(--offer-card-inset\);\n\s+width: 21\.5rem;\n\s+margin: 0;\n\s+color: var\(--color-offer-card-text\);\n\s+font-family: var\(--section-title-font\);\n\s+font-size: var\(--section-title-size\);\n\s+line-height: 1\.05;\n\s+text-align: left;\n\}/g,
    replace: '.offer__card h2 {\n  position: absolute;\n  top: 6.25rem;\n  left: var(--offer-card-inset);\n  width: 21.5rem;\n  margin: 0;\n  color: var(--color-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  line-height: 1.05;\n}'
  },
  // 5b. .offer__card h2 mobile
  {
    search: /\.offer__card h2 \{\n\s+position: absolute;\n\s+top: 6\.25rem;\n\s+left: var\(--offer-card-inset\);\n\s+width: 21\.5rem;\n\s+margin: 0;\n\s+color: var\(--color-offer-card-text\);\n\s+font-family: var\(--section-title-font\);\n\s+font-size: var\(--section-title-size\);\n\s+line-height: 1\.05;\n\s+text-align: left;\n\}/g,
    replace: '.offer__card h2 {\n  position: absolute;\n  top: 6.25rem;\n  left: var(--offer-card-inset);\n  width: 21.5rem;\n  margin: 0;\n  color: var(--color-text);\n  font-family: var(--section-title-font);\n  font-size: var(--section-title-size);\n  line-height: 1.05;\n}'
  },
  // 6. .blog-grid-section__header layout
  {
    search: /\.blog-grid-section__header \{\n\s+margin-bottom: 3\.5rem;\n\s+text-align: center;\n\s+display: flex;\n\s+flex-direction: column;\n\s+align-items: center;\n\s+\}/g,
    replace: '.blog-grid-section__header {\n  margin-bottom: 3.5rem;\n}'
  },
  // 7. .projects__head and .blog__head layout
  {
    search: /\.projects__head,\n\.blog__head \{\n\s+display: flex;\n\s+flex-direction: column;\n\s+align-items: center;\n\s+text-align: center;\n\s+gap: 1rem;\n\s+width: min\(100%, 58rem\);\n\}/g,
    replace: '.projects__head,\n.blog__head {\n  display: grid;\n  gap: 1rem;\n  width: min(100%, 58rem);\n}'
  },
  // 8. .projects__head layout
  {
    search: /\.projects__head \{\n\s+width: 100%;\n\}/g,
    replace: '.projects__head {\n  grid-template-columns: 1fr auto;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}'
  }
];

replacements.forEach(({ search, replace }) => {
  css = css.replace(search, replace);
});

fs.writeFileSync('src/styles/global.css', css);
console.log('Reverted layout and colors');
