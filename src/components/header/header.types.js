// @flow
import type { TCartState } from '../../redux/cart/cart.types';
import type { TUserState } from '../../redux/user/user.types';

export type THeaderState = {
  cart: TCartState,
  user: TUserState,
};
