import React, {useState} from 'react';
import Input from "../../Components/Structure/input/ui";
import Button from "../../Components/Structure/button/ui";
import '../../../../css/style.css'
import {useNavigate} from "react-router";
import {User} from "../../../model/user_model";
import {useDispatch} from "react-redux";

const PageSignIn = () => {

    const[valueError, setValueError] = useState("");

    const[valueInp, setValueInp] = useState("");
    const handlerValue = (e) => setValueInp(e.target.value);

    const[valuePas, setValuePas] = useState("");
    const handlerPass = (e) => setValuePas(e.target.value);

    const router = useNavigate();

    const dispatch = useDispatch();

    const setIsAuthUser = () => {
        dispatch({type:"setIsAuth", payload: "user"})
    }
    const setIsAuthAdmin = () => {
        dispatch({type:"setIsAuth", payload: "admin"})
    }

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    async function auto_() {
        let inp_login = valueInp;
        let inp_pass = valuePas;
        if (inp_pass !== "" && inp_login !== "") {

            let user_ = {
                login: inp_login,
                pass: inp_pass,
                hash: 0,
            };
            let user = new User();

            user.set(user_);

            let dat = await user.autoris(user);
            if (dat.status === 200) {
                localStorage.setItem("login", inp_login);
                localStorage.setItem("token", dat.res.hash);
                localStorage.setItem("role", dat.res.role);
                sessionStorage.setItem("login", inp_login);
                sessionStorage.setItem("token", dat.res.hash);
                sessionStorage.setItem("role", dat.res.role);
                if(dat.res.role === 'admin'){
                    //setIsAuth('admin');
                    setIsAuthAdmin();
                    router('/page_admin');
                }
                else{
                    //setIsAuth('user');
                    setIsAuthUser();
                    router('/page_user');
                }
            } else if (dat.status === 404) {
                setValueInp("");
                setValuePas("");
                setValueError("User not found");
            }

        } else {
            setValueError("Not all fields were filled in");
        }
    }

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