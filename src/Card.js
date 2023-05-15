import React, { useState, useEffect } from "react"; 
import './Card.css';
import axios from "axios";


function Card (props) {

  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    setIsLoading(true);

    axios.get(props.url)
    .then((res) => {
      setPokemon(res.data) //here we gets the array with full pokemon's info
      setIsLoading(false)
    });
  }, [props.url] );

  if (isLoading) {
    return <p>Loading...</p>
  }
  return (
    <div className="card">
      <div className="idAndTypes">
        <p className="pokID">#{pokemon.id}</p>
        <p className="pokTypes">{pokemon.types.map(element => 
          <img className="pokemonTypeImg" src={`/assets/${element.type.name}.png`} alt={element.type.name}/>
          )}
        </p>
      </div>
      <img className="pokemonImg" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <div className="bottomOfCard">
        <p className="pokName">{pokemon.name.toUpperCase()}</p>  
      </div>
    </div> 
  );
};

export default Card;