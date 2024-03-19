import React, { useEffect } from "react";
import { fetchProprietarioById } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

function DetailProprietario() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const p = useSelector((state) => state.proprietario.singoloProprietario);

  useEffect(() => {
    dispatch(fetchProprietarioById(id));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h3 className="text-center">Dettagli proprietario</h3>
            {p && (
              <Card className="bg-light bg-opacity-75">
                <Card.Body>
                  <Card.Title>
                    {p.proprietario.nome} {p.proprietario.cognome}
                  </Card.Title>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Codice fiscale: </Card.Subtitle>
                    <Card.Text className="ms-2">{p.proprietario.codiceFiscale}</Card.Text>
                  </div>

                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Numero telefono: </Card.Subtitle>
                    <Card.Text className="ms-2">{p.proprietario.numeroTelefono}</Card.Text>
                  </div>
                  <div>
                    <Card.Subtitle>Animali: </Card.Subtitle>

                    {p.animali.map((obj, index) => (
                      <div key={index}>
                        <Card.Body>
                          <div className="d-flex align-items-baseline">
                            <Card.Subtitle>Nome: </Card.Subtitle>
                            <Card.Text className="ms-2">{obj.nome}</Card.Text>
                          </div>
                          <div className="d-flex align-items-baseline">
                            <Card.Subtitle>Specie: </Card.Subtitle>
                            <Card.Text className="ms-2">{obj.specie}</Card.Text>
                          </div>
                          <div className="d-flex align-items-baseline">
                            <Card.Subtitle>Data di nascita: </Card.Subtitle>
                            <Card.Text className="ms-2">{new Date(obj.dataNascita).toLocaleDateString()}</Card.Text>
                          </div>
                          <div className="d-flex align-items-baseline">
                            <Card.Subtitle>Colore: </Card.Subtitle>
                            <Card.Text className="ms-2">{obj.coloreAnimale}</Card.Text>
                          </div>
                        </Card.Body>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailProprietario;
