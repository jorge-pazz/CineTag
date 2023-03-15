import Style from './Banner.module.css';

export default function Banner({imagem}){

    return(
        
        <div className={Style.capa}
        style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}>

        </div>

    )


}