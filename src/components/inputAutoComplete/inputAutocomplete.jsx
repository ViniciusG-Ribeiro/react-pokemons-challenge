import React, { useContext, useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { ThemeContext } from '../../context/theme-context';
import { searchPokemon } from '../../services/consultaPoke';

function InputAutoComplete({ list, onSearchResult }) {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Função para atualizar o estado com a entrada do usuário
    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        // Filtra as sugestões com base na entrada
        if (value.length > 0) {
            const isNumeric = !isNaN(value) && value.trim() !== '';
            let filteredSuggestions = []

            if (isNumeric) {
                const number = parseInt(value, 10);
                filteredSuggestions = list.filter(option =>
                    option.id === number
                );

            } else {
                filteredSuggestions = list.filter(option =>
                    option.nome.toLowerCase().includes(value.toLowerCase())
                );
            }
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Função para selecionar uma sugestão
    const handleSelect = (suggestion) => {
        setInput(suggestion.nome);
        setSuggestions([]);
    };

    const { theme } = useContext(ThemeContext)

    return (
        <div className="App">

            <div className="input-container">
                <input
                    type="text"
                    id="search-input"
                    value={input}
                    onChange={handleChange}
                    placeholder='Search... example: "bulbasaur" or "1"'
                    required
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault(); // Evita o comportamento padrão do formulário
                            if (input.trim() !== "") {
                                searchPokemon(input).then(result => {
                                    if (result) {
                                        onSearchResult(result); //retorna resultado para App.jsx
                                    } else {
                                        alert("Pokémon não encontrado!"); // Exibe um alerta para o usuário
                                    }
                                });
                            } else {
                                alert("Por favor, digite um nome ou número de Pokémon.");
                            }
                        }
                    }}
                />
                {
                    suggestions.length > 0 && (
                        <ul className="suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSelect(suggestion)}
                                >
                                    {suggestion.nome} #{suggestion.id}
                                </li>
                            ))}
                        </ul>
                    )
                }

                {/* Usa um label para associar o ícone ao input */}
                <label htmlFor="search-input"
                    className="search-icon"
                    onClick={() => {
                        if (input.trim() !== "") {
                            searchPokemon(input).then(result => {
                                if (result) {
                                    onSearchResult(result); //retorna resultado para App.jsx
                                } else {
                                    alert("Pokémon não encontrado!"); // Exibe um alerta para o usuário
                                }
                            });
                        } else {
                    alert("Por favor, digite um nome ou número de Pokémon.");
                        }
                    }}
                >
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "25px", color: theme.color, padding: "8px 10px" }} />
            </label>
        </div>

        </div >
    );
}

export default InputAutoComplete;