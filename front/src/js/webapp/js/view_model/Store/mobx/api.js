import {useState,useEffect} from 'react';

import { observable,action,autorun } from 'mobx';

const store = observable({
    isAuth : "",
    isIdUser : null,
    isIdAdmin : null,

    changeIsAuth: action( function change(value) {
        this.isAuth = value;
    }),
    changeIsIdUser: action( function change(value) {
        this.isIdUser = value;
    }),
    changeIsIdAdmin: action( function change(value) {
        this.isIdAdmin = value;
    }),
});

function buildProvider() {
    return (props)=> {
        return (
            <>
                {props.children}
            </>
        );
    };
}

function useListener(item) {
    const [_item,update] = useState(undefined);

    useEffect(() => {
        function handle(result) {
            update(result);
        }
        return autorun(() => {
            if (item === "isAuth") {
                handle(store.isAuth);
            } else if (item === "isIdUser") {
                handle(store.isIdUser);
            } else if (item === "isIdAdmin") {
                handle(store.isIdAdmin);
            }
        });
    },[]);

    return _item;
}

function useDispatcher(item ,value) {
    return () => {
        if (item === "isAuth"){
            store.changeIsAuth(value);
        }
        else if (item === "isIdUser"){
            store.changeIsIdUser(value);
        }
        else if (item === "isIdAdmin"){
            store.changeIsIdAdmin(value);
        }
    };
}

export {buildProvider, useListener, useDispatcher}