import TituloFormulario from './TituloFormulario'
import CampoDeFormulario from './CampoDeFormulario'
import Label from './Label'
import CampoDeEntrada from './CampoDeEntrada'

function FormularioDeEvento() {
  return (
    <form action="" className='form-evento'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada type="text" id="nome" placeholder='Summer dev hits' />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o tipo do evento?
        </Label>
        <CampoDeEntrada type="text" id="evento" placeholder='Front, Back, DevOps' />
      </CampoDeFormulario>
    </form>
  )
}

export default FormularioDeEvento
