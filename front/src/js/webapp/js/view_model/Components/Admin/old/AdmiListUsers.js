import React, {useEffect, useState} from 'react';
import Table from "../../Structure/old/Table";
import '../../../../../css/style.css'
import {useNavigate} from "react-router";
import {Del} from "../../../../model/del_model";
import {User} from "../../../../model/user_model";
import {WebSocet} from "../../../../transport/request";
import {useDispatch} from "react-redux";

const AdmiListUsers = () => {

    const [valueError, setValueError] = useState("");

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) => {setValueInp(valueInp)}

    const [posts, setPosts] = useState([
        {id : 1, name: '№'},
        {id : 2, name: 'ID'},
        {id : 3, name: 'Login'},
        {id : 4, name: 'Role'},
    ]);

    const [users, setUsers] = useState([]);

    const router = useNavigate();

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

    async function update() {
        console.log(valueInp);
        if(valueInp.length === 1){
            let user_ = {
                id: valueInp[0],
            };
            let user = new User();
            user.set(user_);

            let dat = await user.updateRole(user);
            if (dat.status === 404){
                //setIsAuth('');
                setIsAuthDef();
                router('/page_sign_in');
            }
            setValueError("");
            table();
            setValueInp((prevState) => {
                prevState.length = 0;
                return [prevState];
            })
        }
        else{
            setValueError("Select one user");
        }
    }

    //const app = "WEB_EP-1.0-SNAPSHOT";

    /*function tableUserUpd() {
        let wsID = sessionStorage.getItem('token');

        let ws = new WebSocket('ws://localhost:8080/'+app+'/userasync');

        ws.onopen = () => {
            ws.send(wsID);
        };

        ws.onmessage = () => {
            table();
        };
    }*/

    async function del() {
        if(valueInp.length === 0){
            setValueError("Nothing selected");
        }
        else {
            let id = "";
            for (let i = 0; i < valueInp.length; i++) {
                id = id + valueInp[i] + " ";
            }
            let delet = new Del();
            let dat = await delet.dele_user(id);
            if (dat.status === 404){
                //setIsAuth('');
                setIsAuthDef();
                router('/page_sign_in');
            }
            table();
            setValueError("");
            setValueInp((prevState) => {
                prevState.length = 0;
                return [prevState];
            })
        }
    }

    async function table() {
        let delet = new Del();
        let dat = await delet.tabl_user(delet.get());
        let res = dat.res;
        let n = 0;
        let masUsers = [];
        for (let i = 0; i < res.length; i++) {
            n = n + 1;
            masUsers.push({id: res[i].id, appl: [{name : n}, {name: res[i].id}, {name: res[i].login}, {name: res[i].role}]})
        }
        setUsers(masUsers);
        WebSocet(table, '/userasync')
    }

    useEffect(() => {table();return}, []);

    /*useEffect(() => {let wsID = sessionStorage.getItem('token');
        let ws = new WebSocket('ws://localhost:8080/'+app+'/userasync');
        ws.onopen = () => {
            ws.send(wsID);
        };
        ws.onmessage = () => {
            table();
        };return () => ws.close()}, []);*/

    //useEffect(() => {WebSocet(table, '/userasync');return}, []);

    return (
            <Table error = {valueError} applic={users} posts = {posts} firstwordh1="All" secondwordh1='users' classname='table_dark' namebt1='Delete' namebt2='Сhange role' func1={del} func2={update} onChange = {ValueInp}></Table>
    );
};

export default AdmiListUsers;