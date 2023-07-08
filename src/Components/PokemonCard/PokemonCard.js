import { ButtonContainer, ImgContainer, PokeCardContainer, PokeImg } from "./styled";
import pikachu from "../../assets/pikachu.png"
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../Router/coordinator";

const PokemonCard = () => {
    const navigate = useNavigate();
    return (        
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src={pikachu} alt="Pikachu"/>
            </ImgContainer>
            <ButtonContainer>
                <button> Adicionar </button>
                <button onClick={() => goToDetailPage(navigate)}> Ver detalhes </button>
            </ButtonContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;