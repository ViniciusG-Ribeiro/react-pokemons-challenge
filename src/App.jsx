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

  // useEffect(() => {
  //   console.log(fetchPokemons());
  // }, []);

  // In App.jsx
  const [pokemons, setPokemons] = useState([]); // Add this state

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fetchPokemons();
      setPokemons(data);
      console.log(data); // This will show just the Array(10)
    };

    loadPokemons();
  }, []);

  let pokemonsfiltrados = [
    { nome: 'Apple', numero: 1 },
    { nome: 'Banana', numero: 2 },
    { nome: 'Orange', numero: 3 },
    { nome: 'Mango', numero: 4 },
    { nome: 'Pineapple', numero: 5 },
    { nome: 'Grapes', numero: 6 },
    { nome: 'Strawberry', numero: 7 },
    { nome: 'Blueberry', numero: 8 },
    { nome: 'Raspberry', numero: 9 },
    { nome: 'Blackberry', numero: 10 }
  ];


  return (
    <ThemeProvider>
      <ThemedGlobalStyle />
      <header>
        <img id='logo' src="logo-pokemon.png" alt="Logo pokemon" />
        <img id='pokeball' src="img-pokebola-header.png" alt="pokebola" />
      </header>
      <main>
        <ButtonToggleTheme />
        <InputAutoComplete list={pokemonsfiltrados} />
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