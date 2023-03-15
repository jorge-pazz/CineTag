import Style from './Card.module.css';
import iconeFavoritar from './favoritar.png';



export default function Card({ id, titulo, capa  }){

    return(
        
        <div className={Style.container}>

            <img src={capa} alt={titulo} className={Style.capa} />
            <h2>{titulo}</h2>
            <img src={iconeFavoritar} alt="Favoritar Filme" className={Style.favoritar} />

        </div>  


    )


}