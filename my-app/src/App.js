import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'

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
  todo.complete = ! todo.complete
  setTodos(newTodos)
}

function handleClearTodos(e) {
  const newTodos =todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

function handleAddTodo(e) {
  // iD = iD + 1;
  
  const name = todoNameRef.current.value
  if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    }
      )
    console.log(name)
    todoNameRef.current.value = null;
  
}
  return (
    <div className="App">
      <header className="App-header">
      
      <h1> To do list</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type = "text"/>
      <button onClick = {handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear list</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do </div>








      </header>
    </div>
  );
}

export default App;
