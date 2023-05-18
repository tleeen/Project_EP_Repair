import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: "",
}

export const isAuthSlice = createSlice({
    name: "isAuthSlice",
    initialState,
    reducers:{
        setIsAuth(state, action){
            state.isAuth = action.payload
        },
    }
})

export const {setIsAuth} = isAuthSlice.actions;