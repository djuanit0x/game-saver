import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.setState({
      myGames             : [],
      displayPopularGames : "true"
    });
  }

  componentDidMount() {

  }

  getPopularGames() {
    axios.get(`${ this.base_url }/api/games/popular`)
         .then(response => {
           
         })
  }

  countMyGames() {

  }

  validatePopularGames() {

  }

  render() {
    const base_url = "http://localhost:3006";



    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
