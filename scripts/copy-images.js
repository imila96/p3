// Script to copy images from original HTML folder to Next.js public folder
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', '..', 'Online Storefronts - Index 101_files');
const destDir = path.join(__dirname, '..', 'public');

// Create public directory structure
const dirs = [
  'public',
  'public/stores',
  'public/icons',
  'public/logos'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Image mapping for stores
const storeImages = [
  { src: 'd5c45dcc79a456d883d01f10169f8c4c.png', dest: 'stores/braindead.png' },
  { src: '230931e545a2cdcd8e68e0cffd6507bf.png', dest: 'stores/swati.png' },
  { src: 'be6ed2b7298f0b1bf500a061acb40b9f.png', dest: 'stores/snugglehunny.png' },
  { src: '41c4fc063b41fcc2fece12af28cfb57d.png', dest: 'stores/polysleep.png' },
  { src: 'f14ce710cb7b2d2aaa31a6a621363314.png', dest: 'stores/chubbies.png' },
  { src: 'fc07d589e676784098372cf090cce560.png', dest: 'stores/blendjet.png' },
  { src: 'febbbbee50c008a1cc2e2149022d1aa5.png', dest: 'stores/bobochoses.png' },
  { src: 'd9cfec57dcccd62cf4826d8845793d41.jpg', dest: 'stores/ruggable.jpg' },
];

// Logo mapping
const logoImages = [
  { src: 'bda26a7918e0bfc72234b789cdcf845b.svg', dest: 'stores/braindead-logo.svg' },
  { src: '5de717050754b6455e0481b428ac5b6c.svg', dest: 'stores/swati-logo.svg' },
  { src: '75699f943c30e0d933c85d823b9c9174.svg', dest: 'stores/snugglehunny-logo.svg' },
  { src: '3e419396338c18dd95f57fa8c16f03b5.svg', dest: 'stores/polysleep-logo.svg' },
  { src: '1e1bf7b20921b846b35fb1adce8ab9c7.svg', dest: 'stores/chubbies-logo.svg' },
  { src: 'c34128a97fc0a5193804efeb18340d17.svg', dest: 'stores/blendjet-logo.svg' },
  { src: 'a3de67a6710b04570bbfbb452646abb6.svg', dest: 'stores/bobochoses-logo.svg' },
  { src: '9e5324cee3aad7afe7e91671feab6a88.svg', dest: 'stores/ruggable-logo.svg' },
];

// Copy function
function copyImage(src, dest) {
  const sourcePath = path.join(sourceDir, src);
  const destPath = path.join(__dirname, '..', 'public', dest);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Copied: ${src} -> ${dest}`);
      return true;
    } else {
      console.log(`✗ Source not found: ${src}`);
      return false;
    }
  } catch (error) {
    console.error(`✗ Error copying ${src}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting image copy process...\n');

console.log('Copying store images...');
storeImages.forEach(img => copyImage(img.src, img.dest));

console.log('\nCopying logo images...');
logoImages.forEach(img => copyImage(img.src, img.dest));

console.log('\n✅ Image copy process completed!');
console.log('\nNote: If any images were not found, you may need to:');
console.log('1. Check the source directory path');
console.log('2. Manually copy missing images');
console.log('3. Use placeholder images for development');
