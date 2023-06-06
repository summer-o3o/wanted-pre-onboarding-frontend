import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import WrapInp from '../../components/WrapInp/WrapInp';
import BtnAccount from '../../components/BtnAccount/BtnAccount';
import LinkAccount from '../../components/LinkAccount/LinkAccount';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      alert('이미 로그인된 상태입니다. todo페이지로 이동합니다');
      navigate('/todo');
    }
  }, []);

  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const handleUserAuthentication = e => {
    setAccount({
      ...account, // 객체 복사
      [e.target.name]: e.target.value,
    });
  };

  const getEmailInputClass = () => {
    return account.email.indexOf('@') === -1 && 'type_error';
  };

  const getPasswordInputClass = () => {
    return account.password.length < 8 && 'type_error';
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://www.pre-onboarding-selection-task.shop/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //필수로 넣어야함
      },
      body: JSON.stringify({
        email: account.email,
        password: account.password,
      }),
    }).then(data => {
      if (data.status === 400) {
        alert('동일한 이메일이 이미 존재합니다.');
        setAccount({
          email: '',
          password: '',
        });
      } else {
        alert('회원가입 성공');
        setAccount({
          email: '',
          password: '',
        });
        navigate('/signin');
      }
    });
  };

  return (
    <div className="sign_up">
      <h1 className="tit_wanted">
        <svg width="120" viewBox="0 0 140 32" aria-label="원티드">
          <path
            fill="currentColor"
            d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
          />
        </svg>
      </h1>
      <h2 className="screen_out">회원가입 폼</h2>
      <form
        method="post"
        action="#none"
        className="form_sign"
        onSubmit={handleSubmit}
      >
        <Title
          title="가입을 시작합니다!"
          desc="다양한 서비스를 편리하게 이용해 보세요."
        />
        <fieldset>
          <legend className="screen_out">회원가입</legend>
          <WrapInp
            typeError={getEmailInputClass()}
            inpClass="inp_email"
            type="text"
            dataTestId="email-input"
            placeholder="이메일을 입력해주세요."
            inpName="email"
            errorMsg="이메일 형식이 아닙니다. 올바른 이메일 주소를 입력해주세요"
            onChange={handleUserAuthentication}
            value={account.email}
          />
          <WrapInp
            typeError={getPasswordInputClass()}
            inpClass="inp_password"
            type="password"
            dataTestId="password-input"
            placeholder="비밀번호 입력해주세요."
            inpName="password"
            errorMsg="비밀번호의 경우 8자 이상을 입력해주세요"
            onChange={handleUserAuthentication}
            value={account.password}
          />
          <BtnAccount
            text="회원가입"
            dataTestId="signup-button"
            disabled={getEmailInputClass() || getPasswordInputClass()}
          />
          <LinkAccount to="/signin" text="이미 회원이라면?" />
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
