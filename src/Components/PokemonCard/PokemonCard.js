import { ButtonContainer, ImgContainer, PokeCardContainer, PokeImg } from "./styled";
import pikachu from "../../assets/pikachu.png"

const PokemonCard = () => {
    return (
        <PokeCardContainer>
            <ImgContainer>
                <PokeImg src={pikachu} alt="Pikachu"/>
            </ImgContainer>
            <ButtonContainer>
                <button> Adicionar </button>
                <button> Ver detalhes </button>
            </ButtonContainer>
        </PokeCardContainer>
    )
};

export default PokemonCard;