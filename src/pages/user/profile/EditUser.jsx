import React from 'react';
import PrivateLayout from 'layout/private/PrivateLayout';
import { getCurrentUser } from 'core/currentUser';
import { JSONParse } from 'shared/utils/tool';
import { useDispatch } from 'react-redux';
import { useToast } from 'shared/hooks/useToast';
import { useModal } from 'shared/hooks/useModal';
import { unwrapResult } from '@reduxjs/toolkit';
import useRoutes from 'shared/hooks/useRoutes';
import EditUserForm from './EditUserForm';
import { updateUser } from '../userSlice';

function EditUser() {
  const profile = JSONParse(getCurrentUser());
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { modal, hide } = useModal();
  const { history } = useRoutes();
  const handleUpdateProfile = ({
    id = profile.id,
    firstName,
    lastName,
    email,
    birthday,
  }) => {
    modal.confirm({
      title: 'Update Profile',
      content: 'Do you confirm update your profile ?',
      onCancel() {
        hide();
      },
      onOk() {
        dispatch(updateUser({ id, firstName, lastName, email, birthday }))
          .then(unwrapResult)
          .then(() => {
            hide();
            history.push('/my-profile');
            toast.success('Update success!!!');
          })
          .catch(err => toast.error(err));
      },
    });
  };
  return (
    <PrivateLayout>
      <h1>My Infomation</h1>
      <EditUserForm profile={profile} onSubmit={handleUpdateProfile} />
    </PrivateLayout>
  );
}

export default EditUser;
