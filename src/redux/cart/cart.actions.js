// @flow
import { CartActionTypes } from './cart.types';
import type { TCartAction } from './cart.types';
import type { TShopItem } from '../../components/collection-preview/collection-preview.types';

export const toggleCartHidden = (): TCartAction => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item: TShopItem): TCartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const learItemFromCart = (item: TShopItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
