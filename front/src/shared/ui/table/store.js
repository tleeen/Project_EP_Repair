import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    valueInp : [],
    valueError: "",
}

export const tableSlice = createSlice({
    name: "tableSlice",
    initialState,
    reducers:{
        setValueInp(state, action){
            if (state.valueInp.includes(action.payload)) {
                state.valueInp = state.valueInp.filter((f) => f !== action.payload)
            } else {
                state.valueInp = [...state.valueInp, action.payload];
            }
            if (action.payload === "clear"){
                state.valueInp = [];
            }

        },
        setValueError(state, action){
            state.valueError = action.payload
        },
    }
})

export const {setValueError, setValueInp} = tableSlice.actions;