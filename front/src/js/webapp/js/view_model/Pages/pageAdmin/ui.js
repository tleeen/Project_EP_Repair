import React from "react";
import TopMenu from "../../Components/Structure/topMenu/ui";
import {usePageAdmin} from "./lib";

const PageAdmin = () => {

    const {indicator, exit, changePage, page} = usePageAdmin()

    return (
        <div>
            <TopMenu indicator = {indicator} text1 = 'Home' text2 = 'User Management'  text3 = 'Application Management' exit = {exit} bt1 = {()=>changePage(1)} bt2 = {()=>changePage(2)} bt3 = {()=>changePage(3)}></TopMenu>
            {page}
        </div>
    );
};

export default PageAdmin;