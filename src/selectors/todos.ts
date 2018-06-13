import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getTodosState = ((state: State) => state.todos)
const getUsersState = ((state: State) => state.users)

/*
 * Getting todos array from todos State
 */
export const getTodos = createSelector([getTodosState], s => s.todos)

export const getUsersFromState=createSelector([getUsersState], s => s.users)