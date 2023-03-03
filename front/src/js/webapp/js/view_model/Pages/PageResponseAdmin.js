import React, {useContext, useState} from 'react';
import Button from "../Components/Structure/Button";
import '../../../css/style.css'
import {useNavigate} from "react-router";
import {IdFactory_for_admin} from "../Store/service";
import {Application} from "../../model/appl_model";
import {AuthContext} from "../Store/context";

const PageResponseAdmin = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [valueText, setValueText] = useState("")

    const router = useNavigate();

    async function comment_admin() {
        let id = IdFactory_for_admin.createInstance();

        let application_ = {
            id: id._id,
            admin_comment: valueText,
        };
        let application = new Application();
        application.set(application_);
        let dat = await application.add_comment_admin(application);
        setValueText('');
        router('/page_admin_1');

        if (dat.status === 404){
            setIsAuth('');
            router('/page_sign_in');
        }
    }

    return (
        <div className="main_2" style={{marginTop: 100}}>
            <div>
                <h1><span>Response</span> to <span>the</span> user</h1>
            </div>
            <br></br>
                <h2 className="h2_">Enter <span>the</span> answer</h2>
                <textarea  className="textarea response" placeholder="Enter a message..." value={valueText} onChange={event => setValueText(event.target.value)}></textarea>
                <Button func = {comment_admin} name = "ok delete" text = "Ok"></Button>
        </div>
    );
};

export default PageResponseAdmin;