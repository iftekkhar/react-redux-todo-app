import './App.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import Filters from './Components/Filters';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
