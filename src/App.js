import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Game from "./components/Game/Game.js";


class App extends Component {

  constructor() {
    super();
    this.state = {
      myGames               : [],
      popularGames          : [],
      isDisplayPopularGames : "true"
    };
  }

  componentDidMount() {
    axios.get(`/api/games/popular`)
         .then(response => {
           console.log(response.data)
           this.setState({
             popularGames: response.data
         });
    })
  }

  countMyGames() {
    axios.get(`/api/games/mygames`)
         .then(response => {
           this.setState({
             games: response.data
         });
    })
    return this.state.myGames.length; // this may not work
  }

  validatePopularGames(input) {
    let flag = (input.length === 0) ? "true" : "false";
    this.setState({
      isDisplayPopularGames: flag
    });
  }

  render() {
    let displayPopularGames = () => {
      return this.state.popularGames.map(game => {
        return (
         <div key={ Number(game.id) }>
           <Game 
              name={ game.name }
              cover={ (game.cover === null) ? "www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : game.cover }
              popularity={ game.popularity }
              hypes={ game.hypes }
           />
         </div> 
        );
      });
     


    }
    
    return (


      <div className="App">
       {/* {(displayPopularGames === "true") ? } */}
      {/* {JSON.stringify(this.state.popularGames)} */}
      { displayPopularGames() }

      </div>
    );
  }
}

export default App;
