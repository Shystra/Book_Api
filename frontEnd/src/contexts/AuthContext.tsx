import {createContext} from 'react';





// interface IAuthProvider {
//     children: ReactNode;
//   }
interface IAuthContextData {
    // signIn: ({ email, password }: ISignIn) => void;
    // signOut: () => void;
    // user: IUserData;
    // availableSchedules: Array<string>;
    // schedules: Array<ISchedule>;
    // date: string;
    // handleSetDate: (date: string) => void;
    isAuthenticated: boolean;
  }

export const AuthContext = createContext({} as IAuthContextData);