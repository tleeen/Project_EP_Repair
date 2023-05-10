import PageSignIn from "../Pages/pageSignIn/ui";
import PageResponseUser from "../Pages/pageResponseUser/ui";
import PageSignUp from "../Pages/pageSignUp/ui";
import PageResponseAdmin from "../Pages/pageResponseAdmin/ui";
import PageUser from "../Pages/pageUser/ui";
import PageAdmin from "../Pages/pageAdmin/ui";

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
