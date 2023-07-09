import { useEffect, useState } from "react";
import {ImagesContainer, ImgWrapper, MovesContainer, PokeInfosContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer} from "./styled"
import { getPokemonByName } from "../../API/request";
import { useParams } from "react-router-dom";


const PokemonDetailPage = () => {
    const [pokemon, setPokemon] = useState([]); 
    const {nome} = useParams(); 
    
    useEffect(() => { 
        getPokemonByName(nome, setPokemon); // eslint-disable-next-line 
    }, []);

    return(
        <PokeInfosContainer>
            <ImagesContainer>
                <ImgWrapper src={pokemon.sprites?.front_default}/>
                <ImgWrapper src={pokemon.sprites?.back_default} />
            </ImagesContainer>
            <StatsContainer>
                <TitleContainer>Poderes</TitleContainer>
                {
                    pokemon.stats?.map((poke) => {
                        return (
                            <p><strong>{poke.stat.name}</strong>: {poke.base_stat}</p>
                        )
                    })
                }
                
            </StatsContainer>
            <TypeAndMovesContainer>
                <TypesContainer>
                    {
                        pokemon.types?.map((poke) => {
                            return (
                                <p>{poke.type.name}</p>
                            )
                        })
                    }
                </TypesContainer>
            </TypeAndMovesContainer>
            <MovesContainer>
                <TitleContainer>Principais Ataques</TitleContainer>
                {
                    pokemon.moves?.map((poke, index) => {
                        return (
                            index < 5 && <p>{poke.move.name}</p>
                        )
                    })
                }
            </MovesContainer>
        </PokeInfosContainer>
    )
};

export default PokemonDetailPage;