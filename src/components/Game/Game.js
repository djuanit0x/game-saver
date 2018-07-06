import React, { Component } from 'react';
 

export default function Game(props) {
    return (
        <div>
            <img src={ props.cover.replace("t_thumb", "t_cover_big") } alt=""/><br />
            { props.name }<br /> 
            <p>popularity level: { (!props.popularity) ? <span>N/A</span> : props.popularity }</p>
            <p>hypes level: { (!props.hypes) ? <span>N/A</span> : props.hypes }</p>
        </div>
    );
}