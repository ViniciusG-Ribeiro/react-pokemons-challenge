import React from "react"
import styled from 'styled-components'
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import './style.css'
import CardPokemon from "./cardPokemon";

const arrayStats = [39,52,43,60,50,65]

export default function SectionShowCase(props) {

    return (
        <>
            <section className="section-showCase">
                <div className="container-cards">
                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />

                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif' namePokemon='Blastoise' type1='11' type2='' weight='855' stats= {[79,83,100,85,105,78]} />
                    
                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/149.gif' namePokemon='Dragonite' type1='16' type2='3' weight='2100' stats= {[91,134,95,100,100,80]} />
                    
                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />

                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />

                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />

                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />

                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />

                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />
                    
                    <CardPokemon pokemonUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif' namePokemon='Charmander' type1='10' type2='' weight='85' stats= {arrayStats} />
                </div>
                <Button>See more</Button>
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
