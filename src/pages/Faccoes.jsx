import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FactionCard from '../components/FactionCard'
import FactionTable from '../components/FactionTable'

const FACTIONS = [
  {
    id: 'pyrus',
    name: 'Pyrus',
    subtitle: 'Fogo',
    color: '#ff2222',
    icon: 'Img/30px-BBP_Pyrus.svg.png',
    description: 'Pyrus é a facção da agressividade e do dano direto. Sua identidade é marcada pela força ofensiva. Jogadores que escolhem Pyrus buscam pressionar o oponente desde o início, utilizando ataques explosivos e a capacidade de destruir cartas adversárias para manter o controle do ritmo da partida.',
    style: 'Agressividade, dano direto, Fury (quando com 1 ou 0 cartas)',
    mainAbility: 'Causar dano, destruir cartas, efeitos de "Fury"',
    strategy: 'Pressiona o oponente com muito dano e cartas explosivas',
    weaknesses: 'Poucas opções defensivas. Dependência de uma mão com poucas cartas para ativar habilidades',
    bakugans: 'Dragonoid (principal parceiro de Dan Kouzo), Cyndeous, Kelion',
    cardExample: 'Img/Pyros.PNG',
    tableStyle: 'Agressivo',
    tableAbility: 'Dano Direto e efeitos de Fury',
    tableStrategy: 'Pressionar o oponente com dano explosivo'
  },
  {
    id: 'ventus',
    name: 'Ventus',
    subtitle: 'Vento',
    color: '#00e676',
    icon: 'Img/30px-BBP_Ventus.svg.png',
    description: 'Ventus é a facção voltada para o controle e manipulação do campo. O estilo Ventus é mais estratégico, focando em enfraquecer o adversário através de ajustes táticos, alterando ou eliminando os recursos que fortalecem o oponente, garantindo vantagem ao longo da partida.',
    style: 'Manipulação de BakuCores, controle do campo',
    mainAbility: 'Remover, trocar ou roubar BakuCores',
    strategy: 'Enfraquece o inimigo tirando ou alterando bônus dos BakuCores',
    weaknesses: 'Menor poder de ataque direto. Dependência de estratégias mais complexas',
    bakugans: 'Trox (principal parceiro de Wynton Styles), Turtonium, Lupitheon',
    cardExample: 'Img/Ventus.PNG',
    tableStyle: 'Controle',
    tableAbility: 'Manipulação de BakuCores (troca e roubo)',
    tableStrategy: 'Enfraquecer o adversário alterando bônus'
  },
  {
    id: 'haos',
    name: 'Haos',
    subtitle: 'Luz',
    color: '#00e5ff',
    icon: 'Img/30px-BBP_Haos.svg.png',
    description: 'Haos se caracteriza pelo suporte e fortalecimento das jogadas. Além de oferecerem vantagem em termos de resistência, as habilidades de Haos colaboram com a estabilidade do time, fazendo com que os jogadores consigam manter seus Bakugans ativos e prontos para os momentos decisivos do jogo.',
    style: 'Suporte, buffs, proteção, aumento de B-Power',
    mainAbility: 'Aumentar B-Power e dano, efeitos de cura ou luz (defesa)',
    strategy: 'Ganha estabilidade e força com efeitos de grupo e suporte',
    weaknesses: 'Menor capacidade ofensiva direta. Dependência de sinergia com outras facções',
    bakugans: 'Pegatrix (principal parceira de Lia Venegas), Gorthion, Cubbo',
    cardExample: 'Img/Haos.PNG',
    tableStyle: 'Suporte',
    tableAbility: 'Aumento de B-Power, buffs e efeitos de cura',
    tableStrategy: 'Fortalecer aliados e garantir estabilidade'
  },
  {
    id: 'aquos',
    name: 'Aquos',
    subtitle: 'Água',
    color: '#2979ff',
    icon: 'Img/Aquos.svg.png',
    description: 'Aquos representa o domínio sobre os recursos e o controle do fluxo do jogo. Essa facção é ideal para jogadores que gostam de construir uma vantagem a longo prazo, garantindo uma reserva de cartas e energia que pode virar o jogo nos momentos críticos.',
    style: 'Controle, compra de cartas, manipulação de energia',
    mainAbility: 'Comprar cartas (Draw), manipular energias (Energize), efeitos de retorno',
    strategy: 'Ganha vantagem a longo prazo com recursos extras e controle do fluxo do jogo',
    weaknesses: 'Menor poder de ataque direto. Dependência de estratégias a longo prazo',
    bakugans: 'Hydorous (principal parceiro de Shun Kazami), Fade Ninja, Vicerox',
    cardExample: 'Img/Aquos.PNG',
    tableStyle: 'Controle e Recursos',
    tableAbility: 'Compra de cartas, manipulação de energia e retorno',
    tableStrategy: 'Construir vantagem a longo prazo com recursos extras'
  },
  {
    id: 'darkus',
    name: 'Darkus',
    subtitle: 'Trevas',
    color: '#d500f9',
    icon: 'Img/30px-BBP_Darkus.svg.png',
    description: 'Darkus é voltada para a destruição e a desestabilização do adversário. Essa facção busca desequilibrar o campo, criando situações em que o oponente tem dificuldades para reagir diante dos inúmeros efeitos destrutivos e de manipulação impostos pelas cartas Darkus.',
    style: 'Descarte, destruição, manipulação da mão do oponente',
    mainAbility: 'Fazer o oponente descartar, destruir heróis ou energias',
    strategy: 'Desestabiliza o inimigo minando seus recursos',
    weaknesses: 'Nem sempre tem o maior B-Power. Pode depender de combos para funcionar bem',
    bakugans: 'Nillious (parceiro de Magnus), Fangzor Darkus, Pharaoh',
    cardExample: 'Img/Darkus.PNG',
    tableStyle: 'Destruidor',
    tableAbility: 'Forçar descarte e destruição de cartas',
    tableStrategy: 'Desestabilizar o oponente minando seus recursos'
  },
  {
    id: 'aurelus',
    name: 'Aurelus',
    subtitle: 'Luz Antiga - Facção Especial',
    color: '#ffd600',
    icon: 'Img/30px-BBP_Aurelus.svg.png',
    description: 'Aurelus é uma facção especial e menos convencional, frequentemente considerada neutra ou premium. Aurelus não possui cartas de ação, heróis ou evoluções definidas como as demais facções; em vez disso, apresenta cartas de personagem e BakuGears com atributos elevados, conferindo ao jogador a oportunidade de obter vantagens significativas quando bem utilizada.',
    style: 'Neutro/Premium. Representa equilíbrio e força rara',
    mainAbility: 'Varia muito, com efeitos premium',
    strategy: 'Requer cartas específicas, mas costuma ter bônus poderosos ou efeitos únicos',
    weaknesses: 'Número mais limitado de cartas no jogo. Menor suporte direto em comparação com outras facções',
    bakugans: 'Aurelus Dragonoid, Aurelus Trox, Aurelus Hydorous',
    cardExample: 'Img/Aurelus.PNG',
    tableStyle: 'Neutro/Premium',
    tableAbility: 'Efeitos premium variados',
    tableStrategy: 'Oferecer bônus poderosos mediante requisitos específicos'
  }
]

export default function Faccoes() {
  const [activeFaction, setActiveFaction] = useState(null)

  return (
    <div className="faccoes-page">
      <Header />

      {/* TELA INICIAL: Grid 2x3 de Facções + Tabela Comparativa */}
      {activeFaction === null ? (
        <main className="content-wrapper" style={{ justifyContent: 'flex-start' }}>
          <section style={{ textAlign: 'center', marginBottom: '35px' }}>
            <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '10px' }}>
              Facções Bakugan
            </h2>
            <p style={{ color: '#aaa', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
              Selecione uma facção para ver suas características completas ou consulte a tabela comparativa abaixo.
            </p>
          </section>

          {/* Grid de cards com classe neon-card e variável CSS dinâmica */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
              maxWidth: '850px',
              margin: '0 auto 50px auto',
              width: '100%'
            }}
          >
            {FACTIONS.map((faction) => (
              <button
                key={faction.id}
                onClick={() => setActiveFaction(faction.id)}
                className="stagger-card interactive-card neon-card"
                style={{
                  '--neon-color': faction.color,
                  background: 'rgba(20, 20, 20, 0.75)',
                  borderRadius: '14px',
                  padding: '24px 15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  color: '#fff'
                }}
              >
                <img
                  src={faction.icon}
                  alt={faction.name}
                  style={{ height: '48px', width: '48px', objectFit: 'contain' }}
                />
                <div style={{ textAlign: 'center' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '1.1rem', display: 'block' }}>
                    {faction.name}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#bbb' }}>{faction.subtitle}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Tabela de Comparação */}
          <div style={{ width: '100%', marginTop: '10px' }}>
            <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '20px', fontSize: '1.4rem' }}>
              Tabela Comparativa de Estilos
            </h3>
            <FactionTable factions={FACTIONS} />
          </div>
        </main>
      ) : (
        /* TELA DETALHADA: Facção selecionada */
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
                onClick={() => setActiveFaction(null)}
                style={{
                  background: '#2b2b2b',
                  color: '#fff',
                  border: '1px solid #555',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease'
                }}
              >
                ← Visão Geral
              </button>

              {FACTIONS.map((faction) => (
                <button
                  key={faction.id}
                  onClick={() => setActiveFaction(faction.id)}
                  style={{
                    background: activeFaction === faction.id ? faction.color : '#222',
                    color: '#fff',
                    border: '1px solid #444',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.9rem'
                  }}
                >
                  <img
                    src={faction.icon}
                    alt={faction.name}
                    style={{ height: '22px', width: '22px', objectFit: 'contain' }}
                  />
                  {faction.name}
                </button>
              ))}
            </nav>
          </header>

          <div key={activeFaction} className="animate-page" style={{ width: '100%', marginTop: '10px' }}>
            <FactionCard faction={FACTIONS.find((f) => f.id === activeFaction)} />
          </div>
        </main>
      )}

      <Footer />
    </div>
  )
}