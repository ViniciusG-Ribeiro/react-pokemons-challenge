import React from "react";
import './style.css';
import ButtonTypes from "./button-types";

export default function TypeFilterPokemon({onTypeSearch, onReturn}) {
  return (
    <div className='types-pokemons'>
      {/* tipos */}
      <ButtonTypes src="icons-types/icon-type-1.png" alt="normal" number="1" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-2.png" alt="Fighting" number="2"  onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-3.png" alt="Flying" number="3" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-4.png" alt="Poison" number="4" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-5.png" alt="Ground" number="5" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-6.png" alt="Rock"   number="6" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-7.png" alt="Bug"    number="7" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-8.png" alt="Ghost"  number="8" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-9.png" alt="Steel"  number="9" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-10.png" alt="Fire"  number="10" onTypeSearch ={onTypeSearch} />

       {/* botão geral */}
      <ButtonTypes src="pokedex-symbol.png" alt="teste" number="0" onReturn={onReturn} />
      {/* tipos */}
      <ButtonTypes src="icons-types/icon-type-11.png" alt="Water" number="11" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-12.png" alt="Grass" number="12" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-13.png" alt="Electric" number="13" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-14.png" alt="Psychic" number="14" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-15.png" alt="Ice" number="15" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-16.png" alt="Dragon" number="16" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-17.png" alt="Dark"  number="17" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-18.png" alt="Fairy"  number="18" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-19.png" alt="stellar" number="19" onTypeSearch ={onTypeSearch} />
      <ButtonTypes src="icons-types/icon-type-10001.png" alt="unknown" number="10001" onTypeSearch ={onTypeSearch} />
    </div>
  )


};
