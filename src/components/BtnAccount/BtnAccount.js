import React from 'react';
import './BtnAccount.scss';

const BtnAccount = ({ dataTestId, disabled, text }) => {
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
