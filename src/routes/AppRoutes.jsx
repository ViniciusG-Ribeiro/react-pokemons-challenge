import { Route, Routes } from "react-router-dom"
import MainPage from "./main-page.jsx"
import PokePage from "./Poke-page.jsx"

const AppRoutes = ({ list, onSearchResult, onTypeSearch, onReturn, pokemons, pokemonSelected, onSelect }) => (
    <Routes>
        <Route
            exact path='/' element={<MainPage list={list} onSearchResult={onSearchResult} onTypeSearch={onTypeSearch} onReturn={onReturn} pokemons={pokemons} onSelect={onSelect}/>}
        />
        <Route exact path='/:id' element={<PokePage pokemonSelected={pokemonSelected} />}
        />
    </Routes>
)
export { AppRoutes }