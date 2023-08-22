const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  // Instead of /CustomElements/ put your project name - just check a dist folder to see how its formatted and make it that way
  const files = [
    './dist/test-project/runtime.js',
    './dist/test-project/polyfills.js',
    './dist/test-project/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/test-project.js');
  await fs.copyFile(
    './dist/test-project/styles.css',
    'elements/styles.css'
  );
})();