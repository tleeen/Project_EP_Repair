import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setValueError, setValueInp} from "../../shared/ui";
import {setIsAuth} from "../authentication";
import {deletUser, useTable} from "../../entities/user";

export function useDeleteUser() {

    const dispatch = useDispatch();
    const router = useNavigate();

    let valueInp = useSelector(state => state.table.valueInp);

    const {table} = useTable();

    async function deleteUsers() {
        if (valueInp.length === 0) {
            dispatch(setValueError("Nothing selected"));
        } else {
            const id = valueInp.join(" ");
            const dat = await deletUser(id);
            if (dat.status === 404) {
                dispatch(setIsAuth(''));
                router('/page_sign_in');
            }
            dispatch(setValueInp("clear"));
            dispatch(table());
            dispatch(setValueError(""));
        }
    }
    return {deleteUsers}
}