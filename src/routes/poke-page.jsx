import { Link, useParams } from 'react-router-dom';

export default function PokePage({pokemonSelected}) {
    console.log(`poke-page${pokemonSelected.id}`)
    return (
        <>
            <Link to='/' >Voltar para home</Link>
            <h1>teste</h1>
            <h2>{pokemonSelected.id}</h2>
        </>
    )

};