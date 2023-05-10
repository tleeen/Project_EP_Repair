import React from 'react';
import Input from "../../Components/Structure/input/ui";
import Button from "../../Components/Structure/button/ui";
import {usePageSignIn} from "./lib";
import '../../../../css/style.css'

const PageSignIn = () => {

    const {handlerValue, handlerPass, router, valueError, auto_} = usePageSignIn()

    return (
        <div className="main">
            <div>
                <h1>Sign <span>in</span></h1>
                <div className="sign_up">
                    <Input classname = "login_in" type = "text" text = "Login" onChange = {handlerValue}></Input>
                    <Input classname = "pass_in" type = "password" text = "Password" onChange = {handlerPass}></Input>
                </div>
                <h5>If you don't have an account <a onClick={() => router("/page_sign_up")}>Sign up</a></h5>
                <h5 className="massage_1" style={{color: "#ea4c88"}}>{valueError}</h5>
                <Button func = {auto_} name = "bt3" text = "Come in"></Button>
            </div>
        </div>
    );
};
export default PageSignIn;