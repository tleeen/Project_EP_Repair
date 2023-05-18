import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {tableSlice} from "../../shared/ui";
import {tableUsersSlice} from "../../entities/user";
import {tableApplicationsSlice} from "../../entities/application";
import {registrationSlice} from "../../features/authentication/registration";
import {authorizationSlice} from "../../features/authentication/authorization";
import {isAuthSlice} from "../../features/authentication";
import {idUserSlice} from "../../features/checkAnswer";
import {idAdminSlice} from "../../features/respondApplicatuion";

const rootReducer = combineReducers({
    table: tableSlice.reducer,
    tableUsers: tableUsersSlice.reducer,
    tableApplications: tableApplicationsSlice.reducer,
    registration: registrationSlice.reducer,
    authorization: authorizationSlice.reducer,
    isAuth: isAuthSlice.reducer,
    idUser: idUserSlice.reducer,
    idAdmin: idAdminSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer
})