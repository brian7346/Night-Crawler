// @flow
import { createSelector } from 'reselect';
import type { TCartState, TCartItem } from './cart.types';

const selectCart = state => state.cart;

export const selectCartItems: TCartItem[] = createSelector(
  [selectCart],
  (cart: TCartState) => cart.cartItems
);

export const selectCartHidden: boolean = createSelector(
  [selectCart],
  (cart: TCartState) => cart.hidden
);

export const selectCartItemsCount: number = createSelector(
  [selectCartItems],
  (cartItems: TCartItem[]) =>
    cartItems.reduce(
      (accumulatedQuantoty, cartItem) =>
        accumulatedQuantoty + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.price * cartItem.quantity,
    0
  )
);
