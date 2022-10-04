import React from "react";
import Task from "./Task"
function TaskList({tasks,deleteTask}) {
  const list=tasks.map((task)=>(
  <Task 
  key={task.text}
  text={task.text}
  category={task.category}
  deleteTask={deleteTask}
  />
  ));
  return (<div className="tasks">{list}</div>);
}

export default TaskList;
