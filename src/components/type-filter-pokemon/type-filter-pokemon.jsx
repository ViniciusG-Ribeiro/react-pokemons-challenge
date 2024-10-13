import React from "react";
import './style.css';
import ButtonTypes from "./button-types";

export default function TypeFilterPokemon() {
  return (
    <div className='types-pokemons'>
      {/* tipos */}
      <ButtonTypes src="icons-types/icon-type-1.png" alt="normal" />
      <ButtonTypes src="icons-types/icon-type-2.png" alt="Fighting" />
      <ButtonTypes src="icons-types/icon-type-3.png" alt="Flying" />
      <ButtonTypes src="icons-types/icon-type-4.png" alt="Poison" />
      <ButtonTypes src="icons-types/icon-type-5.png" alt="Ground" />
      <ButtonTypes src="icons-types/icon-type-6.png" alt="Rock" />
      <ButtonTypes src="icons-types/icon-type-7.png" alt="Bug" />
      <ButtonTypes src="icons-types/icon-type-8.png" alt="Ghost" />
      <ButtonTypes src="icons-types/icon-type-9.png" alt="Steel" />
      <ButtonTypes src="icons-types/icon-type-10.png" alt="Fire" />

       {/* botão geral */}
      <ButtonTypes src="pokedex-symbol.png" alt="teste" />
      {/* tipos */}
      <ButtonTypes src="icons-types/icon-type-11.png" alt="Water" />
      <ButtonTypes src="icons-types/icon-type-12.png" alt="Grass" />
      <ButtonTypes src="icons-types/icon-type-13.png" alt="Electric" />
      <ButtonTypes src="icons-types/icon-type-14.png" alt="Psychic" />
      <ButtonTypes src="icons-types/icon-type-15.png" alt="Ice" />
      <ButtonTypes src="icons-types/icon-type-16.png" alt="Dragon" />
      <ButtonTypes src="icons-types/icon-type-17.png" alt="Dark" />
      <ButtonTypes src="icons-types/icon-type-18.png" alt="Fairy" />
      <ButtonTypes src="icons-types/icon-type-19.png" alt="stellar" />
      <ButtonTypes src="icons-types/icon-type-10001.png" alt="unknown" />
    </div>
  )


};
