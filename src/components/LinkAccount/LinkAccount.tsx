import { Link } from 'react-router-dom';
import { LinkAccountTypes } from '../../types/types';
import './LinkAccount.scss';

const LinkAccount = (props: LinkAccountTypes) => {
  const { to, text } = props;

  return (
    <Link to={to} className="link_account">
      {text}
    </Link>
  );
};

export default LinkAccount;
