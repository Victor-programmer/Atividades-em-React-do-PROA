import Style from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Aruba from '../assets/imagens/arubaBandeira.png'
function Aruba(){
    return(

        <section className={Style.fundo_Aruba}>
            <h1>Venha conhecer a incrivel Aruba!</h1>
            <ComponenteProps
                lugar="Aruba"
                texto="Aruba é uma ilha paradisíaca no Caribe conhecida por suas praias de areia branca e águas cristalinas. Seu clima ensolarado e constante torna o destino perfeito para relaxar ou praticar esportes aquáticos. As cores vibrantes de suas construções e a cultura local criam um charme único e acolhedor. Além das praias, Aruba oferece paisagens naturais como formações rochosas e desertos de cactus. É um lugar que combina beleza, tranquilidade e diversão em cada canto.
"
                bandeira={Bandeira_Aruba}/>

        </section>

    )
}

export default Aruba