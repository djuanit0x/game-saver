import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/Header/Header.js";
import Game from "./components/Game/Game.js";
import PopularWindow from "./components/PopularWindow/PopularWindow.js"
import SearchWindow from "./components/SearchWindow/SearchWindow.js"
import SearchBar    from "./components/SearchBar/SearchBar.js";

class App extends Component {

  constructor() {
    super();
    this.state = {
      myGames               : [],
      isDisplayPopularGames : "true",
      input                 : ""
    };
    this.handleInput = this.handleInput.bind(this);
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
 

  handleInput(val) {
    let flag = (val.length === 0) ? "true" : "false";
    this.setState({
      input: val,
      isDisplayPopularGames: flag
    });
 
  }
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <SearchBar handleInput={ this.handleInput } query={ this.state.input }/>
        { (this.state.isDisplayPopularGames === "true") ? <PopularWindow /> 
        : <SearchWindow query={ this.state.input } /> }
      </div>
    );
  }
}

export default App;
