import React,{useState, useEffect} from 'react';

const Pokemones =()=>{

    const [pokemones,setPokemones]=useState([]);

    useEffect(()=>{
        async function obtenerPokemones(){
            const response = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await response.json();

            setPokemones(data.results);

        }
        obtenerPokemones();
    },[])

    return(
        <>
            {pokemones.map((pokemon,index)=>{
                return <ul key={index}>{pokemon.name}</ul>
            })}
        </>
    )

}

export default Pokemones;