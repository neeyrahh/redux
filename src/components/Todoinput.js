import React,{useState} from "react"
import "./Todoinput.css";

const Todoinput =({createTodo})=>{
    const[task,setTask] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        createTodo(task);
        setTask("");
    };
    return(
        <form className="Todoinput" onSubmit= {handleSubmit} >
            <input  
            type= "text"
            placeholder="Enter Task"
            id = "task"
            name = "task"
            value={task}
            onChange={(e) => setTask(e.target.value)}/>
            <button>Add Todo</button>
        </form>
    )

}
export default Todoinput