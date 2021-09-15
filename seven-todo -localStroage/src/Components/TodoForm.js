import React,{useState}from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form
}from "reactstrap";
import {v4} from "uuid";


const TodoForm=({todoList})=>{
  const [todostring,setTodoString]=useState("");


  const handleSubmit=e=>{
    e.preventDefault();
    if(todostring==="") return alert("please fill some value");

    const todo={
      todostring,
      id:v4()
    }

    todoList(todo);
    
    setTodoString("");
  }


  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
        <Input
         placeholder="Enter a todo String"
         value={todostring}
         name="todo"
         id="todo"
         type="text"
         onChange={e=>setTodoString(e.target.value)}
         />
          <InputGroupAddon addonType="prepend">
              <Button
              color="success"
              >
                Add
              </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
export default TodoForm;