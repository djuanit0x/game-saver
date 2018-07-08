import React, { Component } from 'react';
import axios                from 'axios';
import Game                 from "../Game/Game.js";
import AddButton            from "../AddButton/AddButton.js";
import "./SearchWindow.css";

export default class SearchWindow extends Component {

    constructor() {
        super();
        this.state = {
          searchGames: [],
        };
        this.addGame = this.addGame.bind(this);
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
        if (prevProps.query !== this.props.query) {
            axios.get(`/api/games/search/${ this.props.query }`)
             .then(response => {
               this.setState({
                 searchGames: response.data
                });
            })
        }
        
    }

    

    addGame(newGame) {
        axios.post(`/api/games/mygames`, newGame);
    }

    render() {
        let displaySearchGames = () => {
          return this.state.searchGames.map(game => {
            let gameCover = (game.cover === null) ? "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : game.cover;

            return (
             <div key={ Number(game.id) } className="game-box" >
               <Game 
                  name={ game.name }
                  cover={ gameCover }
                  popularity={ game.popularity }
                  hypes={ game.hypes }
                  summary={ game.summary }
               />
               <AddButton addGame={ this.addGame }
                          gameObj={{
                                 name       : game.name,
                                 id         : game.id,
                                 cover      : gameCover,
                                 popularity : game.popularity,
                                 hypes      : game.hypes,
                                 summary    : game.summary
                          }}/>
             </div> 
            );
          });
         
        }
        
        return (
            
          <div> 
              <div>
                  <h1>Searching Results:</h1>
                  <div className="search-games-flex">{ displaySearchGames() } </div>
              </div>
          </div>
          
        );
      }
}