import {useDispatch, useSelector} from "react-redux";
import {setValueInp} from "../../shared/ui";
import {useTable} from "../../entities/application";
import {useEffect} from "react";
import {updateApplication} from "../../shared/api";

export function useUserListApplication(){

    const dispatch = useDispatch();

    const {table} = useTable("user");

    useEffect(() => {dispatch(table()); updateApplication(() => {dispatch(table())}); return}, []);

    const applications = useSelector(state => state.tableApplications.applications);

    const ValueInp = (valueInp) =>{dispatch(setValueInp(valueInp))}

    return {applications, ValueInp}
}