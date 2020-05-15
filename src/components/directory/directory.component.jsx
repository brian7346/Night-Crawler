// @flow
import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import type { TDirectorySections } from './directory.types';

import './directory.styles.scss';

const SECTIONS: Array<TDirectorySections> = [
  {
    title: 'Hats',
    imageUrl:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    id: 1,
    linkUrl: 'hats',
  },
  {
    title: ' Jackets',
    imageUrl:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    id: 2,
    linkUrl: '',
  },
  {
    title: 'Sneakers',
    imageUrl:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    id: 3,
    linkUrl: '',
  },
  {
    title: 'Mens',
    imageUrl:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    id: 3,
    size: 'large',
    linkUrl: '',
  },
  {
    title: ' Womans',
    imageUrl:
      'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    id: 3,
    size: 'large',
    linkUrl: '',
  },
];

const Directory = (): React$Element<'div'> => {
  const [sections] = useState(SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(
        ({ id, title, imageUrl, size, linkUrl }: TDirectorySections) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        )
      )}
    </div>
  );
};

export default Directory;
