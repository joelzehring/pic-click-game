import React, { Component }  from 'react';
import './App.css';
import GameCard from "./components/GameCard/";
import ScoreBoard from './components/ScoreBoard/';

class App extends Component {
  
  state = {
    animals: [
      {
	id: 1,
	name: 'lion',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
	isClicked: false
      },
      {
	id: 2, 
	name: 'tiger',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg',
	isClicked: false
      },
      {
	id: 3,
	name: 'giraffe',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg',
	isClicked: false
      },
      {
	id: 4,
	name: 'zebra',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Plains_Zebra_Equus_quagga.jpg',
	isClicked: false
      },
      {
	id: 5,
	name: 'hippo',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Hipop%C3%B3tamo_%28Hippopotamus_amphibius%29%2C_parque_nacional_de_Chobe%2C_Botsuana%2C_2018-07-28%2C_DD_82.jpg',
	isClicked: false
      },  
      {
	id: 6,
	name: 'elephant',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg',
	isClicked: false
      },
      {
	id: 7,
	name: 'rhino',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Diceros_bicornis.jpg',
	isClicked: false
      },
      {
	id: 8,
	name: 'meerkat',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Meerkat_%28Suricata_suricatta%29_Tswalu.jpg',
	isClicked: false
      },
      {
	id: 9,
	name: 'warthog',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Southern_warthog_%28Phacochoerus_africanus_sundevallii%29_male.jpg',
	isClicked: false
      }, 
      {
	id: 10,
	name: 'hyena',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Spotted_hyena_%28Crocuta_crocuta%29.jpg',
	isClicked: false
      }, 
      {
	id: 11,
	name: 'hornbill',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Malabar_grey_hornbill.jpg',
	isClicked: false
      }, 
      {
	id: 12,
	name: 'wildebeest',
	imgLink: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Blue_Wildebeest%2C_Ngorongoro.jpg',
	isClicked: false
      }, 
    ]
  }
  
  render () {
    return (
      <div className="App">
	<header className="App-header">
	  <h1>Pic Click Game</h1>
	</header>
	<main>
	  <p>Click a picture to increase your score, but don't click the same picture twice or it's game over!</p>
	  <ScoreBoard />
	  <div className="gameboard">
	    {
	      this.state.animals.map(animalData => { return <GameCard animalData={ animalData } /> })
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
