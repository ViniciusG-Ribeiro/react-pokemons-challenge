// pegar todos os pokemons https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

// pegar as informações basicas de a cordo com o número do pokemon https://pokeapi.co/api/v2/pokemon/1/

import axios from "axios";

export function consultaInfosCard(results) {
    const infosCard = results.map(async function (pokemons) {
        try {

            const responseDetails = await axios.get(`${pokemons.url}`)

            // console.log(responseDetails);

            return {
                nome: responseDetails.data.name,
                order: responseDetails.data.order,
                image: responseDetails.data.sprites.other["official-artwork"].front_default,
                type1: responseDetails.data.types[0],
                type2: responseDetails.data.types[1] || null,
                weight: responseDetails.data.weight,
                height: responseDetails.data.height,
                stats_hp: responseDetails.data.stats[0].base_stat,
                stats_attack: responseDetails.data.stats[1].base_stat,
                stats_defense: responseDetails.data.stats[2].base_stat,
                stats_special_attack: responseDetails.data.stats[3].base_stat,
                stats_special_defense: responseDetails.data.stats[4].base_stat,
                stats_speed: responseDetails.data.stats[5].base_stat,
                abilities: responseDetails.data.abilities,
            }


        } catch (error) {
            console.error(`Error fetching Pokemon Details: ${error.message}`)
        }
    })
    return infosCard;
};
