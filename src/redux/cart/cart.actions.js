// @flow
import { CartActionTypes } from './cart.types';
import type { TCartAction } from './cart.types';

export const toggleCartHidden = (): TCartAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
