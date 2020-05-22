// @flow
import { createSelector } from 'reselect';
import type { TCurrentUser, TUserState } from './user.types';

const selectUser = state => state.user;

export const selectCurrentUser: TCurrentUser = createSelector(
  selectUser,
  (user: TUserState) => user.currentUser
);
