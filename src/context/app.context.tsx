import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import appReducer, { initialState } from "./app.reducer";
import { IAppContext } from "./app.interface";

const AppContext = createContext<IAppContext>(initialState);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appReducer, useContext(AppContext));
  const value = { ...state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
