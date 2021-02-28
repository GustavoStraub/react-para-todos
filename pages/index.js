import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

  const [pokemons, SetPokemons] = useState([])

  useEffect(() => {
    axios('https://pokeapi.co/api/v2/pokemon')
      .then(Resposta => SetPokemons(Resposta.data.results))
      .catch(error => console.log(error))
  }, [])


  return (
    <div>
      {pokemons.map(pokemon => (
        <p key={pokemon.url}>{pokemon.name}</p>
      ))}
    </div>
  )
}
