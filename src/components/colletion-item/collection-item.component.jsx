//@flow
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import type { TCollectionItemProps } from './collection-item.types';

import './collection-item.styles.scss';

const CollectionItem = ({
  item,
}: TCollectionItemProps): React$Element<'div'> => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const addItemToCart = useCallback(() => dispatch(addItem(item)), [
    dispatch,
    item,
  ]);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={addItemToCart} inverted>
        Add to cart{' '}
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
