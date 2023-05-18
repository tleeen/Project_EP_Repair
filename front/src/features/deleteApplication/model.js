import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setValueError, setValueInp} from "../../shared/ui";
import {setIsAuth} from "../authentication";
import {deletApplication} from "../../entities/application";
import {useTable} from "../../entities/application";

export function useDeleteApplication() {

    const dispatch = useDispatch();
    const router = useNavigate();

    let valueInp = useSelector(state => state.table.valueInp);
    let isAuth = useSelector(state => state.isAuth.isAuth);

    const {table} = useTable(isAuth);

    async function deleteApplications() {
        if (valueInp.length === 0) {
            dispatch(setValueError("Nothing selected"));
        } else {
            const id = valueInp.join(" ");
            const dat = await deletApplication(id);
            console.log(dat);
            if (dat.status === 404) {
                dispatch(setIsAuth(''));
                router('/page_sign_in');
            }
            dispatch(setValueInp("clear"));
            dispatch(table());
            dispatch(setValueError(""));
        }
    }
    return {deleteApplications}
}