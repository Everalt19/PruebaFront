import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
 // const [input2, setInput2] = useState(props.edit ? props.edit.value : ''); 
 
  const inputRef = useRef();


  //useEffect(() => {
  //inputRef.current.focus();
  //});

  const handleChange = e => {
    setInput(e.target.value);
  };
  {/* 
  const handleChange2 = e => {
    setInput2(e.target.value);
  };
*/}

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  {/*
  const handleSubmit2 = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input2
    });
    setInput2('');
  };

*/}

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Ingrese la edicion'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Editar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Ingrese una tarea'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
             Agregar
          </button>
         
         {/*
          <br></br>
          <br></br>
          <input
            placeholder='Ingrese numero de tareas aleatorias'
            value={input2}
            onChange={handleChange2}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit2} className='todo-button'>
             Agregar
          </button>
         */}
         
        </>
      )}
    </form>
    

    

  );

 
}



export default TodoForm;
