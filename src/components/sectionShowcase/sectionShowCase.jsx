import React from "react"
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import './style.css'
import CardPokemon from "./cardPokemon";





export default function SectionShowCase({ pokemons }) {

  const [quantityViewed, setQuantityViewed] = useState(10);
  const [pokemonViewed, setPokemonViewed] = useState([]);

  useEffect(() => {
    setPokemonViewed(pokemons); // Atualiza os Pokémon quando a prop mudar
  }, [pokemons]);

  const incrementQuantityViewed = () => {
    setQuantityViewed((prevQuantity) => prevQuantity + 10); //10 pokemons conforme solicitado no desafio
  }

  // React.useEffect(() => {

  //   console.log(`Quantidade de cards visualizados: ${quantityViewed}`);

  // }, [quantityViewed]);

  // console.log("showCase", props.pokemons)




  // useEffect(() => {
  //   console.log("pokemonViewed", pokemonViewed)
  // }, [pokemonViewed]);

  return (
    <>
      <section className="section-showCase">
        <div className="container-cards">
          {(pokemonViewed || []).slice(0, quantityViewed).map((pokemon, index) => (
            <CardPokemon
              key={index}
              pokemonUrl={pokemon.image}
              namePokemon={pokemon.nome}
              type1={pokemon.type1}
              type2={pokemon.type2 || ""}
              weight={pokemon.weight}
              stats={[pokemon.stats_hp, pokemon.stats_attack, pokemon.stats_defense, pokemon.stats_speed]}
            />
          ))}
        </div>
        <Button onClick={incrementQuantityViewed}>See more</Button>
      </section>

    </>
  )
};

const Button = styled.button`
    background: #FF1515;
    border:none; 
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    height: 25px;
    font-weight: bold;
    color: white;
    margin: 20px auto;
` 
