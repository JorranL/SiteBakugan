export default function BakuCoreSection({ category }) {
  return (
    <section id={category.id}>
      <h2 style={{ textAlign: 'center' }}>{category.name}</h2>
      <div className="bakucores-container">
        {category.images.map((src, index) => (
          <div className="bakucore-card" key={src}>
            <img src={src} alt={`${category.name} ${index + 1}`} className="bakucore" />
          </div>
        ))}
      </div>
    </section>
  )
}
