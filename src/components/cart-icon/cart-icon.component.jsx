// @flow
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import type { TCartIconDispatch } from './cart-icon.types';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = (): React$Element<'div'> => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch: TCartIconDispatch = useDispatch();
  const toggleHidden = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch,
  ]);
  const itemCount = cartItems.reduce(
    (accumulatedQuantoty, cartItem) => accumulatedQuantoty + cartItem.quantity,
    0
  );
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img src={ShoppingIcon} className="shopping-icon" alt="shopping" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
