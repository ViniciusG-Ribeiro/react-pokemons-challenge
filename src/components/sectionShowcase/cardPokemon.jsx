import React from "react"
import { useNavigate  } from "react-router-dom"
import styled from 'styled-components'

export default function CardPokemon(props) {

    const navigate = useNavigate();

    return (
            <DivCard onClick={() => navigate(`/poke-page/${props.number}`)}>

                <section className="card-section" style={{ background: `var(--color-type-${props.type1})` }}>

                    <div className="container-pokemon">
                        <img className="img-pokemon" src={props.pokemonUrl} alt={`Pokemon - ${props.namePokemon}`} />
                    </div>
                    <div className="container-info">
                        <h2>{props.namePokemon}</h2>

                        <div className="container-type">
                            <img className="img-type-pokemon" src={`icons-types/icon-type-${props.type1}.png`} alt="Fire" />

                            {props.type2 && (
                                <img className="img-type-pokemon" src={`icons-types/icon-type-${props.type2}.png`} alt="" />)
                            }
                        </div>

                        <h3>Weight: {props.weight / 10} kg </h3>

                        <div className="container-stats">
                            <h3>HP: {props.stats[0]}</h3>
                            <h3>Attack: {props.stats[1]}</h3>
                            <h3>Defense: {props.stats[2]}</h3>
                            <h3>Speed: {props.stats[3]}</h3>
                        </div>

                    </div>

                </section>

            </DivCard>
    )

};

const DivCard = styled.div`
    background-color: #F8E62F;
    aspect-ratio: 2 / 3; /* Mantém a altura maior que a largura */
    padding: 8px;
    cursor: pointer;
    
    @media (max-width: 700px) {
        aspect-ratio: 5 / 6;
        padding: 4px;
    }
}
`