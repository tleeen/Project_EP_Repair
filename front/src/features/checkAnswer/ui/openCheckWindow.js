import {Button} from "../../../shared/ui";
import React from "react";
import {useOpenCheckWindow} from "../model/openCheckWindow";

export const OpenCheckWindow = () => {

    const {response_admin} = useOpenCheckWindow();

    return (
        <Button func = {()=> response_admin()} name = " delete" text = {"Check answer"}></Button>
    );
};