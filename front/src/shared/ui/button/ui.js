import React from 'react';

export const Button = (props) => {
    return (
        <button onClick={() => {props.func()}} className={props.name}>{props.text}</button>
    );
};