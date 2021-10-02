import DefaultLayout from 'layout/landing/DefaultLayout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../productSlice';
import { imageDefault } from 'shared/utils/imageLibary';
import useRoutes from 'shared/hooks/useRoutes';
import { unwrapResult } from '@reduxjs/toolkit';
import { useToast } from 'shared/hooks/useToast';
import { Button } from 'shared/components/common';
import Quantity from 'shared/components/Quantity';

function ViewProduct() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.item);
  const { toast } = useToast();
  const { query } = useRoutes();
  useEffect(() => {
    dispatch(getProduct(query.id))
      .then(unwrapResult)
      .catch(err => toast.error(err));
    //eslint-disable-next-line
  }, []);
  return (
    <DefaultLayout>
      <div className="p-4">
        <div className="flex justify-center">
          <div className="p-2">
            <img src={product?.image || imageDefault} alt="product" />
          </div>
          <div className="flex-1 p-2">
            <h2>{product?.name}</h2>
            <p style={{ fontSize: 12 }}>{product?.id}</p>
            <strong>category</strong>
            <p>{product?.category.name}</p>
            <strong>description</strong>
            <p>{product?.description}</p>
            <strong>price</strong>
            <p>{product?.price}</p>
            <div className="mb-2">
              <strong>quantity</strong>
              <Quantity />
            </div>
            <div className="flex">
              <Button type="primary" className="h-40px mr-2">
                add to cart
              </Button>
              <Button type="secondary" className="h-40px">
                pay now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ViewProduct;
