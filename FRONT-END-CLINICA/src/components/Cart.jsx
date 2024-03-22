import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/reducers/cartReducer";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Carrello</h1>

      <Row className="g-3">
        {cartItems &&
          cartItems.map((item, index) => (
            <Col className="col-12 " key={`${index}-prodotto`}>
              <Card className="bg-light bg-opacity-75">
                <Card.Body>
                  <Card.Title>{item.nomeProdotto}</Card.Title>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Uso:</Card.Subtitle>
                    <Card.Text className="ms-2">{item.descrizioneProdotto}</Card.Text>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Prezzo:</Card.Subtitle>
                    <Card.Text className="ms-2">{item.prezzoProdotto}</Card.Text>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Quantità:</Card.Subtitle>
                    <Card.Text className="ms-2">{item.quantita}</Card.Text>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Button className="btn btn-dark" onClick={() => dispatch(removeFromCart(item))}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <Link to="/checkout" className="btn btn-primary">
        CHECKOUT
      </Link>
    </Container>
  );
}

export default Cart;
