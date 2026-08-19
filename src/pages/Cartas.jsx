import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardSection from '../components/CardSection'

const CATEGORIES = [
  {
    id: 'tipos',
    title: 'Tipos de Cartas',
    subtitle: 'Ação, Herói, Flip, Evo e Energias',
    icon: '🎴',
    color: '#d32f2f'
  },
  {
    id: 'habilidades',
    title: 'Mecânicas de Habilidade',
    subtitle: 'Desencadeadas, Ativadas e Estáticas',
    icon: '⚡',
    color: '#1976d2'
  },
  {
    id: 'efeitos',
    title: 'Efeitos & Palavras-chave',
    subtitle: 'Destruição, Buffs, Fury, Shadowstrike...',
    icon: '✨',
    color: '#388e3c'
  }
]

const CARD_TYPES = [
  {
    id: 'tipos-cartas',
    title: 'Tipos de Cartas Principais',
    description: 'Existem 5 tipos principais de cartas no Bakugan TCG:',
    items: [
      { type: 'Ação', description: 'Jogadas da mão para obter efeitos imediatos, como aumentar ou reduzir atributos, causar dano ou negar efeitos. Vão para o descarte após o uso.' },
      { type: 'Herói', description: 'Representam aliados. Permanecem em campo ativando seus efeitos por turno.' },
      { type: 'Flip', description: 'Ativadas automaticamente quando viradas do deck por dano. Servem para anular ou redirecionar efeitos.' },
      { type: 'Evo', description: 'Evoluem Bakugans em versões mais poderosas.' },
      { type: 'Energias', description: 'Usadas como recursos para pagar os custos das outras cartas.' }
    ]
  }
]

const ABILITIES = [
  {
    id: 'habilidades-desencadeadas',
    title: 'Habilidades Desencadeadas',
    description: 'Habilidades que têm condições específicas em que ocorrem (When / If / At):',
    items: [
      'Se uma habilidade desencadeada tiver suas condições atendidas, o resultado é colocado no topo do lote.',
      'Se várias ocorrerem simultaneamente, o jogador inicial coloca suas habilidades primeiro na ordem de sua escolha.',
      'Algumas habilidades têm condições que devem ser válidas no momento da resolução do lote.',
      'Se for opcional, o controlador decide se coloca ou não a habilidade no lote.'
    ]
  },
  {
    id: 'habilidades-ativadas',
    title: 'Habilidades Ativadas',
    description: 'Possuem um custo e efeito (Custo de Energia → Efeito):',
    items: [
      'Todos os custos devem ser pagos antes que a habilidade seja anunciada e colocada no topo do lote.',
      'Algumas habilidades ativadas exigem condições específicas além do custo.'
    ]
  },
  {
    id: 'habilidades-estaticas',
    title: 'Habilidades Estáticas',
    description: 'Entram em vigor constantemente, de forma passiva e contínua:',
    items: [
      'Os efeitos de BakuCores equipados são considerados habilidades estáticas.',
      'Certos personagens possuem bônus contínuos ao segurarem tipos específicos de BakuCore.',
      'Podem atuar na mão, na pilha de descarte ou no lote de acordo com o texto da carta.'
    ]
  }
]

const EFFECTS = [
  {
    id: 'efeitos-acao',
    title: 'Efeitos de Cartas de Ação',
    description: 'Ativados ao jogar a carta pagando seu custo:',
    items: [
      { type: 'Destruição', description: 'Destrói energias, heróis ou recursos do adversário.' },
      { type: 'Anulação', description: 'Cancela a resolução de ações, heróis ou evos específicas.' },
      { type: 'Boost de B-Power / Damage', description: 'Aumenta temporariamente o poder de batalha ou o dano de ataque.' },
      { type: 'Manipulação de Core', description: 'Remove ou rouba BakuCores dos Bakugans.' },
      { type: 'Compra & Descarte', description: 'Permite comprar mais cartas (Draw) ou força o oponente a descartar (Discard).' }
    ]
  },
  {
    id: 'efeitos-outros',
    title: 'Palavras-chave e Mecânicas Especiais',
    description: 'Sinergias encontradas em diversas cartas e monstros:',
    items: [
      { type: 'Victor', description: 'Ativa um efeito adicional caso seu Bakugan vença a disputa de combate.' },
      { type: 'Team Attack', description: 'Ataque combinado quando todos os seus Bakugans estão abertos.' },
      { type: 'Shadowstrike', description: 'Ataque furtivo que ignora qualquer redução de dano ou bônus defensivo inimigo.' },
      { type: 'Fury', description: 'Habilidade bônus que entra em vigor se você tiver 1 ou 0 cartas na mão.' },
      { type: 'Trifecta', description: 'Bônus ativo enquanto você controlar 3 Bakugans abertos.' },
      { type: 'Rapid Fire', description: 'Permite conjurar ações adicionais encadeadas sem custo adicional.' }
    ]
  }
]

export default function Cartas() {
  const [activeTab, setActiveTab] = useState(null)

  return (
    <div className="cartas-page">
      <Header />

      {/* TELA INICIAL: Nenhum card selecionado -> 3 Cards Grandes com Stagger e Hover */}
      {activeTab === null ? (
        <main className="content-wrapper">
          <section style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '10px' }}>
              Guia de Cartas e Regras
            </h2>
            <p style={{ color: '#aaa', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
              Explore os tipos de cartas do TCG, compreenda o funcionamento do sistema de habilidades e conheça todas as palavras-chave e efeitos de jogo.
            </p>
          </section>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="stagger-card interactive-card"
                style={{
                  background: 'rgba(20, 20, 20, 0.75)',
                  border: `2px solid ${cat.color}`,
                  borderRadius: '16px',
                  padding: '36px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  color: '#fff',
                  boxShadow: '0 6px 14px rgba(0, 0, 0, 0.5)'
                }}
              >
                <span style={{ fontSize: '2.8rem' }}>{cat.icon}</span>
                <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{cat.title}</span>
                <span style={{ fontSize: '0.85rem', color: '#aaa', textAlign: 'center' }}>
                  {cat.subtitle}
                </span>
              </button>
            ))}
          </div>
        </main>
      ) : (
        /* TELA DETALHADA: Navegação Interna e Conteúdo */
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
                onClick={() => setActiveTab(null)}
                style={{
                  background: '#2b2b2b',
                  color: '#fff',
                  border: '1px solid #555',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                ← Visão Geral
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    background: activeTab === cat.id ? cat.color : '#222',
                    color: '#fff',
                    border: '1px solid #444',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.title}
                </button>
              ))}
            </nav>
          </header>

          <div key={activeTab} className="animate-page" style={{ width: '100%', marginTop: '10px' }}>
            {activeTab === 'tipos' &&
              CARD_TYPES.map((section) => (
                <CardSection key={section.id} section={section} />
              ))}

            {activeTab === 'habilidades' &&
              ABILITIES.map((section) => (
                <CardSection key={section.id} section={section} />
              ))}

            {activeTab === 'efeitos' &&
              EFFECTS.map((section) => (
                <CardSection key={section.id} section={section} />
              ))}
          </div>
        </main>
      )}

      <Footer />
    </div>
  )
}