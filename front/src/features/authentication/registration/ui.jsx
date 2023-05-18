import {Button, Input} from "../../../shared/ui";
import {useRegistration} from "./model";

export const SignUp = () => {

	const {handlerValue, handlerPass, handlerPassR, router, valueError, registration} = useRegistration()

	return (
		<div className="main">
			<div>
				<h1>Sign <span>up</span></h1>
				<div className="sign_up">
					<Input classname = "login_in" type = "text" text = "Login" onChange = {handlerValue}></Input>
					<Input classname = "pass_in" type = "password" text = "Password" onChange = {handlerPass}></Input>
					<Input classname = "pass_reg_in" type = "password" text = "Repeat password" onChange = {handlerPassR}></Input>
				</div>
				<h5>If you have an account <a onClick={() => router("/page_sign_in")}>Sign in</a></h5>
				<h5 className="massage_1" style={{color: "#ea4c88"}}>{valueError}</h5>
				<Button func={()=>registration()} name = "bt3" text = "Come up"></Button>
			</div>
		</div>
	);
};