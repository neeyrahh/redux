import React from 'react';
import Todoinput from './Todoinput';
import Todo from "./Todo";
import "./Todolist.css";
import{CSSTransition,TransitionGroup} from "react-transition-group";
import {useSelector, useDispatch} from "react-redux";
import{completeTodo,addTodo,removeTodo,updateTodo} from "../redux/action";

const Todolist = () => {
    const state = useSelector((state) => ({...state.todos}));
    let dispatch = useDispatch()
    const create =(newTodo)=>{
        dispatch(addTodo(newTodo))
    };
    const update= (id ,updatedTask) =>{
        dispatch(updateTodo({id,updatedTask}))
    }
    return (
        <div className= "Todolist">
            <h1>To Do</h1>
            <Todoinput createTodo={create}/>
            <ul>
                <TransitionGroup className ="todo=list">
                    {state.todos && state.todos.map((todo) =>{
                        return(
                            <CSSTransition key = {todo.id} classNames = "todo">
                              <Todo
                              key = {todo.id}
                              id = {todo.id}
                              task ={todo.task}
                              completed = {todo.completed}
                              toggleTodo ={() =>dispatch(completeTodo(todo))}
                              removeTodo={() => dispatch(removeTodo(todo))}
                              updateTodo={update}
                              />
                            </CSSTransition>
                        )
                    })}

                </TransitionGroup>
            </ul>
        </div>
    )
}

export default Todolist
