import React, { Component } from 'react';
import axios                from 'axios';
import "./AddButton.css"

export default function AddButton(props) {
    return (
        <div>
            <button className="btn green-add" onClick={ (e) => props.addGame(props.gameObj)}>Add</button>
        </div>
    );
}