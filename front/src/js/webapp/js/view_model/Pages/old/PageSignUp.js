import React, {useState} from 'react';
import '../../../../css/style.css'
import Input from "../../Components/Structure/input/ui";
import Button from "../../Components/Structure/button/ui";
import {useNavigate} from "react-router";
import {User} from "../../../model/user_model";
import {useDispatch} from "react-redux";

const PageSignUp = () => {

    const[valueError, setValueError] = useState("");


    const[valueInp, setValueInp] = useState("");
    const handlerValue = (e) => setValueInp(e.target.value);

    const[valuePas, setValuePas] = useState("");
    const handlerPass = (e) => setValuePas(e.target.value);

    const[valuePasR, setValuePasR] = useState("");
    const handlerPassR = (e) => setValuePasR(e.target.value);

    const router = useNavigate();

    const dispatch = useDispatch();

    const setIsAuthUser = () => {
        dispatch({type:"setIsAuth", payload: "user"})
    }

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    async function reg_() {
        let inp_login = valueInp;
        let inp_pass = valuePas;
        let inp_pass_rep = valuePasR;
        if (inp_pass !== "" && inp_login !== "" && inp_pass_rep !== "") {
            if (inp_pass === inp_pass_rep) {

                let user_ = {
                    login: inp_login,
                    pass: inp_pass,
                    role: "user",
                    hash: 0
                };
                let user = new User();

                user.set(user_)

                let dat = await user.registr(user);
                if (dat.status === 200) {
                    localStorage.setItem("login", inp_login);
                    localStorage.setItem("token", dat.res.hash);
                    localStorage.setItem("role", "user");
                    sessionStorage.setItem("login", inp_login);
                    sessionStorage.setItem("token", dat.res.hash);
                    sessionStorage.setItem("role", "user");
                    //setIsAuth('user');
                    setIsAuthUser();
                    router("/page_user");
                } else if (dat.status === 404) {
                    setValueInp("");
                    setValuePas("");
                    setValuePasR("");
                    setValueError("Such a user already exists");
                }

            } else {
                setValueError("Passwords don't match");
            }
        } else {
            setValueError("Not all fields were filled in");
        }
    }

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
                <Button func={()=>reg_()} name = "bt3" text = "Come up"></Button>
            </div>
        </div>
    );
};

export default PageSignUp;