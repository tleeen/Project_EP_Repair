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
}