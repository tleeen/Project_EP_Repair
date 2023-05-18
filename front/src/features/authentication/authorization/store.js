import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    valueInp: "",
    valueError: "",
    valuePas: "",
}

export const authorizationSlice = createSlice({
    name: "authorizationSlice",
    initialState,
    reducers:{
        setValueInp(state, action){
            state.valueInp = action.payload
        },
        setValueError(state, action){
            state.valueError = action.payload
        },
        setValuePas(state, action){
            state.valuePas = action.payload
        },
    }
})

export const {setValueError, setValuePas, setValueInp} = authorizationSlice.actions;