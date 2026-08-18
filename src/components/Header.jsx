import { useContext } from 'react'
import PageContext from '../context/PageContext'

export default function Header() {
  const { setCurrentPage } = useContext(PageContext)

  return (
    <header className="topbar">
      <div style={{ textAlign: 'center' }}>
        <img src="Img/logo.png" alt="Logo Bakugan" />
      </div>
      <h1>Wiki Bakugan Battle Planet</h1>
      <nav className="nav-externa">
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: '#f44336',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: '0.3s'
          }}
        >
          Wiki
        </button>
        <button
          onClick={() => setCurrentPage('faccoes')}
          style={{
            background: '#f44336',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: '0.3s'
          }}
        >
          Facções
        </button>
        <button
          onClick={() => setCurrentPage('cartas')}
          style={{
            background: '#f44336',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: '0.3s'
          }}
        >
          Cartas
        </button>
        <button
          onClick={() => setCurrentPage('bakucores')}
          style={{
            background: '#f44336',
            color: '#fff',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: '0.3s'
          }}
        >
          BakuCores
        </button>
      </nav>
    </header>
  )
}

