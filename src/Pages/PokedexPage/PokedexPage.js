import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { PokedexContainer } from "./styled";

const PokedexPage = ({pokedex, removePokemon}) => {
    return(
        <PokedexContainer>
            {
                pokedex.map((poke) => {
                    return (
                        <PokemonCard poke={poke} removePokemon={removePokemon} />
                    )
                })
            }
        </PokedexContainer>
    )
};

export default PokedexPage;