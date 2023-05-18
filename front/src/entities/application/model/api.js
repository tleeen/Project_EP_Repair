import {
    requestAddApl,
    requestAddCommAdmin, requestDelApp,
    requestGetCommAdmin,
    requestTableAppAdmin,
    requestTableAppUser
} from "../../../shared/api";

export async function addApplication(application) {
    return await requestAddApl(application.get());
}

export async function addCommitAdmin(application) {
    return await requestAddCommAdmin(application.get());
}

export async function getCommitAdmin(id) {
    return await requestGetCommAdmin(id);
}

export async function tableApplicationAdmin() {
    return await requestTableAppAdmin()
}

export async function tableApplicationUser() {
    return await requestTableAppUser()
}

export async function deletApplication(arrr) {
    return await requestDelApp(arrr);
}