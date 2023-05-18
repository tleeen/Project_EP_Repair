import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setValueError} from "../../../shared/ui";
import {setIdAdmin} from "./store";

export function useOpenRespondApplication() {
    const dispatch = useDispatch();
    const router = useNavigate();

    let valueInp = useSelector(state => state.table.valueInp);

    function response_admin() {
        if (valueInp.length === 1) {
            router('/page_res_adm');
            dispatch(setIdAdmin(valueInp[0]));
        } else {
            dispatch(setValueError("Select one application"));
        }
    }
    return {response_admin}
}