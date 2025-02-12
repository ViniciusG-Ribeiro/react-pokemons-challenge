import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import './style.css'
import List from './list';

export default function SectionDetailsPokemon(props) {
    const navigate = useNavigate();

    return (
        <Section>
            <BackButton onClick={() => navigate("/")}>HOME</BackButton>

            <h1 className='tittle-details'>{`#${props.number.toString().padStart(3, '0')} - ${props.name}`}</h1>

            <Div>
                <div>

                    <div className="container-pokemon-details">

                        <img className="img-pokemon-details" src={props.image} alt="" />

                    </div>

                    <div className="container-type container-type-details">

                        <img className="img-type-pokemon" src={`/icons-types/icon-type-${props.type1}.png`} alt="Fire" />

                        {props.type2 && (
                            <img className="img-type-pokemon" src={`/icons-types/icon-type-${props.type2}.png`} alt="" />)
                        }
                    </div>

                    <div className='audio'>
                        <audio src={props.cry} controls preload="metadata"></audio>
                    </div>


                    <div className="container-stats-details">
                        <h3>Weight: {props.weight} kg</h3>
                        <h3>HP: {props.hp}</h3>
                        <h3>Height: {props.height} m</h3>
                        <h3>Attack: {props.attack}</h3>
                        <h3>Speed: {props.speed}</h3>
                        <h3>Defense: {props.defense}</h3>

                    </div>

                </div>

                <List tittle="abilities" array={props.abilities} />

                <List tittle="moves" array={props.moves} />
            </Div>

        </Section>
    )
};

const Section = styled.section`
    background-color: rgba(162, 161, 163, 0.450);
    width: 85%;
    min-width: 340px;
    padding: 50px;
    position: relative;
    min-height: 200px;
    border-top-left-radius: 100px;
    border-bottom-right-radius: 100px;
    margin-top: 4%;

    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        border-top: 2px solid white;
        border-left: 2px solid white;
        border-top-left-radius: 100px;
    }

        &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 200px; /* Tamanho da borda no canto */
        height: 200px;
        border-bottom: 2px solid white;
        border-right: 2px solid white;
        border-bottom-right-radius: 100px;
    }

    @media (max-width: 550px) {
        padding: 50px 20px 80px;
    }

`
const BackButton = styled.button`
    background-color: transparent;
    color: white;
    padding: 10px 10px;
    border: 1px solid white;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover {
        background-color:rgb(177, 20, 20);
        transform: scale(1.05);
    }

    @media (max-width: 550px) {
        margin: 0px 20px 20px
    }
`;

const Div = styled.div`
    // background-color: blue;
    margin-top: 15px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px,800px));
    grid-gap: 15px;

    @media (max-width: 1349px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;