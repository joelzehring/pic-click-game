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
		console.log(e.target.id);
		let newAnimals = this.state.animals.map(animal => {
			if (this.state.animals[e.target.id].isClicked === false) {
				console.log("I'm false!");
				animal.isClicked = true;
				console.log("Now I'm " + animal.isClicked);
			}
		});

		this.setState( {animals: newAnimals} );
		
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
					<div className="gameboard">
						{
							this.state.animals.map((animalData) => { return <GameCard handleClick={ this.handleClick } animalData={ animalData } /> })
						}
					</div>
				</main>
				<footer>
				</footer>
      </div>
    );
  };
}

export default App;
