import React, { Component } from 'react';
import                           "./NavigateMyGamesButton.css";


export default function NavigateMyGamesButton(props) {
    return (
        <div>
            <button className="btn-discover" onClick={ (e) => props.goToDiscover()}></button>
        </div>
    );
}