import Style from './css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_escocia from '../assets/imagens/escociaBAndeira.png'
function Escocia(){
    return(

        <section className={Style.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>
            <ComponenteProps
                lugar="Escocia"
                texto="A Escócia é um país repleto de paisagens deslumbrantes e natureza exuberante. Suas montanhas cobertas de névoa, como as Highlands, encantam com cenários dignos de filmes. Os lagos cristalinos, como o famoso Loch Ness, despertam mistério e curiosidade. As antigas construções medievais, castelos e vilas históricas revelam séculos de cultura e tradição. É um destino que combina beleza natural, história e magia em cada detalhe."
                bandeira={Bandeira_escocia}/>

        </section>

    )
}

export default Escocia