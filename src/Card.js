import React from "react";
import './Card.css';

function Card (props) {
  return (
    <div className="card">
    <div className="idAndTypes">
      <p className="pokID">{props.id}</p>
      {/* <p className="pokTypes">${item.types.map(element => {
        <img class="pokemonTypeImg" src="assets/${element.type.name}.png" alt="${element.type.name}">
      </p> */}
    </div> IMG here
    <img className="pokemonImg" src={props.src} alt={props.name} />
    <div className="bottomOfCard">
      <p className="pokName">{props.name}</p>  
    </div>
  </div> 
  );
};

export default Card;