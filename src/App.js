import Header from "./components/Header";
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react';
const App =() => {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
     const getTask = async () =>{
          const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
     }
     getTask();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/posts/all');
    const data = await res.json();
    console.log(data);
    setTasks([...tasks, data]);
    return data;
  }
  const addTask = async(task) => {
     console.log('tasssssssssssk'+task);
    // const formData = new FormData();
		// formData.append('File', task.file);
    // console.log(formData);
   
    // const data = await res.json();

    // 
  }
  return (
    <div className="container">
       <Header />
       <AddTask onAdd={addTask}/>
       {tasks.length > 0 ? (<Tasks tasks = {tasks}/>) : ('No Tasks to show' )}
    </div>
  );
}

export default App;
