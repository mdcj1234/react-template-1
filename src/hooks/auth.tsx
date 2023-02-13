import {
  useContext,
  useState,
  createContext,
  useCallback,
  FC,
  PropsWithChildren,
  useEffect,
} from 'react';
import { signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthState {
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextInterface {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const user = localStorage.getItem('@bigenerator:user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const { user } = userCredential;

    localStorage.setItem('@bigenerator:user', JSON.stringify(user));

    setAuthState({ user });
  }, []);

  const signOut = useCallback(async () => {
    await auth.signOut();

    localStorage.removeItem('@bigenerator:user');

    setAuthState({} as AuthState);
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('@bigenerator:user', JSON.stringify(user));
        setAuthState({ user });
      } else {
        setAuthState({} as AuthState);
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextInterface {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
