import { createContext, useEffect, useReducer } from "react";

let storedUser = null;

try {
  const userFromStorage = localStorage.getItem("user");
  storedUser = userFromStorage ? JSON.parse(userFromStorage) : null;
} catch (err) {
  console.error("Invalid user data in localStorage:", err);
  localStorage.removeItem("user"); // optional: clear bad data
  storedUser = null;
}

const INITIAL_STATE = {
  user: storedUser,
  loading: false,
  error: null,
};


export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  console.log("User saved to localStorage:", state.user);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};