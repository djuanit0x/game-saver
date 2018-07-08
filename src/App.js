import React, { Component }     from 'react';
import Discover                 from './components/Discover/Discover';
import MyGames                  from './components/MyGames/MyGames.js';
import NavigateDiscoverButton   from './components/NavigateDiscoverButton/NavigateDiscoverButton';
import                          './App.css';
import Header                   from "./components/Header/Header.js";



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      isDiscover: "true"
    };
    this.goToMyGames  = this.goToMyGames.bind(this);
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
    })
  }

  
  render() {
    let displayDiscoverButtonOrNot = (jsx) => {
      if (this.state.isDiscover === "true") {
        return jsx;
      }
    }

    return (
      <div className="App">
 
        <div class="header-top" >
        { displayDiscoverButtonOrNot( <NavigateDiscoverButton goToMyGames={ this.goToMyGames } /> ) }
        { displayDiscoverButtonOrNot( <Header text="Dennis Juanito" /> ) }
        </div>
        { displayDiscoverButtonOrNot( <h1>GAME MANAGER</h1> ) }
        { 
          (this.state.isDiscover === "true") ? <Discover /> 
          : < MyGames goToDiscover={ this.goToDiscover } /> 
        }
       
        
      </div>
    );
  }
}




