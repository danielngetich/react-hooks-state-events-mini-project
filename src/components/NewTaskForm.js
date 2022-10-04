import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit,categories}) {
  const [text,setText]=useState("")
  const [cate,setCate]=useState("code")

  function handleSubmit(e){
  e.preventDefault();
  const newitem={
    text:text,
    category:cate
  }
  onTaskFormSubmit(newitem);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input value={text} type="text" name="text" onChange={(e)=>setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={cate} onChange={(e)=>setCate(e.target.value)}>
          {categories.map((categor)=>(<option key={categor} >{categor}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
