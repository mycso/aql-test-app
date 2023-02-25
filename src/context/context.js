import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvder = (props) => {
  // Checking if user exists, whenever we reload the tab
  return (
    <AppContext.Provider
      // These values can be used whenever and wherver the component lies if AuthContext Provider has the parent consumer within itself
      value={{}}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvder;
