import { createContext, useContext, useState } from "react";


export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }){

    const [favorito,  setfavorito] = useState([]);

    return(

        <FavoritosContext.Provider value={{favorito, setfavorito}}>
            {children}
        </FavoritosContext.Provider>

    )



}


export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novalista = [...favorito];

        if(!favoritoRepetido) {
            novalista.push(novoFavorito);
            return setFavorito(novalista);
        }

        novalista.slice(novalista.indexOf(novoFavorito), 1);
        return setFavorito(novalista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}