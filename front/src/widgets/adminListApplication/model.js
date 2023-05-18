import {useDispatch, useSelector} from "react-redux";
import {setValueInp} from "../../shared/ui";
import {updateApplication} from "../../shared/api";
import {useEffect} from "react";
import {useTable} from "../../entities/application";

export function useAdminListApplication(){
    const dispatch = useDispatch();

    const {table} = useTable("admin");

    useEffect(() => {dispatch(table()); updateApplication(() => {dispatch(table())}); return}, []);

    const applications = useSelector(state => state.tableApplications.applications);
    const ValueInp = (valueInp) =>{dispatch(setValueInp(valueInp))}

    return {applications, ValueInp}
}