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
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type = "text"/>
      <button onClick = {handleAddTodo}>Add Todo</button>
      <button>Clear list</button>
      <div>0 left to do </div>








      </header>
    </div>
  );
}

export default App;
