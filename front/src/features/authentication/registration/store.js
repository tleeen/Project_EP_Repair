import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    valueInp: "",
    valueError: "",
    valuePas: "",
    valuePasR: "",
}

export const registrationSlice = createSlice({
    name: "registrationSlice",
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
        setValuePasR(state, action){
            state.valuePasR = action.payload
        },
    }
})

export const {setValueError,setValuePasR, setValuePas, setValueInp} = registrationSlice.actions;