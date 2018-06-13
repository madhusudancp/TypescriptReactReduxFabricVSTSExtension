/// <reference types="vss-web-extension-sdk" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppTodo } from "./components/AppTodo";
import { Provider } from 'react-redux';
import store from './store';
import "./styles/main.scss";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {getAuthorsFromApi} from './actions/authorActions';

export function init(containerId: string) {
    (store.dispatch as ThunkDispatch<any, void, AnyAction>)(getAuthorsFromApi()).then(success=>{
        console.log("PROMISE RESOLVED ");    
        ReactDOM.render((
            <Provider store={store}>
            <div className="hub-view">
                <AppTodo />
            </div>
            </Provider>
        ), document.getElementById(containerId));
    
    });
    
}