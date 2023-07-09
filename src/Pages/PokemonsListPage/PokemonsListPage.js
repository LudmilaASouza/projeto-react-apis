import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {PokemonListContainer} from "./styled"
import { getAllPokemons } from "../../API/request";

const PokemonsListPage = ({pokedex, setPokedex, addPokemon}) => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        getAllPokemons(setPokemons)
    }, []) 

    const filteredPokemons = pokemons.filter((pokemon) => 
        !pokedex.find((poke)=> poke.name === pokemon.name))
    


    return (
        <PokemonListContainer>
            {
                filteredPokemons.map((poke) => {
                    return (
                        <PokemonCard key={poke.id} poke={poke} pokedex={pokedex} setPokedex={setPokedex} addPokemon={addPokemon}/>
                    )
                })
            }
        </PokemonListContainer>
    );
};

export default PokemonsListPage;