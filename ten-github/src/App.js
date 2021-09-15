import React,{useState} from "react";
import './App.css';

//React-router
import { BrowserRouter as Router ,Switch,Route,Link } from "react-router-dom";

//Reactstrap
import {Container,InputGroupText}from"reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//Toastify
import { ToastContainer,toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

//firebase
import firebase from 'firebase/app';
import 'firebase/auth';

//Componends
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import SignIn from "./Pages/SignIn";
import Signout from "./Pages/Signout";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

//Context
import { UserContext } from "./Pages/Context/UserContext";


const App=()=> {
  const [user,setUser]=useState(null);
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signout" component={Signout}/>
          <Route exact path="*" component={PageNotFound}/>
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
