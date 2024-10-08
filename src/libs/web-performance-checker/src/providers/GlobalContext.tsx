import React, { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import { globalReducer, defaultState } from './reducer';
import { GlobalState, GlobalAction } from '../types';
/**
 * GlobalContext
 * 
 * This context provides global state and a dispatch method throughout the app.
 * It holds authentication, user role, and package type data.
 */
export const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<GlobalAction> } | null>(null);
/**
 * GlobalProvider
 * 
 * A provider component that wraps the entire app or parts of the app where 
 * global state (authentication, user role, and package type) needs to be accessed.
 * It initializes the state using a reducer and provides the state and dispatch method via context.
 * 
 * @param {ReactNode} children - The component's children that will have access to the global state.
 * @param {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @param {'basic' | 'premium'} packageType - The type of package the user has (e.g., basic or premium).
 * @param {'user' | 'admin'} role - The role of the user (e.g., user or admin).
 */
export const GlobalProvider = ({ children, isAuthenticated, packageType, role }: { children: ReactNode, isAuthenticated: boolean, packageType: 'basic' | 'premium', role: 'user' | 'admin' }) => {
  // Using useReducer hook to manage global state with a reducer function.
  // Initializing the state with the provided authentication, packageType, and role values.

  const [state, dispatch] = useReducer(globalReducer, { ...defaultState, isAuthenticated, packageType, role });
      
  // useEffect hook triggers whenever isAuthenticated, packageType, or role changes.
  useEffect(() => {
    if (!isAuthenticated) return;
  }, [packageType, role, isAuthenticated]);

  // useMemo hook optimizes the context value by memoizing the state and dispatch
  // so that a new value is only created when either the state or dispatch changes.
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};
/**
 * useGlobalState
 * 
 * A custom hook to provide easy access to the global state and dispatch method.
 * It retrieves the context value and throws an error if it is used outside of a GlobalProvider.
 * 
 * @returns {object} The global state and dispatch method.
 */
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};