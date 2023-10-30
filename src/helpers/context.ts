import {createContext} from 'react';

export interface AuthContextType {
  token: string | null; // Define the shape of your context
  setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
