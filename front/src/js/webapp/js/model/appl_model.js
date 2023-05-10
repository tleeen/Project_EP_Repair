import {requestAddApl, requestAddCommAdmin, requestGetCommAdmin} from '../transport/request.js';

        export class Application{
            constructor() {
                this.application = {
                    id:undefined,
                    poz: 0,
                    topic: undefined,
                    contact: undefined,
                    comment: undefined,
                    status:undefined,
                    admin_comment:undefined,
                };
            }

        get() {
            return this.application;
        }

        set(application) {
            this.application = application;
        }

            async add_aplic(application) {
                return await requestAddApl(application.get());
            }

            async add_comment_admin(application) {
                return await requestAddCommAdmin(application.get());
            }

            async get_comment_admin(id) {
                return await requestGetCommAdmin(id);
            }

        }