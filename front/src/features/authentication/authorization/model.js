import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setValueError, setValueInp, setValuePas} from "./store";
import {auth, User} from "../../../entities/user";
import {setIsAuth} from "../store";
import {endWorking} from "../../../shared/api";

export function useAuthorization(){

    const dispatch = useDispatch();
    const router = useNavigate();

    let valueError = useSelector(state => state.authorization.valueError);
    let inp_login = useSelector(state => state.authorization.valueInp);
    let inp_pass = useSelector(state => state.authorization.valuePas);

    const handlerValue = (e) => dispatch(setValueInp(e.target.value));
    const handlerPass = (e) => dispatch(setValuePas(e.target.value));

    async function authorization() {
        if (inp_pass !== "" && inp_login !== "") {

            let user = new User();
            user.set({
                login: inp_login,
                pass: inp_pass,
                hash: 0,
            });
            let dat = await auth(user);

            if (dat.status === 200) {
                localStorage.setItem("login", inp_login);
                localStorage.setItem("token", dat.res.hash);
                localStorage.setItem("role", dat.res.role);
                sessionStorage.setItem("login", inp_login);
                sessionStorage.setItem("token", dat.res.hash);
                sessionStorage.setItem("role", dat.res.role);
                if(dat.res.role === 'admin'){
                    dispatch(setIsAuth('admin'));
                    router('/page_admin');
                    dispatch(setValueError(""));
                    endWorking((massage) => {alert(massage)});
                }
                else{
                    dispatch(setIsAuth('user'));
                    router('/page_user');
                    dispatch(setValueError(""));
                }
            } else if (dat.status === 404) {
                dispatch(setValueInp(""));
                dispatch(setValuePas(""));
                dispatch(setValueError("User not found"));
            }

        } else {
            dispatch(setValueError("Not all fields were filled in"));
        }
    }
    return {handlerValue, handlerPass, router, valueError, authorization}
}