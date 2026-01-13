const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = 'images';
  const outputDir = 'images/webp';

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Get all jpg and png files
  const files = fs.readdirSync(inputDir).filter(file =>
    file.endsWith('.jpg') || file.endsWith('.png')
  );

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace(/\.(jpg|png)$/, '.webp');
    const outputPath = path.join(outputDir, outputFile);

    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath);

    console.log(`Converted ${file} to ${outputFile}`);
  }

  console.log('All images optimized to WebP');
}

optimizeImages().catch(console.error);