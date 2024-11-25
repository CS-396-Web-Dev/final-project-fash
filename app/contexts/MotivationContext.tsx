import {
    createContext,
    ReactNode,
    useContext,
    useState,
    Dispatch,
  } from 'react';

  interface MotivationContextProviderProps {
    children: ReactNode;
  }

  interface Motivation {
    // motivation: int
  }