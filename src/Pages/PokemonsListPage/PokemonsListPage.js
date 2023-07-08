import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {PokemonListContainer} from "./styled"
import { getAllPokemons } from "../../API/request";

const PokemonsListPage = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getAllPokemons(setPokemons)
    }, [])
    


    return (
        <PokemonListContainer>
            {
                pokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.id} poke={poke}/>
                    )
                })
            }
        </PokemonListContainer>
    );
};

export default PokemonsListPage;