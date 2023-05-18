import {PageSignIn} from "../../pages/pageSignIn";
import {PageSignUp} from "../../pages/pageSignUp";
import {PageUser} from "../../pages/pageUser";
import {PageAdmin} from "../../pages/pageAdmin";
import {PageResponseUser} from "../../pages/pageResponseUser";
import {PageResponseAdmin} from "../../pages/pageResponseAdmin";

export const defaultRoutes = [
    {path : '/page_sign_in', element: <PageSignIn/>},
    {path : '/page_sign_up', element: <PageSignUp/>},
]

export const userRoutes = [
    {path : '/page_res_user', element: <PageResponseUser/>},
    {path : '/page_user', element: <PageUser/>},
    {path : '/page_sign_in', element: <PageSignIn/>},
    {path : '/page_sign_up', element: <PageSignUp/>},
]

export const adminRoutes = [
    {path : '/page_res_adm', element: <PageResponseAdmin/>},
    {path : '/page_admin', element: <PageAdmin/>},
    {path : '/page_sign_in', element: <PageSignIn/>},
    {path : '/page_sign_up', element: <PageSignUp/>},
]