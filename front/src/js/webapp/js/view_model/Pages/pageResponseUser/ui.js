import React from "react";
import Button from "../../Components/Structure/button/ui";
import {usePageResponseUser} from "./lib";

const PageResponseUser = () => {

    const {valueText, router, comment_admin} = usePageResponseUser()

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