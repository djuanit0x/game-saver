import React, { Component }     from 'react';
import axios                    from 'axios';
import Game                     from "../Game/Game.js";
import NavigateMyGamesButton    from "../NavigateMyGamesButton/NavigateMyGamesButton.js";
import Header                   from "../Header/Header.js";
import DeleteButton             from "../DeleteButton/DeleteButton.js";
import "./MyGames.css";

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
       this.getGame();
   }
    
    render() {
        let displayMyGames = () => {
            return this.state.myGames.map(game => {
              let gameCover = (game.cover === null) ? "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : game.cover;
              return (
               <div key={ Number(game.id)} className="game-box">
                 <Game 
                    name={ game.name }
                    cover={ gameCover }
                    popularity={ game.popularity }
                    hypes={ game.hypes }
                    summary={ game.summary }
                 />
                 <DeleteButton deleteGame={ this.deleteGame }
                               id={ game.id }/>
               </div> 
              );
            });
           
          }

      return (
        <div>
            <div className="mygames-header">
                <div style={{ marginRight:"50%" }}>
                    <NavigateMyGamesButton  goToDiscover={ this.props.goToDiscover }/>
                </div>
                <Header text="Dennis Juanito"/>  
            </div>
            <h1>GAME MANAGER</h1>
           <div className="mygames-text">
               <Header text="MY GAMES"/>
           </div>
           
         {
             (this.state.myGames.length === 0) ? <div className="zero-game">You currently have zero games</div> : <div className="mygames-flex" > { displayMyGames() } </div>
         } 
         
          
          
        </div>
      );
    }
  }
