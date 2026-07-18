const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'docs', 'Images');
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  'homescreen.jpeg',
  'appreciation1.jpeg',
  'appreciation2.jpeg',
  'appreciation3.jpeg'
];

filesToCopy.forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destFile);
    console.log(`Successfully copied ${file} to public/images/`);
  } else {
    console.log(`Warning: Source file ${file} does not exist in ${srcDir}`);
  }
});
