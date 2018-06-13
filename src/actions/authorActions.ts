import { IAuthor } from './../models/models';
import AuthorsApi from '../api/mockAuthorsApi';
import { AnyAction } from 'redux';
/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */

export enum AuthorActionTypes {
  ADD_AUTHOR = '[todos] ADD_AUTHOR',
  LOAD_USERS = '[todos] LOAD_USERS'
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface AddAuthorAction { type: AuthorActionTypes.ADD_AUTHOR, payload: { user: IAuthor } }
export interface GetAuthorsAction { type: AuthorActionTypes.LOAD_USERS, payload: { users: IAuthor[] } }
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

export function getUsers(users:IAuthor[]): GetAuthorsAction {

  return {
    type: AuthorActionTypes.LOAD_USERS,
    payload: {
      users: users
    }
  }
}

export function getAuthorsFromApi(){
  return function(dispatch){
       return AuthorsApi.getAllAuthors().then((events:IAuthor[])=>{
         dispatch(getUsers(events));
       }).catch(error=>{
          console.log('ERROR'+error);
        });
  } 
}  
/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type AuthorAction = AddAuthorAction | GetAuthorsAction