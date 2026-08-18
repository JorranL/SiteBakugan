import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CardSection from '../components/CardSection'

const CARD_TYPES = [
  {
    id: 'tipos-cartas',
    title: 'Cartas',
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
    description: 'Habilidades desencadeadas são habilidades que têm condições específicas em que ocorrem. Eles normalmente aparecem como:',
    items: [
      'When/if/at/other',
      'condition',
      'effect',
      'Se uma habilidade desencadeada tiver cada uma de suas condições atendidas, o resultado é colocado no topo do lote.',
      'Se várias habilidades desencadeadas ocorrerem simultaneamente, "o jogador inicial" primeiro coloca cada uma de suas habilidades no lote na ordem que ele escolher. Em seguida, o outro jogador coloca suas habilidades no topo do lote na ordem que escolher.',
      'Algumas habilidades desencadeadas têm condições sob as quais seu efeito acontecerá. Essas condições devem ser atendidas quando a habilidade for resolvida para que o efeito ocorra.',
      'Se uma habilidade desencadeada for opcional, o controlador decide se coloca ou não a habilidade no lote.'
    ]
  },
  {
    id: 'habilidades-ativadas',
    title: 'Habilidades Ativadas',
    description: 'As habilidades ativadas têm um custo e efeito. Eles aparecem como custo(Energia) e efeito.',
    items: [
      'Para que uma habilidade ativada seja anunciada, todos os custos devem ser pagos. Uma vez que os custos são pagos e a habilidade é anunciada, o efeito é colocado no topo do lote.',
      'Algumas habilidades ativadas têm condições para ativa-las.'
    ]
  },
  {
    id: 'habilidades-estaticas',
    title: 'Habilidades Estáticas',
    description: 'Habilidades estáticas entram em vigor constantemente, em vez de serem ativadas ou acionadas em um determinado momento.',
    items: [
      'Os efeitos BakuCore são considerados habilidades estáticas enquanto são mantidos por uma carta de Personagem.',
      'Alguns personagens têm habilidades estáticas que são aplicadas se estiverem segurando um tipo específico de BakuCore.',
      'As habilidades estáticas podem estar ativas na mão de um jogador, na pilha de descarte ou no lote. Essas habilidades farão declarações sobre estar na zona em que estão ativas.'
    ]
  }
]

const EFFECTS = [
  {
    id: 'efeitos-acao',
    title: 'Efeitos de Ação',
    description: 'Esses efeitos são ativados quando você joga a carta da sua mão pagando o custo de energia.',
    items: [
      { type: 'Destruição', description: '"Destroy an Energy Card", "Destroy a Hero", etc.' },
      { type: 'Anulação', description: 'Cancela o efeito de uma carta específica (ação, herói, evolução).' },
      { type: 'Boost de B-Power ou Damage', description: 'Aumenta temporariamente o poder de batalha (B-Power) ou o dano.' },
      { type: 'Remoção de Core', description: 'Remove um BakuCore do Bakugan inimigo.' },
      { type: 'Comprar cartas (Draw)', description: 'Permite puxar mais cartas do deck.' },
      { type: 'Descartar (Discard)', description: 'Faz o oponente descartar cartas.' },
      { type: 'Recuperação de Cartas (Energize, Retrieve)', description: 'Reenergiza cartas usadas ou recupera cartas do descarte.' }
    ]
  },
  {
    id: 'efeitos-herois',
    title: 'Efeitos Contínuos de Heróis',
    description: 'Heróis ficam em campo e aplicam efeitos passivos ou ativam efeitos com condições específicas.',
    items: [
      { type: 'Buffs permanentes', description: '+X B-Power ou +X Damage a todos os seus Bakugans.' },
      { type: 'Efeitos por rodada', description: '"Uma vez por tudo", "quando jogar uma carta", "quando um Bakugan abrir".' },
      { type: 'Desencadeadores (Triggers)', description: 'Algo acontece toda vez que uma condição é atendida.' }
    ]
  },
  {
    id: 'efeitos-evolucao',
    title: 'Efeitos de Evolução',
    description: 'Evoluções substituem os Bakugans normais e dão status melhores e efeitos adicionais.',
    items: [
      { type: 'Trigger ao evoluir', description: 'Ganha dano extra, draw, destrói algo, entre outros.' },
      { type: 'Efeitos passivos', description: 'Toda vez que vencer uma briga, causa dano adicional, entre outros.' }
    ]
  },
  {
    id: 'efeitos-flip',
    title: 'Efeitos de Flip Cards',
    description: 'São como "armadilhas": ativadas quando você toma dano e paga energia.',
    items: [
      { type: 'Negar Dano (Stop)', description: '"Stop Non-[Fação]" – impede dano de facções específicas.' },
      { type: 'Bloqueio geral', description: 'Algumas param qualquer dano, outras só contra certas facções.' },
      { type: 'Efeitos adicionais', description: 'Algumas flips também descartam cartas ou afetam heróis.' }
    ]
  },
  {
    id: 'efeitos-bakugan',
    title: 'Efeitos dos Bakugan',
    description: 'Embora não tenham texto de efeito, os Bakugan interagem com efeitos baseados em suas características e Cores atribuídos.',
    items: [
      { type: 'BakuCores atribuídos', description: 'Os bônus dados pelos BakuCores podem definir se ele é forte com +B, +Damage, ou efeitos especiais como "Remove Core", "Steal Core".' },
      { type: 'Habilidades especiais em Evos', description: 'Quando evoluem, podem ter efeitos similares a heróis ou ações.' }
    ]
  },
  {
    id: 'outros-efeitos',
    title: 'Outros Efeitos Relevantes',
    description: 'Existem também mecânicas e efeitos que aparecem em diversas cartas, com sinergias específicas.',
    items: [
      { type: 'Victor Effects', description: '"Quando seu Bakugan ganha a briga, faça ..."' },
      { type: 'Team Attack', description: 'Quando todos os seus Bakugans estão abertos, você ataca com todos juntos.' },
      { type: 'Shadowstrike', description: 'Ignora redução de dano ou poder.' },
      { type: 'Fury', description: 'Efeitos ativados quando você tem 1 ou 0 cartas na mão.' },
      { type: 'Trifecta', description: 'Ativa se você tiver 3 Bakugans abertos.' },
      { type: 'Rapid Fire', description: 'Permite jogar uma ação adicional sem custo.' }
    ]
  }
]

export default function Cartas() {
  const [activeTab, setActiveTab] = useState('tipos')

  const allSections = [
    ...CARD_TYPES,
    ...(activeTab === 'habilidades' ? ABILITIES : []),
    ...(activeTab === 'efeitos' ? EFFECTS : []),
    ...(['tipos', 'inicio'].includes(activeTab) ? ABILITIES : []),
    ...(['tipos', 'inicio'].includes(activeTab) ? EFFECTS : [])
  ]

  const renderContent = () => {
    if (activeTab === 'habilidades') {
      return (
        <>
          {CARD_TYPES.map((section) => (
            <CardSection key={section.id} section={section} />
          ))}
          {ABILITIES.map((section) => (
            <CardSection key={section.id} section={section} />
          ))}
        </>
      )
    } else if (activeTab === 'efeitos') {
      return EFFECTS.map((section) => (
        <CardSection key={section.id} section={section} />
      ))
    } else {
      // Mostrar tudo
      return (
        <>
          {CARD_TYPES.map((section) => (
            <CardSection key={section.id} section={section} />
          ))}
          {ABILITIES.map((section) => (
            <CardSection key={section.id} section={section} />
          ))}
          {EFFECTS.map((section) => (
            <CardSection key={section.id} section={section} />
          ))}
        </>
      )
    }
  }

  return (
    <div>
      <Header />
      <header className="topbar-interna">
        <nav className="nav-interna" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('inicio')}
            style={{
              background: activeTab === 'inicio' ? '#d32f2f' : '#333',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            Início
          </button>
          <button
            onClick={() => setActiveTab('habilidades')}
            style={{
              background: activeTab === 'habilidades' ? '#d32f2f' : '#333',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            Habilidades
          </button>
          <button
            onClick={() => setActiveTab('efeitos')}
            style={{
              background: activeTab === 'efeitos' ? '#d32f2f' : '#333',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: '0.3s',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            Efeitos
          </button>
        </nav>
      </header>

      <div style={{ marginTop: '20px' }}>
        {renderContent()}
      </div>

      <Footer />
    </div>
  )
}
