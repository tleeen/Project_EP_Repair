import Table from "../../Structure/table/ui";
import {useAdminListApplications} from "./lib";

const AdminListApplications = () => {

    const {valueError, applic, del, response_admin, ValueInp} = useAdminListApplications()

    return (
        <Table error = {valueError} applic={applic} posts = {[
            {id : 1, name: '№'},
            {id : 2, name: 'User id'},
            {id : 3, name: 'Topic'},
            {id : 4, name: 'Contact'},
            {id : 5, name: 'Comment'},
            {id : 6, name: 'Status'},
        ]} firstwordh1="All" secondwordh1='applications' classname='table_dark' namebt1='Delete' namebt2='Answer' func1={del} func2={response_admin} onChange = {ValueInp}></Table>
    );
};

export default AdminListApplications;