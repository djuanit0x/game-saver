import React, { Component } from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div>
      <input
        value={props.input}
        type="text"
        onChange={e => props.handleInput(e.target.value)}
      />
    </div>
  );
}
