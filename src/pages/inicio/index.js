import Card from "Componetes/Card";
import Titulo from "Componetes/Titulo";
import videos from "json/db.json";
import Style from "./inicio.module.css";
import Banner from 'Componetes/Banner';



export default function Inicio(){

    return(
     <>
        <Banner imagem="home" />
        <Titulo>
            <h1>Um lugar para guardar seus videos e filmes</h1>
        </Titulo>
        
        <section className={Style.container}>
           {videos.map((video)=>{
                return <Card id={video.id} titulo={video.titulo} capa={video.capa} key={video.id} />
           })}
        </section>

       
        
     </>
    )

}

