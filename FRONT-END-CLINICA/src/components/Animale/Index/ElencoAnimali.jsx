import { useEffect, useState } from "react";
import { fetchListaAnimali } from "../../../redux/actions/animale";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export const ElencoAnimali = () => {
  const dispatch = useDispatch();
  const animali = useSelector((state) => state.animale.listaAnimali);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchListaAnimali());
  }, []);

  const filteredAnimali = animali
    ? animali.filter((animale) => animale.animale.nome.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <Container className="mt-3">
      <h1 className="text-center">Lista animali</h1>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Cerca animale" onChange={(e) => setSearch(e.target.value)} />
          </Form.Group>
        </Form>
      </div>
      <Row className="g-3">
        {filteredAnimali &&
          filteredAnimali.map((obj, index) => (
            <Col className="col-4" key={index}>
              <Card className="bg-light bg-opacity-75">
                <Card.Body>
                  <Card.Title>{obj.animale.nome}</Card.Title>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Specie</Card.Subtitle>
                    <Card.Text className="ms-2">{obj.animale.specie}</Card.Text>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Link className="btn btn-dark me-1" to={"/Animale/Details/" + obj.animale.idAnimale}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </Link>
                    <Link className="btn btn-dark" to={"/Animale/Edit/" + obj.animale.idAnimale}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
