import React, {useContext, useEffect, useState} from 'react';
import Button from "../Components/Structure/Button";
import '../../../css/style.css'
import {useNavigate} from "react-router";
import {IdFactory_for_user} from "../Store/service";
import {Application} from "../../model/appl_model";
import {AuthContext} from "../Store/context";

const PageResponseUser = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [valueText, setValueText] = useState("")

    const router = useNavigate();

    async function comment_admin() {
        let id = IdFactory_for_user.createInstance();
        let application = new Application();
        let dat = await application.get_comment_admin(id._id);
        setValueText(dat.res);
        if (dat.status === 404){
            setIsAuth('');
            router('/page_sign_in');
        }
    }

    useEffect(() => {comment_admin();return}, []);

    return (
            <div className="main_2" style={{marginTop: 200}}>
                <div>
                    <h1><span>Administrator</span> response</h1>
                </div>
                <br></br>
                    <h2 id="response_">{valueText}</h2>
                    <Button func = {()=>router("/page_user_1")} name = "ok delete" text = "Back"></Button>
            </div>
    );
};

export default PageResponseUser;