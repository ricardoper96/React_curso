import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import {Navbar} from "./components/navbar/navbar";
import {Card} from "./components/card/card";
import {Favorites} from "./components/favorites/favorites";

const handlerCounter=(counter,setConter)=> {
    setConter(counter+1)

}
const handlerCharacters= (setCharaters)=> {
    fetch("https://rickandmortyapi.com/api/character/").then(data => data.json()).then(response => {
        setCharaters(response.results);
        //console.log(response.results);
    })
}
function App() {
    useEffect( () => {
        return handlerCharacters(setCharacters)
    },  []);
    const [favorites, setFavorites] = useState( []);
     const [characters,setCharacters] = useState( []);
    const [counter, setCounter] = useState( 0);

  return (
    <div className="App">
      <h1 className='title'> Rick and Morty </h1>
        <Navbar/>

        {favorites.length > 0 ? <Favorites  setFavorites= {setFavorites}  favorites={favorites}/> : null}

        <div className="characters">
            {characters.length > 0
                ?characters.map(character=> <Card character={character} favorite={false} favorites={favorites} setFavorites={setFavorites} key={character.id}/>)
                :null}

                </div>



<h1>Counter {counter}</h1>

        <button onClick={()=> handlerCounter(counter,setCounter)}>Incrementar</button>
    </div>
  );
}

export default App;
