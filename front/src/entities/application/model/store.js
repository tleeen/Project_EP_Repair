import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    applications : [],
}

export const tableApplicationsSlice = createSlice({
    name: "tableApplicationsSlice",
    initialState,
    reducers:{
        setApplications(state, action){
            state.applications = action.payload
        },
    }
})

export const {setApplications} = tableApplicationsSlice.actions;