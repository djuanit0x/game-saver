import React, { Component } from 'react';
import axios                from 'axios';

export default function DeleteButton(props) {
    return (
        <div>
            <button className="btn" onClick={ (e) => props.deleteGame(props.id)}></button>
        </div>
    );
}