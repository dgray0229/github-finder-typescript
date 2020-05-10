export enum AppReducerValues {
    HANDLE_ERROR,
    SEARCH_USERS,
    GET_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT,
}

type AppReducerTypes = keyof typeof AppReducerValues;

export const HANDLE_ERROR = 'HANDLE_ERROR';
export const SEARCH_USERS = 'SEARCH_USERS';
export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const CLEAR_USERS = 'CLEAR_USERS';
export const GET_REPOS = 'GET_REPOS';
export const SET_LOADING = 'SET_ALERT';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export type AppReducerActions = {
    type: AppReducerTypes,
    payload?: any
}
