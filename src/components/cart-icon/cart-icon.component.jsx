// @flow
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import type { TCartIconDispatch } from './cart-icon.types';

import ShoppingIcon from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = (): React$Element<'div'> => {
  const { itemCount } = useSelector(
    createStructuredSelector({ itemCount: selectCartItemsCount })
  );

  const dispatch: TCartIconDispatch = useDispatch();
  const toggleHidden = useCallback(() => dispatch(toggleCartHidden()), [
    dispatch,
  ]);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img src={ShoppingIcon} className="shopping-icon" alt="shopping" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
