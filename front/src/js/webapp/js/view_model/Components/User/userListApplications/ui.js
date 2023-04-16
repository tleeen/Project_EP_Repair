import React from "react";
import Table from "../../Structure/table/ui";
import {useUserListApplications} from "./lib";

const UserListAplications = () => {

    const {valueError, applic, del, response_admin, ValueInp} = useUserListApplications()

    return (
        <Table error = {valueError} applic={applic} posts = {[
            {id : 1, name: '№'},
            {id : 2, name: 'Topic'},
            {id : 3, name: 'Contact'},
            {id : 4, name: 'Comment'},
            {id : 5, name: 'Status'},
        ]} firstwordh1="Your" secondwordh1='applications' classname='table_dark' namebt1='Delete' namebt2='Check answer' func1={del} func2={response_admin} onChange = {ValueInp}></Table>
    );
};

export default UserListAplications;