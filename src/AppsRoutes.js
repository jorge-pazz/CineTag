import Cabecalho from "Componetes/Cabecalho";
import Container from "Componetes/Container";
import Rodape from "Componetes/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppsRoutes(){

    return(
        
        <BrowserRouter>
            <Cabecalho />
            <Container>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Favoritos" element={ <Favoritos /> } ></Route>
            </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )


}