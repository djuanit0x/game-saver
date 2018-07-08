import React, { Component } from 'react';
import axios                from 'axios';
import "./DeleteButton.css";

export default function DeleteButton(props) {
    return (
        <div>
            <button className="btn-delete delete-cursor" onClick={ (e) => props.deleteGame(props.id)}>DELETE</button>
        </div>
    );
}