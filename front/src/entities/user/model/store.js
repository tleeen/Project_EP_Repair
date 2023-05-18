import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users : [],
}

export const tableUsersSlice = createSlice({
    name: "tableUserSlice",
    initialState,
    reducers:{
        setUsers(state, action){
            state.users = action.payload
        },
    }
})

export const {setUsers} = tableUsersSlice.actions;