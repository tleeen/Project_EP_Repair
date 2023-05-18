function getHeaders() {
    return {
        "Content-Type": "application/json;charset=utf-8",
        LOGIN: sessionStorage.getItem("login"),
        TOKEN: sessionStorage.getItem("token"),
        ROLE: sessionStorage.getItem("role"),
    };
}

export async function request(data, method, url) {
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

async function fetchRequest(url, fetchOption) {
    const response = await fetch(url, fetchOption);
    if (response.status === 200) {
        let resp = undefined
        try
        {
            resp = await response.json();
        }
        catch (e){}

        return {
            status: 200,
            res: resp,
        };

    } else {
        return {
            status: response.status,
        };
    }
}

const WEBSOCKET_URL = 'ws://localhost:8080/WEB_EP-1.0-SNAPSHOT';

export function WebSoc(funcWS, url){
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
            }
        }
    };
}