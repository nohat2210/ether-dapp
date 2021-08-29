import React from 'react';
import { getToken } from 'core/token';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function GuardRoute({ isPrivate = false, ...rest }) {
  const token = getToken();
  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (token && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
}

GuardRoute.propTypes = {
  isPrivate: PropTypes.bool,
};

export default GuardRoute;
