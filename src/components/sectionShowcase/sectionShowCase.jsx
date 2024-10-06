import React from "react"
import styled from 'styled-components'
import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import './style.css'

export default function SectionShowCase(props) {

    return (
        <>
            <section className="section-showCase">
                <div className="container-cards">
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                    <div>
                        <h2>Teste</h2>
                    </div>
                </div>
                <Button>See more</Button>
            </section>

        </>
    )
};

const Button = styled.button`
    background: #FF1515;
    border:none; 
    border-radius: 8px;
    cursor: pointer;
    width: 100px;
    height: 25px;
    font-weight: bold;
    color: white;
    margin: 20px auto;
` 
