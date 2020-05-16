//@flow
import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import type { TCollectionItemProps } from './collection-item.types';

import './collection-item.styles.scss';

const CollectionItem = ({
  name,
  price,
  imageUrl,
}: TCollectionItemProps): React$Element<'div'> => (
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
    <CustomButton inverted>Add to cart </CustomButton>
  </div>
);

export default CollectionItem;
