import React from 'react';
import { useDispatch } from 'react-redux';
import PrivateLayout from 'layout/private/PrivateLayout';
import PostProductForm from './PostProductForm';
import { postProduct } from 'pages/user/userSlice';
import { useToast } from 'shared/hooks/useToast';
import { unwrapResult } from '@reduxjs/toolkit';
import { JSONParse } from 'shared/utils/tool';
import { getCurrentUser } from 'core/currentUser';
import useRoutes from 'shared/hooks/useRoutes';

function PostProduct() {
  const profile = JSONParse(getCurrentUser());
  const { history } = useRoutes();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const handlePostProduct = ({ name, category, description, price }) => {
    dispatch(
      postProduct({
        id: profile.id,
        name,
        category,
        description,
        price,
      })
    )
      .then(unwrapResult)
      .then(() => {
        history.push('/products');
        toast.success('Post success!!!');
      })
      .catch(err => toast.error(err));
  };
  return (
    <PrivateLayout>
      <PostProductForm onSubmit={handlePostProduct} />
    </PrivateLayout>
  );
}

export default PostProduct;
