import React, { createContext, useContext } from 'react';

// Crear un Context
const GlobalStateContext = createContext();

// Crear un Provider
export const GlobalStateProvider = ({ children }) => {
  let globalVariable = 'Soy una variable global';

  return (
    <GlobalStateContext.Provider value={globalVariable}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Crear un Hook personalizado para usar el Context
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
