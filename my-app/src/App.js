import React, {useState, useRef} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
{/* empty array because we have no to-do's */}
const [todos, setTodos] = useState([])
const todoNameRef = useRef();

function handleAddTodo(e) {
  const name = todoNameRef.current.value
  if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: name, complete: false}]
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
