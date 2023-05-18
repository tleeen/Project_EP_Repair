import {InformationAdmin} from "../../entities/user";
import {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../features/authentication";
import {AdminListUsers} from "../../widgets/adminListUsers";
import {AdminListApplications} from "../../widgets/adminListApplication";

export function usePageAdmin(){

    const [indicator, setIndicator] = useState('indicator');

    const [page, setPage] = useState(<InformationAdmin/>);

    const router = useNavigate();

    const dispatch = useDispatch()

    function changePage(index){
        if (index === 1){
            setIndicator('indicator');
            setPage(<InformationAdmin/>);
        }
        else if (index === 2){
            setIndicator('indicator1');
            setPage(<AdminListUsers/>);
        }
        else if (index === 3){
            setIndicator('indicator2');
            setPage(<AdminListApplications/>);
        }
    }

    function exit() {
        dispatch(setIsAuth(''));
        router('/page_sign_in')
    }

    return {indicator, exit, changePage, page}
}