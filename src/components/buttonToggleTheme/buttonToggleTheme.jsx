import { useEffect, useState, useContext } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'
import { ThemeContext,themes } from "../../context/theme-context";

function ButtonToggleTheme() {
    const {theme,setTheme} = useContext(ThemeContext)
    return(
        <>
            <Button onClick={() => {
                setTheme(theme === themes.dark ? themes.light : themes.dark)
            }}>
                {theme === themes.dark ? (
                <FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B", fontSize: "35px" }} />
            ) : (
                <FontAwesomeIcon icon={faMoon} style={{ color: "#4A5F8C", fontSize: "35px" }} />
            )}
                
            </Button>
        </>
    )
}

const Button = styled.button`
    background: none;
    border:none; 
    cursor: pointer;
    margin: 0 10px 0 auto
` 

export default ButtonToggleTheme;