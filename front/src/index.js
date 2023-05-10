import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./js/webapp/js/view_model/Router/appRouter/ui";
//import {Provider} from "react-redux";
//import {api} from "./js/webapp/js/view_model/Store/api";
import {buildProvider} from './js/webapp/js/view_model/Store/mobx/api';

const Provider = buildProvider();

ReactDOM.render(
    <Provider>
    <React.StrictMode>
        <AppRouter></AppRouter>
    </React.StrictMode>
    </Provider>,

    document.getElementById("root")
);
