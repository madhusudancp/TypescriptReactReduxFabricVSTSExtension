
import { AuthorAction,AuthorActionTypes } from '../actions/authorActions'
import { IAuthor } from '../models/models';
// Define our State interface for the current reducer

export interface AuthorState {
  users: IAuthor[]
}

// Define our initialState
export const AuthorinitialState: AuthorState = {
  users: [] // We don't have any users at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function authorReducer(state: AuthorState = AuthorinitialState, action: AuthorAction) {
  switch (action.type) {

    case AuthorActionTypes.ADD_AUTHOR: {
      /*
       * We have autocompletion here
       * Typescript knows the action is type of AddTodoAction thanks to the ActionTypes enum
       * todo is type of Todo
       */
      const user = action.payload.user

      return {
        ...state,
        users: [...state.users, user] // Add todo to todos array
      }
    }

    default:
      return state
  }
}