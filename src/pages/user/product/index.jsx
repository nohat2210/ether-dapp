import { unwrapResult } from '@reduxjs/toolkit';
import PrivateLayout from 'layout/private/PrivateLayout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProduct } from '../userSlice';
import { getCurrentUser } from 'core/currentUser';
import { JSONParse } from 'shared/utils/tool';
import { imageDefault } from 'shared/utils/imageLibary';
import useRoutes from 'shared/hooks/useRoutes';
import SVGIcon from 'shared/components/SVGIcon';
import Pagination from 'shared/components/Pagination';
import { formatDate } from 'shared/utils/date';
import usePagination from 'shared/hooks/usePagination';

function UserProductList() {
  const dispatch = useDispatch();
  const { history } = useRoutes();
  const profile = JSONParse(getCurrentUser());
  const products = useSelector(state => state.user.list);
  const nextPage = useSelector(state => state.user.nextPage);
  const previousPage = useSelector(state => state.user.previousPage);
  const totalItems = useSelector(state => state.user.total);
  const currentPage = useSelector(state => state.user.currentPage);
  const pageSize = useSelector(state => state.user.pageSize);
  const { params, handlePageChange } = usePagination({ pageSize, currentPage });

  useEffect(() => {
    dispatch(getUserProduct({ id: profile._id, params })).then(unwrapResult);
    //eslint-disable-next-line
  }, [params]);
  return (
    <PrivateLayout>
      <h2 className="mb-10">my product list</h2>
      {products.map(product => {
        return (
          <div key={product?.id} className="ower__product__card">
            <div className="w-120px">
              <img
                className="owner__product__card-image"
                src={product?.image || imageDefault}
                alt="img"
              />
            </div>
            <div className="ower__product__card-content">
              <h3>{product?.name}</h3>
              <p style={{ fontSize: 14 }}>
                Created at: {formatDate(product?.createdAt)}
              </p>
            </div>
            <div className="owner__product__card-action">
              <span
                onClick={() => {
                  history.push(`products/${product?.id}`);
                }}
              >
                <SVGIcon icon="view-icon" />
              </span>
            </div>
          </div>
        );
      })}
      <Pagination
        totalItems={totalItems}
        nextPage={nextPage}
        previousPage={previousPage}
        params={params}
        onPageChange={handlePageChange}
      />
    </PrivateLayout>
  );
}

export default UserProductList;
