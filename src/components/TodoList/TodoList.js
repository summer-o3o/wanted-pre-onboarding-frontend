import React, { useState, useEffect } from 'react';

const TodoList = ({ todoList, token, setTodoList, id, todo, isCompleted }) => {
  const [modify, setModify] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [InputValue, setInputValue] = useState(todo);

  useEffect(() => {
    setIsChecked(isCompleted);
  }, [isCompleted]);

  const handleUpdate = (id, updatedIsCompleted) => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        todo: InputValue,
        isCompleted: updatedIsCompleted, // 체크박스 상태 서버에 보내기
      }),
    })
      .then(response => response.json())
      .then(() => {
        setModify(false);
        setTodoList(prevList =>
          prevList.map(item =>
            item.id === id ? { ...item, todo: InputValue } : item
          )
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = id => {
    fetch(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          const updatedTodoList = todoList.filter(
            todoItem => todoItem.id !== id
          );
          setTodoList(updatedTodoList);
        } else {
          throw new Error('Todo 삭제에 실패했습니다.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChecked = () => {
    const updatedIsCompleted = !isChecked;
    setIsChecked(updatedIsCompleted);
    if (modify) {
      return;
    } else {
      handleUpdate(id, updatedIsCompleted);
    }
  };

  const handleModify = () => {
    setModify(!modify);
  };

  const handleCancel = () => {
    setModify(false);
  };

  return (
    <li key={id}>
      <label className="lnp_todo">
        <input
          className="check_todo"
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
        />
        {modify ? (
          <span className="wrap_todolist">
            <input
              className="inp_todolist"
              type="text"
              value={InputValue}
              data-testid="modify-input"
              onChange={e => setInputValue(e.target.value)}
            />
          </span>
        ) : (
          <span className="txt_todo">{todo}</span>
        )}
      </label>
      <div className="wrap_btn">
        <button
          className="btn_modify"
          type="button"
          data-testid={modify ? 'submit-button' : 'modify-button'}
          onClick={
            modify ? () => handleUpdate(id, isChecked) : () => handleModify(id)
          }
        >
          {modify ? '제출' : '수정'}
        </button>
        <button
          className="btn_delete"
          type="button"
          data-testid={modify ? 'cancel-button' : 'delete-button'}
          onClick={modify ? () => handleCancel() : () => handleDelete(id)}
        >
          {modify ? '취소' : '삭제'}
        </button>
      </div>
    </li>
  );
};

export default TodoList;
