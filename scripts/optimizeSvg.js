// scripts/optimizeSvg.js
const fs = require('fs').promises;
const path = require('path');
const { optimize } = require('svgo');

const inputDir = path.join(__dirname, '../public/icons');

async function optimizeSvgFiles() {
  try {
    const files = await fs.readdir(inputDir);
    
    for (const file of files) {
      if (file.endsWith('.svg')) {
        const filePath = path.join(inputDir, file);
        const svgString = await fs.readFile(filePath, 'utf8');
        
        const result = optimize(svgString, {
          path: filePath,
          multipass: true
        });
        
        await fs.writeFile(filePath, result.data);
        console.log(`Optimized: ${file}`);
      }
    }
  } catch (error) {
    console.error('Error optimizing SVG files:', error);
  }
}

optimizeSvgFiles();