import _ from 'lodash';

export const convertQueryToParams = queryParams => {
  const { pageSize, currentPage, filters, sorter } = queryParams;
  let params = {
    page: currentPage,
    limit: pageSize,
  };
  //sort
  const getSortBy = sort => (sort === 'desc' ? 'desc' : 'asc');
  if (!_.isEmpty(sorter)) {
    params = {
      ...params,
      sortBy: `${sorter.field}:${getSortBy(sorter.sort)}`,
    };
  }

  // filter
  if (!_.isEmpty(filters)) {
    let filter = {};
    const filterObmit = _.omitBy(filters, el => !el);

    Object.entries(filterObmit).forEach(([key, value]) => {
      return (filter = { ...filter, [key]: value });
    });
    params = {
      ...params,
      filter,
    };
  }

  return params;
};

export const convertQueryFilter = filter => {
  let filters = JSON.stringify(filter);
  filters.replace('categoryOptions', 'categories');

  return filter;
};
