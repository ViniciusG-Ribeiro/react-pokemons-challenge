import axios from "axios";
import { consultaInfosCard } from "./pokeInfoCard";

async function fetchAllPokemons() {
    try {
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`)


        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0`)


        //  console.log("pokemons results",response.data.results)

        // teste
        
        let pokes = await Promise.all(
            consultaInfosCard(response.data.results)
        );

        return pokes;

    } catch (error) {
        console.error(`Error fetching Pokemon: ${error.message}`)
    }

}

async function fetch10Pokemons() {
    try {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
        
        let pokes = await Promise.all(
            consultaInfosCard(response.data.results)
        );

        console.log("pokemons pokes",pokes)

        return pokes;

    } catch (error) {
        console.error(`Error fetching Pokemon: ${error.message}`)
    }

}

async function searchPokemon(name) {
    try {
        const nameClear = name.trim();

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameClear}`)

        // console.log(nameClear)

        // console.log("search -",response)
        
        let pokes = await Promise.all(
            consultaInfosCard([response.data])
        );

        return pokes;

    } catch (error) {
        console.error(`Error fetching Pokemon: ${error.message}`)
    }

}

async function typeSearch(number) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${number}`)

        //  console.log("typeSearch - ", response.data.pokemon.map(item => item.pokemon))

        const filteredPokes = response.data.pokemon.map(item => item.pokemon);

        // console.log("busca filtro",filteredPokes)
        
        let pokes = await Promise.all(
            consultaInfosCard(filteredPokes)
        );

        return pokes;

    } catch (error) {
        console.error(`Error fetching Pokemon: ${error.message}`)
    }

}


export{fetchAllPokemons, fetch10Pokemons, searchPokemon, typeSearch }