import React, { Component } from 'react';
import axios from 'axios';
import Game from "../Game/Game.js";


export default class PopularWindow extends Component {

    constructor() {
        super();
        this.state = {
          popularGames: [],
        };
    }

    componentDidMount() {
        axios.get(`/api/games/popular`)
             .then(response => {
               //console.log(response.data)
               this.setState({
                 popularGames: response.data
             });
        })
    }

    render() {
        let displayPopularGames = () => {
          return this.state.popularGames.map(game => {
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
        <div>
            <h1>The Most Popular Video Games Right now</h1>
            <div> { displayPopularGames() } </div>
        </div>
          
        );
      }
}