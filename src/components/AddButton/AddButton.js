import React, { Component } from 'react';
import axios                from 'axios';
import "./AddButton.css"

export default function AddButton(props) {
    return (
        <div>
            <button className="btn" onClick={ (e) => props.addGame(props.gameObj)}></button>
        </div>
    );
}