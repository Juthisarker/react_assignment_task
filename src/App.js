import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
import socketIO from 'socket.io-client';

const ws = 'http://localhost:5000';

const App =() => {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
     const getTask = async () =>{
          const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
     }
     getTask();
     socketIO(ws);
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/posts/all');
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
    return data;
  }
  const addTask = async(task) => {

  }
  return (
    <div className="container">
       <Header />
       {tasks.length > 0 ? (<Tasks tasks = {tasks}/>) : ('No Tasks to show' )}
       <AddTask onAdd={addTask}/>
    </div>
  );
}

export default App;
