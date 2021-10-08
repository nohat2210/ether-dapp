import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'shared/components/common';
import {
  getRefreshToken,
  getToken,
  removeAccessToken,
  removeRefreshToken,
  removeToken,
} from 'core/token';
import {
  removeCurrentUser,
  getCurrentUser,
  getAvatar,
  removeAvatar,
} from 'core/currentUser';
import SVGIcon from 'shared/components/SVGIcon';
import { JSONParse } from 'shared/utils/tool';
import authApi from 'api/auth';
import { removeSaveProduct } from 'core/saveProduct';
import { useToast } from 'shared/hooks/useToast';

function CurrentUser() {
  const token = getToken();
  const refreshToken = getRefreshToken();
  const { toast } = useToast();
  const profile = JSONParse(getCurrentUser());
  const defaultAvatar = getAvatar();
  const onLogout = async () => {
    if (token) {
      try {
        removeAccessToken();
        removeRefreshToken();
        await authApi.logout(refreshToken);
        removeToken();
        removeCurrentUser();
        removeSaveProduct();
        removeAvatar();
      } catch (error) {
        toast.error(error);
      }
    }
  };
  return (
    <div className="flex items-center">
      <div className="nav__notification">
        <SVGIcon width={25} height={25} icon="bell-icon" />
      </div>
      <div className="nav__user-private mr-5 relative">
        <Avatar src={profile?.avatar || defaultAvatar} />
        <div className="nav__user-menu">
          <Link className="nav__user-menu-item" to="/my-profile">
            My profile
          </Link>
          <Link className="nav__user-menu-item" to="/products/post">
            Post product
          </Link>
          <Link
            to="/"
            title="log out"
            className="nav__user-menu-item"
            onClick={onLogout}
          >
            Log out
            <SVGIcon icon="logout-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CurrentUser;
