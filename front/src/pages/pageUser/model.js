import {useState} from "react";
import {InformationUser} from "../../entities/user";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../features/authentication";
import {AddApplication} from "../../features/addApplication";
import {UserListApplications} from "../../widgets/userListApplication";

export function usePageUser(){

    const [indicator, setIndicator] = useState('indicator');

    const [page, setPage] = useState(<InformationUser/>)

    const router = useNavigate();

    const dispatch = useDispatch();

    function changePage(index){
        if (index === 1){
            setIndicator('indicator');
            setPage(<InformationUser/>);
        }
        else if (index === 2){
            setIndicator('indicator1');
            setPage(<AddApplication/>);
        }
        else if (index === 3){
            setIndicator('indicator2');
            setPage(<UserListApplications/>);
        }
    }

    function exit() {
        dispatch(setIsAuth(''));
        router('/page_sign_in')
    }

    return {indicator, exit, changePage, page}
}