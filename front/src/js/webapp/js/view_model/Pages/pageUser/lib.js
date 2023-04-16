import React, {useState} from "react";
import UserStart from "../../Components/User/userStart/ui";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import UserApplication from "../../Components/User/userApplication/ui";
import UserListAplications from "../../Components/User/userListApplications/ui";
import {useDispatcher} from "../../Store/mobx/api";

export function usePageUser(){

    const [indicator, setIndicator] = useState('indicator');

    const [page, setPage] = useState(<UserStart/>)

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
            setPage(<UserStart/>);
        }
        else if (index === 2){
            setIndicator('indicator1');
            setPage(<UserApplication/>);
        }
        else if (index === 3){
            setIndicator('indicator2');
            setPage(<UserListAplications/>);
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