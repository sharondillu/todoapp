import { useState } from "react";
import  AddTask  from "./components/AddTask";
import  Column  from "./components/Column";
import './App.css';
import {DndContext}from "@dnd-kit/core";


function App() {

  
 const [tasks, setTasks] = useState([]);
const addTask = (text, priority,dueDate) => {
   const newTask = {
     id: Date.now(),
     text,
     column: "todo",
     priority,
     dueDate,
     //column:"todo"
   };

   setTasks([...tasks, newTask]);
 };

 const deleteTask = (id) => {
   setTasks(tasks.filter((t) => t.id !== id));
 };

 const editTask = (id) => {
   const newText = prompt("Edit task");
   if (!newText) return;

   setTasks(
     tasks.map((t) =>
       t.id === id ? { ...t, text: newText } : t
     )
   );
 };
 const handleDragEnd = (event) => {
 const { active, over } = event;

 if (!over) return;

 const taskId = active.id;
 const newColumn = over.id;

 setTasks((prev) =>
   prev.map((task) =>
     task.id === taskId ? { ...task, column: newColumn } : task
   )
 );
};


 
  return (


    <DndContext onDragEnd={handleDragEnd}>
 {/* your existing UI */}


    <div className="app">
    
  <h1 className="app-title">Advanced To-Do App</h1>

   <AddTask addTask={addTask} />
   <div className="board-container">

     <div className="columns">

       <Column
         title="To Do"
         tasks={tasks.filter((t) => t.column === "todo")}
         deleteTask={deleteTask}
         editTask={editTask}
       />

       <Column
         title="In Progress"
         tasks={tasks.filter((t) => t.column === "inprogress")}
         deleteTask={deleteTask}
         editTask={editTask}
       />

       <Column
         title="Done"
         tasks={tasks.filter((t) => t.column === "done")}
         deleteTask={deleteTask}
         editTask={editTask}
       />
       </div>



      
    </div>
    </div>
    </DndContext>
  );
}

export default App;
