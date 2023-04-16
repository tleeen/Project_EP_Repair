import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageStart from "../../Pages/pageStart/ui";
import {adminRoutes, defaultRoutes, userRoutes} from "../router";
import {useDispatch, useSelector} from "react-redux";
import {User} from "../../../model/user_model";

const AppRouter = () => {

    const isAuth = useSelector(state => state.isAuth)

    const dispatch = useDispatch();

    const setIsAuthUser = () => {
        dispatch({type:"setIsAuth", payload: "user"})
    }

    const setIsAuthAdmin = () => {
        dispatch({type:"setIsAuth", payload: "admin"})
    }

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

    useEffect(async () => {
        if (sessionStorage.getItem("login") !== null) {
            let user_ = {
                login: sessionStorage.getItem("login"),
            }
            let user = new User();
            user.set(user_);

            let dat = await user.checkRole(user);
            if (dat.res.role === "user"){
                setIsAuthUser();
            }
            else if (dat.res.role === "admin"){
                setIsAuthAdmin();
            }
            else{
                setIsAuthDef();
            }
        }
    }, [])

    //const [isAuth, setIsAuth] = useState('');

    //const [isIdUser, setIdUser] = useState(null);

    //const [isIdAdmin, setIdAdmin] = useState(null);

    return (
        /*<IdAdminContext.Provider value={{
            isIdAdmin, setIdAdmin
        }}>
        <IdUserContext.Provider value={{
            isIdUser, setIdUser
        }}>
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
         */
        <BrowserRouter>
            {(isAuth === '')
            ?
            <Routes>
                {defaultRoutes.map(route =>
                    <Route
                    element= {route.element}
                    path={route.path}
                    />
                )}
                <Route path={"/*"} element={<PageStart/>}/>
            </Routes>
            : isAuth === 'user' ?
            <Routes>
                {userRoutes.map(route =>
                    <Route
                        element= {route.element}
                        path={route.path}
                    />
                )}
                <Route path={"/*"} element={<PageStart/>}/>
            </Routes>
            :
            <Routes>
                {adminRoutes.map(route =>
                    <Route
                        element= {route.element}
                        path={route.path}
                    />
                )}
                <Route path={"/*"} element={<PageStart/>}/>
            </Routes>
            }
        </BrowserRouter>
        /*
        </AuthContext.Provider>
        </IdUserContext.Provider>
        </IdAdminContext.Provider>
         */
    );
};

export default AppRouter;