import React from 'react';
import logo from "../../../../images/logo_.png";
import exit from "../../../../images/exit.png";

const TopMenu = (props) => {
    return (
        <div className="menu">
            <img className="logo_2" src={logo}
                 width="262,5" height="165" alt=""></img>
                <nav className="nav_1">
                    <a className="main_1" onClick={() => {props.bt1()}}>{props.text1}</a>
                    <a className="main_2" onClick={() => {props.bt2()}}>{props.text2}</a>
                    <a className="main_3" onClick={() => {props.bt3()}}>{props.text3}</a>
                    <div className={props.indicator}></div>
                </nav>
                <h3>Hello, <span>{localStorage.getItem("login")}</span></h3>
                <a className="exit" onClick={() => {props.exit("EXIT")}}><img className="logo_2"
                                  src={exit} width="25"
                                  height="25" style={{marginLeft: 35, marginTop: -30}} alt=""></img></a>
        </div>
    );
};

export default TopMenu;