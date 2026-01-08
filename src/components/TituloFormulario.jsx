import './titulo-formulario.estilos.css'

function TituloFormulario(props) {
  return (
    <h2 className='titulo-form'>
      {props.children}
    </h2>
  )
}

export default TituloFormulario
