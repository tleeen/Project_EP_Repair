import {useDispatch, useSelector} from "react-redux";
import {setValueInp} from "./store";

export function useTable(){

    const dispatch = useDispatch();

    const value = useSelector(state => state.table.valueInp);

    const valueError = useSelector(state => state.table.valueError);
    function checkElem(id){
        dispatch(setValueInp(id))
    }
    return {value, checkElem, valueError}
}