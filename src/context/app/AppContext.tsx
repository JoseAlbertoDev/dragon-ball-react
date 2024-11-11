import { createContext } from 'react';

export interface Context {
  title: string;
  setTitle: (title: string) => void;
}

export const AppContext = createContext<Context | undefined>(undefined);
