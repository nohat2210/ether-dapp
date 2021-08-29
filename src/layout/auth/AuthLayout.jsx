import React from 'react';
import PropTypes from 'prop-types';

function AuthLayout({ children }) {
  return (
    <div className="auth_layout__wrapper">
      <div className="auth_content__box">{children}</div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
