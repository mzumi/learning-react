export const Instructions: React.FC<{ title: string, steps: string[] }> = (props) => {
  return (
    <section className="instructions">
      <h2>{props.title}</h2>
      {props.steps.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  )
}
