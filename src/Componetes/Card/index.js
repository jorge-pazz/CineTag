import { useFavoritoContext } from 'Componetes/Contextos/Favoritos';
import Style from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';



export default function Card({ id, titulo, capa  }){
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconeFavoritar : iconeDesfavoritar;
    return(
        
        <div className={Style.container}>

            <img src={capa} alt={titulo} className={Style.capa} />
            <h2>{titulo}</h2>
            <img src={iconeFavoritar}
                alt="Favoritar filme"
                className={Style.favoritar}
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
             }} />

        </div>  


    )


}