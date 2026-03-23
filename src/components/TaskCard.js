import React from 'react'
import { useDraggable } from "@dnd-kit/core";


function TaskCard({ task, deleteTask, editTask }) {
const { attributes, listeners, setNodeRef, transform } = useDraggable({
 id: task.id,
});
const style = {
   transform: transform
     ? `translate(${transform.x}px, ${transform.y}px)`
     : undefined,
 };
const getDateLabel = (date) => {
 if (!date) return "";

 const today = new Date();
 const due = new Date(date);

 // remove time (important)
 today.setHours(0, 0, 0, 0);
 due.setHours(0, 0, 0, 0);

 const diff = (due - today) / (1000 * 60 * 60 * 24);

 if (diff === 0) return "Today";
 if (diff === 1) return "Tomorrow";
 if (diff < 0) return "Overdue ❌";

 return due.toLocaleDateString();
};



  return (
   <div
     ref={setNodeRef}
     style={style}
     className={`task-card ${task.priority}`}
    >
     {/* 🔥 Drag handle only here */}
     <div {...listeners} {...attributes} style={{ cursor: "grab" }}>
       <p>{task.text}</p>
       <p
       style={{
        color:
      getDateLabel(task.dueDate) === "Today"
       ? "#3b82f6"
       : getDateLabel(task.dueDate) === "Tomorrow"
       ? "#f59e0b"
       : getDateLabel(task.dueDate) === "Overdue ❌"
       ? "red"
       : "white",
 }}
       >📅 {getDateLabel(task.dueDate)}</p>
     </div>

     {/* Buttons (NO drag here) */}
     <div>
       <span
         className="icon-btn"
         onClick={() => editTask(task.id)}
        >
         ✏️
       </span>

       <span
         className="icon-btn"
         onClick={() => deleteTask(task.id)}
        >
         🗑️
       </span>
     </div>
   </div>
 );
}

export default TaskCard;

