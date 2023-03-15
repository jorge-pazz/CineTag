import Style from './Titulo.module.css';

export default function Titulo({ children }){

    return(
        
            <div className={Style.texto}>
                {children}
            </div>

    )

}