import { ButtonContainer, ImgContainer, PokeCardContainer, PokeImg } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";

const PokemonCard = ({poke, pokedex, setPokedex, addPokemon}) => {
    const navigate = useNavigate();
    return (        
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src={poke.sprites.front_default} alt={`Imagem do Pokemon ${poke.name}`}/>
            </ImgContainer>
            <ButtonContainer>
                <button onClick={() => addPokemon(poke)}> Adicionar </button>
                <button onClick={() => goToDetailPage(navigate, poke.name)}>Detalhes</button>
            </ButtonContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;