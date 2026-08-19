import { useState, useMemo } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MOCK_CARDS = [
  // --- CARTAS DE PERSONAGEM (BAKUGANS) ---
  {
    id: 'ENG_361_CC_BB',
    name: 'Fangzor Ultra',
    category: 'personagem', // 'personagem' vs 'deck'
    faction: 'ventus',
    factionColor: '#00e676',
    type: 'Bakugan Character',
    bPower: 100,
    damage: 1,
    cores: ['shield', 'fist'],
    effect: 'Shield or Fist: +500 B and +5 Damage',
    imageUrl: 'Img/Cards/FangzorUltra.png'
  },
  {
    id: 'ENG_001_RA_BB',
    name: 'Dragonoid Ultra',
    category: 'personagem',
    faction: 'pyrus',
    factionColor: '#ff2222',
    type: 'Bakugan Character',
    bPower: 600,
    damage: 4,
    cores: ['fireFist', 'fist'],
    effect: 'Fury: +400 B',
    imageUrl: 'Img/Cards/DragonoidUltra.png'
  },

  // --- CARTAS DO BARALHO (DECK) ---
  {
    id: 'ENG_112_AC_BB',
    name: 'Slash',
    category: 'deck',
    faction: 'pyrus',
    factionColor: '#ff2222',
    type: 'Ação',
    energyCost: 1,
    bPower: null,
    damage: 3,
    effect: '+3 Damage neste turno.',
    imageUrl: 'Img/Cards/Slash.png'
  },
  {
    id: 'ENG_204_HE_BB',
    name: 'Lia Venegas',
    category: 'deck',
    faction: 'haos',
    factionColor: '#00e5ff',
    type: 'Herói',
    energyCost: 2,
    bPower: null,
    damage: null,
    effect: 'Uma vez por turno: Cure 2 de dano.',
    imageUrl: 'Img/Cards/LiaVenegas.png'
  },
  {
    id: 'ENG_305_FL_BB',
    name: 'Quick Stop',
    category: 'deck',
    faction: 'aquos',
    factionColor: '#2979ff',
    type: 'Flip',
    energyCost: 3,
    bPower: null,
    damage: null,
    effect: 'Stop Non-Aquos Attack.',
    imageUrl: 'Img/Cards/QuickStop.png'
  }
]

const FACTION_FILTERS = [
  { id: 'all', name: 'Todas', color: '#555', icon: null },
  { id: 'pyrus', name: 'Pyrus', color: '#ff2222', icon: 'Img/30px-BBP_Pyrus.svg.png' },
  { id: 'ventus', name: 'Ventus', color: '#00e676', icon: 'Img/30px-BBP_Ventus.svg.png' },
  { id: 'haos', name: 'Haos', color: '#00e5ff', icon: 'Img/30px-BBP_Haos.svg.png' },
  { id: 'aquos', name: 'Aquos', color: '#2979ff', icon: 'Img/Aquos.svg.png' },
  { id: 'darkus', name: 'Darkus', color: '#d500f9', icon: 'Img/30px-BBP_Darkus.svg.png' },
  { id: 'aurelus', name: 'Aurelus', color: '#ffd600', icon: 'Img/30px-BBP_Aurelus.svg.png' }
]


const DECK_TYPES = [
  { id: 'all', name: 'Todos os Tipos' },
  { id: 'Ação', name: 'Ação' },
  { id: 'Herói', name: 'Herói' },
  { id: 'Flip', name: 'Flip' },
  { id: 'Evo', name: 'Evolução' }
]

export default function CatalogoCartas() {
  const [activeCategory, setActiveCategory] = useState('all') // 'all', 'personagem', 'deck'
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFaction, setSelectedFaction] = useState('all')
  const [sortBy, setSortBy] = useState('name-asc')

  const filteredCards = useMemo(() => {
    return MOCK_CARDS
      .filter((card) => {
        const matchesCategory = activeCategory === 'all' || card.category === activeCategory
        const matchesType = selectedType === 'all' || card.type === selectedType
        const matchesFaction = selectedFaction === 'all' || card.faction === selectedFaction
        const matchesName = card.name.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesType && matchesFaction && matchesName
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name)
        if (sortBy === 'energy-asc') return (a.energyCost || 0) - (b.energyCost || 0)
        if (sortBy === 'energy-desc') return (b.energyCost || 0) - (a.energyCost || 0)
        if (sortBy === 'bpower-desc') return (b.bPower || 0) - (a.bPower || 0)
        if (sortBy === 'damage-desc') return (b.damage || 0) - (a.damage || 0)
        return 0
      })
  }, [activeCategory, selectedType, selectedFaction, searchTerm, sortBy])

  return (
    <div className="catalogo-page">
      <Header />

      <main className="content-wrapper" style={{ justifyContent: 'flex-start', paddingBottom: '50px' }}>
        <section style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '8px' }}>
            Catálogo Geral de Cartas
          </h2>
          <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
            Consulte tanto os Bakugans de combate quanto as cartas de ação, heróis, flips e evoluções do baralho.
          </p>
        </section>

        {/* CONTROLE PRINCIPAL: Alternador Personagens vs Baralho */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '25px' }}>
          {[
            { id: 'all', label: '🃏 Todas as Cartas' },
            { id: 'personagem', label: '🐉 Bakugans (Personagens)' },
            { id: 'deck', label: '⚡ Cartas do Baralho (Deck)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id)
                setSelectedType('all')
              }}
              style={{
                background: activeCategory === tab.id ? '#d32f2f' : '#1e1e1e',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === tab.id ? '0 0 14px rgba(211, 47, 47, 0.6)' : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PAINEL DE FILTROS E BUSCA */}
        <div
          style={{
            background: 'rgba(20, 20, 20, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '35px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {/* Linha 1: Input de Busca, Tipo específico e Ordenação */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Pesquisar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '10px 14px',
                background: '#111',
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none'
              }}
            />

            {/* Filtro extra de tipo apenas para cartas de deck */}
            {activeCategory === 'deck' && (
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                style={{
                  padding: '10px 14px',
                  background: '#111',
                  border: '1px solid #444',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                {DECK_TYPES.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            )}

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '10px 14px',
                background: '#111',
                border: '1px solid #444',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            >
              <option value="name-asc">Nome (A → Z)</option>
              <option value="name-desc">Nome (Z → A)</option>
              <option value="energy-asc">Custo de Energia (Menor → Maior)</option>
              <option value="energy-desc">Custo de Energia (Maior → Menor)</option>
              <option value="bpower-desc">B-Power (Maior → Menor)</option>
              <option value="damage-desc">Dano / Soquinho (Maior → Menor)</option>
            </select>
          </div>

{/* Linha 2: Filtro por Facção com estilo padronizado */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {FACTION_FILTERS.map((f) => {
              const isActive = selectedFaction === f.id
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFaction(f.id)}
                  style={{
                    background: isActive ? f.color : '#222',
                    color: isActive && (f.id === 'haos' || f.id === 'all') ? '#000' : '#fff',
                    border: '1px solid #444',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease',
                    boxShadow: isActive && f.id !== 'all' ? `0 0 12px ${f.color}88` : 'none'
                  }}
                >
                  {f.icon && (
                    <img
                      src={f.icon}
                      alt={f.name}
                      style={{ height: '22px', width: '22px', objectFit: 'contain' }}
                    />
                  )}
                  {f.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* GRID DE CARTAS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '20px',
            width: '100%'
          }}
        >
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="stagger-card interactive-card neon-card"
              style={{
                '--neon-color': card.factionColor,
                background: 'rgba(18, 18, 18, 0.9)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer'
              }}
            >
              {/* Imagem */}
              <div style={{ width: '100%', background: '#0a0a0a', padding: '10px', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  style={{ width: '100%', maxHeight: '280px', objectFit: 'contain', borderRadius: '8px' }}
                />
              </div>

              {/* Informações dinâmicas por categoria de carta */}
              <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#fff' }}>{card.name}</h4>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#bbb' }}>
                  <span>{card.type}</span>
                  <span style={{ color: card.factionColor, fontWeight: 'bold' }}>
                    {card.faction.toUpperCase()}
                  </span>
                </div>

                {/* Exibição condicional de atributos */}
                <div style={{ display: 'flex', gap: '10px', marginTop: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  {card.category === 'personagem' ? (
                    <>
                      <span style={{ color: '#ffd600' }}>⚡ B {card.bPower}</span>
                      <span style={{ color: '#ff5722' }}>👊 {card.damage}</span>
                    </>
                  ) : (
                    <>
                      <span style={{ color: '#00e5ff' }}>🔋 Custo {card.energyCost}</span>
                      {card.damage !== null && <span style={{ color: '#ff5722' }}>👊 {card.damage}</span>}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '40px' }}>
            Nenhuma carta encontrada com esses filtros.
          </p>
        )}
      </main>

      <Footer />
    </div>
  )
}