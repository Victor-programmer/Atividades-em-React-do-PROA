import Style from './css/Muralha.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Muralha from '../assets/imagens/muralhaaBandeira.png'
function Muralha(){
    return(

        <section className={Style.fundo_Muralha}>
            <h1>Venha conhecer a Muralha da China!</h1>
            <ComponenteProps
                lugar="Muralha"
                texto="A Grande Muralha da China é uma das construções mais impressionantes já feitas pelo ser humano. Com milhares de quilômetros de extensão, ela serpenteia por montanhas, vales e desertos, revelando paisagens de tirar o fôlego. Construída ao longo de séculos, sua história está marcada por batalhas, cultura e engenharia grandiosa. Cada pedra reflete o esforço e a determinação do povo chinês. Hoje, a muralha é um símbolo de resistência e uma das maiores maravilhas do mundo."
                bandeira={Bandeira_Muralha}/>

        </section>

    )
}

export default Muralha