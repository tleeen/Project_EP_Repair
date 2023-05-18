import {Button} from "../../../shared/ui";
import React from "react";
import {useOpenRespondApplication} from "../model/openRespondApplication";

export const OpenRespondApplication = () => {

    const {response_admin} = useOpenRespondApplication();

    return (
        <Button func = {()=> response_admin()} name = " delete" text = {"Answer"}></Button>
    );
};