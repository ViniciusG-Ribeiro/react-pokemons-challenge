import { useContext, useEffect, useState } from 'react';
import ButtonToggleTheme from './components/buttonToggleTheme/buttonToggleTheme';
import './style.css'
import './variables.css'
import { createGlobalStyle } from "styled-components";
import { ThemeProvider, ThemeContext } from './context/theme-context';
import { fetchAllPokemons, fetch10Pokemons } from './services/consultaPoke';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsInput, setPokemonsInput] = useState([]);
  const [pokemonsInit, setPokemonsInit] = useState([]);
  const [pokemonsLoaded, setPokemonsLoaded] = useState();

  const handleSearchResult = (pokemon) => {
    setPokemonsLoaded(pokemon); // Atualiza o estado com o Pokémon encontrado
  };

  const handleTypeSearch = (pokemon) => {
    setPokemonsLoaded(pokemon); // Atualiza o estado com o Pokémon encontrado
  };

  const returnAll = () => {
    setPokemonsLoaded(pokemons); // Atualiza o estado com o Pokémon encontrado
  };

  useEffect(() => {
    const loadPokemons = async () => {

      // consulta dos 10 primeiros para carregamento rápido
      const InitPokemons = await fetch10Pokemons();
      setPokemonsInit(InitPokemons);

      //consulta de todos os pokemons para input e botão see more
      const allPokemonsData = await fetchAllPokemons();
      setPokemons(allPokemonsData);

      // Atualiza o estado dos pokemons no input autocomplete
      const filtrados = allPokemonsData.map(allPokemonsData => ({
        nome: allPokemonsData.nome,
        id: allPokemonsData.id
      }));

      setPokemonsInput(filtrados);
    };

    loadPokemons();
  }, []);

  useEffect(() => {
    setPokemonsLoaded(pokemonsInit)
  }, [pokemonsInit]);

  useEffect(() => {
    setPokemonsLoaded(pokemons)
  }, [pokemons]);

  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <BrowserRouter>
      
        <header>
          <img id='logo' src="/logo-pokemon.png" alt="Logo pokemon" />
          <img id='pokeball' src="/img-pokebola-header.png" alt="pokebola" />
        </header>

        <main>
          <ButtonToggleTheme />
          <AppRoutes list={pokemonsInput} onSearchResult={handleSearchResult}
            onTypeSearch={handleTypeSearch} onReturn={returnAll}
            pokemons={pokemonsLoaded}
          />
        </main>
        
      </BrowserRouter>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

html{
background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  transition: all 0.3s ease;
  }
`

const ThemedGlobalStyle = () => {
  const { theme } = useContext(ThemeContext)

  return <GlobalStyle background={theme.background} color={theme.color} />;
}

export default App;