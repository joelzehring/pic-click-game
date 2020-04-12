import React from 'react';
import './App.css';
import GameCard from "./components/GameCard/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<h1>Pic Click Game</h1>
      </header>
      <main>
	<p>Click a picture to increase your score, but don't click the same picture twice or it's game over!</p>
	<div className="gameboard">
	  <GameCard />
	</div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
