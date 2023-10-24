import { BtnAccountTypes } from '../../types/types';
import './BtnAccount.scss';

const BtnAccount = (props: BtnAccountTypes) => {
  const { dataTestId, disabled, text } = props;

  return (
    <button
      className="btn_account"
      type="submit"
      data-testid={dataTestId}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BtnAccount;
