// @flow
import { CartActionTypes } from './cart.types';
import type { TCartState, TCartAction, TCartItem } from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE: TCartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state: TCartState = INITIAL_STATE,
  action: TCartAction
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter<TCartItem>(
          cartItem => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
