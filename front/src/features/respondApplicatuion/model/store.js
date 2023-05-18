import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    idAdmin : "",
}

export const idAdminSlice = createSlice({
    name: "idAdminSlice",
    initialState,
    reducers:{
        setIdAdmin(state, action){
            state.idAdmin = action.payload
        },
    }
})

export const {setIdAdmin} = idAdminSlice.actions;