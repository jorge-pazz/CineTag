
import { Link } from 'react-router-dom';
import Styles from './CabecalhoLink.module.css';


export default function CabecalhoLink({url, page}){

    return(
        <Link to={url} className={Styles.link}>
            {page}
        </Link>
    )


}