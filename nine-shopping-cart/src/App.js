import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      alert("Already added in cart");
      // toast.error("already added in cart");
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);

    // toast("Purchase Complete", {
    //   type: "success"
    // });

    alert("Purchase Complete");
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      {/* <ToastContainer position="bottom-center" /> */}
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
