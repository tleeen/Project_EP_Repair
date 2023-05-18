import {Table} from "../../../shared/ui";

export const ListUsers = ({users, ValueInp}) => {

    return (
        <Table applic={users} posts = {[
            {id: 1, name: '№'},
            {id: 2, name: 'ID'},
            {id: 3, name: 'Login'},
            {id: 4, name: 'Role'},
        ]} firstwordh1="All" secondwordh1='users' classname='table_dark' onChange = {ValueInp}></Table>
    );
};