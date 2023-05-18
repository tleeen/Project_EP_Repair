import {useDispatch, useSelector} from "react-redux";
import {setValueInp} from "../../shared/ui";
import {useTable} from "../../entities/user";
import {useEffect} from "react";
import {updateUser} from "../../shared/api";

export function useAdminLIstUsers(){
    const dispatch = useDispatch();

    const {table} = useTable();

    useEffect(() => {dispatch(table()); updateUser(() => {dispatch(table())}); return}, []);

    const users = useSelector(state => state.tableUsers.users);
    const ValueInp = (valueInp) =>{dispatch(setValueInp(valueInp))}

    return {users, ValueInp}
}