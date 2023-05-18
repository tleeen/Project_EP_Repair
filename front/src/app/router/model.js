import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setIsAuth} from "../../features/authentication";
import {checkRole, User} from "../../entities/user";

export function useRouter(){

    const isAuth = useSelector(state => state.isAuth.isAuth)
    const dispatch = useDispatch();

    useEffect(async () => {
        if (sessionStorage.getItem("login") !== null){
            let user = new User();

            user.set({
                login: sessionStorage.getItem("login"),
            });

            let dat = await checkRole(user);

            if (dat.res.role === "user"){
                dispatch(setIsAuth("user"))
            }
            else if (dat.res.role === "admin"){
                dispatch(setIsAuth("admin"))
            }
            else{
                dispatch(setIsAuth(""))
            }
        }
    }, [])

    return {isAuth}
}