import React, { useReducer } from "react";
import axios from "axios";
import GithubContext, { GithubContextInterface } from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  HANDLE_ERROR,
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

const GithubState = (props: any) => {
  const initialState: GithubContextInterface = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  // Handle Error
  const handleError = (error: Error) => {
    const { message } = error;
    console.error(error);
    dispatch({
      type: HANDLE_ERROR,
      payload: message
    });
    // setAlert(message);
    // setLoading(false);
  };

  // Search Github Users
  const setLoading = () => dispatch({ type: SET_LOADING });

  const searchUsers = async (query: string): Promise<void> => {
    try {
      setLoading();
      let response = await axios.get(
        `https://api.github.com/search/users?q=${query}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      if (response) {
        let { items } = response.data;
        dispatch({
          type: SEARCH_USERS,
          payload: items,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  // Get Users
  // The getUsers() method sends an axios request, which is a Promise
  // Since the function doesn't return a value, but rather updates the state
  // The function type would be Promise<void>
  // Adding this type is optional
  // if this was a normal async function(){} the async goes before the function call
  const getUsers = async (): Promise<void> => {
    setLoading();
    try {
      let response = await axios.get(
        `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      if (response) {
        let { data } = response;
        dispatch({
          type: GET_USERS,
          payload: data,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };
  // Get a Single Github User
  const getUser = async (login: string): Promise<void> => {
    setLoading();
    try {
      let response = await axios.get(
        `https://api.github.com/users/${login}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      if (response) {
        let { data } = response;
        dispatch({
          type: GET_USER,
          payload: data,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  // Get Repos
  const getUserRepos = async (login: string): Promise<void> => {
    const [reposPerPage, sortBy, direction]: Array<string> = [
      "5",
      "created",
      "asc",
    ];
    try {
      setLoading();
      let response = await axios.get(
        `https://api.github.com/users/${login}/repos?per_page=${reposPerPage}&sort=${sortBy}:${direction}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
      );
      if (response) {
        let { data } = response;
        dispatch({
          type: GET_REPOS,
          payload: data,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  // Clear Users from State
  const clearUsers = (): void => dispatch({ type: CLEAR_USERS });

  // Set Loading

  const { users, user, repos, loading } = state;
  return (
    <GithubContext.Provider
      value={{
        users,
        user,
        repos,
        loading,
        searchUsers,
        clearUsers,
        getUsers,
        getUser,
        getUserRepos,
      } as GithubContextInterface}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
