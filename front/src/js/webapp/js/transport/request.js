async function request(data, method, url) {
    const headers = getHeaders();

    const fetchOption = {
        method: method,
        headers: headers,
    };

    if (method === "POST") {
        fetchOption.body = JSON.stringify(data);
    }

    if (method === "DELETE") {
        headers["ARR"] = data;
    }

    if (method === "GET") {
        headers["ID"] = data;
    }

    return await fetchRequest(url, fetchOption);
}

function getHeaders() {
    return {
        "Content-Type": "application/json;charset=utf-8",
        LOGIN: sessionStorage.getItem("login"),
        TOKEN: sessionStorage.getItem("token"),
        ROLE: sessionStorage.getItem("role"),
    };
}

async function fetchRequest(url, fetchOption) {
    const response = await fetch(url, fetchOption);
    if (response.status === 200) {
        return {
            status: 200,
            res: await response.json(),
        };
    } else {
        return {
            status: response.status,
        };
    }
}

const WEBSOCKET_URL = 'ws://localhost:8080/WEB_EP-1.0-SNAPSHOT';

export async function WebSocet(funcWS, url, ic){
    const wsID = sessionStorage.getItem('token');
    const role = sessionStorage.getItem('role');
    const isAdmin = role === 'admin';
    const ws = new WebSocket(`${WEBSOCKET_URL}${url}`);
    ws.onopen = () => {
        ws.send(wsID);
    };
    ws.onmessage = event => {
        if (url === '/massage' && isAdmin) {
            funcWS(event.data);
        } else {
            if (event.data === "ws"){
                funcWS();
                console.log(2222);
            }
            if (event.data === "ic"){
                alert(ic);
                console.log(1111);
            }
        }
    };
}

export async function requestAddApl(apl) {
    return await request(apl, "POST", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications");
}

export async function requestTableUser(del) {
    return await request(del, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users/admin");
}

export async function requestDelUser(arrr) {
    return await request(arrr, "DELETE", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/users/admin/user");
}

export async function requestTableAppAdmin(del) {
    return await request(del, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/user/admin");
}

export async function requestTableAppUser(del) {
    return await request(del, "GET", "http://localhost:8080/WEB_EP-1.0-SNAPSHOT/api/applications/user");
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