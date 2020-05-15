// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import type { THeaderState } from './header.types';

import Logo from '../../assets/crown.svg';

import './header.styles.scss';

const Header = (): React$Element<'div'> => {
  const {
    user: { currentUser },
    cart: { hidden },
  }: THeaderState = useSelector((state: THeaderState) => state);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={auth.signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
