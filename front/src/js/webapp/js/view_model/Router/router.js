import PageSignIn from "../Pages/PageSignIn";
import PageResponseUser from "../Pages/PageResponseUser";
import PageSignUp from "../Pages/PageSignUp";
import PageResponseAdmin from "../Pages/PageResponseAdmin";
import PageUser from "../Pages/PageUser";
import PageAdmin from "../Pages/PageAdmin";

export const defaultRoutes = [
    {path : '/page_sign_in', element: <PageSignIn/>},
    {path : '/page_sign_up', element: <PageSignUp/>},
]

export const userRoutes = [
    {path : '/page_res_user', element: <PageResponseUser/>},
    {path : '/page_user_1', element: <PageUser/>},
]

export const adminRoutes = [
    {path : '/page_res_adm', element: <PageResponseAdmin/>},
    {path : '/page_admin_1', element: <PageAdmin/>},
]
