import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageStart from "../Pages/PageStart";
import {adminRoutes, defaultRoutes, userRoutes} from "./router";
import {AuthContext} from "../Store/context";


const AppRouter = () => {
    const [isAuth, setIsAuth] = useState('');
    console.log(isAuth);
    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth
        }}>
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
                <Route path={"*"} element={<PageStart/>}/>
            </Routes>
            : isAuth === 'user' ?
            <Routes>
                {userRoutes.map(route =>
                    <Route
                        element= {route.element}
                        path={route.path}
                    />
                )}
                <Route path={"*"} element={<PageStart/>}/>
            </Routes>
            :
            <Routes>
                {adminRoutes.map(route =>
                    <Route
                        element= {route.element}
                        path={route.path}
                    />
                )}
                <Route path={"*"} element={<PageStart/>}/>
            </Routes>
            }
        </BrowserRouter>
        </AuthContext.Provider>
    );
};

export default AppRouter;