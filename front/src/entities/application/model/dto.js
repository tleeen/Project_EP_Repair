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
}