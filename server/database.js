import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database(path.join(__dirname, 'bakugan.db'));

// Cria a tabela de cartas se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,      -- 'personagem' ou 'deck'
    type TEXT NOT NULL,          -- 'Bakugan', 'Action', 'Hero', 'Flip', 'Evo'
    faction TEXT NOT NULL,       -- 'Pyrus', 'Aquos', 'Ventus', 'Haos', 'Darkus', 'Aurelus'
    energy_cost INTEGER DEFAULT 0,
    b_power INTEGER DEFAULT 0,
    damage INTEGER DEFAULT 0,
    effect TEXT,
    image_url TEXT
  )
`);

export default db;