//@flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

import type { TMenuItemProps } from './menu-item.types';

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}: TMenuItemProps): React$Element<'div'> => (
  <div
    className={`${size} menu-item`}
    onClick={(): number => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">КУПИТЬ СЕЙЧАС</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
