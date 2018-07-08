import React, { Component } from "react";
import axios from "axios";
import Game from "../Game/Game.js";
import Header from "../Header/Header.js";
import AddButton from "../AddButton/AddButton.js";
import "./PopularWindow.css";

export default class PopularWindow extends Component {
  constructor() {
    super();
    this.state = {
      popularGames: []
    };
    this.addGame = this.addGame.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/games/popular`).then(response => {
      //console.log(response.data)
      this.setState({
        popularGames: response.data
      });
    });
  }

  addGame(newGame) {
    axios.post(`/api/games/mygames`, newGame);
    alert(`${newGame.name} has been added to your games! You currently have ${this.props.countMyGames()} games.`);
  }
  render() {
    let displayPopularGames = () => {
      return this.state.popularGames.map(game => {
        let gameCover =
          game.cover === null
            ? "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg"
            : game.cover;

        return (
          <div key={Number(game.id)} className="game-box">
            <Game
              name={game.name}
              cover={gameCover}
              popularity={game.popularity}
              hypes={game.hypes}
              summary={game.summary}
            />
            <AddButton
              addGame={this.addGame}
              gameObj={{
                name: game.name,
                id: game.id,
                cover: gameCover,
                popularity: game.popularity,
                hypes: game.hypes,
                summary: game.summary
              }}
            />
          </div>
        );
      });
    };

    return (
      <div>
        <div className="popular-games-flex"> {displayPopularGames()} </div>
      </div>
    );
  }
}



//<Header text="The Most Popular Video Games Right now" />