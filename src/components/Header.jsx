import { useState, useContext } from 'react'
import PageContext from '../context/PageContext'

export default function Header() {
  const { currentPage, setCurrentPage } = useContext(PageContext)
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Wiki' },
    { id: 'faccoes', label: 'Facções'},
    { id: 'cartas', label: 'Regras de Cartas'},
    { id: 'bakucores', label: 'BakuCores'},
    { id: 'catalogo', label: 'Catálogo de Cartas'}
  ]

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId)
    setIsOpen(false)
  }

  // Nome formatado para o badge da direita
  const currentLabel = navItems.find((item) => item.id === currentPage)?.label || currentPage

  return (
    <>
      {/* Barra de Topo Compacta e Fixa */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: 'rgba(12, 12, 12, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '2px solid rgba(211, 47, 47, 0.6)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
          padding: '10px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Botão Hambúrguer */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Abrir Menu"
          style={{
            background: '#1e1e1e',
            border: '1px solid #444',
            color: '#fff',
            fontSize: '1.4rem',
            padding: '6px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          ☰ <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Menu</span>
        </button>

        {/* Logo e Título Central */}
        <div
          onClick={() => setCurrentPage('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
          }}
        >
          <img
            src="Img/logo.png"
            alt="Logo Bakugan"
            style={{ height: '42px', objectFit: 'contain' }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: '1.25rem',
              color: '#d32f2f',
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}
          >
            Wiki Bakugan
          </h1>
        </div>

        {/* Indicador da Página Ativa */}
        <div style={{ textAlign: 'right' }}>
          <span
            style={{
              background: '#222',
              border: '1px solid #333',
              color: '#ffd700',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              whiteSpace: 'nowrap'
            }}
          >
            {currentLabel}
          </span>
        </div>
      </header>

      {/* Overlay Escuro (Fundo) */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(3px)',
          zIndex: 1100,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
      />

      {/* Menu Lateral Deslizante (Drawer da Esquerda) */}
      <aside
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '280px',
          height: '100vh',
          background: '#121212',
          borderRight: '2px solid #d32f2f',
          boxShadow: '5px 0 25px rgba(0, 0, 0, 0.9)',
          zIndex: 1200,
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          padding: '24px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {/* Cabeçalho do Drawer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #282828',
            paddingBottom: '15px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="Img/logo.png" alt="Logo" style={{ height: '32px' }} />
            <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.05rem' }}>
              Navegação
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#888',
              fontSize: '1.4rem',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            ✕
          </button>
        </div>

        {/* Links de Páginas */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0 }}>
          {navItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                style={{
                  background: isActive ? '#d32f2f' : '#1c1c1c',
                  color: '#fff',
                  border: '1px solid',
                  borderColor: isActive ? '#d32f2f' : '#333',
                  padding: '14px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.2s ease',
                  textAlign: 'left',
                  boxShadow: isActive ? '0 0 12px rgba(211, 47, 47, 0.4)' : 'none'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                {item.label}
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}