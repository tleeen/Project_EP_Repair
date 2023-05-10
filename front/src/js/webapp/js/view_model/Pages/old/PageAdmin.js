import React, {useState} from 'react';
import TopMenu from "../../Components/Structure/topMenu/ui";
import '../../../../css/style.css'
import AdminStart from "../../Components/Admin/adminStart/ui";
import {useNavigate} from "react-router";
import AdminListApplications from "../../Components/Admin/adminListApplications/ui";
import {useDispatch} from "react-redux";
import AdminListUsers from "../../Components/Admin/adminListUsers/ui";

const PageAdmin = () => {

    const [indicator, setIndicator] = useState('indicator');

    const [page, setPage] = useState(<AdminStart/>);

    const router = useNavigate();

    const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

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
        setIsAuthDef();
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