import { useState } from 'react'
import Home from './pages/Home'
import Faccoes from './pages/Faccoes'
import Cartas from './pages/Cartas'
import CatalogoCartas from './pages/CatalogoCartas'
import BakuCores from './pages/BakuCores'
import PageContext from './context/PageContext'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'faccoes':
        return <Faccoes />
      case 'cartas':
        return <Cartas />
      case 'catalogo':
        return <CatalogoCartas />
      case 'bakucores':
        return <BakuCores />
      default:
        return <Home />
    }
  }

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <div className="app-layout">
        {/* key={currentPage} força a transição a rodar toda vez que mudar de página */}
        <div key={currentPage} className="animate-page" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {renderPage()}
        </div>
      </div>
    </PageContext.Provider>
  )
}

export default App