// @flow

export type TCustomButtonProps = {
  children: string,
  isGoogleSignIn?: boolean,
  type?: string,
  onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void,
};
