import { useParams, Link } from "react-router-dom";
import { searchPokemon } from "../services/consultaPoke";
import { useEffect, useState } from "react";

export default function PokePage({ pokemons = [] }) {
    const { id } = useParams(); // Captura o ID da URL
    const [pokemonSelected, setPokemonSelected] = useState(null);
    const [pokemonNotFound, setPokemonNotFound] = useState(false);

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
                    } else{
                        setPokemonNotFound(true);
                    }

                } catch (error) {
                    console.error("Erro ao buscar Pokémon:", error);
                }
            }
        }

        fetchPokemon();
    }, [id])

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
        <div>
            <Link to='/' >Voltar para home</Link>
            <h1>{pokemonSelected.nome}</h1>
            <img src={pokemonSelected.image} alt={pokemonSelected.nome} />
            <p>Tipo: {pokemonSelected.type1} {pokemonSelected.type2 && `, ${pokemonSelected.type2}`}</p>
            <p>Peso: {pokemonSelected.weight / 10} kg</p>
            <p>HP: {pokemonSelected.stats_hp}</p>
            <p>Ataque: {pokemonSelected.stats_attack}</p>
            <p>Defesa: {pokemonSelected.stats_defense}</p>
            <p>Velocidade: {pokemonSelected.stats_speed}</p>
        </div>
    );
}
