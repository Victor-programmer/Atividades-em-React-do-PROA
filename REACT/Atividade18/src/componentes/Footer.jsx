import styles from './css/Footer.module.css';
import whats from '../assets/imagens/whats.png';
import insta from '../assets/imagens/insta.png';
import face from '../assets/imagens/face.png';

function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <h1>Nossa Loja - Instrumentos Musicais</h1>
      <p>Rua Tito, 54 - Lapa</p>
      <p>São Paulo - Brasil</p>

      <div className={styles.imagens}>
        <img src={whats} alt="whatsapp logo" className={styles.footer_img}/>
        <img src={insta} alt="instagram logo" className={styles.footer_img}/>
        <img src={face} alt="facebook logo" className={styles.footer_img}/>
      </div>
    </section>
  );
}

export default Footer;
