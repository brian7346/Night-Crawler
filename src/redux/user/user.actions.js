// @flow
import { UserActionTypes } from './user.types';
import type { TUserAction, TCurrentUser } from './user.types';

export const setCurrentUser = (user: TCurrentUser): TUserAction => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
