import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    idUser : "",
}

export const idUserSlice = createSlice({
    name: "idUserSlice",
    initialState,
    reducers:{
        setIdUser(state, action){
            state.idUser = action.payload
        },
    }
})

export const {setIdUser} = idUserSlice.actions;