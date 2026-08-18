export default function FactionTable({ factions }) {
  return (
    <section id="comparativo">
      <h2>Comparativo de Facções</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#333', borderBottom: '2px solid #d32f2f' }}>
            <th style={{ padding: '10px', textAlign: 'left', borderRight: '1px solid #666' }}>Facção</th>
            <th style={{ padding: '10px', textAlign: 'left', borderRight: '1px solid #666' }}>Estilo</th>
            <th style={{ padding: '10px', textAlign: 'left', borderRight: '1px solid #666' }}>Habilidade Principal</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Estratégia</th>
          </tr>
        </thead>
        <tbody>
          {factions.map((faction, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #555', backgroundColor: index % 2 === 0 ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)' }}>
              <td style={{ padding: '10px', textAlign: 'center', borderRight: '1px solid #666' }}>
                <img src={faction.icon} alt={faction.name} style={{ height: '30px' }} />
              </td>
              <td style={{ padding: '10px', borderRight: '1px solid #666' }}>{faction.tableStyle || faction.style}</td>
              <td style={{ padding: '10px', borderRight: '1px solid #666' }}>{faction.tableAbility || faction.mainAbility}</td>
              <td style={{ padding: '10px' }}>{faction.tableStrategy || faction.strategy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
