const fs = require('fs');
const path = 'src/styles/global.css';
let css = fs.readFileSync(path, 'utf8');

// Match lines like: border-radius: 64px 250px 0 0; or border-radius: 1.5rem 5.5rem 0 0;
// We ignore lines that already use var(--card-radius-top-left)
css = css.replace(/border-radius:\s+[0-9a-zA-Z\.]+\s+[0-9a-zA-Z\.]+\s+0\s+0;/g, (match) => {
  return 'border-radius: var(--card-radius-top-left) var(--card-radius-top-right) 0 0;';
});

fs.writeFileSync(path, css);
console.log('Replaced custom radii');
