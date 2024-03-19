import React, { useEffect } from "react";
import { Button, Card, Col, Container, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchListaProprietari } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

function Proprietario() {
  const dispatch = useDispatch();
  const listaProprietari = useSelector((state) => state.proprietario.listaProprietari);

  useEffect(() => {
    dispatch(fetchListaProprietari());
  }, []);
  return (
    <Container className="mt-3">
      <h2 className="text-center">Lista proprietari</h2>
      <Row>
        {listaProprietari &&
          listaProprietari.map((obj, index) => (
           
              <Col className="col-4" key={index}>
                <Card className="bg-light bg-opacity-75">
                  <Card.Body>
                    <Card.Title>
                      {obj.proprietario.nome} {obj.proprietario.cognome}
                    </Card.Title>
                    <div className="d-flex align-items-baseline">
                      <Card.Subtitle>Codice fiscale: </Card.Subtitle>
                      <Card.Text className="ms-2">{obj.proprietario.codiceFiscale}</Card.Text>
                    </div>

                    <div className="d-flex align-items-baseline">
                      <Card.Subtitle>Numero telefono: </Card.Subtitle>
                      <Card.Text className="ms-2">{obj.proprietario.numeroTelefono}</Card.Text>
                    </div>
                    <div className="d-flex justify-content-end">
                      <Link className="btn btn-dark me-1" to={"/Proprietario/Details/" + obj.proprietario.idProprietario}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </Link>
                      <Link className="btn btn-dark" to={"/Proprietario/Edit/" + obj.proprietario.idProprietario}>
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
}

export default Proprietario;
