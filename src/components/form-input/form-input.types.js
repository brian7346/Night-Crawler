// @flow

export type TFormInputProps = {
  name: string,
  type: string,
  value: string,
  handleChange: (e: SyntheticInputEvent<HTMLInputElement>) => void,
  label: string,
  required: boolean,
};
