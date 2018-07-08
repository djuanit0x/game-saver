import React, { Component }     from 'react';
import axios                    from 'axios';
import Game                     from "../Game/Game.js";
import PopularWindow            from "../PopularWindow/PopularWindow.js"
import SearchWindow             from "../SearchWindow/SearchWindow.js"
import SearchBar                from "../SearchBar/SearchBar.js";

export default class Discover extends Component {

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
      <div>
       
        <SearchBar handleInput={ this.handleInput } query={ this.state.input }/>
        { (this.state.isDisplayPopularGames === "true") ? <PopularWindow /> 
        : <SearchWindow query={ this.state.input } /> }
      </div>
    );
  }
}

