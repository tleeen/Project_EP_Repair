import {request, WebSoc} from "./baseFetch";


export function updateUser(func){
    return WebSoc(func, '/userasync');
}
export function updateApplication(func){
    return WebSoc(func, '/applicasync');
}
export function endWorking(func){
    return WebSoc(func, '/massage');
}
export async function requestAddApl(apl) {
    return await request(apl, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications");
}

export async function requestTableUser() {
    return await request(undefined, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users/admin");
}

export async function requestDelUser(arrr) {
    return await request(arrr, "DELETE", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users/admin/user");
}

export async function requestTableAppAdmin() {
    return await request(undefined, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/user/admin");
}

export async function requestTableAppUser() {
    return await request(undefined, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/user");
}

export async function requestDelApp(arrr) {
    return await request(arrr, "DELETE", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/user/application");
}

export async function requestAuth(user) {
    return await request(user, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users/user");
}

export async function requestReg(user) {
    return await request(user, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users");
}

export async function requestRole(user) {
    return await request(user, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users/user/role");
}

export async function requestAddCommAdmin(apl) {
    return await request(apl, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/application/comm");
}

export async function requestGetCommAdmin(id) {
    return await request(id, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/application/comm/user");
}

export async function requestcheckRole(user){
    return await request(user, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/user/role");
}