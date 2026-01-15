// Placeholder image generator for missing images
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Create placeholder SVG
function createPlaceholderSVG(width, height, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#1F51FF"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
      ${text}
    </text>
  </svg>`;
}

// Create placeholder PNG data URL
function createPlaceholderImage(name) {
  const svg = createPlaceholderSVG(400, 552, name);
  return svg;
}

// Ensure directories exist
const dirs = ['stores', 'icons', 'logos', 'images'];
dirs.forEach(dir => {
  const fullPath = path.join(publicDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Create placeholder images
const placeholders = [
  { path: 'stores/braindead.png', text: 'Index 101' },
  { path: 'stores/swati.png', text: 'Index 101' },
  { path: 'stores/snugglehunny.png', text: 'Index 101' },
  { path: 'stores/polysleep.png', text: 'Index 101' },
  { path: 'stores/chubbies.png', text: 'Index 101' },
  { path: 'stores/blendjet.png', text: 'Index 101' },
  { path: 'stores/bobochoses.png', text: 'Index 101' },
  { path: 'stores/ruggable.jpg', text: 'Index 101' },
];

const logoPlaceholders = [
  'braindead-logo', 'swati-logo', 'snugglehunny-logo', 'polysleep-logo',
  'chubbies-logo', 'blendjet-logo', 'bobochoses-logo', 'ruggable-logo'
];

console.log('Creating placeholder images...\n');

placeholders.forEach(item => {
  const svgContent = createPlaceholderImage(item.text);
  const filePath = path.join(publicDir, item.path.replace(/\.(png|jpg)$/, '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Created: ${item.path}`);
});

logoPlaceholders.forEach(logo => {
  const svgContent = createPlaceholderSVG(200, 60, logo.replace('-logo', ''));
  const filePath = path.join(publicDir, 'stores', `${logo}.svg`);
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Created: stores/${logo}.svg`);
});

// Create hero background
const heroBg = `<svg width="1235" height="570" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1F51FF;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#3B18C3;stop-opacity:0.1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <circle cx="400" cy="200" r="150" fill="#1F51FF" opacity="0.1"/>
  <circle cx="800" cy="400" r="200" fill="#3B18C3" opacity="0.1"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'hero-bg.svg'), heroBg);
console.log('✓ Created: hero-bg.svg');

// Create new section images
const sectionImages = [
  { path: 'images/themes-editor.jpg', text: 'Theme Editor', width: 800, height: 600 },
  { path: 'images/integrations-cube.jpg', text: 'Integrations', width: 600, height: 400 },
  { path: 'images/checkout-image.jpg', text: 'Checkout', width: 1200, height: 600 },
];

sectionImages.forEach(item => {
  const svgContent = createPlaceholderSVG(item.width, item.height, item.text);
  const filePath = path.join(publicDir, item.path.replace(/\.jpg$/, '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Created: ${item.path} (as SVG)`);
});

console.log('\n✅ Placeholder generation completed!');
