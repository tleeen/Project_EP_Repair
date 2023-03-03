function request(data, method, url) {

    if(method === "POST") {
        return new Promise((resolve) => {
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "LOGIN": localStorage.getItem("login"),
                    "TOKEN": localStorage.getItem("token"),
                    "ROLE": localStorage.getItem("role")
                },
                body: JSON.stringify(data)
            })
                .then(async (response) => {
                    if (response.status === 200) {
                        return {
                            status: 200,
                            res: await response.json()
                        }
                    } else if (response.status === 400) {
                        return {
                            status: 404,
                        }
                    }
                    else if (response.status === 404) {
                        return {
                            status: 404,
                        }
                    }
                })
                .then((data) => {
                    resolve(data);
                });
        });
    }

    else if(method === "DELETE") {
        return new Promise((resolve) => {
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "LOGIN": localStorage.getItem("login"),
                    "TOKEN": localStorage.getItem("token"),
                    "ROLE": localStorage.getItem("role"),
                    "ARR": data
                }
            })
                .then(async (response) => {
                    if (response.status === 404) {
                        return {
                            status: 404,
                        }
                    } else if (response.status === 200) {
                        return {
                            status: 200,
                        }
                    }
                })
                .then((data) => {
                    resolve(data);
                });
        });
    }

    else if(method === "GET") {
        return new Promise((resolve) => {
            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    "LOGIN": localStorage.getItem("login"),
                    "TOKEN": localStorage.getItem("token"),
                    "ROLE": localStorage.getItem("role"),
                    "ID": data
                }
            })
                .then(async (response) => {
                    if (response.status === 404) {
                        return {
                            status: 404,
                        }
                    } else if (response.status === 200) {
                        return {
                            status: 200,
                            res: await response.json()
                        }
                    }
                })
                .then((data) => {
                    resolve(data);
                });
        });
    }
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