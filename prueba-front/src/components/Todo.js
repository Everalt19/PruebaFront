import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsCheckBox } from 'react-icons/bs';

;



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div>
        {todo.text}
      </div>

      <div className='icons'>
        <AiOutlineEdit id="icon1"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <RiDeleteBin5Line id="icon2"
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <BsCheckBox id="icon3"
          key={todo.id} onClick={() => completeTodo(todo.id)}
          className='delete-icon'
        />

      </div>
    </div>
    
  ));

  
};

export default Todo;
