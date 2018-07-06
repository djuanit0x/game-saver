import React, { Component } from 'react';
 

export default function Game(props) {
    return (
        <div>

            <img src={ props.cover } alt=""/>
            { props.name }
            { props.popularity }
            { props.hypes }
        </div>
    );
}