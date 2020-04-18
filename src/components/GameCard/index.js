import React, { Component } from 'react';
import "./style.css";

class GameCard extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className='game-card'>
	      <img id={ this.props.animalData.id } onClick={ this.props.handleClick.bind(this) } src={ this.props.animalData.imgLink } alt={ this.props.animalData.name } className="img-game-card" />
      </div>
    )
  }
}

export default GameCard;
