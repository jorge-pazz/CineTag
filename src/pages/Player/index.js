import Banner from 'Componetes/Banner';
import Titulo from 'Componetes/Titulo';
import { useParams } from 'react-router-dom';
import Style from './Player.module.css';
import videos from "json/db.json";

export default function(){
    const parametros = useParams();
    const video = videos.find((video)=>{
        return video.id === Number(parametros.id);
    })
    return(
        <>
        
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
        
        </>
    )



}