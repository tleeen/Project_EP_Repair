import React from 'react';
import '../../../shared/styles/index.css'
import {useAuthorization} from "./model";
import {Button, Input} from "../../../shared/ui";

export const SignIn = () => {

	const {handlerValue, handlerPass, router, valueError, authorization} = useAuthorization();

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
				<Button func = {() => authorization()} name = "bt3" text = "Come in"></Button>
			</div>
		</div>
	);
};