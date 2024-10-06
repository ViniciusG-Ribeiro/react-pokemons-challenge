import React from "react"
import styled from 'styled-components'
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

const Button = styled.button`
    background: none;
    border:none; 
    cursor: pointer;
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
` 

export default function ButtonTypes(props) {
    const {theme} = useContext(ThemeContext)   
    return (
        <div id="button-types">
            <Button onClick={() => {
                console.log("click button type!") 
                // colocar função que vai fazer a conexão com a API passando o tipo como parametro
            }} >
                <img src={props.src} alt={props.alt} 
                    style={{ borderColor: theme.color}}
                 />
            </Button>
        </div>
    )
};