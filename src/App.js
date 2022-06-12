
import './App.css';
import TaskList from './Component/TaskListe/TaskListe';
import AddTask from './Component/AddTask/AddTask';
import FiltreTodo from './Component/FiltreToDo/FiltreToDo';

function App() {
  return (
    <div className="App">
      <div className='box'>
      <h1 className='title'> My app </h1>
      <AddTask/> 
      <FiltreTodo/> 
      <TaskList/>
      
  </div> 
    </div>
  );
}

export default App