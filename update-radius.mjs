import fs from 'fs';
const path = 'src/styles/global.css';
let css = fs.readFileSync(path, 'utf8');

// Match lines like: border-radius: 64px 250px 0 0; or border-radius: 2.5rem 10rem 0 0;
// We ignore lines that already use var(--card-radius-top-left)
// We also want to skip symmetrical small radii if any, but the prompt says "applied across".
// The regex: border-radius:\s+[0-9a-zA-Z\.]+\s+[0-9a-zA-Z\.]+\s+0\s+0;
css = css.replace(/border-radius:\s+([0-9a-zA-Z\.]+)\s+([0-9a-zA-Z\.]+)\s+0\s+0;/g, (match, p1, p2) => {
  if (match.includes('var(')) return match; // skip if already has var
  console.log(`Replacing: ${match}`);
  return 'border-radius: var(--card-radius-top-left) var(--card-radius-top-right) 0 0;';
});

// There is also: border-radius: 1.5rem 5.5rem 0 0;
// Wait, is there any other asymmetric pattern? like 1.25rem 4.5rem 0 0;
// The regex catches them.

fs.writeFileSync(path, css);
console.log('Replaced custom radii');
