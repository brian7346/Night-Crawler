//@flow
import React from 'react';

import type {
  TCollectionPreviewProps,
  TShopItem,
} from './collection-preview.types';

import CollectionItem from '../colletion-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({
  title,
  items,
}: TCollectionPreviewProps): React$Element<'div'> => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, imageUrl, name, price }: TShopItem) => (
          <CollectionItem
            key={id}
            imageUrl={imageUrl}
            name={name}
            price={price}
          />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
