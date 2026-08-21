import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const folders = ['public/Img/Cards/deck', 'public/Img/Cards/personagens'];

async function convertImages() {
  for (const folder of folders) {
    if (!fs.existsSync(folder)) continue;
    const files = fs.readdirSync(folder);

    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(folder, file);
        const outputPath = path.join(folder, `${path.parse(file).name}.webp`);

        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);

        console.log(`Convertido: ${file} -> ${path.parse(file).name}.webp`);
      }
    }
  }
  console.log('Todas as imagens foram convertidas para WebP com sucesso!');
}

convertImages();