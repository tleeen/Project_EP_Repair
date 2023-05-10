import React from "react";
import Button from "../../Structure/button/ui";
import {useUserApplication} from "./lib";

const UserApplication = () => {

    const {valueCheck1, valueCheck2, valueCheck3, valueCheck4, check1, check2, check3, check4, valueInp, setValueInp, valueBox, setValueBox, add_apl} = useUserApplication()

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