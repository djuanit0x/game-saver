import React, { Component } from 'react';
import axios                from 'axios';
import Game                 from "../Game/Game.js";


export default class SearchWindow extends Component {

    constructor() {
        super();
        this.state = {
          searchGames: [],
          input: ""
        };
    }

    getNewSearchGames(query) {
        axios.get(`/api/games/search/${ query }`)
             .then(response => {
               //console.log(response.data)
               this.setState({
                 searchGames: response.data
             });
        })
    }

    handleInput(val) {
        this.props.validatePopularGames(val);
    }

    addGame(newGame) {

    }

    render() {
        let displaySearchGames = () => {
          return this.state.searchGames.map(game => {
            return (
             <div key={ Number(game.id) }>
               <Game 
                  name={ game.name }
                  cover={ (game.cover === null) ? "www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : game.cover }
                  popularity={ game.popularity }
                  hypes={ game.hypes }
               />
             </div> 
            );
          });
         
        }
        
        return (
          <div> { displaySearchGames() } </div>
        );
      }
}