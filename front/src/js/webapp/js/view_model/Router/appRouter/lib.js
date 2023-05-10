//import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {User} from "../../../model/user_model";
import {useDispatcher, useListener} from "../../Store/mobx/api";

export function useAppRouter(){

    useEffect(async () => {
        if (sessionStorage.getItem("login") !== null) {
            let user_ = {
                login: sessionStorage.getItem("login"),
            }
            let user = new User();
            user.set(user_);

            let dat = await user.checkRole(user);
            if (dat.res.role === "user"){
                //setIsAuthUser();
                dispatchU();
            }
            else if (dat.res.role === "admin"){
                //setIsAuthAdmin();
                dispatchA();
            }
            else{
                //setIsAuthDef();
                dispatchD();
            }
        }
    }, [])

    //const isAuth = useSelector(state => state.isAuth)

    const isAuth = useListener("isAuth");

    const dispatchU = useDispatcher("isAuth", "user");

    const dispatchA = useDispatcher("isAuth", "admin");

    const dispatchD = useDispatcher("isAuth", "");

    /*const dispatch = useDispatch();

    const setIsAuthUser = () => {
        dispatch({type:"setIsAuth", payload: "user"})
    }

    const setIsAuthAdmin = () => {
        dispatch({type:"setIsAuth", payload: "admin"})
    }

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }*/

    //const [isAuth, setIsAuth] = useState('');

    //const [isIdUser, setIdUser] = useState(null);

    //const [isIdAdmin, setIdAdmin] = useState(null);

    return {isAuth}
}