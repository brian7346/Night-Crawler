// @flow
export const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

export type TCurrentUser = {
  name: string,
  email: string,
  id: string,
};

export type TUserState = {
  currentUser: TCurrentUser | null,
};

export type TUserAction = {
  type: string,
  payload: TCurrentUser,
};
