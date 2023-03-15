import CabecalhoLink from "Componetes/CabecalhoLink";
import { Link } from "react-router-dom";
import Styles from "./cabecalho.module.css";
import logo from "./logo.png";


export default function Cabecalho(){

    return(

        <header className={Styles.cabecalho}>

            <Link to="./">
                <img src={logo} alt="Logo CineTag" />
            </Link>

            <nav>
                <CabecalhoLink url="./" page="Home">
                </CabecalhoLink>

                <CabecalhoLink url="./Favoritos" page="Favoritos">
                </CabecalhoLink>
            </nav>

        </header>

    )


}