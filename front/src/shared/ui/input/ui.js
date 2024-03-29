import React from 'react';

export const Input = ({classname, type, text, onChange}) => {

    return (
        <div className="input-container">
            <input className={classname} type={type} required="-1" onChange={onChange}/>
            <label>{text}</label>
        </div>
    );
};
