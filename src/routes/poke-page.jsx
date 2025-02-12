import { useParams} from "react-router-dom";
import { abilitesAndMovesSearch, searchPokemon } from "../services/consultaPoke";
import { useEffect, useState } from "react";
import SectionDetailsPokemon from "../components/detailsPokemon/sectionDetailsPokemon";

// Página funcina quando é direcionada pela principal ou se simplesmente digitar o número do pokemon na URL.  

// OBS: Melhoria futura seria colocar o input funcionar nesta página também 😊.

export default function PokePage({ pokemons = [] }) {
    const { id } = useParams(); // Captura o ID da URL
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [pokemonNotFound, setPokemonNotFound] = useState(false);
    const [abilitiesDetails, setAbilitiesDetails] = useState([]);
    const [movesDetails, setMovesDetails] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            let foundPokemon = pokemons.length > 0 ? pokemons.find((pokemon) => pokemon.id === Number(id)) : null; // Filtra pelo ID

            if (foundPokemon) {
                setPokemonSelected(foundPokemon);
                console.log("achou na lista")
            } else {
                console.log("não achou na lista, buscando na api")
                try {
                    const newPokemon = await searchPokemon(id);

                    if (newPokemon && newPokemon.length > 0) {
                        console.log("buscou na api")
                        setPokemonSelected(newPokemon[0]);
                        setPokemonNotFound(false);
                    } else {
                        setPokemonNotFound(true);
                    }

                } catch (error) {
                    console.error("Erro ao buscar Pokémon:", error);
                }
            }

        }

        fetchPokemon();

    }, [id])

    // se encontrar o pokemon vamos pegar a lista de movimentos e habilidades para buscar a descrição delas.

    useEffect(() => {
        if (!pokemonSelected || !pokemonSelected.abilities || !pokemonSelected.moves) return; // Evita erro quando `pokemonSelected` é null

        console.log("entrou para buscar habilidades")

        const fetchAbilities = async () =>{
            const abilitesPromises = pokemonSelected.abilities.map(async (item) => {
                return await abilitesAndMovesSearch(item.name, item.url);
            });

            const abilities  = await Promise.all(abilitesPromises);
            setAbilitiesDetails(abilities);

            // console.log("Habilidades carregadas:", abilities);
        }

        const fetchMoves = async () => {
            try {
                const movesPromises = pokemonSelected.moves.map(async (item) => {
                    return await abilitesAndMovesSearch(item.name, item.url);
                });

                const moves = await Promise.all(movesPromises);
                setMovesDetails(moves);

                // console.log("movimentos carregados:", moves);

            } catch (error) {
                console.error("Erro ao buscar habilidades:", error);
            }
        };

        fetchAbilities();
        fetchMoves();

    }, [pokemonSelected])

    useEffect(() => {
        console.log('Alteração pokemon selected', pokemonSelected)
    }, [pokemonSelected])

    if (pokemonNotFound) {
        return <h2>Pokémon não encontrado!</h2>;
    }

    if (!pokemonSelected) {
        return <h2>Carregando Pokémon...</h2>;
    }

    return (

        <SectionDetailsPokemon
            image={pokemonSelected.image}
            type1={pokemonSelected.type1}
            type2={pokemonSelected.type2}
            number={pokemonSelected.id}
            name={pokemonSelected.nome}
            cry={pokemonSelected.cry}
            weight={pokemonSelected.weight / 10}
            height={pokemonSelected.height / 10}
            hp={pokemonSelected.stats_hp}
            attack={pokemonSelected.stats_attack}
            defense={pokemonSelected.stats_defense}
            speed={pokemonSelected.stats_speed}
            abilities={abilitiesDetails}
            moves={movesDetails} />
    );
}
