import React, { useState } from 'react';
import { Button } from './common';
import PropTypes from 'prop-types';

const Pagination = ({
  totalItems,
  params,
  onPageChange = null,
  nextPage,
  previousPage,
}) => {
  const { page, limit } = params;
  const totalPage = Math.ceil(totalItems / limit);
  const [term, setTerm] = useState('');
  const handlePageChange = newPage => {
    if (onPageChange) {
      onPageChange({ newPage });
    }
  };
  return (
    <ul className="my-2 flex center2">
      <li className="mr-2">
        <Button
          disabled={page <= 1}
          onClick={() => handlePageChange(previousPage)}
          type="outlined"
        >
          Previous
        </Button>
      </li>
      <li className="mr-2">
        <Button
          disabled={page >= totalPage}
          onClick={() => handlePageChange(nextPage)}
          type="outlined"
        >
          Next
        </Button>
      </li>
      <li className="flex center2 mr-2">
        <p className="mr-2">
          {page}/{totalPage}
        </p>
        <form
          className="flex center2"
          onSubmit={e => {
            e.preventDefault();
            if (term <= totalPage && term >= 1) {
              handlePageChange(term);
            }
          }}
        >
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            type="number"
            placeholder="Page"
            className="pagination__input mr-2"
          />
          <Button
            disabled={term <= totalPage && term >= 1}
            type="primary"
            htmlType="submit"
            className="btn__pagination"
          >
            search
          </Button>
        </form>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  nextPage: PropTypes.number,
  previousPage: PropTypes.number,
  params: PropTypes.object.isRequired,
  totalItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
};

export default Pagination;
