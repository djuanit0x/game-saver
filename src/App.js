import React, { Component } from "react";
import Discover from "./components/Discover/Discover";
import MyGames from "./components/MyGames/MyGames.js";
import "./App.css";
import Header from "./components/Header/Header.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isDiscover: "true"
    };
    this.goToMyGames = this.goToMyGames.bind(this);
    this.goToDiscover = this.goToDiscover.bind(this);
  }

  goToMyGames() {
    this.setState({
      isDiscover: "false"
    });
  }

  goToDiscover() {
    this.setState({
      isDiscover: "true"
    });
  }

  render() {

    return (
      <div className="App">
        {this.state.isDiscover === "true" ? (
          <Discover goToMyGames={this.goToMyGames} isDiscover={this.state.isDiscover}/>
        ) : (
          <MyGames goToDiscover={this.goToDiscover} isDiscover={this.state.isDiscover}/>
        )}
      </div>
    );
  }
}

