import styles from './css/Sobre.module.css'
import fundo_sobre from '../assets/imagens/loja.jpg'

function Sobre() {
    return (
    <section className={styles.sobre}>
        <div className={styles.container}>
            <div class={styles.textoSobre}>
                <h1>Nossa Loja - instrumentos Musicais</h1>
                <p>Se você é um amante da música, entã em busca de um nov instruments musicale não abre mão da qualidade, chegou ao lugar certal Aqui em nossa loja você encontra os melhores tans, c teclado, piano (digital e acustice), corttrabaixo, tuteria, guitarra, violão, sopro e muito man! Nomos intrumeritos posem a selo de qualidade das melhores marcas de mercadol Escola os seus favorite em casa com toda a commodidade que você precise, Confira nomes apções disponíveis e tenha em mãos instrumentos de pontal rece</p>
            </div>
            <div className={styles.imagemSobre}>
            <img src={fundo_sobre} alt="" className={styles.fundo_sobre}/>
                
            </div>
        </div>
    </section >
    )
}
export default Sobre