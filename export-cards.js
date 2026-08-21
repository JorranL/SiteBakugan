import fs from 'fs';
import path from 'path';
import db from './server/database.js';

const cards = db.prepare('SELECT * FROM cards').all();

const outputPath = path.join('public', 'cards.json');
fs.writeFileSync(outputPath, JSON.stringify(cards, null, 2), 'utf-8');

console.log(`Exportado com sucesso: ${cards.length} cartas salvas em public/cards.json!`);