// @flow
import { UserActionTypes } from './user.types';
import type { TUserState, TUserAction } from './user.types';

const INITIAL_STATE: TUserState = {
  currentUser: null,
};

const userReducer = (
  state: TUserState = INITIAL_STATE,
  action: TUserAction
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
