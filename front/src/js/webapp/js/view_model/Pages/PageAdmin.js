import React, {useContext, useState} from 'react';
import TopMenu from "../Components/Structure/TopMenu";
import '../../../css/style.css'
import AdminStart from "../Components/Admin/AdminStart";
import {useNavigate} from "react-router";
import AdmiListUsers from "../Components/Admin/AdmiListUsers";
import AdminListApplications from "../Components/Admin/AdminListApplications";
import {AuthContext} from "../Store/context";

const PageAdmin = () => {

    const [indicator, setIndicator] = useState('indicator');

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [page, setPage] = useState(<AdminStart/>)

    const router = useNavigate();

    function changePage(index){
        if (index === 1){
            setIndicator('indicator');
            setPage(<AdminStart/>);
        }
        else if (index === 2){
            setIndicator('indicator1');
            setPage(<AdmiListUsers/>);
        }
        else if (index === 3){
            setIndicator('indicator2');
            setPage(<AdminListApplications/>);
        }
    }

    function exit() {
        setIsAuth('');
        router('/page_sign_in')
    }

    return (
        <div>
        <TopMenu indicator = {indicator} text1 = 'Home' text2 = 'User Management'  text3 = 'Application Management' exit = {exit} bt1 = {()=>changePage(1)} bt2 = {()=>changePage(2)} bt3 = {()=>changePage(3)}></TopMenu>
            {page}
        </div>
    );
};

export default PageAdmin;