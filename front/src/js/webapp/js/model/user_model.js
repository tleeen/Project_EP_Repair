import {requestAuth, requestReg, requestRole} from "../transport/request.js";

        export class User {
            constructor() {
                this.user = {
                    id:undefined,
                    login: undefined,
                    pass: undefined,
                    role:undefined,
                    hash: 0
                };
            }
            get() {
                return this.user;
            }

            set(user) {
                this.user = user;
            }

            async autoris(user) {
                return await requestAuth(user.get());
            }

            async registr(user) {
                return await requestReg(user.get());
            }

            async updateRole(user) {
                return await requestRole(user.get());
            }
        }
