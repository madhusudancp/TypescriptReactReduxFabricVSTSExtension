import { combineReducers } from 'redux';
import * as fromTodos from './todos';
import * as fromAuthors from './authorReducers';
/*
 * This is the root state of the app
 * It contains every substate of the app
 */  
export interface State {
  todos: fromTodos.State,
  users: fromAuthors.AuthorState
}

/*
 * initialState of the app
 */
export const initialState: State = {
  todos: fromTodos.initialState,
  users:fromAuthors.AuthorinitialState
}

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers<State>({
  todos: fromTodos.reducer,
  users:fromAuthors.authorReducer
})