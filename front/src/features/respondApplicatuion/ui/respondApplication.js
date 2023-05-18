import React, {useEffect} from "react";
import {useRespondApplication} from "../model/respondApplication";
import {Button, setValueInp} from "../../../shared/ui";
import {useDispatch} from "react-redux";

export const RespondApplication = () => {

    const dispatch = useDispatch();

    useEffect(() => {dispatch(setValueInp("clear"))}, [])

    const {valueText, setValueText, comment_admin} = useRespondApplication()


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