import { Route, Routes } from "react-router-dom"
import MainPage from "./main-page.jsx"
import PokePage from "./Poke-page.jsx"

const AppRoutes = ({ list, onSearchResult, onTypeSearch, onReturn, pokemons, }) => (
    <Routes>
        <Route
            exact path='/' element={<MainPage list={list} onSearchResult={onSearchResult} onTypeSearch={onTypeSearch} onReturn={onReturn} pokemons={pokemons} />}
        />
        <Route exact path='/poke-page/:id' element={<PokePage pokemons={pokemons} />}
        />
    </Routes>
)
export { AppRoutes }