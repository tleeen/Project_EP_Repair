import React, {useEffect, useState} from 'react';
import Button from "../../Components/Structure/button/ui";
import '../../../../css/style.css'
import {useNavigate} from "react-router";
import {Application} from "../../../model/appl_model";
import {useDispatch, useSelector} from "react-redux";

const PageResponseUser = () => {

    const [valueText, setValueText] = useState("");

    const isIdUser = useSelector(state => state.isIdUser);

    const router = useNavigate();

    const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

    // const {isAuth, setIsAuth} = useContext(AuthContext)

    //const {isIdUser, setIdUser} = useContext(IdUserContext)

    async function comment_admin() {
        let application = new Application();
        let dat = await application.get_comment_admin(isIdUser);
        setValueText(dat.res);
        if (dat.status === 404){
            //setIsAuth('');
            setIsAuthDef();
            router('/page_sign_in');
        }
    }

    useEffect(() => {comment_admin(); return}, []);

    return (
            <div className="main_2" style={{marginTop: 200}}>
                <div>
                    <h1><span>Administrator</span> response</h1>
                </div>
                <br></br>
                    <h2 id="response_">{valueText}</h2>
                    <Button func = {()=>router("/page_user")} name = "ok delete" text = "Back"></Button>
            </div>
    );
};

export default PageResponseUser;