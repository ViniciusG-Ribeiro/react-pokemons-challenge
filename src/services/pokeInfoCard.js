// pegar todos os pokemons https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

// pegar as informações basicas de a cordo com o número do pokemon https://pokeapi.co/api/v2/pokemon/1/

import axios from "axios";

export function consultaInfosCard(results) {
    const infosCard = results.map(async function (pokemons) {
        try {
            
            let responseDetails;

            if (pokemons.url) {
                const response = await axios.get(`${pokemons.url}`);
                responseDetails = response.data;
            } else {
                responseDetails = pokemons; // Usa os dados já disponíveis
            }
            
            // const responseDetails = await axios.get(`${pokemons.url}`)

            //  console.log(responseDetails);


            //função para retornar o numero do tipo ao inves do nome, assim pegando o estilo no card
            const extractTypeId = (typeObj) => {
                if (!typeObj) return null;
                const urlSegments = typeObj.type.url.split("/");
                return urlSegments[urlSegments.length - 2]; // Penúltimo segmento da URL
            };

            return {
                nome: responseDetails.name,
                id: responseDetails.id,
                image: responseDetails.sprites.other["official-artwork"].front_default,
                // type1: responseDetails.types[0],
                // type2: responseDetails.types[1] || null,
                type1: extractTypeId(responseDetails.types[0]),
                type2: responseDetails.types[1] ? extractTypeId(responseDetails.types[1]) : null, 
                weight: responseDetails.weight,
                height: responseDetails.height,
                stats_hp: responseDetails.stats[0].base_stat,
                stats_attack: responseDetails.stats[1].base_stat,
                stats_defense: responseDetails.stats[2].base_stat,
                stats_special_attack: responseDetails.stats[3].base_stat,
                stats_special_defense: responseDetails.stats[4].base_stat,
                stats_speed: responseDetails.stats[5].base_stat,
                abilities: responseDetails.abilities,
                moves: responseDetails.moves,
            }


        } catch (error) {
            console.error(`Error fetching Pokemon Details: ${error.message}`)
            return null;
        }
    })
    return infosCard;
};
