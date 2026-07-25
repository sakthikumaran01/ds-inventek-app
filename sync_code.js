const fs = require('fs');
const path = require('path');

const srcProjectDir = __dirname;
const destProjectDir = "C:\\Projects\\ds-inventek-app";

if (!fs.existsSync(destProjectDir)) {
  console.log(`Error: Destination directory ${destProjectDir} does not exist.`);
  process.exit(1);
}

// Helper to copy file ensuring directory exists
function copyFile(relPath) {
  const src = path.join(srcProjectDir, relPath);
  const dest = path.join(destProjectDir, relPath);
  
  if (fs.existsSync(src)) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`Synced: ${relPath}`);
  } else {
    console.log(`Warning: Source file not found: ${relPath}`);
  }
}

const filesToSync = [
  'data/content.json',
  'app/page.module.css',
  'app/page.jsx',
  'app/about/page.jsx',
  'app/careers/page.jsx',
  'app/contact/page.jsx',
  'app/courses/page.jsx',
  'app/courses/[slug]/page.jsx',
  'app/services/page.jsx',
  'app/services/[slug]/page.jsx',
  'components/CourseCard.jsx',
  'components/CoursesGrid.jsx',
  'components/Navbar.jsx',
  'components/Footer.jsx',
  'components/Testimonials.jsx',
  'components/EnrollmentModal.jsx',
  'components/CourseDetailClient.jsx',
  'public/images/homescreen.jpeg',
  'public/images/appreciation1.jpeg',
  'public/images/appreciation2.jpeg',
  'public/images/appreciation3.jpeg'
];

console.log("Starting code sync to Projects folder...");
filesToSync.forEach(copyFile);
console.log("Sync completed!");
