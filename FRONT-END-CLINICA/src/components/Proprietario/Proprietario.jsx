import React, { useEffect } from "react";
import { Button, Card, Col, Container, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchListaProprietari } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

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
            <div key={index}>
              <Col className="col-4">
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

                    <Link className="btn btn-dark" to={"/Proprietario/Details/" + obj.proprietario.idProprietario}>
                      Dettagli
                    </Link>
                    <Link className="btn btn-dark" to={"/Proprietario/Edit/" + obj.proprietario.idProprietario}>
                      Modifica
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          ))}
      </Row>
    </Container>
  );
}

export default Proprietario;
