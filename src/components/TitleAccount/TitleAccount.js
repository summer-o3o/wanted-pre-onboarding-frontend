import React from 'react';
import './TitleAccount.scss';

const TitleAccount = ({ title, desc }) => {
  return (
    <>
      <strong className="tit_account">{title}</strong>
      <p className="desc_account">{desc}</p>
    </>
  );
};

export default TitleAccount;
