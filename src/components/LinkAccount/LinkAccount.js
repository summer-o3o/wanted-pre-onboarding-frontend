import React from 'react';
import { Link } from 'react-router-dom';
import './LinkAccount.scss';

const LinkAccount = ({ to, text }) => {
  return (
    <Link to={to} className="link_account">
      {text}
    </Link>
  );
};

export default LinkAccount;
