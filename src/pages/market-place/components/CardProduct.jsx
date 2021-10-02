import React from 'react';
import PropTypes from 'prop-types';
import { imageDefault } from 'shared/utils/imageLibary';

const CardProduct = ({ product, onClick }) => {
  return (
    <>
      <div key={product?.id} className="card__product m-2" onClick={onClick}>
        <img
          className="card__image"
          src={product?.image || imageDefault}
          alt="img"
        />
        <div className="card__content">
          <h4 className="card__product-title">{product?.name}</h4>
          <div className="card__product-owner">owner</div>
          <div className="cartd__product-category">
            {product?.category.name}
          </div>
        </div>
      </div>
    </>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default CardProduct;
