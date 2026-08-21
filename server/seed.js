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
  { name: 'Stonehide', category: 'deck', type: 'Flip', faction: 'Ventus', energy_cost: 1, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 65.webp' },
// ================= CARTAS 66 A 80 (Gen-3 66 a 80) =================
  { name: 'Ventus Web Whip', category: 'deck', type: 'Flip', faction: 'Ventus', energy_cost: 2, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 66.webp' },
  { name: 'Shun', category: 'deck', type: 'Hero', faction: 'Aquos', energy_cost: 5, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 67.webp' },
  { name: 'Magnus, Living Arm of Tiko', category: 'deck', type: 'Hero', faction: 'Aurelus', energy_cost: 3, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 68.webp' },
  { name: 'Magnus, Ultimate Rival', category: 'deck', type: 'Hero', faction: 'Darkus', energy_cost: 5, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 69.webp' },
  { name: 'Lightning', category: 'deck', type: 'Hero', faction: 'Darkus', energy_cost: 2, b_power: 100, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 70.webp' },
  { name: 'Lia', category: 'deck', type: 'Hero', faction: 'Haos', energy_cost: 4, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 71.webp' },
  { name: 'Dee', category: 'deck', type: 'Hero', faction: 'Haos', energy_cost: 2, b_power: 0, damage: 2, effect: '', image_url: 'Img/Cards/deck/Gen-3 72.webp' },
  { name: 'Benton Dusk', category: 'deck', type: 'Hero', faction: 'Aquos', energy_cost: 5, b_power: 0, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 73.webp' },
  { name: 'Dan Kouzo', category: 'deck', type: 'Hero', faction: 'Pyrus', energy_cost: 5, b_power: 0, damage: 0, effect: '', image_url: 'Img/Cards/deck/Gen-3 74.webp' },
  { name: 'Wynton', category: 'deck', type: 'Hero', faction: 'Ventus', energy_cost: 6, b_power: 0, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 75.webp' },
  { name: 'Aay', category: 'deck', type: 'Hero', faction: 'Ventus', energy_cost: 3, b_power: 0, damage: -1, effect: '', image_url: 'Img/Cards/deck/Gen-3 76.webp' },
  { name: 'Fade Ninja', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 7, b_power: 1800, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 77.webp' },
  { name: 'Vicerox', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 3, b_power: 700, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 78.webp' },
  { name: 'Hyper Cloptor Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 3, b_power: 800, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 79.webp' },
  { name: 'Hyper Cubbo', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 2, b_power: 300, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 80.webp' },
// ================= CARTAS 81 A 95 (Gen-3 81 a 95 - Evos) =================
  { name: 'Hyper Cyndeous', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 2, b_power: 700, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 81.webp' },
  { name: 'Hyper Nobillious Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 3, b_power: 700, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 82.webp' },
  { name: 'Hyper Phaedrus Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 2, b_power: 600, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 83.webp' },
  { name: 'Hyper Pyravian Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 1, b_power: 600, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 84.webp' },
  { name: 'Hyper Trhyno', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 3, b_power: 500, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 85.webp' },
  { name: 'Titan Fangzor Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 5, b_power: 600, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 86.webp' },
  { name: 'Titan Hydranoid', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 6, b_power: 1000, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 87.webp' },
  { name: 'Titan Vicerox Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 5, b_power: 900, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 88.webp' },
  { name: 'Titan Webam Ultra', category: 'deck', type: 'Evo', faction: 'Aquos', energy_cost: 4, b_power: 700, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 89.webp' },
  { name: 'Trhyno', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 1, b_power: 400, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 90.webp' },
  { name: 'Hyper Goreene Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 4, b_power: 700, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 91.webp' },
  { name: 'Hyper Lupitheon Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 3, b_power: 500, damage: 9, effect: '', image_url: 'Img/Cards/deck/Gen-3 92.webp' },
  { name: 'Hyper Phaedrus Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 3, b_power: 800, damage: 2, effect: '', image_url: 'Img/Cards/deck/Gen-3 93.webp' },
  { name: 'Hyper Skorporos', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 3, b_power: 800, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 94.webp' },
  { name: 'Hyper Vicerox', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 2, b_power: 600, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 95.webp' },
// ================= CARTAS 96 A 110 (Gen-3 96 a 110 - Evos) =================
  { name: 'Hyper Vicerox Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 3, b_power: 700, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 96.webp' },
  { name: 'Maximus Goreene Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 10, b_power: 1600, damage: 12, effect: '', image_url: 'Img/Cards/deck/Gen-3 97.webp' },
  { name: 'Titan Cubbo', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 4, b_power: 900, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 98.webp' },
  { name: 'Titan Gorthion Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 5, b_power: 1200, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 99.webp' },
  { name: 'Titan Hydranoid Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 4, b_power: 200, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 100.webp' },
  { name: 'Titan Nobillious Ultra', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 6, b_power: 700, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 101.webp' },
  { name: 'Titan Zentaur', category: 'deck', type: 'Evo', faction: 'Aurelus', energy_cost: 5, b_power: 1200, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 102.webp' },
  { name: 'Cloptor', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 4, b_power: 700, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 103.webp' },
  { name: 'Phaedrus Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 8, b_power: 1800, damage: 9, effect: '', image_url: 'Img/Cards/deck/Gen-3 104.webp' },
  { name: 'Skorporos', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 4, b_power: 500, damage: 12, effect: '', image_url: 'Img/Cards/deck/Gen-3 105.webp' },
  { name: 'Hyper Cubbo', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 2, b_power: 400, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 106.webp' },
  { name: 'Hyper Kelion Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 4, b_power: 700, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 107.webp' },
  { name: 'Hyper Krakelios Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 3, b_power: 800, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 108.webp' },
  { name: 'Hyper Skorporos Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 4, b_power: 1200, damage: 2, effect: '', image_url: 'Img/Cards/deck/Gen-3 109.webp' },
  { name: 'Hyper Trhyno', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 3, b_power: 600, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 110.webp' },
// ================= CARTAS 111 A 125 (Gen-3 111 a 125 - Evos) =================
  { name: 'Hyper Trunkanious Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 2, b_power: 700, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 111.webp' },
  { name: 'Hyper Vicerox', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 4, b_power: 900, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 112.webp' },
  { name: 'Hyper Webam Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 3, b_power: 500, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 113.webp' },
  { name: 'Hyper Zentaur', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 3, b_power: 500, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 114.webp' },
  { name: 'Maximus Lupitheon Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 7, b_power: 1000, damage: 10, effect: '', image_url: 'Img/Cards/deck/Gen-3 115.webp' },
  { name: 'Maximus Nillious Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 6, b_power: 1000, damage: 10, effect: '', image_url: 'Img/Cards/deck/Gen-3 116.webp' },
  { name: 'Titan Gorthion', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 5, b_power: 800, damage: 9, effect: '', image_url: 'Img/Cards/deck/Gen-3 117.webp' },
  { name: 'Titan Hydranoid Ultra', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 6, b_power: 800, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 118.webp' },
  { name: 'Titan Phaedrus', category: 'deck', type: 'Evo', faction: 'Darkus', energy_cost: 6, b_power: 1100, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 119.webp' },
  { name: 'Hyper Cloptor Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 6, b_power: 800, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 120.webp' },
  { name: 'Hyper Cubbo', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 2, b_power: 500, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 121.webp' },
  { name: 'Hyper Dragonoid Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 3, b_power: 1000, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 122.webp' },
  { name: 'Hyper Gorthion', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 3, b_power: 800, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 123.webp' },
  { name: 'Hyper Hydranoid', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 2, b_power: 800, damage: 3, effect: '', image_url: 'Img/Cards/deck/Gen-3 124.webp' },
  { name: 'Hyper Lupitheon Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 3, b_power: 700, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 125.webp' },
// ================= CARTAS 126 A 140 (Gen-3 126 a 140 - Evos) =================
  { name: 'Hyper Phaedrus', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 3, b_power: 800, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 126.webp' },
  { name: 'Hyper Turtonium', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 2, b_power: 400, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 127.webp' },
  { name: 'Hyper Vicerox', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 2, b_power: 800, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 128.webp' },
  { name: 'Titan Nobillious Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 4, b_power: 900, damage: 3, effect: '', image_url: 'Img/Cards/deck/Gen-3 129.webp' },
  { name: 'Titan Pandoxx Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 4, b_power: 800, damage: 3, effect: '', image_url: 'Img/Cards/deck/Gen-3 130.webp' },
  { name: 'Titan Trhyno', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 6, b_power: 1100, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 131.webp' },
  { name: 'Titan Turtanium Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 4, b_power: 500, damage: 10, effect: '', image_url: 'Img/Cards/deck/Gen-3 132.webp' },
  { name: 'Titan Vicerox Ultra', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 5, b_power: 900, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 133.webp' },
  { name: 'Titan Zentaur', category: 'deck', type: 'Evo', faction: 'Haos', energy_cost: 4, b_power: 400, damage: 12, effect: '', image_url: 'Img/Cards/deck/Gen-3 134.webp' },
  { name: 'Kelion Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 9, b_power: 500, damage: 15, effect: '', image_url: 'Img/Cards/deck/Gen-3 135.webp' },
  { name: 'Hyper Nillious', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 3, b_power: 700, damage: 3, effect: '', image_url: 'Img/Cards/deck/Gen-3 136.webp' },
  { name: 'Hyper Nillious Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 3, b_power: 600, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 137.webp' },
  { name: 'Hyper Phaedrus', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 3, b_power: 600, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 138.webp' },
  { name: 'Hyper Pyravian Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 1, b_power: 400, damage: 4, effect: '', image_url: 'Img/Cards/deck/Gen-3 139.webp' },
  { name: 'Hyper Trhyno', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 2, b_power: 500, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 140.webp' },
// ================= CARTAS 141 A 155 (Gen-3 141 a 155 - Evos) =================
  { name: 'Hyper Vicerox', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 2, b_power: 300, damage: 9, effect: '', image_url: 'Img/Cards/deck/Gen-3 141.webp' },
  { name: 'Hyper Vicerox Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 2, b_power: 700, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 142.webp' },
  { name: 'Hyper Zentaur', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 2, b_power: 600, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 143.webp' },
  { name: 'Titan Cyndeous', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 4, b_power: 900, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 144.webp' },
  { name: 'Titan Hydranoid Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 4, b_power: 1200, damage: 2, effect: '', image_url: 'Img/Cards/deck/Gen-3 145.webp' },
  { name: 'Titan Nobillious Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 5, b_power: 1000, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 146.webp' },
  { name: 'Titan Phaedrus Ultra', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 6, b_power: 1100, damage: 11, effect: '', image_url: 'Img/Cards/deck/Gen-3 147.webp' },
  { name: 'Titan Skorporos', category: 'deck', type: 'Evo', faction: 'Pyrus', energy_cost: 4, b_power: 700, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 148.webp' },
  { name: 'Hyper Cubbo', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 2, b_power: 600, damage: 7, effect: '', image_url: 'Img/Cards/deck/Gen-3 149.webp' },
  { name: 'Hyper Cyndeous', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 3, b_power: 400, damage: 10, effect: '', image_url: 'Img/Cards/deck/Gen-3 150.webp' },
  { name: 'Hyper Dragonoid Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 3, b_power: 900, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 151.webp' },
  { name: 'Hyper Lupitheon Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 2, b_power: 500, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 152.webp' },
  { name: 'Hyper Phaedrus', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 1, b_power: 500, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 153.webp' },
  { name: 'Hyper Pyravian Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 3, b_power: 700, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 154.webp' },
  { name: 'Hyper Skorporos Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 2, b_power: 600, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 155.webp' },
// ================= CARTAS 156 A 161 (Gen-3 156 a 161 - Evos) =================
  { name: 'Maximus Hydranoid Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 8, b_power: 2200, damage: 1, effect: '', image_url: 'Img/Cards/deck/Gen-3 156.webp' },
  { name: 'Titan Fade Ninja', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 4, b_power: 900, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 157.webp' },
  { name: 'Titan Phaedrus Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 4, b_power: 1000, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 158.webp' },
  { name: 'Titan Trunkanious Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 6, b_power: 900, damage: 8, effect: '', image_url: 'Img/Cards/deck/Gen-3 159.webp' },
  { name: 'Titan Vicerox Ultra', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 6, b_power: 600, damage: 5, effect: '', image_url: 'Img/Cards/deck/Gen-3 160.webp' },
  { name: 'Titan Zentaur', category: 'deck', type: 'Evo', faction: 'Ventus', energy_cost: 5, b_power: 900, damage: 6, effect: '', image_url: 'Img/Cards/deck/Gen-3 161.webp' }
];


const insertMany = db.transaction((cards) => {
  for (const card of cards) insertCard.run(card);
});

insertMany(cardsData);
console.log(`Banco populado com sucesso: ${cardsData.length} cartas cadastradas no SQLite!`);