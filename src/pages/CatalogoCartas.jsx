import React, { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FACTION_FILTERS = [
  { id: 'all', name: 'Todas', color: '#555', icon: null },
  { id: 'pyrus', name: 'Pyrus', color: '#ff2222', icon: 'Img/30px-BBP_Pyrus.svg.png' },
  { id: 'ventus', name: 'Ventus', color: '#00e676', icon: 'Img/30px-BBP_Ventus.svg.png' },
  { id: 'haos', name: 'Haos', color: '#00e5ff', icon: 'Img/30px-BBP_Haos.svg.png' },
  { id: 'aquos', name: 'Aquos', color: '#2979ff', icon: 'Img/Aquos.svg.png' },
  { id: 'darkus', name: 'Darkus', color: '#d500f9', icon: 'Img/30px-BBP_Darkus.svg.png' },
  { id: 'aurelus', name: 'Aurelus', color: '#ffd600', icon: 'Img/30px-BBP_Aurelus.svg.png' }
];

const DECK_TYPES = [
  { id: 'all', name: 'Todos os Tipos' },
  { id: 'Action', name: 'Ação' },
  { id: 'Hero', name: 'Herói' },
  { id: 'Flip', name: 'Flip' },
  { id: 'Evo', name: 'Evolução' }
];

const FACTION_COLORS = {
  pyrus: '#ff2222',
  ventus: '#00e676',
  haos: '#00e5ff',
  aquos: '#2979ff',
  darkus: '#d500f9',
  aurelus: '#ffd600'
};

const ITEMS_PER_PAGE = 30;

export default function CatalogoCartas() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaction, setSelectedFaction] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [selectedCard, setSelectedCard] = useState(null);

useEffect(() => {
    setLoading(true);
    const dataUrl = `${import.meta.env.BASE_URL}cards.json`;

    fetch(dataUrl)
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar dados das cartas:', err);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchTerm, selectedFaction, activeCategory, selectedType, sortBy]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCard(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCards = useMemo(() => {
    return cards
      .filter((card) => {
        const isBakugan =
          card.category === 'personagem' ||
          card.type === 'Bakugan' ||
          card.type === 'Bakugan Character';

        const matchesCategory =
          activeCategory === 'all' ||
          (activeCategory === 'personagem' && isBakugan) ||
          (activeCategory === 'deck' && !isBakugan);

        const matchesType = selectedType === 'all' || card.type === selectedType;
        const matchesFaction =
          selectedFaction === 'all' ||
          (card.faction && card.faction.toLowerCase() === selectedFaction.toLowerCase());
        const matchesName =
          card.name && card.name.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesType && matchesFaction && matchesName;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
        if (sortBy === 'energy-asc') return (a.energy_cost || 0) - (b.energy_cost || 0);
        if (sortBy === 'energy-desc') return (b.energy_cost || 0) - (a.energy_cost || 0);
        if (sortBy === 'bpower-desc') return (b.b_power || 0) - (a.b_power || 0);
        if (sortBy === 'damage-desc') return (b.damage || 0) - (a.damage || 0);
        return 0;
      });
  }, [cards, activeCategory, selectedType, selectedFaction, searchTerm, sortBy]);

  const visibleCards = useMemo(() => {
    return filteredCards.slice(0, visibleCount);
  }, [filteredCards, visibleCount]);

  return (
    <div className="catalogo-page">
      <Header />

      <main className="content-wrapper" style={{ justifyContent: 'flex-start', paddingBottom: '70px' }}>
        <section style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '8px' }}>
            Catálogo Geral de Cartas
          </h2>
          <p style={{ color: '#aaa', fontSize: '0.95rem' }}>
            Clique em qualquer carta para ampliá-la na tela.
          </p>
        </section>

        {/* Alternador Personagens vs Baralho */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '25px' }}>
          {[
            { id: 'all', label: 'Todas as Cartas' },
            { id: 'personagem', label: 'Bakugans (Personagens)' },
            { id: 'deck', label: 'Cartas do Baralho (Deck)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
                setSelectedType('all');
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
              <option value="damage-desc">Dano (Maior → Menor)</option>
            </select>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {FACTION_FILTERS.map((f) => {
              const isActive = selectedFaction === f.id;
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
                      src={`${import.meta.env.BASE_URL}${f.icon.replace(/^\//, '')}`}
                      alt={f.name}
                      style={{ height: '22px', width: '22px', objectFit: 'contain' }}
                    />
                  )}
                  {f.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* GRID DE CARTAS */}
        {loading ? (
          <p style={{ textAlign: 'center', color: '#aaa' }}>Carregando cartas do banco...</p>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '24px',
                width: '100%'
              }}
            >
              {visibleCards.map((card) => {
                const factionKey = card.faction?.toLowerCase() || '';
                const factionColor = FACTION_COLORS[factionKey] || '#888';

                return (
                  <div
                    key={card.id}
                    title="Clique para ampliar"
                    onClick={() => setSelectedCard(card)}
                    style={{
                      borderRadius: '16px',
                      border: `2px solid ${factionColor}`,
                      boxShadow: `0 4px 18px ${factionColor}33`,
                      background: 'rgba(10, 10, 10, 0.8)',
                      padding: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                      e.currentTarget.style.boxShadow = `0 8px 24px ${factionColor}88`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = `0 4px 18px ${factionColor}33`;
                    }}
                  >
                    {card.image_url ? (
                      <img
                        loading="lazy"
                        src={
                          card.image_url.startsWith('http')
                            ? card.image_url
                            : `${import.meta.env.BASE_URL}${card.image_url.replace(/^\//, '')}`
                        }
                        alt={card.name}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'contain',
                          borderRadius: '12px',
                          display: 'block'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div style={{ color: '#fff', padding: '40px 10px', textAlign: 'center' }}>
                        {card.name}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* BOTÃO CARREGAR MAIS */}
            {visibleCount < filteredCards.length && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '35px' }}>
                <button
                  onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
                  style={{
                    background: '#d32f2f',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 0 14px rgba(211, 47, 47, 0.5)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                >
                  Carregar mais cartas ({filteredCards.length - visibleCount})
                </button>
              </div>
            )}
          </>
        )}

        {!loading && filteredCards.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', marginTop: '40px' }}>
            Nenhuma carta encontrada com esses filtros.
          </p>
        )}
      </main>

      {/* MODAL LIGHTBOX COM TAMANHO EQUILIBRADO */}
      {selectedCard && (
        <div
          onClick={() => setSelectedCard(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'zoom-out',
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCard(null);
            }}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              maxWidth: selectedCard.type === 'Flip' ? '650px' : '450px',
              width: '100%'
            }}
          >
            <img
              src={
                selectedCard.image_url.startsWith('http')
                  ? selectedCard.image_url
                  : `${import.meta.env.BASE_URL}${selectedCard.image_url.replace(/^\//, '')}`
              }
              alt={selectedCard.name}
              style={{
                width: 'auto',
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '16px',
                boxShadow: `0 0 35px ${
                  FACTION_COLORS[selectedCard.faction?.toLowerCase()] || '#ffffff'
                }88`,
                border: `3px solid ${
                  FACTION_COLORS[selectedCard.faction?.toLowerCase()] || '#ffffff'
                }`
              }}
            />
            <span
              style={{
                color: '#aaa',
                marginTop: '14px',
                fontSize: '0.85rem',
                letterSpacing: '0.5px'
              }}
            >
              Clique em qualquer lugar ou pressione ESC para fechar
            </span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}