import React, {useState} from 'react';
import TopMenu from "../../Components/Structure/topMenu/ui";
import '../../../../css/style.css'
import UserStart from "../../Components/User/userStart/ui";
import {useNavigate} from "react-router";
import UserApplication from "../../Components/User/userApplication/ui";
import UserListAplications from "../../Components/User/userListApplications/ui";
import {useDispatch} from "react-redux";

const PageUser = () => {

    const [indicator, setIndicator] = useState('indicator');

    const [page, setPage] = useState(<UserStart/>)

    const router = useNavigate();

    const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

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
        setIsAuthDef();
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