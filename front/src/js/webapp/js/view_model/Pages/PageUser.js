import React, {useContext, useState} from 'react';
import TopMenu from "../Components/Structure/TopMenu";
import '../../../css/style.css'
import UserStart from "../Components/User/UserStart";
import {useNavigate} from "react-router";
import UserApplication from "../Components/User/UserApplication";
import UserListAplications from "../Components/User/UserListAplications";
import {AuthContext} from "../Store/context";

const PageUser = () => {

    const [indicator, setIndicator] = useState('indicator');

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [page, setPage] = useState(<UserStart/>)

    const router = useNavigate();

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
        setIsAuth('');
        router('/page_sign_in')
    }

    return (
        <div>
            <TopMenu indicator = {indicator} text1 = 'Home' text2 = 'Submit an application'  text3 = 'My applications' exit = {exit} bt1 = {()=>changePage(1)} bt2 = {()=>changePage(2)} bt3 = {()=>changePage(3)}></TopMenu>
            {page}
        </div>
    );
};

export default PageUser;