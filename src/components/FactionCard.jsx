export default function FactionCard({ faction }) {
  if (!faction) return null

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '25px auto',
        padding: '36px',
        background: '#141414',
        borderRadius: '16px',
        border: `2px solid ${faction.color}`,
        boxShadow: `0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px ${faction.color}22`,
        color: '#fff'
      }}
    >
      {/* 1. SEÇÃO SUPERIOR: Título e Descrição de Gameplay em largura total */}
      <section style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
          <img
            src={faction.icon}
            alt={faction.name}
            style={{ height: '48px', width: '48px', objectFit: 'contain' }}
          />
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: '2.3rem',
                color: faction.color,
                letterSpacing: '0.5px'
              }}
            >
              {faction.name}
            </h2>
            <span style={{ color: '#aaa', fontSize: '1.05rem' }}>{faction.subtitle}</span>
          </div>
        </div>

        <p
          style={{
            lineHeight: '1.7',
            color: '#e0e0e0',
            fontSize: '1.1rem',
            margin: 0
          }}
        >
          {faction.description}
        </p>
      </section>

      {/* 2. SEÇÃO INFERIOR: Imagem da Carta e Caixa de Estratégia lado a lado */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}
      >
        {/* Coluna Esquerda: Imagem da Carta */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              width: '100%',
              maxWidth: '520px',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              border: `1px solid ${faction.color}33`,
              background: '#0d0d0d'
            }}
          >
            <img
              src={faction.cardExample}
              alt={`Exemplo de Carta ${faction.name}`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain'
              }}
            />
          </div>
          <span
            style={{
              display: 'block',
              marginTop: '10px',
              fontSize: '0.85rem',
              color: '#888',
              fontStyle: 'italic'
            }}
          >
            Exemplo de Carta • Facção {faction.name}
          </span>
        </div>

        {/* Coluna Direita: Caixa de Estilo e Mecânicas */}
        <div
          style={{
            background: '#1c1c1c',
            padding: '28px',
            borderRadius: '14px',
            borderLeft: `5px solid ${faction.color}`,
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          <div>
            <strong style={{ color: faction.color, fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
              Estilo de Jogo
            </strong>
            <span style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>
              {faction.style}
            </span>
          </div>

          <div>
            <strong style={{ color: faction.color, fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
              Habilidade Principal
            </strong>
            <span style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>
              {faction.mainAbility}
            </span>
          </div>

          <div>
            <strong style={{ color: faction.color, fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
              Estratégia
            </strong>
            <span style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>
              {faction.strategy}
            </span>
          </div>

          <div>
            <strong style={{ color: faction.color, fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
              Pontos Fracos
            </strong>
            <span style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>
              {faction.weaknesses}
            </span>
          </div>

          <div>
            <strong style={{ color: faction.color, fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
              Bakugans Notáveis
            </strong>
            <span style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.95rem' }}>
              {faction.bakugans}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}