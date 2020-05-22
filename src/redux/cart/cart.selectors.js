// @flow
import { createSelector } from 'reselect';
import type { TCartState, TCartItem } from './cart.types';

const selectCart = state => state.cart;

export const selectCartItems: TCartItem[] = createSelector(
  selectCart,
  (cart: TCartState) => cart.cartItems
);

export const selectCartHidden = createSelector(
  selectCart,
  (cart: TCartState) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  state => state.cart.cartItems,
  (cartItems: TCartItem[]) =>
    cartItems.reduce(
      (accumulatedQuantoty, cartItem) =>
        accumulatedQuantoty + cartItem.quantity,
      0
    )
);
