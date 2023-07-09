import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonsLisPage from "../Pages/PokemonsListPage/PokemonsListPage"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import Header from "../Components/Header/Header";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import { useState } from "react";

const Router = () => {

    const [pokedex, setPokedex] = useState([]);
    const addPokemon = (pokemon) => {
        setPokedex([...pokedex, pokemon])
    }
    /*const removerPokemon = (pokeName) => {
        setPokedex(pokedex.filter((poke) => poke.name !== pokeName))
    }*/


    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<PokemonsLisPage pokedex={pokedex} setPokedex={setPokedex} addPokemon={addPokemon} />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/detalhes/:nome" element={<PokemonDetailPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;