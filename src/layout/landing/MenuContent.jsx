import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from 'shared/components/SVGIcon';

const ROUTES = [
  { path: '/wallet', name: 'wallet', icon: 'material-icon' },
  { path: '/market-place', name: 'market place', icon: 'store-icon' },
];

const MenuContent = () => {
  return (
    <ul className="flex-1">
      {ROUTES.map(menu => (
        <li
          key={menu.path}
          className="nav__menu inline-block mx-5 pt-4 capitalize"
        >
          <Link className="flex justify-center items-center" to={menu.path}>
            <span className="mr-2">
              <SVGIcon icon={menu.icon} />
            </span>
            {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuContent;
