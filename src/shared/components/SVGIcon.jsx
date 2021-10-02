import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LoadPageSVG } from 'assets/svgs/loading-page.svg';
import { ReactComponent as LoadingSVG } from 'assets/svgs/loading.svg';
import { ReactComponent as LoginSVG } from 'assets/svgs/operation-log in.svg';
import { ReactComponent as LogoutSVG } from 'assets/svgs/log out.svg';
import { ReactComponent as StoreSVG } from 'assets/svgs/store.svg';
import { ReactComponent as MaterialSVG } from 'assets/svgs/-material.svg';
import { ReactComponent as EyeSVG } from 'assets/svgs/eye.svg';
import { ReactComponent as EyeInvisibleSVG } from 'assets/svgs/eye-invisible.svg';
import { ReactComponent as SuccessSVG } from 'assets/svgs/success.svg';
import { ReactComponent as WarningSVG } from 'assets/svgs/warning.svg';
import { ReactComponent as InfoSVG } from 'assets/svgs/info.svg';
import { ReactComponent as ErrorSVG } from 'assets/svgs/erroricon.svg';
import { ReactComponent as FeatherSVG } from 'assets/svgs/feather-solid.svg';
import { ReactComponent as UserSVG } from 'assets/svgs/user.svg';
import { ReactComponent as UserLineSVG } from 'assets/svgs/user-line.svg';
import { ReactComponent as ViewSVG } from 'assets/svgs/view.svg';
import { ReactComponent as BagSVG } from 'assets/svgs/Bag.svg';
import { ReactComponent as BellSVG } from 'assets/svgs/bell.svg';
import { ReactComponent as PlusSVG } from 'assets/svgs/icplus.svg';
import { ReactComponent as MinusSVG } from 'assets/svgs/icminus.svg';

const SVGIcon = ({ icon, width = 20, height = 20 }) => {
  const SVGS = {
    'loading-page-icon': (
      <LoadPageSVG width={width} height={height} aria-hidden="true" />
    ),
    'loading-icon': (
      <LoadingSVG width={width} height={height} aria-hidden="true" />
    ),
    'login-icon': <LoginSVG width={width} height={height} aria-hidden="true" />,
    'logout-icon': (
      <LogoutSVG width={width} height={height} aria-hidden="true" />
    ),
    'store-icon': <StoreSVG width={width} height={height} aria-hidden="true" />,
    'material-icon': (
      <MaterialSVG width={width} height={height} aria-hidden="true" />
    ),
    'eye-icon': <EyeSVG width={width} height={height} aria-hidden="true" />,
    'eye-invisible': (
      <EyeInvisibleSVG width={width} height={height} aria-hidden="true" />
    ),
    'info-icon': <InfoSVG width={width} height={height} aria-hidden="true" />,
    'success-icon': (
      <SuccessSVG width={width} height={height} aria-hidden="true" />
    ),
    'warning-icon': (
      <WarningSVG width={width} height={height} aria-hidden="true" />
    ),
    'error-icon': <ErrorSVG width={width} height={height} aria-hidden="true" />,
    'feather-icon': (
      <FeatherSVG width={width} height={height} aria-hidden="true" />
    ),
    'user-icon': <UserSVG width={width} height={height} aria-hidden="true" />,
    'user-line-icon': (
      <UserLineSVG width={width} height={height} aria-hidden="true" />
    ),
    'view-icon': <ViewSVG width={width} height={height} aria-hidden="true" />,
    'bag-icon': <BagSVG width={width} height={height} aria-hidden="true" />,
    'bell-icon': <BellSVG width={width} height={height} aria-hidden="true" />,
    'plus-icon': <PlusSVG width={width} height={height} aria-hidden="true" />,
    'minus-icon': <MinusSVG width={width} height={height} aria-hidden="true" />,
  };
  return <>{SVGS[icon]}</>;
};

SVGIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SVGIcon;
