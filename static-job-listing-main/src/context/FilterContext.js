import { createContext, useReducer } from "react";
import { FilterReducer } from "../reducers/FilterReducer";
//empty value for IDE

export const FilterContext = createContext({
  filters: [],
  dispatch: () => {},
});

const ContextProvider = ({ children }) => {
  const [filters, dispatch] = useReducer(FilterReducer, []);

  return (
    <FilterContext.Provider value={{ filters, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export default ContextProvider;
