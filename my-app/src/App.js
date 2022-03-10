import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
      <h1> To do list</h1>
      <TodoList/>
      <input type = "text"/>
      <button>Add Todo</button>
      <button>Clear list</button>
      <div>0 left to do </div>








      </header>
    </div>
  );
}

export default App;
