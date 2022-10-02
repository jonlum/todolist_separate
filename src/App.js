import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {
  const [todo, setTodo] = useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });

  }


  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }



  return (
    <div className='App'>
      <form onSubmit={addTodo}>
        <label>Date:
          <input type="date" name="date" value={todo.date} onChange={inputChanged} />
        </label>
        <label>Description:
          <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
        </label>
        <input type="submit" value="Add" />
      </form>
      <Todolist todos={todos} />
    </div>
  );
}

export default App;