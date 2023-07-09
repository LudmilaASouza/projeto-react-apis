import { ButtonContainer, ImgContainer, PokeCardContainer, PokeImg } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";

const PokemonCard = ({poke}) => {
    const navigate = useNavigate();
    return (        
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src={poke.sprites.front_default} alt={`Imagem do Pokemon ${poke.name}`}/>
            </ImgContainer>
            <ButtonContainer>
                <button> Adicionar </button>
                <button onClick={() => goToDetailPage(navigate, poke.name)}>Detalhes</button>
            </ButtonContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;