import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/reducers/cartReducer";
import { Container, Row } from "react-bootstrap";

function Success() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, []);

  return (
    <Container>
      <Row className=" justify-content-center">
        <h1>Ordine completato!</h1>
        <h2>Grazie per il tuo acquisto!</h2>
      </Row>
    </Container>
  );
}

export default Success;
