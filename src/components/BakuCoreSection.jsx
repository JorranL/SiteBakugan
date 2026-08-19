export default function BakuCoreSection({ category }) {
  if (!category) return null

  return (
    <section
      style={{
        maxWidth: '1100px',
        margin: '25px auto',
        padding: '32px 24px',
        background: 'rgba(16, 16, 16, 0.85)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
        textAlign: 'center'
      }}
    >
      {/* Cabeçalho da Categoria */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '28px'
        }}
      >
        <img
          src={category.icon}
          alt={category.name}
          style={{ height: '38px', width: '38px', objectFit: 'contain' }}
        />
        <h2 style={{ margin: 0, fontSize: '2rem', color: '#fff' }}>
          {category.name}
        </h2>
      </div>

      {/* Grid com todas as imagens dos BakuCores da categoria */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
          gap: '20px',
          justifyItems: 'center',
          alignItems: 'center',
          padding: '10px 0'
        }}
      >
        {category.images &&
          category.images.map((imgSrc, index) => (
            <div
              key={index}
              style={{
                background: 'rgba(28, 28, 28, 0.7)',
                padding: '12px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
                width: '100%',
                maxWidth: '140px',
                aspectRatio: '1 / 1'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = '#d32f2f'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <img
                src={imgSrc}
                alt={`${category.name} ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          ))}
      </div>
    </section>
  )
}