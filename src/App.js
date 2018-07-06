import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/Header/Header.js";
import Game from "./components/Game/Game.js";
import PopularWindow from "./components/PopularWindow/PopularWindow.js"
import SearchWindow from "./components/SearchWindow/SearchWindow.js"
import SearchBar    from "../SearchBar/SearchBar.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      myGames               : [],
      isDisplayPopularGames : "true"
    };
    this.validatePopularGames = this.validatePopularGames.bind(this);
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
    
    return (
      <div className="App">
        <Header />
        { (this.state.isDisplayPopularGames === "true") ? <PopularWindow /> 
        : <SearchWindow popularOrSearch={ this.validatePopularGames } /> }
      </div>
    );
  }
}

export default App;
