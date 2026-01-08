import './campo-escolha.estilos.css'

function CampoDeEscolha(props) {
  return (
    <select {...props} className='campo-escolha'>
      <option value="1">Frontend</option>
      <option value="2">Backend</option>
      <option value="3">Banco de Dados</option>
    </select>
  )
}

export default CampoDeEscolha
