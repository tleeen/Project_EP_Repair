import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import {Del} from "../../../../model/del_model";
import {WebSocet} from "../../../../transport/request";
import {useDispatcher} from "../../../Store/mobx/api";

export function useAdminListApplications() {

    useEffect(() => {table(); WebSocet(table, '/applicasync', 'Changes are committed'); return}, []);

    const [valueError, setValueError] = useState("")

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

    const [applic, setApplic] = useState([]);

    const router = useNavigate();

    const dispatchD = useDispatcher("isAuth", "");

    const dispatchIA = useDispatcher("isIdAdmin", check_response_admin());

    /*const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

    const setIdAdmin = (id) => {
        dispatch({type:"setIdAdmin", payload: id})
    }*/

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    //const {isIdAdmin, setIdAdmin} = useContext(IdAdminContext)


    async function del() {
        if (valueInp.length === 0) {
            setValueError("Nothing selected");
            return;
        }
        const id = valueInp.join(" ");
        const delet = new Del();
        const dat = await delet.dele_app(id);
        if (dat.status === 404) {
            //setIsAuth('');
            //setIsAuthDef();
            dispatchD();
            router('/page_sign_in');
            return;
        }
        setValueError("");
        setValueInp([]);
        table();
    }

    async function table() {
        const delet = new Del();
        const { res } = await delet.tabl_app_admin(delet.get());
        let n = 0;
        const masApplic = [];

        for (let i = 0; i < res.length; i++) {
            n++;
            const app = res[i];
            masApplic.push({
                id: app.id,
                appl: [
                    { name: n },
                    { name: app.id_user },
                    { name: app.topic },
                    { name: app.contact },
                    { name: app.comment },
                    { name: app.status }
                ]
            });
        }

        setApplic(masApplic);
    }

    function response_admin() {
        if(valueInp.length === 1){
            router('/page_res_adm');
            //setIdAdmin(valueInp[0]);
            dispatchIA();
        }
        else{
            setValueError("Select one application");
        }
    }

    function check_response_admin() {
        if(valueInp.length === 1){
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