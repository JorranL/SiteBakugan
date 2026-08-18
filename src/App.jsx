import { useState } from 'react'
import Home from './pages/Home'
import Faccoes from './pages/Faccoes'
import Cartas from './pages/Cartas'
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
      case 'bakucores':
        return <BakuCores />
      default:
        return <Home />
    }
  }

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <div>
        {renderPage()}
      </div>
    </PageContext.Provider>
  )
}

export default App
