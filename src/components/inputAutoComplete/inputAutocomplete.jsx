import React, { useContext, useState } from 'react';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { ThemeContext } from '../../context/theme-context';

function InputAutoComplete({ list }) {
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
                    value={input}
                    onChange={handleChange}
                    placeholder="Search..."
                />
                {suggestions.length > 0 && (
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
                )}
            </div>
            <button onClick={() => {
                console.log("click button search!")
            }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "25px", color: theme.color, padding: "8px 10px", }} />
            </button>
        </div>
    );
}

export default InputAutoComplete;