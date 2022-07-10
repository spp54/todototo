import React from "react";
import Todo from "./Todo";

export default function Todolist({ todoprop, toggleTodo }) {
    
    return (
        
            todoprop.map(todo => {
                return <Todo key = {todoprop.id} toggleTodo={toggleTodo} todo={todo}/>
            })
        
    )
}
