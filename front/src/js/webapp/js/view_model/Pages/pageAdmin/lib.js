import React, {useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import AdminStart from "../../Components/Admin/adminStart/ui";
import AdminListUsers from "../../Components/Admin/adminListUsers/ui";
import AdminListApplications from "../../Components/Admin/adminListApplications/ui";
import {useDispatcher} from "../../Store/mobx/api";

export function usePageAdmin(){

    const [indicator, setIndicator] = useState('indicator');

    const [page, setPage] = useState(<AdminStart/>);

    const router = useNavigate();

    const dispatchD = useDispatcher("isAuth", "");

    /*const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }*/

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    function changePage(index){
        if (index === 1){
            setIndicator('indicator');
            setPage(<AdminStart/>);
        }
        else if (index === 2){
            setIndicator('indicator1');
            setPage(<AdminListUsers/>);
        }
        else if (index === 3){
            setIndicator('indicator2');
            setPage(<AdminListApplications/>);
        }
    }

    function exit() {
        //setIsAuth('');
        //setIsAuthDef();
        dispatchD();
        router('/page_sign_in')
    }

    return {indicator, exit, changePage, page}
}