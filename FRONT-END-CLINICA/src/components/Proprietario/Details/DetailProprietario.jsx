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
      <Container className="mt-4">
        <Row>
          <Col>
            <h2 className="">Dettagli proprietario</h2>
            {p && (
              <>
                <h4>
                  {p.proprietario.nome} {p.proprietario.cognome}
                </h4>
                <div className="d-flex align-items-baseline">
                  <strong>Codice fiscale: </strong>
                  <span className="ms-2">{p.proprietario.codiceFiscale}</span>
                </div>
                <div className="d-flex align-items-baseline">
                  <strong>Numero telefono: </strong>
                  <span className="ms-2">{p.proprietario.numeroTelefono}</span>
                </div>
                <h5 className="mt-3">Animali</h5>

                <Row>
                  {p.animali.map((obj, index) => (
                    <Container>
                      <Col className="col-2">
                        <Card className="bg-light bg-opacity-75" key={index}>
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
                            <div className="d-flex align-items-baseline">
                              <Card.Subtitle>Microchip: </Card.Subtitle>
                              <Card.Text className="ms-2">{obj.microchip ? obj.microchip : "No"}</Card.Text>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Container>
                  ))}
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailProprietario;
