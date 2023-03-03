import React, {useContext, useState} from 'react';
import Button from "../Structure/Button";
import '../../../../css/style.css'
import {useNavigate} from "react-router";
import {Application} from "../../../model/appl_model";
import {AuthContext} from "../../Store/context";

const UserApplication = () => {
    const router = useNavigate();

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const [valueInp, setValueInp] = useState("")

    const [valueCheck1, setValueCheck1] = useState(true)
    const [valueCheck2, setValueCheck2] = useState(false)
    const [valueCheck3, setValueCheck3] = useState(false)
    const [valueCheck4, setValueCheck4] = useState(false)

    function check1() {
        setValueCheck1(true);
        setValueCheck2(false);
        setValueCheck3(false);
        setValueCheck4(false)
    }
    function check2() {
        setValueCheck1(false);
        setValueCheck2(true);
        setValueCheck3(false);
        setValueCheck4(false)
    }
    function check3() {
        setValueCheck1(false);
        setValueCheck2(false);
        setValueCheck3(true);
        setValueCheck4(false)
    }
    function check4() {
        setValueCheck1(false);
        setValueCheck2(false);
        setValueCheck3(false);
        setValueCheck4(true)
    }

    const [valueBox, setValueBox] = useState("")

    async function add_apl() {
        let inp_topic;
        if(valueCheck1 === true){
            inp_topic = 'Computer Maintenance';
        }
        else if (valueCheck2 === true){
            inp_topic = 'Network Engineering';
        }
        else if (valueCheck3 === true){
            inp_topic = 'Network security and data security';
        }
        else{
            inp_topic = 'Setup server deployment and management';
        }

        let inp_contact = valueInp;
        let inp_comment = valueBox;
        if (inp_topic !== "" && inp_contact !== "" && inp_comment !== "") {

            let application_ = {
                poz: 0,
                topic: inp_topic,
                contact: inp_contact,
                comment: inp_comment,
            };
            let application = new Application();

            application.set(application_)

            let dat = await application.add_aplic(application);

            if (dat.status === 200) {
                setValueInp("");
                setValueBox("");
            } else if (dat.status === 404) {
                setIsAuth('');
                router('/page_sign_in');
            }

        } else {
            alert("Not all fields were filled in");
        }
    }

    return (
        <div className="main_2">
            <div>
                <div className="apli">
                    <h1><span>Creating</span> an application</h1>
                    <div className="menu">
                        <div>
                            <h2 className="h2_"><span>Choose</span> a topic</h2>
                            <div className="select" tabIndex="1">
                                <input className="selectopt" name="test" type="radio" id="opt1"
                                       value='Computer Maintenance' checked={valueCheck1} onChange={()=>check1()}></input>
                                    <label htmlFor="opt1" className="option">Computer Maintenance</label>
                                    <input className="selectopt" name="test" type="radio" id="opt2"
                                           value='Network Engineering' checked={valueCheck2} onChange={()=>check2()}></input>
                                        <label htmlFor="opt2" className="option">Network Engineering</label>
                                        <input className="selectopt" name="test" type="radio" id="opt3"
                                               value='Network security and data security' checked={valueCheck3} onChange={()=>check3()}></input>
                                            <label htmlFor="opt3" className="option">Network security and data
                                                security</label>
                                            <input className="selectopt" name="test" type="radio" id="opt4"
                                                   value='Setup server deployment and management' checked={valueCheck4} onChange={()=>check4()}></input>
                                                <label htmlFor="opt4" className="option">Setup server deployment and
                                                    management</label>
                            </div>
                        </div>
                        <div className="input_contact">
                            <h2 className="h2_"><span>Specify</span> contacts</h2>
                            <div className="input-container number">
                                <input type="text" required="-1" value={valueInp} onChange={event => setValueInp(event.target.value)}/>
                                <label>Contact</label>
                            </div>
                        </div>
                    </div>
                    <h2 className="h2_"><span>Describe</span> the problem</h2>
                    <textarea id="comment_in" className="textarea" placeholder="Enter a message... " value={valueBox} onChange={event => setValueBox(event.target.value)}></textarea>
                </div>
                <Button func = {()=>add_apl()} name = "bt3 ok" text = "ok"></Button>
            </div>
        </div>
    );
};

export default UserApplication;