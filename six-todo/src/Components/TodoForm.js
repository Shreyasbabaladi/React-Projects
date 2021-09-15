import React,{useState,useContext} from 'react';
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import {v4} from "uuid";
import TodoContext from "../Context/TodoContext";
import {ADD_TODO} from "../Context/action.type";

const TodoFrom =()=>{
    const[todoString,setTodoString]=useState("");
    const {dispatch}=useContext(TodoContext);

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(todoString===""){
            return alert("please enter a todo");
        }
        const todo={
            todoString,
            id:v4()
        }

        dispatch({
            type:ADD_TODO,
            payload:todo
        });

        setTodoString("");
    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next Todo"
                    onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                        color="success">
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}
export default TodoFrom;