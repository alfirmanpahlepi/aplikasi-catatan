import { createContext, useContext, useState } from "react";
import { getInitialData } from "../utils";

const Context = createContext();

export const Provider = ({ children }) => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);

  const state = { notes };
  const dispatch = { setNotes };
  
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default function useGlobalState() {
  return useContext(Context);
}
