import React from 'react';
import { Logo } from 'shared/components/common';
import MenuContent from 'layout/private/MenuContent';
import CurrentUser from 'layout/private/CurrentUser';
import { Link } from 'react-router-dom';

function PrivateLayout({ children }) {
  return (
    <main className="flex min-h-screen">
      <div className="nav__menu-vertical">
        <Link to="/">
          <Logo />
        </Link>
        <MenuContent />
      </div>
      <div className="flex-1">
        <div className="header__private flex center-between">
          <h1 className="flex-1">Title Page</h1>
          <CurrentUser />
        </div>
        <div className="px-10 py-8">{children}</div>
      </div>
    </main>
  );
}

export default PrivateLayout;
