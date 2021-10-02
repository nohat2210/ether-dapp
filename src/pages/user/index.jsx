import React from 'react';
import PrivateLayout from 'layout/private/PrivateLayout';
import { getAvatar, getCurrentUser } from 'core/currentUser';
import { JSONParse } from 'shared/utils/tool';
import { Avatar } from 'shared/components/common';
import { Button } from 'shared/components/common';
import useRoutes from 'shared/hooks/useRoutes';
import { formatDate, getAge } from 'shared/utils/date';

function UserProfile() {
  const profile = JSONParse(getCurrentUser());
  const defaultAvatar = getAvatar();
  const { history } = useRoutes();
  return (
    <PrivateLayout>
      <h2 className="mb-10">My profile</h2>
      <div className="flex">
        <Avatar
          className="mr-5"
          size={100}
          src={profile?.img || defaultAvatar}
        />
        <div>
          <div className="flex">
            <strong>Full name:</strong>
            <p>{profile?.fullName ?? ''}</p>
          </div>
          <div>
            <strong>Birthday:</strong>
            <p>
              {profile?.birthday &&
                formatDate(profile?.birthday, 'MMM DD YYYY')}
            </p>
          </div>
          <div className="flex">
            <strong>Age:</strong>
            <p>{getAge() || null}</p>
          </div>
          <Button
            className="h-40px"
            type="primary"
            onClick={() => {
              history.push('/my-profile/edit');
            }}
          >
            update profile
          </Button>
        </div>
      </div>
    </PrivateLayout>
  );
}

export default UserProfile;
