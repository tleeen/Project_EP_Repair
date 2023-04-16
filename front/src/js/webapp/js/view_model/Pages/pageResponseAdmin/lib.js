import {useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch, useSelector} from "react-redux";
import {Application} from "../../../model/appl_model";
import {useDispatcher, useListener} from "../../Store/mobx/api";

export function usePageResponseAdmin(){

    const [valueText, setValueText] = useState("");

    //const isIdAdmin = useSelector(state => state.isIdAdmin);
    const isIdAdmin = useListener("isIdAdmin");

    const router = useNavigate();

    const dispatchD = useDispatcher("isAuth", "");

    /*const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }*/

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    //const {isIdAdmin, setIdAdmin} = useContext(IdAdminContext)

    async function comment_admin() {
        console.log(isIdAdmin);

        let application_ = {
            id: isIdAdmin,
            admin_comment: valueText,
        };
        let application = new Application();
        application.set(application_);
        let dat = await application.add_comment_admin(application);
        setValueText('');
        router('/page_admin');

        if (dat.status === 404){
            //setIsAuth('');
            //setIsAuthDef();
            dispatchD();
            router('/page_sign_in');
        }
    }

    return {valueText, setValueText, comment_admin}
}