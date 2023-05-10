import {
    requestDelApp,
    requestDelUser,
    requestTableAppAdmin, requestTableAppUser,
    requestTableUser
} from "../transport/request.js";

        export class Del{
            constructor() {
                this.del = {
                    arr: []
                };
            }
            get() {
                return this.del;
            }

            set(del) {
                this.del = del;
            }
            async tabl_user(del) {
                return await requestTableUser(del)
            }

            async dele_user(arrr) {
                return await requestDelUser(arrr);
            }

            async tabl_app_admin(del) {
                return await requestTableAppAdmin(del)
            }

            async tabl_app_user(del) {
                return await requestTableAppUser(del)
            }

            async dele_app(arrr) {
                return await requestDelApp(arrr);
            }
        }