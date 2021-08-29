import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GuardRoute from 'shared/routes/GuardRoute';
import LandingPage from 'pages/landing/LandingPage';
import Login from 'pages/auth/login/Login';
import Page404 from 'pages/Page404';
import Register from 'pages/auth/register/Register';
import Test from './Test';
import ToastProvider from 'store/context/ToastProvider';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <GuardRoute path="/login" exact component={Login} />
          <GuardRoute path="/register" exact component={Register} />
          <Route path="/test" exact component={Test} />
          <Route path="*" exact component={Page404} />
        </Switch>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
