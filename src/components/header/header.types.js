// @flow
import type { TCurrentUser } from '../../redux/user/user.types';

export type THeaderState = {
  currentUser: TCurrentUser,
  hidden: boolean,
};
