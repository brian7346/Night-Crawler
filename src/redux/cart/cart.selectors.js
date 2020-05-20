import { createSelector } from 'reselect';

export const selectCartItemsCount = createSelector(
  state => state.cart.cartItems,
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantoty, cartItem) =>
        accumulatedQuantoty + cartItem.quantity,
      0
    )
);
