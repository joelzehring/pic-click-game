import React, { Component } from 'react';
import './style.css';

function ScoreBoard (props) {
  let clickedAnimals = props.animalData.filter(animal => animal.isClicked == true);
  let currentScore = clickedAnimals.length;

  return (
    <div className="score-board">
      <p>Score: <span> { currentScore } </span></p>
      <p>High Score: <span> { props.highScore } </span></p>
    </div>
  );
}

export default ScoreBoard;
