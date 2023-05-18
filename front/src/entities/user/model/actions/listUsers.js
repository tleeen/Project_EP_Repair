import {setUsers} from "../store"
import {tableUser} from "../api";

export function useTable() {

    const table = () => async (dispatch) => {
        let {res} = await tableUser();
        let masUsers = res.map((item, index) => ({
            id: item.id,
            appl: [{name: index + 1}, {name: item.id}, {name: item.login}, {name: item.role}]
        }));
        dispatch(setUsers(masUsers));
    }

    return {table}
}