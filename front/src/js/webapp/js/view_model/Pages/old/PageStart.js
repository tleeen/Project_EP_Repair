import React from 'react';
import logo from "../../../../images/logo_.png";
import Button from "../../Components/Structure/button/ui";
import '../../../../css/style.css'
import {useNavigate} from "react-router";

const PageStart = () => {

    const router = useNavigate();

    return (
        <div className="main">
            <div>
                <img className="logo" src={logo} width="350" height="220" alt=""></img>
                <h1>Welcome to our <span>workshop</span></h1>
                <div className="buts">
                    <Button func = {() => router("/page_sign_in")} name = "bt1" text = 'Sign in'></Button>
                    <Button func = {() => router("/page_sign_up")} name = "bt2" text = 'Sign up'></Button>
                </div>
            </div>
        </div>
    );
};

export default PageStart;