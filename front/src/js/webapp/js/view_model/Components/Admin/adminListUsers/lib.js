import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
//import {useDispatch} from "react-redux";
import {User} from "../../../../model/user_model";
import {Del} from "../../../../model/del_model";
import {WebSocet} from "../../../../transport/request";
import {useDispatcher} from "../../../Store/mobx/api";

export function useAdminListUsers() {

        useEffect(() => {table(); WebSocet(table, '/userasync', 'Changes are committed');return}, []);

        const [valueError, setValueError] = useState("");

        const [valueInp, setValueInp] = useState([]);

        const ValueInp = (valueInp) => {
            setValueInp(valueInp)
        };

        /*const [posts, setPosts] = useState([
            {id: 1, name: '№'},
            {id: 2, name: 'ID'},
            {id: 3, name: 'Login'},
            {id: 4, name: 'Role'},
        ]);*/

        const [users, setUsers] = useState([]);

        const router = useNavigate();

        const dispatchD = useDispatcher("isAuth", "");

        /*const dispatch = useDispatch();

        const setIsAuthDef = () => {
            dispatch({type: "setIsAuth", payload: ""})
        }*/

        //const {isAuth, setIsAuth} = useContext(AuthContext)

    async function update() {
        console.log(valueInp);
        if (valueInp.length === 1) {
            let user_ = {
                id: valueInp[0],
            };
            let user = new User();
            user.set(user_);

            let dat = await user.updateRole(user);
            if (dat.status === 404) {
                //setIsAuth('');
                //setIsAuthDef();
                dispatchD();
                router('/page_sign_in');
            }
            setValueError("");
            table();
            setValueInp((prevState) => {
                prevState.length = 0;
                return [prevState];
            })
        } else {
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
        if (valueInp.length === 0) {
            setValueError("Nothing selected");
        } else {
            const id = valueInp.join(" ");
            const delet = new Del();
            const dat = await delet.dele_user(id);
            if (dat.status === 404) {
                //setIsAuth('');
                //setIsAuthDef();
                dispatchD();
                router('/page_sign_in');
            }
            setValueInp([]);
            table();
            setValueError("");
        }
    }

    async function table() {
        let delet = new Del();
        let {res} = await delet.tabl_user(delet.get());
        let masUsers = res.map((item, index) => ({
            id: item.id,
            appl: [{name: index + 1}, {name: item.id}, {name: item.login}, {name: item.role}]
        }));
        setUsers(masUsers);
    }

        /*useEffect(() => {let wsID = sessionStorage.getItem('token');
            let ws = new WebSocket('ws://localhost:8080/'+app+'/userasync');
            ws.onopen = () => {
                ws.send(wsID);
            };
            ws.onmessage = () => {
                table();
            };return () => ws.close()}, []);*/

        //useEffect(() => {WebSocet(table, '/userasync');return}, []);

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
        return {valueError, users, del, update, ValueInp}
}