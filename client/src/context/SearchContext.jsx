// import { createContext, useReducer } from "react";

// const INITIAL_STATE = {
//   city: undefined,
//   dates: [],
//   options: {
//     adult: undefined,
//     children: undefined,
//     room: undefined,
//   },
// };

// export const SearchContext = createContext(INITIAL_STATE);

// const SearchReducer = (state, action) => {
//   switch (action.type) {
//     case "NEW_SEARCH":
//       return action.payload;
//     case "RESET_SEARCH":
//       return INITIAL_STATE;
//     default:
//       return state;
//   }
// };

// export const SearchContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

//   return (
//     <SearchContext.Provider
//       value={{
//         city: state.city,
//         dates: state.dates,
//         options: state.options,
//         dispatch,
//       }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// };


import { createContext, useReducer } from "react";

// Load from localStorage if available
const savedSearch = JSON.parse(localStorage.getItem("search"));

const INITIAL_STATE = savedSearch || {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  let newState;

  switch (action.type) {
    case "NEW_SEARCH":
      newState = action.payload;
      break;
    case "RESET_SEARCH":
      localStorage.removeItem("search");
      newState = {
        city: undefined,
        dates: [],
        options: {
          adult: undefined,
          children: undefined,
          room: undefined,
        },
      };
      break;
    default:
      newState = state;
  }

  // Save the updated state to localStorage
  localStorage.setItem("search", JSON.stringify(newState));
  return newState;
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};





