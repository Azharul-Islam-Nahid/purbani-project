import axios from "axios";
import { useEffect, useReducer, createContext } from "react";

// Initial State
const initialState = { userData: null };

// Create Context
const authContext = createContext();

// Root Reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, userData: action.payload };
    case "LOGOUT":
      return { ...state, userData: null };
    default:
      return state;
  }
};

// console.log("initial State", initialState.user);
// Context AuthProvider

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   dispatch({
  //     type: "LOGIN",
  //     payload: { token, user },
  //   });
  // }, []);

  return (
    <authContext.Provider value={{ state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
