export const HANDLE_ERROR: string = 'HANDLE_ERROR';
export const SEARCH_USERS: string = 'SEARCH_USERS';
export const GET_USERS: string = 'GET_USERS';
export const GET_USER: string = 'GET_USER';
export const CLEAR_USERS: string = 'CLEAR_USERS';
export const GET_REPOS: string = 'GET_REPOS';
export const SET_LOADING: string = 'SET_ALERT';
export const SET_ALERT: string = 'SET_ALERT';
export const REMOVE_ALERT: string = 'REMOVE_ALERT';

export type ReducerActions = {
    type: string,
    payload?: any
}
