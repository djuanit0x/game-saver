import React, { Component } from 'react';
import axios                from 'axios';
import Game                 from "../Game/Game.js";


export default class SearchWindow extends Component {

    constructor() {
        super();
        this.state = {
          searchGames: [],
        };
    }

    componentDidMount() {
        console.log(`/api/games/search/${ this.props.query }`);
        axios.get(`/api/games/search/${ this.props.query }`)
             .then(response => {
               console.log(response.data)
               this.setState({
                 searchGames: response.data
             });
        })
    }
    // get props and set state
    componentDidUpdate(prevProps, prevState) {
        console.log(`/api/games/search/${ this.props.query }`);
        if (prevProps.query !== this.props.query) {
            axios.get(`/api/games/search/${ this.props.query }`)
             .then(response => {
               //console.log(response.data)
               this.setState({
                 searchGames: response.data
             });
        })
        }
        
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
                  cover={ !game.cover ? "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : game.cover }
                  popularity={ game.popularity }
                  hypes={ game.hypes }
               />
             </div> 
            );
          });
         
        }
        
        return (
            
          <div> 
              <div>
                  <h1>Searching Results:</h1>
                  { displaySearchGames() } 
              </div>
          </div>
          
        );
      }
}