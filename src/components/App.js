import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks,setTask]=useState(TASKS)
  const[category,setCategory]=useState("All")

function onTaskFormSubmit(newitem){
setTask([...tasks,newitem]);
}
function deleteTask(deletedtext){
  setTask(tasks.filter((task)=>task.text!==deletedtext))
}
  const taskToDisplay=tasks.filter(
    (task)=>category==="All"|| task.category===category);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={setCategory} 
      select={category}/>
      <NewTaskForm  categories={CATEGORIES.filter((CATEGORY)=>CATEGORY !=="All")}
      onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList deleteTask={deleteTask} tasks={taskToDisplay}/>
    </div>
  );
}

export default App;
