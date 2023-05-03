import './App.css';
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import Card from './Card';

function App() {

  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => { 
    console.log('I,m inside useEffect');
    setIsLoading(true);

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res) => {
      setData(res.data.results)
      setIsLoading(false)
    });
  }, [] );

  if (isLoading) {
    return <p>Loading...</p>
  }
  console.log(data);
  console.log('isLoading = ', isLoading);

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      {data.map(pokemon => <Card  
        // src={pokemon.sprites.other.dream_world.front_default}
        name={pokemon.name}  
      />)}
    </div>
  );
}

export default App;
