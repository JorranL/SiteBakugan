import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rota de listagem com filtros
app.get('/api/cards', (req, res) => {
  const { faction, type, search } = req.query;
  let query = 'SELECT * FROM cards WHERE 1=1';
  const params = [];

  if (faction && faction !== 'Todas') {
    query += ' AND faction = ?';
    params.push(faction);
  }
  if (type && type !== 'Todos') {
    query += ' AND type = ?';
    params.push(type);
  }
  if (search) {
    query += ' AND name LIKE ?';
    params.push(`%${search}%`);
  }

  const stmt = db.prepare(query);
  const cards = stmt.all(...params);
  res.json(cards);
});

// Rota por ID
app.get('/api/cards/:id', (req, res) => {
  const stmt = db.prepare('SELECT * FROM cards WHERE id = ?');
  const card = stmt.get(req.params.id);
  if (!card) return res.status(404).json({ error: 'Carta não encontrada' });
  res.json(card);
});

app.listen(PORT, () => {
  console.log(`Backend SQLite rodando em http://localhost:${PORT}`);
});