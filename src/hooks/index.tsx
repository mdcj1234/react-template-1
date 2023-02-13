import { FC, PropsWithChildren } from 'react';

import { AuthProvider } from './auth';

const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
