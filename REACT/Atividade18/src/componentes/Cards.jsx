import styles from './css/Cards.module.css';
import produto from '../assets/imagens/guitarrinha.jpg'

function Cards() {
    return (
     <section className={styles.cards}>
        <div className={styles.card}>
            <img src={produto} alt="" className={styles.produto}/>
            <p>VIOLÃO YAMAHA C70 11 CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
            <span>R$ 998,50</span>
        </div>
        <div className={styles.card}>
           <img src={produto} alt="" className={styles.produto}/>
            <p>VIOLÃO YAMAHA C70 11 CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
            <span>R$ 998,50</span>
        </div>
        <div className={styles.card}>
           <img src={produto} alt="" className={styles.produto}/>
            <p>VIOLÃO YAMAHA C70 11 CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
            <span>R$ 998,50</span>
        </div>
        <div className={styles.card}>
           <img src={produto} alt="" className={styles.produto}/>
            <p>VIOLÃO YAMAHA C70 11 CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
            <span>R$ 998,50</span>
        </div>
        <div className={styles.card}>
            <img src={produto} alt="" className={styles.produto}/>
            <p>VIOLÃO YAMAHA C70 11 CLÁSSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
            <span>R$ 998,50</span>
        </div>
    </section>
    )
}
export default Cards