import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchListaProprietari } from "../../redux/actions/actions";

function Proprietario() {
  const dispatch = useDispatch();
  const listaProprietari = useSelector((state) => state.proprietario.listaProprietari);

  useEffect(() => {
    dispatch(fetchListaProprietari());
  }, []);
  return (
    <Container>
      <h3 className="text-center">Lista proprietari</h3>
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

                    <Button variant="light">Dettagli</Button>
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
