import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {pokemon} from './pokemon'

const PokemonCard =({name, img}) => {
  return (
    <button type='button' key={name} className="card" onClick={() => setScore(score + 1)}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
    </button>
  )
}

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  
  if (score > highScore) {
    setHighScore(score)
  }

  return (
    <>
      <header className="logo-container">
        <div>
          <h1>Pokemon Memory Game</h1>
        </div>
        <div className="scores">
          <h3>Score: {score}</h3>
          <h3>High Score: {highScore}</h3>
        </div>
      </header>
      <main className="card-grid">
        {pokemon.map((poke) => (
          <PokemonCard key={poke.name} name={poke.name} img={poke.img} />
        ))}
      </main>
    </>
  )
}

export default App
