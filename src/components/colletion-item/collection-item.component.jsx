//@flow
import React from 'react';

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
  </div>
);

export default CollectionItem;
