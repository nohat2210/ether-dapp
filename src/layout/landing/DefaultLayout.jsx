import React from 'react';
import { Logo } from 'shared/components/common';
import useRoutes from 'shared/hooks/useRoutes';
import MenuContent from './MenuContent';
import PropTypes from 'prop-types';
import CurrentUser from './CurrentUser';

function DefaultLayout({ children }) {
  const { history } = useRoutes();
  return (
    <main>
      <div className="header">
        <div className="nav flex center-between">
          <div
            onClick={() => {
              history.push('/');
            }}
            to="/"
            className="ml-10 mx-5"
          >
            <Logo />
          </div>
          <MenuContent />
          <CurrentUser />
        </div>
      </div>
      <div className="min-h-screen">{children}</div>
      <div className="footer__main">Ether Dapp &copy; Developement by Phi</div>
    </main>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
