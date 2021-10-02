import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SVGIcon from 'shared/components/SVGIcon';

const ROUTES = [
  { path: '/wallet', name: 'wallet', icon: 'material-icon' },
  { path: '/market-place', name: 'market place', icon: 'store-icon' },
  { path: '/explore', name: 'explore', icon: 'feather-icon' },
];

const MenuContent = ({ className = '' }) => {
  return (
    <div className="flex-grow">
      {ROUTES.map(menu => (
        <NavLink
          key={menu.path}
          className={`nav__menu ${className}`}
          activeClassName="active"
          to={menu.path}
        >
          <span className="mr-2">
            <SVGIcon icon={menu.icon} />
          </span>
          {menu.name}
        </NavLink>
      ))}
    </div>
  );
};

MenuContent.propTypes = {
  className: PropTypes.string,
};

export default MenuContent;
