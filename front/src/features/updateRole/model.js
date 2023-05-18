import {useSelector} from "react-redux";
import {updateRole, User, useTable} from "../../entities/user";
import {useNavigate} from "react-router";
import {setValueError, setValueInp} from "../../shared/ui";
import {setIsAuth} from "../authentication";

export function useUpdateRole() {

    const router = useNavigate();

    let valueInp = useSelector(state => state.table.valueInp);

    const {table} = useTable();

    const update = () => async (dispatch) => {
        if (valueInp.length === 1) {
            let user = new User();
            user.set({
                id: valueInp[0],
            });

            let dat = await updateRole(user);
            if (dat.status === 404) {
                dispatch(setIsAuth(''));
                router('/page_sign_in');
            }
            dispatch(setValueError(""));
            dispatch(table());
            dispatch(setValueInp("clear"))
        } else {
            dispatch(setValueError("Select one user"));
        }
    }
    return {update}
}