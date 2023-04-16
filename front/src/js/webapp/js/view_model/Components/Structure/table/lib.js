import {useState} from "react";

export function useTable(){
    const [value, setValue] = useState([])

    function checkElem(id){
        setValue((prevState) => {
            if (prevState.includes(id)) {
                return prevState.filter((f) => f !== id)
            } else {
                return  [...prevState, id];
            }
        });
    }
    return {value, checkElem}
}