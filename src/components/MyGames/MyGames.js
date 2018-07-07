import React, { Component }     from 'react';
import axios                    from 'axios';
import Game                     from "../Game/Game.js";
import NavigateMyGamesButton    from "../NavigateMyGamesButton/NavigateMyGamesButton.js";
import Header                   from "../Header/Header.js";
import DeleteButton             from "../DeleteButton/DeleteButton.js";

export default class MyGames extends Component {

    constructor() {
      super();
      this.state = {
        myGames     : []
      };
      this.deleteGame = this.deleteGame.bind(this);
      this.getGame = this.getGame.bind(this);
    }

   componentDidMount() {
       axios.get(`/api/games/mygames`)
       .then(response => {
           this.setState({
               myGames: response.data
           });
       });
   }

   getGame() {
       axios.get(`/api/games/mygames`)
       .then(response => {
           this.setState({
               myGames: response.data
           });
       });
   }

   deleteGame(id) {
       axios.delete(`/api/games/mygames/${ id }`)
       console.log(id)
       this.getGame();
   }
    
    render() {
        let displayMyGames = () => {
            return this.state.myGames.map(game => {
              let gameCover = (game.cover === null) ? "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : game.cover;
  
              return (
               <div key={ Number(game.id) }>
                 <Game 
                    name={ game.name }
                    cover={ gameCover }
                    popularity={ game.popularity }
                    hypes={ game.hypes }
                 />
                 <DeleteButton deleteGame={ this.deleteGame }
                               id={ game.id }/>
               </div> 
              );
            });
           
          }

      return (
        <div className="App">
          <NavigateMyGamesButton goToDiscover={ this.props.goToDiscover }/>
          <Header text="MY GAMES"/>  
          { displayMyGames() }
        </div>
      );
    }
  }
  