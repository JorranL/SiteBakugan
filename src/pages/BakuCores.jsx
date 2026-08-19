import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BakuCoreSection from '../components/BakuCoreSection'
import BAKUCORES from '../data/bakucores'

export default function BakuCores() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="bakucores-page">
      <Header />

      {/* TELA 1: Grid de BakuCores com efeito Neon e Stagger */}
      {activeCategory === null ? (
        <main className="content-wrapper" style={{ justifyContent: 'flex-start' }}>
          <section style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '10px' }}>
              Catálogo de BakuCores
            </h2>
            <p style={{ color: '#aaa', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
              Selecione um tipo de BakuCore para explorar seus bônus de B-Power, dano e variações táticas.
            </p>
          </section>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              maxWidth: '900px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {BAKUCORES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="stagger-card interactive-card neon-card"
                style={{
                  '--neon-color': category.color || '#00f0ff',
                  background: 'rgba(20, 20, 20, 0.75)',
                  borderRadius: '14px',
                  padding: '24px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  color: '#fff',
                  width: '150px'
                }}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  style={{ height: '56px', width: '56px', objectFit: 'contain' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '1.05rem' }}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </main>
      ) : (
        /* TELA 2: Visualização de Detalhes */
        <main className="content-wrapper" style={{ justifyContent: 'flex-start' }}>
          <header className="topbar-interna">
            <nav
              style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => setActiveCategory(null)}
                style={{
                  background: '#2b2b2b',
                  color: '#fff',
                  border: '1px solid #555',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}
              >
                ← Visão Geral
              </button>

              {BAKUCORES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    background: activeCategory === category.id ? (category.color || '#d32f2f') : '#222',
                    color: '#fff',
                    border: '1px solid #444',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    style={{ height: '22px', width: '22px', objectFit: 'contain' }}
                  />
                  {category.name}
                </button>
              ))}
            </nav>
          </header>

          <div key={activeCategory} className="animate-page" style={{ width: '100%', marginTop: '10px' }}>
            <BakuCoreSection
              category={BAKUCORES.find((c) => c.id === activeCategory)}
            />
          </div>
        </main>
      )}

      <Footer />
    </div>
  )
}