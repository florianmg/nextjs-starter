import IUser from './user.types';

export interface IUseAuthProps {
  secure?: boolean;
  onCheckAuthStateSuccess?: () => void;
}

export interface IRequest {
  success: boolean;
}

export interface IUseAuth {
  user: IUser | undefined;
  googleAuthenticate: () => void;
  emailRegister: ({ email, password }: IEmailLogInfos) => void;
  emailLogin: ({ email, password }: IEmailLogInfos) => void;
  logout: () => void;
  currentError: string;
  sendNewPasswordRequest: (email: string) => Promise<IRequest>;
}

export interface IEmailLogInfos {
  email: string;
  password: string;
}
