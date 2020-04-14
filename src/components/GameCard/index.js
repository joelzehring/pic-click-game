import React, { Component } from 'react';
import "./style.css";

class GameCard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.animalData.imgLink);
  }
  render () {
    return (
      <div className='game-card'>
	<img src={ this.props.animalData.imgLink } alt={ this.props.animalData.name } className="img-game-card" />
      </div>
    )
  }
}

export default GameCard;
