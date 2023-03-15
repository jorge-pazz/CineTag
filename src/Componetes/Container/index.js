import Style from './Container.module.css';


export default function Container({ children }){

    return(

        <section className={Style.container}>

            {children}

        </section>

    )


}