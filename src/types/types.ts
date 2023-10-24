export interface TitleTypes {
  title: string;
  desc: string;
}

export interface inputTypes {
  typeError: string | boolean;
  inpClass: string;
  errorMsg: string;
  type: string;
  dataTestId: string;
  placeholder: string;
  inpName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export interface BtnAccountTypes {
  dataTestId: string;
  disabled: boolean;
  text: string;
}

export interface LinkAccountTypes {
  to: string;
  text: string;
}
