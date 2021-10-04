import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GuardRoute from 'shared/routes/GuardRoute';
import Page404 from 'pages/Page404';
import ToastProvider from 'store/contexts/ToastProvider';
import ModalProvider from 'store/contexts/ModalProvider';
import loadable from 'shared/utils/loadable';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ModalProvider>
          <Switch>
            <Route
              path="/"
              exact
              component={loadable(import('./pages/landing/LandingPage'))}
            />
            <GuardRoute
              path="/login"
              exact
              component={loadable(import('./pages/auth/login/Login'))}
            />
            <GuardRoute
              path="/register"
              exact
              component={loadable(import('./pages/auth/register/Register'))}
            />
            <Route
              path="/market-place"
              exact
              component={loadable(import('./pages/market-place/index'))}
            />
            <Route
              path="/market-place/:id"
              exact
              component={loadable(
                import('./pages/market-place/components/ViewProduct')
              )}
            />
            <GuardRoute
              isPrivate
              path="/my-profile"
              exact
              component={loadable(import('./pages/user/index'))}
            />
            <GuardRoute
              isPrivate
              path="/my-profile/edit"
              exact
              component={loadable(import('./pages/user/profile/EditUser'))}
            />
            <GuardRoute
              isPrivate
              path="/products"
              exact
              component={loadable(import('./pages/user/product/index'))}
            />
            <GuardRoute
              isPrivate
              path="/products/post"
              exact
              component={loadable(
                import('./pages/user/product/post-product/PostProduct')
              )}
            />
            <GuardRoute
              isPrivate
              path="/products/:id"
              exact
              component={loadable(
                import('./pages/user/product/view-product/ViewProduct')
              )}
            />
            <GuardRoute
              isPrivate
              path="/products/:id/edit"
              exact
              component={loadable(
                import('./pages/user/product/view-product/EditProduct')
              )}
            />
            <Route path="*" exact component={Page404} />
          </Switch>
        </ModalProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
