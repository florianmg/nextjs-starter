import { createContext } from 'react';
import { IUserContext } from '../types/user.types';

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => null,
});
