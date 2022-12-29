import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

// initialising vairable which will be used everywhere
const INITIAL_STATE = {
  darkMode: false,
};

// creating dark mode context
export const DarkModeContext = createContext(INITIAL_STATE);

// to reach the data everywhere we must have the contextProvider
// bcz we are going to wrap our application(index.js) with this provider so this children will basically our application
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
