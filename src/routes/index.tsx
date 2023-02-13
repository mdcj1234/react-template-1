import { Routes, Route } from 'react-router-dom';
import { AuthLayout } from '../layouts/AuthLayout';
import { DefaultLayout } from '../layouts/DefaultLayout';

import SignIn from '../pages/SignIn';
import Home from '../pages/DashBoard';

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route element={<DefaultLayout />}>
        <Route path='/login' element={<SignIn />} />
      </Route>
    </Routes>
  );
}
