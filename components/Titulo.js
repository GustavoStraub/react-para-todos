export default function Titulo(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.paragrafo}</p>
      {props.children}
    </div>
  )
}