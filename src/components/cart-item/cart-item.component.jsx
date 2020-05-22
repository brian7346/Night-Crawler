// @flow
import React from 'react';

import type { TCartItemProps } from './cart-item.types';

import './cart-item.styles.scss';

const CartItem = ({ item }: TCartItemProps): React$Element<'div'> => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
