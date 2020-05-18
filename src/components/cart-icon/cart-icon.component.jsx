// @flow
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import type { TCartIconDispatch } from './cart-icon.types';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = (): React$Element<'div'> => {
  const dispatch: TCartIconDispatch = useDispatch();
  const toggleHidden = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch,
  ]);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img src={ShoppingIcon} className="shopping-icon" alt="shopping" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
