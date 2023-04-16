import {useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import {User} from "../../../model/user_model";
import {useDispatcher} from "../../Store/mobx/api";

export function usePageSignUp(){

    const[valueError, setValueError] = useState("");

    const[valueInp, setValueInp] = useState("");
    const handlerValue = (e) => setValueInp(e.target.value);

    const[valuePas, setValuePas] = useState("");
    const handlerPass = (e) => setValuePas(e.target.value);

    const[valuePasR, setValuePasR] = useState("");
    const handlerPassR = (e) => setValuePasR(e.target.value);

    const router = useNavigate();

    const dispatchU = useDispatcher("isAuth", "user");

    /*const dispatch = useDispatch();

    const setIsAuthUser = () => {
        dispatch({type:"setIsAuth", payload: "user"})
    }*/

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
                    //setIsAuthUser();
                    dispatchU();
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

    return {handlerValue, handlerPass, handlerPassR, router, valueError, reg_}
}