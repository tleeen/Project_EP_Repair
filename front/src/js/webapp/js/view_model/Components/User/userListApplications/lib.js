import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import {Del} from "../../../../model/del_model";
import {WebSocet} from "../../../../transport/request";
import {useDispatcher} from "../../../Store/mobx/api";

export function useUserListApplications(){

    useEffect(() => {table();return}, []);

    const [valueError, setValueError] = useState("")

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

    const [applic, setApplic] = useState([]);

    const router = useNavigate();

    const dispatchD = useDispatcher("isAuth", "");

    const dispatchIU = useDispatcher("isIdUser", check_response_admin());

    /*const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

    const setIdUser = (id) => {
        dispatch({type:"setIdUser", payload: id})
    }*/

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    //const {isIdUser, setIdUser} = useContext(IdUserContext)

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
            let dat = await delet.dele_app(id);
            if (dat.status === 404){
                //setIsAuth('');
                //setIsAuthDef();
                dispatchD();
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
        let dat = await delet.tabl_app_user(delet.get());
        let res = dat.res;
        let n = 0;
        let masApplic = [];

        for (let i = 0; i < res.length; i++) {
            n = n + 1;
            masApplic.push({id: res[i].id, appl: [{name : n}, {name: res[i].topic}, {name: res[i].contact}, {name: res[i].comment}, {name: res[i].status}]})
        }
        setApplic(masApplic);
        WebSocet(table, '/applicasync')
    }

    function response_admin() {

        if(valueInp.length === 1){
            router('/page_res_user');
            //setIdUser(valueInp[0]);
            dispatchIU();
            console.log(valueInp[0])
        }
        else{
            setValueError("Select one application");
        }
    }

    function check_response_admin() {
        if(valueInp.length === 1){
            console.log(valueInp[0])
            return valueInp[0]
        }
    }

    //const app = "WEB_EP-1.0-SNAPSHOT";

    /*function tableApplicUpd() {
        let wsID = sessionStorage.getItem('token');
        let ws = new WebSocket('ws://localhost:8080/'+app+'/applicasync');
        ws.onopen = () => {
            ws.send(wsID);
        };
        ws.onmessage = () => {
            table();
        };
    }*/

    /*useEffect(() => {let wsID = sessionStorage.getItem('token');
        let ws = new WebSocket('ws://localhost:8080/'+app+'/applicasync');
        ws.onopen = () => {
            ws.send(wsID);
        };
        ws.onmessage = () => {
            table();
        };return () => ws.close()}, []);*/

    //useEffect(() => {WebSocet(table, '/applicasync');return}, []);

    return {valueError, applic, del, response_admin, ValueInp}
}