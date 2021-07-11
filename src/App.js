import React, {useState} from 'react';
import ToDoListDisplay from './components/ToDoListDisplay';
import ToDoList from './components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isDone, setIsDone] = useState(false);

  const [tasks,setTask] = useState([
    {
      tasks: "Buy some sushi!",
      complete: false,
    },
    {
      tasks: "Buy some char siu!",
      complete: false,
    }
  ])

  const [form, setForm] = useState ([
    {
    tasks: "",
    complete: false
    }
  ])

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const addTask = (e) => {
    e.preventDefault();
    setTask([...tasks, form])
    setForm({
      tasks:""
    })
  }

  const delete_this = (this_id) => {
    setTask([...tasks.slice(0,this_id),...tasks.slice(this_id+1)])
  }

  const toggleComplete = (this_id) => {
    tasks.forEach((task, i) => {
      task.complete = (this_id === i ? !task.complete : task.complete);
      setTask([...tasks.slice(0,i), task,...tasks.slice(i+1)]);
    })
  }

  return (
    <>
    <ToDoList inputs={form} addTask={addTask} handleForm={handleForm}/>
    <div className="App">
    <h4>To do list:</h4>
      {
        tasks.map((task, i) => {
          return <ToDoListDisplay
                    key={i}
                    this_id={i}
                    tasks={task.tasks}
                    complete={task.complete}
                    delete_this={delete_this}
                    done={isDone}
                    setDone={setIsDone}
                    toggleComplete={toggleComplete}
                    />
        })
      }
    </div>
    </>
  );
}

export default App;
