import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BakuCoreSection from '../components/BakuCoreSection'
import BAKUCORES from '../data/bakucores'

export default function BakuCores() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div>
      <Header />

      {/* TELA 1: Sem BakuCore selecionado -> Ícones Grandes em destaque */}
      {activeCategory === null ? (
        <main
          style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            textAlign: 'center'
          }}
        >
          <h2 style={{ color: '#fff', marginBottom: '30px', fontSize: '1.8rem' }}>
            Selecione um Tipo de BakuCore
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              maxWidth: '900px'
            }}
          >
            {BAKUCORES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  background: '#1e1e1e',
                  border: '2px solid #333',
                  borderRadius: '12px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  color: '#fff',
                  width: '140px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d32f2f'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  style={{ height: '64px', width: '64px', objectFit: 'contain' }}
                />
                <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </main>
      ) : (
        /* TELA 2: BakuCore selecionado -> Barra superior compacta + Seção de detalhes */
        <main>
          <header className="topbar-interna" style={{ padding: '20px 0' }}>
            <nav
              className="nav-interna"
              style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              {BAKUCORES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    background: activeCategory === category.id ? '#d32f2f' : '#2b2b2b',
                    color: '#fff',
                    border: '1px solid #444',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.95rem',
                    transition: '0.2s ease'
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    style={{ height: '24px', width: '24px', objectFit: 'contain' }}
                  />
                  {category.name}
                </button>
              ))}
            </nav>
          </header>

          <BakuCoreSection
            category={BAKUCORES.find((c) => c.id === activeCategory)}
          />
        </main>
      )}

      <Footer />
    </div>
  )
}