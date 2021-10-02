import PrivateLayout from 'layout/private/PrivateLayout';
import React from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { updateProduct } from 'pages/market-place/productSlice';
import useRoutes from 'shared/hooks/useRoutes';
import EditProductForm from './EditProductForm';
import { useToast } from 'shared/hooks/useToast';
import { useLocalStorage } from 'shared/hooks/useStorage';
import { useModal } from 'shared/hooks/useModal';

function EditProduct() {
  const dispatch = useDispatch();
  const { history, query } = useRoutes();
  const [product, , removeProduct] = useLocalStorage('save-product');
  const { id } = query;
  const { toast } = useToast();
  const { modal, hide } = useModal();

  const handleEdit = ({ name, category, description, price }) => {
    modal.confirm({
      title: 'Update Product',
      content: 'Do you confirm change this product ?',
      onCancel() {
        hide();
      },
      onOk() {
        dispatch(updateProduct({ name, category, description, price, id }))
          .then(unwrapResult)
          .then(() => {
            hide();
            history.push(`/products/${id}`);
            removeProduct();
            toast.success('Update success!!!');
          })
          .catch(err => toast.error(err));
      },
    });
  };
  return (
    <PrivateLayout>
      <div>
        <EditProductForm product={product} onSubmit={handleEdit} />
      </div>
    </PrivateLayout>
  );
}

export default EditProduct;
