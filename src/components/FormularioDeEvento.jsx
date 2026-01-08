import './formulario-de-evento.estilos.css'
import TituloFormulario from './TituloFormulario'
import CampoDeFormulario from './CampoDeFormulario'
import Label from './Label'
import CampoDeEntrada from './CampoDeEntrada'
import Botao from './Botao'
import CampoDeEscolha from './CampoDeEscolha'

function FormularioDeEvento() {
    return (
        <form action="" className='form-evento'>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>

            <div className="campos">
            <CampoDeFormulario>
                <Label htmlFor="nomeEvento">
                    Qual o nome do evento?
                </Label>
                <CampoDeEntrada
                    type="text"
                    name="nomeEvento"
                    id="nomeEvento"
                    placeholder='Summer dev hits' />
            </CampoDeFormulario>
            <CampoDeFormulario>
                <Label htmlFor="dataEvento">
                    Qual a data do evento?
                </Label>
                <CampoDeEntrada
                    type="date"
                    name="dataEvento"
                    id="dataEvento"
                    placeholder='11/11/2005' />
            </CampoDeFormulario>
            <CampoDeFormulario>
                <Label htmlFor="temaEvento">
                    Qual o tema do evento?
                </Label>
                <CampoDeEscolha
            
                    name="temaEvento"
                    id="temaEvento"/>
            </CampoDeFormulario>

            </div>
            <div className="div-botao">
            <Botao>
                Criar evento
            </Botao>

            </div>
        </form>
    )
}

export default FormularioDeEvento
