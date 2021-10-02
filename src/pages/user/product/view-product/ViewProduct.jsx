import { unwrapResult } from '@reduxjs/toolkit';
import {
  removeSaveProduct,
  getSaveProduct,
  setProduct,
} from 'core/saveProduct';
import PrivateLayout from 'layout/private/PrivateLayout';
import { deleteProduct, getProduct } from 'pages/market-place/productSlice';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'shared/components/common';
import useRoutes from 'shared/hooks/useRoutes';
import { useToast } from 'shared/hooks/useToast';
import { useModal } from 'shared/hooks/useModal';
import { imageDefault } from 'shared/utils/imageLibary';

function ViewProduct() {
  const product = useSelector(state => state.products.item);
  const isLoading = useSelector(state => state.products.loading);
  const saveProduct = getSaveProduct();
  const { toast } = useToast();
  const { modal, hide } = useModal();
  const { history, query } = useRoutes();
  const { id } = query;
  const dispatch = useDispatch();
  const handleDelete = () => {
    modal.confirm({
      title: 'Delete Product',
      content: 'Do you want to delete this product ?',
      onCancel() {
        hide();
      },
      onOk() {
        dispatch(deleteProduct(id))
          .then(unwrapResult)
          .then(() => {
            hide();
            history.push('/products');
            toast.success('Delete successfully!!');
            if (saveProduct) {
              removeSaveProduct();
            }
          })
          .catch(err => toast.error(err));
      },
    });
  };
  useEffect(() => {
    dispatch(getProduct(id))
      .then(unwrapResult)
      .catch(err => toast.error(err));
    //eslint-disable-next-line
  }, []);
  return (
    <PrivateLayout>
      <div className="flex">
        <div className="p-2">
          <img src={product?.image || imageDefault} alt="product" />
        </div>
        <div className="flex-1 p-2">
          <h2>{product?.name}</h2>
          <p style={{ fontSize: 12 }}>{id}</p>
          <strong>Category</strong>
          <p>{product?.category.name}</p>
          <strong>Description</strong>
          <p>{product?.description}</p>
          <strong>Price</strong>
          <p>{product?.price}</p>
          <div className="flex">
            <Button
              onClick={() => {
                history.push(`/products/${id}/edit`);
                setProduct(product);
              }}
              type="primary"
              className="mr-2"
            >
              edit
            </Button>
            <Button loading={isLoading} type="secondary" onClick={handleDelete}>
              delete
            </Button>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
}

export default ViewProduct;
