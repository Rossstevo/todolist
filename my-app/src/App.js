import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.tools'
function App() {


  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  // on load, display any existing todo's (if there are any). Convert to array using JSON.parse
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // save todos to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  // togle Todos from incomplete/complete
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodos(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
   
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    }
    )
    console.log(name)
    todoNameRef.current.value = null;

  }
  return (
    <div className="App">
      <header className="App-header">

        <h1> To-do list </h1>
        {/* <div className = "Test-Class2"> */}
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        {/* </div> */}
        
        <input placeholder="wash the cat" className = "Text-input" ref={todoNameRef} type="text" />
        
        <button className = "Add-button" onClick={handleAddTodo}>Add</button> 
        <button className = "Add-button" onClick={handleClearTodos}>Clear done</button>
        
        {/* <div>you have {todos.filter(todo => !todo.complete).length} left to do </div> */}
        







      </header>
    </div>
  );
}

export default App;
