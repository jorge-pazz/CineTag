import Banner from 'Componetes/Banner';
import Card from 'Componetes/Card';
import Titulo from 'Componetes/Titulo';
import Style from './Favorito.module.css';


export default function Favoritos(){

    return(
       <>
            
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={Style.container}>
                <Card id="1" titulo="Gato botas" capa="Capa" />
            </section>

       </>
    )

}