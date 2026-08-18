export default function Navigation({ activeSection, setActiveSection }) {
  const sections = ['Bakugan', 'Regras', 'ComoJogar', 'Multijogador']

  return (
    <header className="topbar-interna">
      <nav className="nav-interna">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              background: activeSection === section ? '#d32f2f' : '#333',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s ease-in-out',
              fontSize: '1rem',
              fontWeight: '500'
            }}
          >
            {section === 'ComoJogar' ? 'Como Jogar' : section === 'Multijogador' ? 'Modo Multijogador' : section}
          </button>
        ))}
      </nav>
    </header>
  )
}
