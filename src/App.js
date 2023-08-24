import React, { useState } from 'react';
import './App.css'; 
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';


function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const handleInputChange = (event) => {
    setTaskText(event.target.value);
    console.log(event.target.contentEditable);
  };

  const handleAddTask = () => {
    if (!taskText) {

    }else{
      setTasks([...tasks,taskText]);
    }
    setTaskText('');
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task,index) => {
      return(
        index !== taskId
      );
    }));
  };

  return (
    <div>
      <Container maxWidth="sm">
      <h1>React To-Do List</h1>
      <div className='add-list'>
        <input
          type="text"
          placeholder="Add a task"
          value={taskText}
          onChange={handleInputChange}
        />
        {/* <i className='far fa-trash-alt add-btn' title='Add item'></i> */}
        <Button variant="contained" onClick={handleAddTask} className='btn-green'>+</Button>
      </div>
      <ul>
        {tasks.map((task,index) => (
          <li key={index}>
            <h1>{task}</h1>
            <ButtonGroup color="secondary" aria-label="outlined secondary button group">
              {/* <Button  className='edit-btn' color="secondary" onClick={() => handleEditTask(index)}>Edit</Button> */}
              <Button  className='btn-red' color="secondary" onClick={() => handleDeleteTask(index)}>Delete</Button>
            </ButtonGroup>
          </li>
        ))}
      </ul>
      </Container>
    </div>
  );
}

export default App;
