import React from "react"
export default function Todo({todo, toggleTodo}){
    function todoClick() {
        toggleTodo(todo.id)
    }
    return (
    <div>
        <label class= "check">
            <input type="checkbox" checked={todo.complete} onChange={todoClick}/>
        {todo.name}
        </label>
        

    </div>

    )
}
