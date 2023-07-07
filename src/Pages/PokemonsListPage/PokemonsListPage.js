import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {PokemonListContainer} from "./styled"

const PokemonsListPage = () => {
    return (
        <PokemonListContainer>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </PokemonListContainer>
    );
};

export default PokemonsListPage;