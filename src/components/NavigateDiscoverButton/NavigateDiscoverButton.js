import React, { Component } from 'react';
import                           "./NavigateDiscoverButton.css";

export default function NavigateDiscoverButton(props) {
    return (
        <div>
            <button className="btn-games open-mygames" onClick={ (e) => props.goToMyGames()}></button>
        </div>
    );
}