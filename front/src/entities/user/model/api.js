import {
    requestAuth,
    requestcheckRole,
    requestDelUser,
    requestReg,
    requestRole,
    requestTableUser
} from "../../../shared/api";

export async function auth(user) {
    return await requestAuth(user.get());
}

export async function reg(user) {
    return await requestReg(user.get());
}

export async function updateRole(user) {
    return await requestRole(user.get());
}

export async function checkRole(user) {
    return await requestcheckRole(user.get());
}

export async function tableUser() {
    return await requestTableUser()
}


export async function deletUser(arrr) {
    return await requestDelUser(arrr);
}