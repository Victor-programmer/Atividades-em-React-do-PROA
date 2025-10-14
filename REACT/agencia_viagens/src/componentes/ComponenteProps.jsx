import Style from './css/ComponenteProps.module.css'
import Logo from '../assets/imagens/viagens.jpg'
function ComponenteProps({lugar,texto,bandeira}){
    return(
        <div className ={Style.corpo_texto}>
            <h2>Venha conhecer esse lugar incrivel {lugar}</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="" className={Style.imagem_props}/>
        </div>

        )
}
export default ComponenteProps