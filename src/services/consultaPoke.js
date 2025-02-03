// pegar todos os pokemons https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

// pegar as informações basicas de a cordo com o número do pokemon https://pokeapi.co/api/v2/pokemon/1/

import axios from "axios";
import { consultaInfosCard } from "./pokeInfoCard";

async function fetchAllPokemons() {
    try {
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`)


        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`)


        // console.log(response.data.results)

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
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0`)


        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)


        // console.log(response.data.results)

        // teste
        
        let pokes = await Promise.all(
            consultaInfosCard(response.data.results)
        );

        return pokes;

    } catch (error) {
        console.error(`Error fetching Pokemon: ${error.message}`)
    }

}

export{fetchAllPokemons, fetch10Pokemons }