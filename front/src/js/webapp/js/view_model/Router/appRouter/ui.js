import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {adminRoutes, defaultRoutes, userRoutes} from "../router";
import PageStart from "../../Pages/pageStart/ui";
import {useAppRouter} from "./lib";

const AppRouter = () => {

    const {isAuth} = useAppRouter()

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