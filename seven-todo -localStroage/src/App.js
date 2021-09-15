import React, { useState ,useEffect  } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos"


const App = () => {
  const [todos,setTodos]=useState([]);

  useEffect(()=>{
    const localTodos = localStorage.getItem("todos")
    if(localTodos) setTodos(JSON.parse(localTodos))
  },[])

  const todoList=todo=> setTodos([...todos,todo]);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const markComplete=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  return (
      <Container fluid>
        <h1>Todo App with local storage</h1>
        <Todos todos={todos} markComplete={markComplete}/>
        <TodoForm todoList={todoList}/>
      </Container>
  );
};

export default App;
