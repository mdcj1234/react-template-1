import { GlobalStyle } from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hooks';
import { Router } from './routes';

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
