import {
    HANDLE_ERROR,
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_USER,
    GET_REPOS,
    ReducerActions,
} from '../types';

import { GithubContextInterface } from './githubContext';

export default (state: GithubContextInterface, action: ReducerActions) => {
    switch(action.type) {
        case HANDLE_ERROR:
            return {
                ...state,
                message: action.payload,
                loading: false,
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case GET_REPOS: 
            return {
                ...state,
                repos: action.payload,
                loading: false,
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}