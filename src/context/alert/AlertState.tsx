import React, { useReducer } from "react";
import AlertContext, { AlertContextInterface } from "./alertContext";
import AlertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props: any) => {

  const initialState = {
    message: "",
    type: "",
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set Alert
  const showAlert = (message: string, type: string): void => {
    // setAlert({message, type})
    dispatch({
      type: SET_ALERT,
      payload: { message, type },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  const { message, type } = state;
  return (
    <AlertContext.Provider
      value={
        {
          message,
          type,
          showAlert,
        } as AlertContextInterface
      }>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
