import {usePageStart} from "./model";
import React from "react";
import {Button} from "../../shared/ui";
import logo from "../../shared/assets/images/logo_.png"
import "../../shared/styles/index.css"
export const PageStart = () => {

	const {router} = usePageStart()

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