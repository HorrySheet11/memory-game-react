import { useEffect, useState } from "react";
import "./App.css";
import { shuffleArray } from "./functionz";
import { pokemon } from "./pokemon";

const PokemonCard = ({ name, img, handleClick }) => {
	return (
		<button type="button" key={name} className="card" onClick={handleClick}>
			<img src={img} alt={name} />
			<h2>{name}</h2>
		</button>
	);
};

function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [shuffledPokemon, setShuffledPokemon] = useState(pokemon);
  const [selectedMons, setSelectedMons] = useState([]);

	if (score > highScore) {
		setHighScore(score);
	}

	function handleClick(name) {
		if (selectedMons.includes(name)) {
			alert("You already selected that Pokemon! Game Over!");
			setScore(0);
			setSelectedMons([]);
		} else {
			setSelectedMons([...selectedMons, name]);
      setScore(score + 1);
		}
		document.activeElement.blur();
	}

  // biome-ignore lint/correctness/useExhaustiveDependencies: <using score to trigger reshuffle>
  useEffect(() => {
    setShuffledPokemon(shuffleArray([...pokemon]));
  }, [score]);


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
				{shuffledPokemon.map((poke) => (
					<PokemonCard
						key={poke.name}
						name={poke.name}
						img={poke.img}
						handleClick={()=>handleClick(poke.name)}
					/>
				))}
			</main>
		</>
	);
}

export default App;
