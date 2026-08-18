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
      <header className="topbar-interna">
        <nav className="nav-interna" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveCategory(null)}
            style={{
              background: activeCategory === null ? '#d32f2f' : '#333',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s',
              fontSize: '0.9rem'
            }}
          >
            Início
          </button>
          {BAKUCORES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                background: activeCategory === category.id ? '#d32f2f' : '#333',
                color: '#fff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: '0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.9rem'
              }}
            >
              <img src={category.icon} alt={category.name} style={{ height: '24px' }} />
              {category.name}
            </button>
          ))}
        </nav>
      </header>

      {activeCategory === null ? (
        BAKUCORES.map((category) => (
          <BakuCoreSection key={category.id} category={category} />
        ))
      ) : (
        <BakuCoreSection category={BAKUCORES.find((c) => c.id === activeCategory)} />
      )}

      <Footer />
    </div>
  )
}
