import React from 'react';
import { NavLink } from 'react-router-dom';
import SVGIcon from 'shared/components/SVGIcon';

const ROUTES = [
  { name: 'My profile', path: '/my-profile', icon: '' },
  { name: 'Product', path: '/products', icon: '' },
  { name: 'Gallery', path: '/gallery', icon: '' },
];

function MenuContent() {
  return (
    <div className="flex flex-col mt-20">
      {ROUTES.map(menu => (
        <NavLink
          className="nav__menu__item-vertical inline-flex items-center"
          key={menu.path}
          to={menu.path}
          activeClassName="active__nav-vertical"
        >
          <div className="nav__menu__icon-vertical">
            <SVGIcon icon={menu.icon} />
          </div>
          <div className="nav__menu__text-vertical">{menu.name}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default MenuContent;
