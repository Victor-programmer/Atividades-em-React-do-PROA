import styles from './css/Header.module.css'
import fundo_header from '../assets/imagens/guitarras_header.jpg'
function Header() {
    return(
        
        <header className={styles.header} style={{ backgroundImage: `url(${fundo_header})` }}>
             <nav>
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>
                <li>
                     <a href="#sobre">Quem Somos</a>
                </li>
                <li>
                    <a href="#cards">instrumentos</a>
                </li>
                <li>
                     <a href="#Endereco">Endereço</a>
                </li>
                <li>
                     <a href="Contato">Contato</a>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header