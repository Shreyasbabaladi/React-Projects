import React from 'react';
import Card from './card';

const CardSection=()=>{
  let text="Some quick example text to build on the card title and make up the bulk of the card's content.";
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
            <Card CardTitle="Card1" BtnName="Button1" CardText={text}/>
            </div>
            <Card CardTitle="Card2" BtnName="Button2" CardText={text}/>
            <div className="col-4">
            <Card CardTitle="Card3" BtnName="Button3" CardText={text}/>
            </div>
          </div>
        </div>
      </section>

    );
};
export default CardSection;