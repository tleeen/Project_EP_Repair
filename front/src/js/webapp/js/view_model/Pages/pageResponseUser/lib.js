import {useEffect, useState} from "react";
//import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Application} from "../../../model/appl_model";
import {useDispatcher, useListener} from "../../Store/mobx/api";

export function usePageResponseUser(){

    const isIdUser = useListener("isIdUser");

    useEffect(() => {comment_admin(); return}, [isIdUser]);

    const [valueText, setValueText] = useState("");

    //const isIdUser = useSelector(state => state.isIdUser);

    const router = useNavigate();

    const dispatchD = useDispatcher("isAuth", "");

    /*const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }*/

    // const {isAuth, setIsAuth} = useContext(AuthContext)

    //const {isIdUser, setIdUser} = useContext(IdUserContext)

    async function comment_admin() {
        let application = new Application();
        let dat = await application.get_comment_admin(isIdUser);
        setValueText(dat.res);
        if (dat.status === 404){
            //setIsAuth('');
            //setIsAuthDef();
            dispatchD();
            router('/page_sign_in');
        }
    }

    return {valueText, router}
}