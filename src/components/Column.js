import TaskCard from "./TaskCard";
import React from 'react'
import { useDroppable } from "@dnd-kit/core";

function Column({ title, tasks, deleteTask, editTask }) {

const { setNodeRef } = useDroppable({
 id: title.toLowerCase().replace(" ", ""),
});


 return (
   <div ref={setNodeRef} className="coloumns"
   
   >
     <h2>{title}</h2>

     {tasks.map((task) => (
       <TaskCard
         key={task.id}
         task={task}
         deleteTask={deleteTask}
         editTask={editTask}
       />

     ))}
   </div>
 );
}

export default Column;

