import React, { Component }  from 'react';
import './App.css';
import GameCard from "./components/GameCard/";
import ScoreBoard from './components/ScoreBoard/';
import animals from "./animals.json";

class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
			highScore: 0,
			animals
		}

		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		let index = e.target.id;
		let newAnimals = this.state.animals;

		// If the isClicked status is true, it's game over.
		if (newAnimals[index].isClicked) { 
			alert(`Game Over!\nTry again!`);
			// Reset isClicked values of all animals to false
			newAnimals.map(animal => animal.isClicked = false);
		} else {
			// Set the isClicked value of the clicked animal to true
			newAnimals[index].isClicked = true;
		}
		
		// Tally the animals that have an isClicked value of true and set that number to the current score
		let clickedAnimals = this.state.animals.filter(animal => animal.isClicked === true);
		let currentScore = clickedAnimals.length;

		this.shuffleCards(newAnimals);
		// If the current score exceeds the high score, update the high score and update the animals object with new clicked values for the next round
		this.setState( {highScore: currentScore > this.state.highScore ? currentScore : this.state.highScore, animals: newAnimals} );
	}

	shuffleCards =(newAnimals) => {
		newAnimals.sort( () => Math.random() - 0.5);
	}
  
  render () {
    return (
      <div className="App">
				<header className="App-header">
					<h1>Pic Click Game</h1>
				</header>
				<main>
					<p>Click a picture to increase your score, but don't click the same picture twice or it's game over!</p>
					<ScoreBoard highScore={this.state.highScore} animalData={this.state.animals} />
					<div className="row">
							<GameCard handleClick={ this.handleClick } animals={ this.state.animals } />
					</div>
				</main>
				<footer>
				</footer>
      </div>
    );
  };
}

export default App;
