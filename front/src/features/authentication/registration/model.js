import {setValueError, setValueInp, setValuePas, setValuePasR} from "./store";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {reg, User} from "../../../entities/user";
import {setIsAuth} from "../store";

export function useRegistration() {

    const dispatch = useDispatch();
    const router = useNavigate();

    let valueError = useSelector(state => state.registration.valueError);
    let inp_login = useSelector(state => state.registration.valueInp);
    let inp_pass = useSelector(state => state.registration.valuePas);
    let inp_pass_rep = useSelector(state => state.registration.valuePasR);

    const handlerValue = (e) => dispatch(setValueInp(e.target.value));
    const handlerPass = (e) => dispatch(setValuePas(e.target.value));
    const handlerPassR = (e) => dispatch(setValuePasR(e.target.value));

    async function registration() {

        if (inp_pass !== "" && inp_login !== "" && inp_pass_rep !== "") {
            if (inp_pass === inp_pass_rep) {
                let user = new User();
                user.set({
                    login: inp_login,
                    pass: inp_pass,
                    role: "user",
                    hash: 0
                })
                let dat = await reg(user);
                if (dat.status === 200) {

                    localStorage.setItem("login", inp_login);
                    localStorage.setItem("token", dat.res.hash);
                    localStorage.setItem("role", "user");
                    sessionStorage.setItem("login", inp_login);
                    sessionStorage.setItem("token", dat.res.hash);
                    sessionStorage.setItem("role", "user");

                    dispatch(setIsAuth('user'))

                    router("/page_user");

                    dispatch(setValueError(""));

                } else if (dat.status === 404) {
                    dispatch(setValueInp(""));
                    dispatch(setValuePas(""));
                    dispatch(setValuePasR(""));
                    dispatch(setValueError("Such a user already exists"));
                }

            } else {
                dispatch(setValueError("Passwords don't match"));
            }
        } else {
            dispatch(setValueError("Not all fields were filled in"));
        }
    }

    return {handlerValue, handlerPass, handlerPassR, router, valueError, registration}
}