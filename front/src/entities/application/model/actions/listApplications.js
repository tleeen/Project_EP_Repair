import {tableApplicationAdmin, tableApplicationUser} from "../api";
import {setApplications} from "../store";


export function useTable(check) {

    const table = () => async (dispatch) => {
        if (check === "admin") {

            const {res} = await tableApplicationAdmin()
            let n = 0;
            const masApplic = [];

            for (let i = 0; i < res.length; i++) {
                n++;
                const app = res[i];
                masApplic.push({
                    id: app.id,
                    appl: [
                        {name: n},
                        {name: app.id_user},
                        {name: app.topic},
                        {name: app.contact},
                        {name: app.comment},
                        {name: app.status}
                    ]
                });
            }
            dispatch(setApplications(masApplic));
        } else {
            let dat = await tableApplicationUser();
            let res = dat.res;
            let n = 0;
            let masApplic = [];

            for (let i = 0; i < res.length; i++) {
                n = n + 1;
                masApplic.push({
                    id: res[i].id,
                    appl: [{name: n}, {name: res[i].topic}, {name: res[i].contact}, {name: res[i].comment}, {name: res[i].status}]
                })
            }
            dispatch(setApplications(masApplic));
        }
    }
    return {table}
}