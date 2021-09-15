import React,{useState,useEffect}from 'react';
import {Container,Row,Col, Card} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCard from './Componends/Cards'
import './App.css';
import Axios from "axios";


function App() {
  const [details,setDetails]=useState({});

  const fetchDetails= async()=>{
    const {data}= await Axios.get('https://randomuser.me/api/');
    setDetails(data.results[0]);
  }

  useEffect(()=>{
    fetchDetails();
  },[]);

  return (
    
     <Container fluid className="p-4 pg-primary App">
       <Row>
         <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
         </Col>
       </Row>
     </Container>
   
  );
}

export default App;
