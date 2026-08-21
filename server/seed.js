import db from './database.js';

// Limpa a tabela para recriar com os dados atualizados
db.exec('DELETE FROM cards');
try {
  db.exec("DELETE FROM sqlite_sequence WHERE name = 'cards'");
} catch (e) {
  // Ignora caso a tabela sqlite_sequence ainda não exista
}

const insertCard = db.prepare(`
  INSERT INTO cards (name, category, type, faction, energy_cost, b_power, damage, effect, image_url)
  VALUES (@name, @category, @type, @faction, @energy_cost, @b_power, @damage, @effect, @image_url)
`);

const cardsData = [
  // ================= CARTAS DE PERSONAGEM =================

  // ================= CARTAS 1 A 15 (Gen-3 1 a 15) =================
  { name: 'Aquos Blast', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 6, b_power: 0, damage: 9, effect: '', image_url: 'Img/Cards/deck/Gen-3 1.webp' },
  { name: 'Aquos Breath', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 3, b_power: 200, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 2.webp' },
  { name: 'Clone Army', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 3.webp' },
  { name: 'Elemental Storm', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 8, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 4.webp' },
  { name: 'Hydro Barrage', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 3, b_power: 500, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 5.webp' },
  { name: 'Liqui Darts', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 3, b_power: 400, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 6.webp' },
  { name: 'Ninja Gear', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 0, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 7.webp' },
  { name: 'Raging Seas', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 4, b_power: 0, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 8.webp' },
  { name: 'Sinkhole', category: 'deck', type: 'Action', faction: 'Aquos', energy_cost: 4, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 9.webp' },
  { name: 'Avalanche', category: 'deck', type: 'Action', faction: 'Aurelus', energy_cost: 2, b_power: 200, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 10.webp' },
  { name: 'Bodybreaker', category: 'deck', type: 'Action', faction: 'Aurelus', energy_cost: 2, b_power: 300, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 11.webp' },
  { name: 'Parasitic Power', category: 'deck', type: 'Action', faction: 'Aurelus', energy_cost: 6, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 12.webp' },
  { name: 'Phoenix Fire', category: 'deck', type: 'Action', faction: 'Aurelus', energy_cost: 3, b_power: 0, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 13.webp' },
  { name: 'Anchor Strike', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 0, b_power: 0, damage: -2, effect: '', image_url: 'Img/Cards/deck/Gen-3 14.webp' },
  { name: 'Chaos Maximus', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 6, b_power: 0, damage: 20, effect: '', image_url: 'Img/Cards/deck/Gen-3 15.webp' },
// ================= CARTAS 16 A 30 (Gen-3 16 a 30) =================
  { name: 'Darkus Blast', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 6, b_power: 1200, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 16.webp' },
  { name: 'Hack Attack', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 4, b_power: 0, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 17.webp' },
  { name: 'Might of Darkness', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 3, b_power: 500, damage: 2, effect: '', image_url: 'Img/Cards/deck/Gen-3 18.webp' },
  { name: 'Nova Burst', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 3, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 19.webp' },
  { name: 'Thunder Storm', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 1, b_power: 200, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 20.webp' },
  { name: 'Wipe Mind', category: 'deck', type: 'Action', faction: 'Darkus', energy_cost: 2, b_power: 0, damage: -3, effect: '', image_url: 'Img/Cards/deck/Gen-3 21.webp' },
  { name: 'Dawn Wave', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 4, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 22.webp' },
  { name: 'Growing Giant', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 6, b_power: 900, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 23.webp' },
  { name: 'Haos Laser', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 4, b_power: 800, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 24.webp' },
  { name: 'Haos Suplex', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 3, b_power: 0, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 25.webp' },
  { name: 'Instant Vortex', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 3, b_power: 400, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 26.webp' },
  { name: 'Ray of Freedom', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 2, b_power: 0, damage: 3, effect: '', image_url: 'Img/Cards/deck/Gen-3 27.webp' },
  { name: 'Shadow Skeleton', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 3, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 28.webp' },
  { name: 'Shining Light', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 3, b_power: 0, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 29.webp' },
  { name: 'Sonic Chain', category: 'deck', type: 'Action', faction: 'Haos', energy_cost: 5, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 30.webp' },
  // ================= CARTAS 31 A 45 (Gen-3 31 a 45) =================
  { name: 'Fire Wing Blast', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 1, b_power: 0, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 31.webp' },
  { name: 'Energy Drain', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 5, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 32.webp' },
  { name: 'Inferno Cannon', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 4, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 33.webp' },
  { name: 'Fire Storm', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 4, b_power: 0, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 34.webp' },
  { name: 'Heat', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 1, b_power: 200, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 35.webp' },
  { name: 'Hypno Flash', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 5, b_power: 700, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 36.webp' },
  { name: 'Lava Spray', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 1, b_power: 0, damage: 2, effect: '', image_url: 'Img/Cards/deck/Gen-3 37.webp' },
  { name: 'Wildfire', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 3, b_power: 400, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 38.webp' },
  { name: 'Wreathed in Flame', category: 'deck', type: 'Action', faction: 'Pyrus', energy_cost: 2, b_power: 0, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 39.webp' },
  { name: 'AtmosFEAR', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 8, b_power: 0, damage: 12, effect: '', image_url: 'Img/Cards/deck/Gen-3 40.webp' },
  { name: 'Crescent Claw', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 5, b_power: 0, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 41.webp' },
  { name: 'Gaia Force', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 4, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 42.webp' },
  { name: 'Optic Beam', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 5, b_power: -500, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 43.webp' },
  { name: 'Regrowth', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 2, b_power: 0, damage: 3, effect: '', image_url: 'Img/Cards/deck/Gen-3 44.webp' },
  { name: 'Wild Roar', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 1, b_power: -300, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 45.webp' },
  // ================= CARTAS 46 A 50 (Gen-3 46 a 50) =================
  { name: 'Sleep Wave', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 3, b_power: 0, damage: -4, effect: '', image_url: 'Img/Cards/deck/Gen-3 46.webp' },
  { name: 'Tusk Guard', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 6, b_power: -800, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 47.webp' },
  { name: 'Ventus Body Slam', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 4, b_power: -900, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 48.webp' },
  { name: 'Ventus Charge', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 1, b_power: 0, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 49.webp' },
  { name: 'Ventus Trap', category: 'deck', type: 'Action', faction: 'Ventus', energy_cost: 5, b_power: -600, damage: 10, effect: '', image_url: 'Img/Cards/deck/Gen-3 50.webp' },
// ================= CARTAS 51 A 65 (Gen-3 51 a 65 - Flips) =================
  { name: 'Mysterious Mist', category: 'deck', type: 'Flip', faction: 'Aquos', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 51.webp' },
  { name: 'Power Roll', category: 'deck', type: 'Flip', faction: 'Aquos', energy_cost: 3, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 52.webp' },
  { name: 'Hidden Treasure', category: 'deck', type: 'Flip', faction: 'Aquos', energy_cost: 1, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 53.webp' },
  { name: 'Fierce Charge', category: 'deck', type: 'Flip', faction: 'Aurelus', energy_cost: 3, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 54.webp' },
  { name: 'Vacuum', category: 'deck', type: 'Flip', faction: 'Aurelus', energy_cost: 0, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 55.webp' },
  { name: 'Futility', category: 'deck', type: 'Flip', faction: 'Darkus', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 56.webp' },
  { name: 'Shadow Drain', category: 'deck', type: 'Flip', faction: 'Darkus', energy_cost: 1, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 57.webp' },
  { name: 'Touch of Darkness', category: 'deck', type: 'Flip', faction: 'Darkus', energy_cost: 3, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 58.webp' },
  { name: 'Cubbo Gaze', category: 'deck', type: 'Flip', faction: 'Haos', energy_cost: 1, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 59.webp' },
  { name: 'Nightmare', category: 'deck', type: 'Flip', faction: 'Haos', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 60.webp' },
  { name: 'Cyndeous Shield', category: 'deck', type: 'Flip', faction: 'Pyrus', energy_cost: 5, b_power: 0, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 61.webp' },
  { name: 'Fang Strike', category: 'deck', type: 'Flip', faction: 'Pyrus', energy_cost: 1, b_power: 0, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 62.webp' },
  { name: 'Guard Sphere', category: 'deck', type: 'Flip', faction: 'Pyrus', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 63.webp' },
  { name: 'Greensight', category: 'deck', type: 'Flip', faction: 'Ventus', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 64.webp' },
  { name: 'Stonehide', category: 'deck', type: 'Flip', faction: 'Ventus', energy_cost: 1, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 65.webp' }
];


const insertMany = db.transaction((cards) => {
  for (const card of cards) insertCard.run(card);
});

insertMany(cardsData);
console.log(`Banco populado com sucesso: ${cardsData.length} cartas cadastradas no SQLite!`);