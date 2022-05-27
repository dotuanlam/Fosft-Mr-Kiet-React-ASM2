import React, { useState } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import "./App.scss";

const App = () => {
  const [task, setTask] = useState([
    {
      name: null,
      level: null,
      id: null,
    },
  ]);

  const handleAddTask = (name, level) => {
    const id = Math.floor(Math.random() * 99999999999999999999999);
    setTask((prev) => [
      ...prev,
      {
        name: name,
        level: level,
        id: id,
      },
    ]);
  };

  return (
    <div className="App">
      <div>
        <NewTask handleAddTask={handleAddTask} />
      </div>
      <div>
        <TaskList task={task} />
      </div>
    </div>
  );
};

export default App;
