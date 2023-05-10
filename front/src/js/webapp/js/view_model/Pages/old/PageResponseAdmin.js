import React, {useState} from 'react';
import Button from "../../Components/Structure/button/ui";
import '../../../../css/style.css'
import {useNavigate} from "react-router";
import {Application} from "../../../model/appl_model";
import {useDispatch, useSelector} from "react-redux";

const PageResponseAdmin = () => {

    const [valueText, setValueText] = useState("");

    const isIdAdmin = useSelector(state => state.isIdAdmin);

    const router = useNavigate();

    const dispatch = useDispatch();

    const setIsAuthDef = () => {
        dispatch({type:"setIsAuth", payload: ""})
    }

    //const {isAuth, setIsAuth} = useContext(AuthContext)

    //const {isIdAdmin, setIdAdmin} = useContext(IdAdminContext)

    async function comment_admin() {

        console.log(isIdAdmin);

        let application_ = {
            id: isIdAdmin,
            admin_comment: valueText,
        };
        let application = new Application();
        application.set(application_);
        let dat = await application.add_comment_admin(application);
        setValueText('');
        router('/page_admin');

        if (dat.status === 404){
            //setIsAuth('');
            setIsAuthDef();
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