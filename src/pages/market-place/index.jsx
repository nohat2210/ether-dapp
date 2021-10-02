import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardProduct from './components/CardProduct';
import DefaultLayout from 'layout/landing/DefaultLayout';
import { getProducts } from './productSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import Pagination from 'shared/components/Pagination';
import Category from './components/Category';
import useGetCategories from 'shared/hooks/useGetCategories';
import { useToast } from 'shared/hooks/useToast';
import usePagination from 'shared/hooks/usePagination';
import useRoutes from 'shared/hooks/useRoutes';

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const pageSize = useSelector(state => state.products.pageSize);
  const currentPage = useSelector(state => state.products.currentPage);
  const totalItems = useSelector(state => state.products.total);
  const nextPage = useSelector(state => state.products.nextPage);
  const previousPage = useSelector(state => state.products.previousPage);
  const filters = useSelector(state => state.products.filter);
  const { toast } = useToast();
  const { categories } = useGetCategories();
  const { history } = useRoutes();

  const { params, handlePageChange } = usePagination({
    pageSize,
    currentPage,
    filters,
  });

  useEffect(() => {
    dispatch(getProducts(params))
      .then(unwrapResult)
      .catch(err => toast.error(err));
    //eslint-disable-next-line
  }, [params]);
  return (
    <DefaultLayout>
      <div className="body__market">
        <div className="sider__menu">
          <Category options={categories} onFilterChange={handlePageChange} />
        </div>
        <div className="flex-1 px-6 py-8">
          <h2>market place</h2>
          <div className="flex flex-wrap mt-1 items-center">
            {products.map(product => (
              <CardProduct
                product={product}
                onClick={() => history.push(`/market-place/${product?.id}`)}
              />
            ))}
          </div>
          <Pagination
            totalItems={totalItems}
            nextPage={nextPage}
            previousPage={previousPage}
            params={params}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ProductsList;
