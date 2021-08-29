import React from 'react';
import { Logo } from 'shared/components/common';
import MenuContent from './MenuContent';
import PropTypes from 'prop-types';
import CurrentUser from './CurrentUser';

function DefaultLayout({ children }) {
  return (
    <main>
      <header className="header fixed w-full">
        <nav className="flex center-between">
          <div className="ml-10 mx-5">
            <Logo />
          </div>
          <MenuContent />
          <CurrentUser />
        </nav>
      </header>
      <div className="min-h-screen">{children}</div>
      <footer className="footer__main">
        Ether Dapp &copy; Developement by Phi
      </footer>
    </main>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
