import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer } from '../reducers'

/*
 * We're giving State interface to create store
 * store is type of State defined in our reducers
 */
const store = createStore(reducer, applyMiddleware(logger))

export default store