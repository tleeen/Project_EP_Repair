import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setValueError, setValueInp} from "../../../shared/ui";
import {setIdUser} from "./store";
import {useEffect} from "react";

export function useOpenCheckWindow() {
    useEffect(() => {dispatch(setValueInp("clear"))}, [])

    const dispatch = useDispatch();
    const router = useNavigate();

    let valueInp = useSelector(state => state.table.valueInp);

    function response_admin() {
        if (valueInp.length === 1) {
            router('/page_res_user');
            dispatch(setIdUser(valueInp[0]));
        } else {
            dispatch(setValueError("Select one application"));
        }
    }
    return {response_admin}
}