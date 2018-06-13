import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { createStore, applyMiddleware ,AnyAction } from 'redux'
import { State, reducer } from '../reducers'

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const store = createStore(reducer, applyMiddleware(logger,thunk));

export default store