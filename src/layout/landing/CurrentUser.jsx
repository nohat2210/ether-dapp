import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'shared/components/common';
import { getToken, removeToken } from 'core/token';
import SVGIcon from 'shared/components/SVGIcon';

const CurrentUser = () => {
  const token = getToken();
  const onLogout = () => {
    removeToken(token);
  };
  if (token) {
    return (
      <>
        <Avatar
          src="https://semantic-ui.com/images/avatar/small/veronika.jpg"
          className="mr-5"
        />
        <Link
          to=""
          title="log out"
          role="button"
          className="nav__btn flex"
          style={{ height: '56px' }}
          onClick={onLogout}
        >
          <span className="mr-2">
            <SVGIcon icon="logout-icon" />
          </span>
          log out
        </Link>
      </>
    );
  }
  return (
    <Link
      title="login"
      role="button"
      className="nav__btn flex"
      to="/login"
      style={{ height: '56px' }}
    >
      <span className="mr-2">
        <SVGIcon icon="login-icon" />
      </span>
      log in
    </Link>
  );
};

export default CurrentUser;
