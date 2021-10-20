import { useEffect, useState } from "react";

import './style.css'

import Logo from '../../assets/images/Logo.png';


interface Colorprops{
  nameColor: number
}

export function Header({nameColor} : Colorprops) {
  const [nameColorTitle, setNameColorTitle] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-color/${nameColor}/`)
    .then(res => res.json())
    .then(data => setNameColorTitle(data.name))
  }, [nameColor])

  return(
    <div>
      <header className="header">
        <h1>
          <img src={Logo} alt="" />
        </h1>

      <h2>Pokes {nameColorTitle}</h2>
    </header>
    </div>
  )
}