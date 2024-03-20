import { useEffect } from "react";
import { fetchProprietarioById } from "../../../redux/actions/proprietario";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

function DetailProprietario() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const p = useSelector((state) => state.proprietario.singoloProprietario);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <div className="d-flex align-items-center my-3">
                  <h5 className="m-0 me-1">Animali</h5>
                  <Button variant="light" onClick={handleShow}>
                    Aggiungi animale
                  </Button>
                </div>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Aggiungi animale</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Chiudi
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Aggiungi
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Row>
                  {p.animali.map((obj, index) => (
                    <Container key={index}>
                      <Col className="col-2">
                        <Card className="bg-light bg-opacity-75">
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
