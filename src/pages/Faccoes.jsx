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
    color: '#e41a1a',
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
    color: '#126e3c',
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
    color: '#3d9797',
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
    color: '#3e7396',
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
    color: '#111',
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
    color: '#e0cb0f',
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
    <div>
      <Header />
      <header className="topbar-interna">
        <nav className="nav-interna" style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveFaction(null)}
            style={{
              background: activeFaction === null ? '#d32f2f' : '#333',
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
          {FACTIONS.map((faction) => (
            <button
              key={faction.id}
              onClick={() => setActiveFaction(faction.id)}
              className={faction.id}
              style={{
                background: activeFaction === faction.id ? faction.color : '#333',
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
              <img src={faction.icon} alt={faction.name} style={{ height: '20px' }} />
              {faction.name}
            </button>
          ))}
        </nav>
      </header>

      <section style={{ marginBottom: '20px' }}>
        <h2>Facções</h2>
        <p>
          As facções são os elementos que definem os estilos de jogo. Cada carta e Bakugan pertence a uma facção, com
          características únicas que influenciam estratégias e estilos de batalha.
        </p>
      </section>

      {activeFaction === null ? (
        <>
          {FACTIONS.map((faction) => (
            <FactionCard key={faction.id} faction={faction} />
          ))}
          <FactionTable factions={FACTIONS} />
        </>
      ) : (
        <>
          <FactionCard faction={FACTIONS.find(f => f.id === activeFaction)} />
        </>
      )}

      <Footer />
    </div>
  )
}
