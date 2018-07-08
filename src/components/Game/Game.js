import React, { Component } from "react";
import "./Game.css";

export default function Game(props) {
  return (
    <div className="game-content">
      <img
        className="cover"
        src={props.cover.replace("t_thumb", "t_cover_big")}
        alt=""
      />
      <br />
      <div className="name-box">{props.name}</div>
      <br />
      <p>
        popularity level<br />{" "}
        {!props.popularity ? <span>N/A</span> : Math.round(props.popularity)}
      </p>
      <p>
        hypes level<br /> {!props.hypes ? <span>N/A</span> : props.hypes}
      </p>

      <p className="summary-box">
        Summary<br />
        {!props.summary ? <span>N/A</span> : props.summary}
      </p>
    </div>
  );
}
// <p style={ {width:"300px", height:"100px", textAlign:"center", overflow:"auto"} } >{ props.summary }
