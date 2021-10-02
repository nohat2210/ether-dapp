import React from 'react';
import SVGIcon from './SVGIcon';
import PropTypes from 'prop-types';

//-------------------BUTTON------------//

export const Button = ({
  htmlType = 'button',
  type,
  onClick,
  children,
  icon,
  className,
  loading = false,
  disabled,
}) => {
  return (
    <button
      disabled={loading || disabled}
      type={htmlType}
      onClick={onClick}
      className={`btn ${type && `btn__${type}`} ${className || ''}`}
    >
      {icon && <SVGIcon icon={icon} />}
      {loading ? <SVGIcon icon="loading-icon" /> : children}
    </button>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  htmlType: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

//---------------- LOGO ---------------//

export const Logo = ({ width, height, style, className }) => {
  return (
    <img
      src=""
      alt="logo"
      className={`logo ${className || ''}`}
      width={width}
      height={height}
      style={style}
    />
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
};

//-------------AVATAR---------------//

export const Avatar = ({
  title = 'User',
  src,
  icon,
  className,
  size = 32,
  onClick,
}) => {
  if (icon)
    <span
      className={`avatar ${className || ''}`}
      style={{ width: size, height: size }}
      title={title}
    >
      <SVGIcon icon={icon} />
    </span>;
  return (
    <span
      onClick={onClick}
      className={`avatar ${className || ''}`}
      style={{ width: size, height: size }}
      title={title}
    >
      <img src={src} alt="avatar" />
    </span>
  );
};

Avatar.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.number,
  onClick: PropTypes.func,
};
