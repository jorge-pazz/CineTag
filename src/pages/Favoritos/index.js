import Banner from 'Componetes/Banner';
import Card from 'Componetes/Card';
import { useFavoritoContext } from 'Componetes/Contextos/Favoritos';
import Titulo from 'Componetes/Titulo';
import Style from './Favorito.module.css';


export default function Favoritos(){
    const { favorito } = useFavoritoContext();
    return(
       <>
            
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={Style.container}>
            {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>

       </>
    )

}