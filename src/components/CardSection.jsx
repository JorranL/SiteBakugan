export default function CardSection({ section }) {
  return (
    <section id={section.id} style={{ marginBottom: '30px' }}>
      <h2 style={{ color: '#d32f2f', marginBottom: '15px' }}>{section.title}</h2>
      <p style={{ marginBottom: '15px' }}>{section.description}</p>
      {section.items && section.items.length > 0 && (
        <ul style={{ marginLeft: '30px' }}>
          {section.items.map((item, index) => (
            <li key={index} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  <strong>{item.type}:</strong> {item.description}
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
