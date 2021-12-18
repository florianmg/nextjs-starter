import IUser from './user.types';

export interface IUseAuthProps {
  secure?: boolean;
  onCheckAuthStateSuccess?: () => void;
}

export interface IUseAuth {
  user: IUser | undefined;
  googleAuthenticate: () => void;
  emailRegister: ({ email, password }: IEmailLogInfos) => void;
  emailLogin: ({ email, password }: IEmailLogInfos) => void;
  logout: () => void;
  currentError: string;
  sendNewPasswordRequest: (email: string) => void;
}

export interface IEmailLogInfos {
  email: string;
  password: string;
}
