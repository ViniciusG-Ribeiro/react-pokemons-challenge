import { useContext, useEffect, useState  } from 'react';
import ButtonToggleTheme from './components/buttonToggleTheme/buttonToggleTheme';
import InputAutoComplete from './components/inputAutoComplete/inputAutocomplete';
import './style.css'
import './variables.css'
import { createGlobalStyle } from "styled-components";
import TypeFilterPokemon from './components/type-filter-pokemon/type-filter-pokemon';
import { ThemeProvider, ThemeContext } from './context/theme-context';
import SectionShowCase from './components/sectionShowcase/sectionShowCase';
import { fetchPokemons } from './services/consultaPoke';
// import { fetchPokemons } from './services/pokeInfoCard';

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pokemonsFiltrados, setPokemonsFiltrados] = useState([]); // Novo estado

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
      
      // Atualiza o estado dos pokemons filtrados
      const filtrados = data.map(datas => ({
        nome: datas.nome, 
        order: datas.order
      }));
      setPokemonsFiltrados(filtrados);
    };

    loadPokemons();
  }, []);

  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <header>
        <img id='logo' src="logo-pokemon.png" alt="Logo pokemon" />
        <img id='pokeball' src="img-pokebola-header.png" alt="pokebola" />
      </header>
      <main>
        <ButtonToggleTheme />
        <InputAutoComplete list={pokemonsFiltrados} />
        <TypeFilterPokemon />
        <SectionShowCase />

      </main >
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