/// <reference types="vss-web-extension-sdk" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppTodo } from "./components/AppTodo";
import { Provider } from 'react-redux'
import store from './store'
import "./styles/main.scss";

export function init(containerId: string) {
    ReactDOM.render((
        <Provider store={store}>
        <div className="hub-view">
            <AppTodo />
        </div>
        </Provider>
    ), document.getElementById(containerId));
}