import React, { createContext, useContext } from 'react';

// Crear un Context
const AlarmDroneActive = createContext();

// Crear un Provider
export const AlarmStateProvider = ({ children }) => {
  let droneDIC = '';

  return (
    <AlarmDroneActive.Provider value={droneDIC}>
      {children}
    </AlarmDroneActive.Provider>
  );
};

// Crear un Hook personalizado para usar el Context
export const useAlarmState = () => {
  return useContext(AlarmDroneActive);
};
