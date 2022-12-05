import "../styles/tinycard.css"
const TinyCard = ({ color, technology }) => {
  return (
    <section className={`tiny-card ${color}`}>
      <p>{technology}</p>
    </section>
  )
}
export default TinyCard
