import React, { Component } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import "./Header.css";
import NavigateDiscoverButton from "../NavigateDiscoverButton/NavigateDiscoverButton";
import NavigateMyGamesButton from "../NavigateMyGamesButton/NavigateMyGamesButton.js";

export default function Header(props) {
  let displayDiscoverButtonOrNot = jsx => {
    if (props.isDiscover === "true") {
      return jsx;
    }
  };
  let displayGamesButtonOrNot = jsx => {
    if (props.isDiscover === "false") {
      return jsx;
    }
  };
  return (
    <div>
      <div className="mygames-dennis-container">
        <div className="mygames-text-button-container">
          <div>
            {displayDiscoverButtonOrNot(
              <NavigateDiscoverButton goToMyGames={props.goToMyGames} />
            )}
          </div>
          <div>{displayDiscoverButtonOrNot(<h3>My Games</h3>)}</div>
        </div>

        {displayDiscoverButtonOrNot(
          <div className="dennis-text-in-discover">
            <h1>Dennis Juanito</h1>
          </div>
        )}
      </div>
      <div className="top-mygames">
        <div className="mygamesButton-text">
          <div>
            {displayGamesButtonOrNot(
              <NavigateMyGamesButton goToDiscover={props.goToDiscover} />
            )}
          </div>

          <div>{displayGamesButtonOrNot(<h3>Find other games</h3>)}</div>
        </div>
        {displayGamesButtonOrNot(
          <div className="dennis-mygames">
            {displayGamesButtonOrNot(<h1>Dennis Juanito</h1>)}
          </div>
        )}
      </div>

      {displayDiscoverButtonOrNot(
        <div className="searchtext-welcometext-searchbar-container">
          <div>{displayDiscoverButtonOrNot(<h1>Welcome</h1>)}</div>
          <div>{displayDiscoverButtonOrNot(<h3>Find your game here</h3>)}</div>
          <div>
            {displayDiscoverButtonOrNot(
              <SearchBar handleInput={props.handleInput} query={props.query} />
            )}
          </div>
          <div className="most-popular">
            {displayDiscoverButtonOrNot(
              props.isDiscover === "true" && props.query.length === 0 ? (
                <h1 className="width-search-popular">Popular Video Games Right now</h1>
              ) : (
                <h1 className="width-search-popular">Searching results:</h1>
              )
            )}
          </div>
        </div>
      )}

      {displayGamesButtonOrNot(
        <div className="mygames-header">
          <h1>My Games</h1>
        </div>
      )}
    </div>
  );
}

{
  /* <div className="mygames-header">
          <div style={{ marginRight: "50%" }}>
           
          </div>
          <Header text="Dennis Juanito" />
        </div>
        <h1>GAME MANAGER</h1>
        <div className="mygames-text">
          <Header text="MY GAMES" />
        </div>



 */
}

// <div className="popular-text">

// </div>
