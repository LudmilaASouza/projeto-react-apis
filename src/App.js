import { useState } from "react";
import Header from "./Components/Header/Header"
import PokemonsLisPage from "./Pages/PokemonsListPage/PokemonsListPage"
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage"
import PokedexPage from "./Pages/PokedexPage/PokedexPage"


export default function App() {
    const [page, setPage] = useState(2)
    return (
        <>
            <Header page={page} setPage={setPage} />
            {
                page === 0 ? 
                <PokemonsLisPage />
                :
                page === 1 ?
                <PokedexPage />
                :
                <PokemonDetailPage />
            }        
                        
        </>
    );
}