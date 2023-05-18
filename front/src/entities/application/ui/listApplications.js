import {Table} from "../../../shared/ui";

export const ListApplications = ({applications, ValueInp, check}) => {

    if (check === "user"){
        return (
            <Table applic={applications} posts = {[
                {id : 1, name: '№'},
                {id : 2, name: 'Topic'},
                {id : 3, name: 'Contact'},
                {id : 4, name: 'Comment'},
                {id : 5, name: 'Status'},
            ]} firstwordh1="Your" secondwordh1='applications' classname='table_dark' onChange = {ValueInp}></Table>
        );
    }
    else {
        return (
            <Table applic={applications} posts = {[
                {id : 1, name: '№'},
                {id : 2, name: 'User id'},
                {id : 3, name: 'Topic'},
                {id : 4, name: 'Contact'},
                {id : 5, name: 'Comment'},
                {id : 6, name: 'Status'},
            ]} firstwordh1="All" secondwordh1='applications' classname='table_dark' onChange = {ValueInp}></Table>
        );
    }
};