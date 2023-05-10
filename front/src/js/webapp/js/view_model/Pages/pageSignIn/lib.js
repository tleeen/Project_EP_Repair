import {useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import {User} from "../../../model/user_model";
import {useDispatcher} from "../../Store/mobx/api";
import {WebSocet} from "../../../transport/request";

export function usePageSignIn(){

    const[valueError, setValueError] = useState("");

    const[valueInp, setValueInp] = useState("");
    const handlerValue = (e) => setValueInp(e.target.value);

    const[valuePas, setValuePas] = useState("");
    const handlerPass = (e) => setValuePas(e.target.value);

    const router = useNavigate();

    /*const dispatch = useDispatch();

    const setIsAuthUser = () => {
        dispatch({type:"setIsAuth", payload: "user"})
    }
    const setIsAuthAdmin = () => {
        dispatch({type:"setIsAuth", payload: "admin"})
    }*/

    const dispatchU = useDispatcher("isAuth", "user");
    const dispatchA = useDispatcher("isAuth", "admin");

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
                    //setIsAuthAdmin();
                    dispatchA();
                    router('/page_admin');
                    WebSocet((massage) => {alert(massage)} , '/massage');
                }
                else{
                    //setIsAuth('user');
                    //setIsAuthUser();
                    dispatchU();
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

    return {handlerValue, handlerPass, router, valueError, auto_}
}