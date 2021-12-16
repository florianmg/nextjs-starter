import { Dispatch, SetStateAction } from 'react';

export default interface IUser {
  uid: string;
  email: string | null;
}

export interface IUserContext {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}
