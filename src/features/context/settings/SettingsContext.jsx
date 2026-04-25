import { createContext, useEffect, useReducer } from "react";
import { settingsReducer } from "./settingsReducer";
import initialState from "./settingsReducer";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(state));
  }, [state]);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};
