import React, { Component } from "react";
import axios from "axios";
import Game from "../Game/Game.js";
import PopularWindow from "../PopularWindow/PopularWindow.js";
import SearchWindow from "../SearchWindow/SearchWindow.js";
import Header from "../Header/Header.js";
import "./Discover.css";

export default class Discover extends Component {
  constructor() {
    super();
    this.state = {
      myGames: [],
      isDisplayPopularGames: "true",
      input: ""
    };
    this.handleInput  = this.handleInput.bind(this);
    this.countMyGames = this.countMyGames.bind(this);
  }

  countMyGames() {
    axios.get(`/api/games/mygames`).then(response => {
      this.setState({
        myGames: response.data
      });
    });
    return this.state.myGames.length + 1; // this may not work
  }

  handleInput(val) {
    let flag = val.length === 0 ? "true" : "false";
    this.setState({
      input: val,
      isDisplayPopularGames: flag
    });
  }

  render() {
    return (
      <div>
          <div className="main-header">
          <Header isDiscover={this.props.isDiscover} 
                  goToMyGames={this.props.goToMyGames} 
                  handleInput={this.handleInput} 
                  query={this.state.input}/>
          </div>
          
        {this.state.isDisplayPopularGames === "true" ? (
          <PopularWindow countMyGames={this.countMyGames}/>
        ) : (
          <SearchWindow countMyGames={this.countMyGames} query={this.state.input} />
        )}
      </div>
    );
  }
}
