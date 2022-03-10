import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
{/* empty array because we have no to-do's */}
const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false}])



  return (
    <div className="App">
      <header className="App-header">
      
      <h1> To do list</h1>
      <TodoList todos={todos}/>
      <input type = "text"/>
      <button>Add Todo</button>
      <button>Clear list</button>
      <div>0 left to do </div>








      </header>
    </div>
  );
}

export default App;
