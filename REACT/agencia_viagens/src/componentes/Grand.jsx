import Styles from './css/Grand.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Grand from '../assets/imagens/BandeiraGrand.png'

function Grand(){
    return(

        <section className={Styles.fundo_grand}>
            <h2>Venha conhecer o incrivel {ComponenteProps.lugar="GrandCanyon"}</h2>
        <ComponenteProps
            lugar="GrandCanyon.jpg"
            texto="O Grand Canyon é uma das maravilhas naturais mais impressionantes do planeta. Suas enormes formações rochosas revelam milhões de anos da história da Terra, com camadas coloridas que mudam de tom conforme a luz do sol. O rio Colorado corta o desfiladeiro, criando um contraste espetacular entre o azul da água e o vermelho das rochas. A imensidão do lugar transmite uma sensação única de grandiosidade e paz. É um destino que encanta pela sua beleza, força e magnitude incomparável.
            "
            bandeira={Bandeira_Grand}/>
        </section>
    )
}
export default Grand