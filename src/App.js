import React, { useState, useRef, useEffect } from "react";
import "./App.css"
import Todolist from "./TodoList";
import { v4 as uuidv4 } from "uuid"
const STORAGE = 'todoApp.todos'



function App() {
 const [todos, setTodos] = useState([])
 const todoNameRef = useRef()

 useEffect(() => {
   const storedTodos = JSON.parse (localStorage.getItem(STORAGE))
   if (storedTodos) setTodos (storedTodos)
 },[])

 useEffect (() => {
   localStorage.setItem(STORAGE, JSON.stringify(todos))
 }, [todos])

 function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}
  
 function handleAddTodo(e){
   const name =  todoNameRef.current.value
   if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
   todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  } 

 return (
    <>
    <body>
      <header>
           
              <ul>
                   <h1>Your To Do List</h1>
                   <Todolist todoprop = {todos} toggleTodo={toggleTodo}/>
                   <li><input ref={todoNameRef} type="text"/></li>
                   <li><button onClick={handleAddTodo}>Add To Todo Item </button></li>
                   <li><button onClick={handleClearTodos}>Check Box and press here to Remove</button></li>
                   <li><div class = "left">{todos.filter(todo => !todo.complete).length} left to do</div></li>
             </ul>
          
     </header>
    </body>
    </>


  )
    
}

export default App;
