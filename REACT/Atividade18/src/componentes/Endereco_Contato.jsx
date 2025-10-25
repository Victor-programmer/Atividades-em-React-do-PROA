import styles from './css/Endereco_Contato.module.css';
import mapa from '../assets/imagens/mapa.png'
import insta from '../assets/imagens/insta.png'
import face from '../assets/imagens/face.png'
import zap from '../assets/imagens/whats.png'

function Endereco_Contato() {
  return (
    <section className={styles.EnderecoContato}>
      <section className={styles.Endereco}>

        <div className={styles.mapa}></div>
        <img src={mapa} alt="um" className={styles.mapa_img}/>
        <div className={styles.textoMapa}>
          <h1>Nossa Loja - Instrumentos Musicais</h1>
          <p>
            Está situada na Rua Tits, 54 - Pompida, próximo ao Teatro Cacilda Becker, 
            em uma construção do século XIX, com uma área de 500 m². 
            Oferecemos uma variada gama de instrumentos, em um ambiente agradável 
            para toda a família.
          </p>
        </div>
      </section>

      <section className={styles.Contato}>
        <div className={styles.formulario}>
          <p>Entre com seu nome:</p>
          <input type="text" placeholder="Digite seu nome aqui:" />

          <p>Entre com seu e-mail:</p>
          <input type="text" placeholder="Digite seu e-mail aqui:" />

          <input type="text" placeholder="Faça seu pedido aqui:" id="inputTexto" />

          <input type="button" value="Enviar" />
        </div>

        <div className={styles.redes}>
          <h1>Acesse também nossas redes sociais:</h1>
          <div className={styles.imagens}>
            <img src={insta} alt="instgram" />
            <img src={face} alt="facebook" />
            <img src={zap} alt="whatsapp" />
          </div>
            
        </div>
      </section>
    </section>
  );
}

export default Endereco_Contato;
