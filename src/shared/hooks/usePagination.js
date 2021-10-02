import { useState } from 'react';
import _ from 'lodash';

const usePagination = queryParams => {
  const { pageSize, currentPage, filters, sorter } = queryParams;
  const [params, setParams] = useState({
    page: currentPage,
    limit: pageSize,
    filter: filters,
    sortBy: sorter,
  });

  const handlePageChange = ({ newPage, filter, sort }) => {
    setParams({ ...params, page: newPage });
    if (!_.isEmpty(sort)) {
      setParams({
        ...params,
        sortBy: sort,
      });
    }
    if (!_.isEmpty(filter)) {
      let queryStr = JSON.stringify(filter);
      queryStr = queryStr.replace('categoryOptions', 'categories');

      setParams({
        ...params,
        filter: queryStr,
      });
    }
  };
  return { params, handlePageChange };
};

export default usePagination;
