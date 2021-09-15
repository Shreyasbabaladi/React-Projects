import React,{useReducer} from 'react'
import TodoContext from './Context/TodoContext';
import todoReducer from './Context/reducer';
import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoFrom from './Components/TodoForm';
import './App.css';

function App() {
  const [todos,disptch]=useReducer(todoReducer,[]);
  return (

    <TodoContext.Provider value={{todos,disptch}} >
      <Container>
        <h1>Todo APP with Context API</h1>
        <TodoFrom/>
      </Container>
    </TodoContext.Provider>
    
    
  );
}

export default App;
