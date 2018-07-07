import React, { Component }     from 'react';
import axios                    from 'axios';
import Game                     from "../Game/Game.js";
import NavigateMyGamesButton    from "../NavigateMyGamesButton/NavigateMyGamesButton.js";
import Header                   from "../Header/Header.js";
 
export default class MyGames extends Component {

    constructor() {
      super();
      this.state = {
        myGames     : []
      };
    }

   componentDidMount() {

   }

   getMyGames() {
       axios.get(`/api/games/mygames`)
       .then(response => {
           this.setState({
               myGames: response.data
           });
       });
   }

   addGame() {
       
   }

   deleteGame() {

   }

  
    
    render() {
  
      return (
        <div className="App">
          <NavigateMyGamesButton goToDiscover={ this.props.goToDiscover }/>
          <Header text="MY GAMES"/>  
        </div>
      );
    }
  }
  