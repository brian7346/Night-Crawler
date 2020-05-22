// @flow
import type { TCartAction } from '../../redux/cart/cart.types';

export type TCartIconDispatch = (action: TCartAction) => void;

export type TCartIconSelector = {
  itemCount: number,
};
