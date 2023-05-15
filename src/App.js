import './App.css';
import React, { useState, useEffect } from "react"; 
import axios from "axios";
import Card from './Card';

function App() {

  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    setIsLoading(true);

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then((res) => {
      setData(res.data.results) //here we gets the "primary" array of pokemons: [{name: <name>, url: 'http//...'}, ... ]
      setIsLoading(false)
    });
  }, [] );

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <div id="cards">
        {data.map(pokemon => <Card
          key={pokemon.name}
          url={pokemon.url}  
        />)}
      </div>
    </div>
  );
}

export default App;
