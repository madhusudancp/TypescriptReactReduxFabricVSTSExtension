import { IAuthor } from './../models/models';

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum AuthorActionTypes {
  ADD_AUTHOR = '[users] ADD_AUTHOR'
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface AddAuthorAction { type: AuthorActionTypes.ADD_AUTHOR, payload: { user: IAuthor } }

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addUser(user: IAuthor): AddAuthorAction {

  return {
    type: AuthorActionTypes.ADD_AUTHOR,
    payload: {
      user: user
    }
  }
}


/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type AuthorAction = AddAuthorAction