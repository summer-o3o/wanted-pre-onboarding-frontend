import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/Title/Title';
import TodoList from '../../components/TodoList/TodoList';
import './Todo.scss';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert('로그인시 이용 가능합니다. 로그인 해주세요.');
      navigate('/signin');
    }
  }, []);

  const handleTodoChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch('https://www.pre-onboarding-selection-task.shop/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', //필수로 넣어야함
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        todo: todo,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setTodoList([...todoList, data]); // 새로운 투두 아이템을 기존 투두 리스트에 추가
        setTodo('');
      });
  };

  useEffect(() => {
    fetch('https://www.pre-onboarding-selection-task.shop/todos', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        setTodoList(data); // 데이터를 그대로 설정
      });
  }, []);

  return (
    <div className="todo">
      <Title
        title="해야할일을 적어주세요!"
        desc="해야할일을 하나씩 적으면서 기록해보세요."
      />
      <form
        method="post"
        action="#none"
        className="form_todo"
        onSubmit={handleSubmit}
      >
        <legend className="screen_out">해야 할 일 입력</legend>
        <input
          className="inp_todo"
          data-testid="new-todo-input"
          placeholder="해야 할 일을 입력해주세요"
          onChange={handleTodoChange}
          value={todo}
        />
        <button
          className="btn_add"
          data-testid="new-todo-add-button"
          type="submit"
        >
          추가
        </button>
      </form>
      {todoList.length >= 1 && (
        <>
          <strong className="screen_out">해야 할 일 목록</strong>
          <ul className="list_todo">
            {todoList.map(({ todo, id, isCompleted }) => (
              <TodoList
                todoList={todoList}
                token={token}
                key={id}
                id={id}
                todo={todo}
                isCompleted={isCompleted}
                setTodoList={setTodoList}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default Todo;
