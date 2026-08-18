export default function FactionCard({ faction }) {
  return (
    <section id={faction.id}>
      <h2 style={{ color: faction.color }}>
        <img src={faction.icon} alt={faction.name} />
        {faction.name} ({faction.subtitle})
      </h2>
      <p>{faction.description}</p>
      <p>
        <strong>Estilo:</strong> {faction.style}
      </p>
      <ul>
        <li>
          <strong>Habilidade principal:</strong> {faction.mainAbility}
        </li>
        <li>
          <strong>Estratégia:</strong> {faction.strategy}
        </li>
        <li>
          <strong>Fraquezas:</strong> {faction.weaknesses}
        </li>
        <li>
          <strong>Bakugans Icônicos:</strong> {faction.bakugans}
        </li>
        <li>
          <strong>Exemplo de carta:</strong>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <img src={faction.cardExample} alt="Exemplo de carta" className="card-img" />
          </div>
        </li>
      </ul>
    </section>
  )
}
