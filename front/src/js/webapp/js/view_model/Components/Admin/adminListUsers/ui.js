import {useAdminListUsers} from "./lib";
import Table from "../../Structure/table/ui";
import React from "react";

const AdminListUsers = () => {

    const {valueError, users, del, update, ValueInp} = useAdminListUsers();

    return (
        <Table error = {valueError} applic={users} posts = {[
            {id: 1, name: '№'},
            {id: 2, name: 'ID'},
            {id: 3, name: 'Login'},
            {id: 4, name: 'Role'},
        ]} firstwordh1="All" secondwordh1='users' classname='table_dark' namebt1='Delete' namebt2='Сhange role' func1={del} func2={update} onChange = {ValueInp}></Table>
    );
};

export default AdminListUsers;