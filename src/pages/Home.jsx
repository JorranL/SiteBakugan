import { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import BakuganSection from '../components/sections/BakuganSection'
import RegrasSection from '../components/sections/RegrasSection'
import ComoJogarSection from '../components/sections/ComoJogarSection'
import MultijogadorSection from '../components/sections/MultijogadorSection'
import Footer from '../components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('Bakugan')

  const renderSection = () => {
    switch (activeSection) {
      case 'Bakugan':
        return <BakuganSection />
      case 'Regras':
        return <RegrasSection />
      case 'ComoJogar':
        return <ComoJogarSection />
      case 'Multijogador':
        return <MultijogadorSection />
      default:
        return <BakuganSection />
    }
  }

  return (
    <div>
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  )
}
