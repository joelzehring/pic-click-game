import React, { Component } from 'react';
import "./style.css";

class GameCard extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
    <div className="gameboard">
      {this.props.animals.map(animal => {
        return (
          <div className='game-card'>
            <img id={ animal.id } onClick={ this.props.handleClick.bind(this) } src={ animal.imgLink } alt={ animal.name } className="img-game-card" />
          </div>
        )
      })}
    </div>
    )
  }
}
export default GameCard;
