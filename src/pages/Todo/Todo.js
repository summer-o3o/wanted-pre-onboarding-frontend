import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import './Todo.scss';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('로그인시 이용 가능합니다. 로그인 해주세요.');
      navigate('/signin');
    }
  }, []);

  return (
    <div className="todo">
      <Title
        title="해야할일을 적어주세요!"
        desc="해야할일을 하나씩 적으면서 기록해보세요."
      />
      <form method="post" action="#none" className="form_todo">
        <legend className="screen_out">해야 할 일 입력</legend>
        <input
          className="inp_todo"
          data-testid="new-todo-input"
          placeholder="해야 할 일을 입력해주세요"
        />
        <button
          className="btn_add"
          data-testid="new-todo-add-button"
          type="submit"
        >
          추가
        </button>
      </form>
      <strong className="screen_out">해야 할 일 목록</strong>
      <ul className="list_todo">
        <li>
          <label className="lnp_todo">
            <input className="check_todo" type="checkbox" />
            <span className="txt_todo">
              일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </span>
          </label>
          <div className="wrap_btn">
            <button
              className="btn_modify"
              type="button"
              data-testid="modify-button"
            >
              수정
            </button>
            <button
              className="btn_delete"
              type="button"
              data-testid="delete-button"
            >
              삭제
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Todo;
