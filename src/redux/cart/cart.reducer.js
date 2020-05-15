// @flow
import { CartActionTypes } from './cart.types';
import type { TCartState, TCartAction } from './cart.types';

const INITIAL_STATE: TCartState = {
  hidden: true,
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
    default:
      return state;
  }
};

export default cartReducer;
