import {React,useState} from 'react';
 function AddTask ({addTask})  {
   const [text, setText] = useState(""); 
   const [priority,setPriority]=useState("low");
    const [dueDate, setDueDate] = useState(""); 
    

   const handleAdd=()=>{
    if(!text)return;
    addTask(text,priority,dueDate);
    setText("");
    setDueDate("");
   }


  return (
    <div className='add-task-box'>

        <input className='task-input'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='Enter Task'/>

        <select className='task-select'
        onChange={(e)=>setPriority(e.target.value)}>

            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        <input type="date"
        className='task-date' onChange={(e)=>setDueDate(e.target.value)}/>
        
        <button className="add-btn"onClick={handleAdd}>Add Task</button>
    </div>
  )
}
export default AddTask;