import React from 'react';
import './SignIn.scss';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="sign_in">
      <h1 className="tit_wanted">
        <svg width="120" viewBox="0 0 140 32" aria-label="원티드">
          <path
            fill="currentColor"
            d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"
          />
        </svg>
      </h1>
      <h2 className="screen_out">회원가입 폼</h2>
      <form method="post" action="#none" className="form_sign">
        <strong className="tit_sign">가입을 시작합니다!</strong>
        <p className="desc_sign">다양한 서비스를 편리하게 이용해 보세요.</p>
        <fieldset>
          <legend className="screen_out">회원가입</legend>
          <input
            className="inp_email"
            data-testid="email-input"
            placeholder="이메일을 입력해주세요."
          />
          <input
            className="inp_password"
            data-testid="password-input"
            placeholder="비밀번호 입력해주세요."
          />
          <button
            className="btn_sign"
            type="submit"
            data-testid="signup-button"
            disabled
          >
            회원가입
          </button>
          <Link to="/signup" className="link_g">
            이미 회원이라면?
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default SignIn;
