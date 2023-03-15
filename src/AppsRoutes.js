import Cabecalho from "Componetes/Cabecalho";
import Container from "Componetes/Container";
import FavoritosProvider from "Componetes/Contextos/Favoritos";
import Rodape from "Componetes/Rodape";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/inicio";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function AppsRoutes(){

    return(
        
        <BrowserRouter>
            <Cabecalho />
            <Container>
            <FavoritosProvider>
                <Routes>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Favoritos" element={ <Favoritos /> } ></Route>
                    <Route path="/Player/:id" element={<Player />}></Route>
                    <Route path="*" element={<Inicio />}></Route>
                </Routes>
            </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )


}