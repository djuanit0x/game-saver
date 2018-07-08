import React, { Component } from 'react';
import "./Header.css";

export default function Header(props) {
    return (
        <div className="header">
            <h3>{ props.text }</h3>
        </div>
    );
}