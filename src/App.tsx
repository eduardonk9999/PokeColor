import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Pokebutton } from "./components/Pokebutton/Pokebutton";

import './styles/Global.css';

type PokesInfos = {
  name: string;
  url: string
}

function App() {
  
  const [pokes, setPokes] = useState([]);
  const [idColor, setIdColor] = useState(1)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-color/${idColor}/`)
    .then(res => res.json())
    .then(data => setPokes(data.pokemon_species))
  }, [idColor])

  

  function handleClickID(id: number){
    setIdColor(id)
  }


  return (
    <div className="App">
      <Header nameColor={idColor} />

      <div className="btns">
        <Pokebutton 
          id={1}
          handleClickID={handleClickID}
          title={'Black'}
        />
        <Pokebutton 
          id={2}
          handleClickID={handleClickID}
          title={'Blue'}
        />
        <Pokebutton 
          id={3}
          handleClickID={handleClickID}
          title={'brown'}
        />
        <Pokebutton 
          id={4}
          handleClickID={handleClickID}
          title={'gray'}
        />
        <Pokebutton 
          id={5}
          handleClickID={handleClickID}
          title={'green'}
        />
        <Pokebutton 
          id={6}
          handleClickID={handleClickID}
          title={'pink'}
        />
        <Pokebutton 
          id={7}
          handleClickID={handleClickID}
          title={'purple'}
        />
        <Pokebutton 
          id={8}
          handleClickID={handleClickID}
          title={'red'}
        />
        <Pokebutton 
          id={9}
          handleClickID={handleClickID}
          title={'white'}
        />
        <Pokebutton 
          id={10}
          handleClickID={handleClickID}
          title={'yellow'}
        />
      </div>

      <div className="pokesWrapper">
        {
          pokes.map(({name, url}: PokesInfos) => (
            <>
              <article>
                <h2 className="pokesTitle">{name}</h2>
                <div className="pokes" key={name}>
                  <img src={`https://cdn.traction.one/pokedex/pokemon/${url.replace('https://pokeapi.co/api/v2/pokemon-species/', '').replace('/', '')}.png`} alt="" />
                </div>
              </article>
            </>
          ))
          
        }
      </div>
    </div>
  );
}

export default App;
