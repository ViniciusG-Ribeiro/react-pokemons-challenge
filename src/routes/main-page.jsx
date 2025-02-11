import InputAutoComplete from "../components/inputAutoComplete/inputAutocomplete"
import SectionShowCase from "../components/sectionShowcase/sectionShowCase";
import TypeFilterPokemon from "../components/type-filter-pokemon/type-filter-pokemon";

export default function MainPage({ list, onSearchResult, onTypeSearch, onReturn, pokemons, }) {
    return (
        <>
            <InputAutoComplete list={list} onSearchResult={onSearchResult} />
            <TypeFilterPokemon onTypeSearch={onTypeSearch} onReturn={onReturn} />
            <SectionShowCase pokemons={pokemons} 
            />
        </>
    )

};

