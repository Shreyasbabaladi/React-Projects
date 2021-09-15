import React from 'react';
import {Card,CardText,CardBody,CardTitle} from 'reactstrap';
import {FaEncelope, FaMapMarkedAlt,FaPhone} from 'react-icons/fa';

const MyCards=({details})=>{
    return(
        <Card>
            <CardBody className="text-center">
            <img height="150" width="150" 
            className="rounded-circle img-thumbnail border-danger"
            src={details.picture?.large}/>
            </CardBody>
            <CardTitle className="text-primary text-center">
                <h1>
                    <span >{`${details.name?.title} `}</span>
                    <span>{details.name?.first}</span>
                    <span>{details.name?.last}</span>
                </h1>
            </CardTitle>
            <CardText className="text-center">
                <FaMapMarkedAlt size="25"/>
                <p>{details.location?.city}</p>
                <FaPhone/>
                <p>{details.phone}</p>
            </CardText>
        </Card>
    )};
    export default MyCards;