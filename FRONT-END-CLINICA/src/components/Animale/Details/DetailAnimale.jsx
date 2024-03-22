import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAnimaleById } from "../../../redux/actions/animale";
import { fetchCreateVisita } from "../../../redux/actions/visite";

function DetailAnimale() {
  const [idAnimale, setIdAnimale] = useState("");
  const [dataVisita, setDataVisita] = useState("");
  const [esameObiettivo, setEsameObiettivo] = useState("");
  const [descrizioneCura, setDescrizioneCura] = useState("");
  const [costoVisita, setCostoVisita] = useState("");

  const [refresh, setRefresh] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const a = useSelector((state) => state.animale.listaAnimali);
  const animali = useSelector((state) => state.animale.listaAnimali);
  const v = useSelector((state) => state.visita.listaVisite);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchAnimaleById(id));
  }, [refresh]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const visitaObj = {
      IdAnimale: idAnimale,
      DataVisita: dataVisita,
      EsameObiettivo: esameObiettivo,
      DescrizioneCura: descrizioneCura,
      CostoVisita: costoVisita,
    };

    dispatch(fetchCreateVisita(visitaObj));
    setRefresh((prev) => !prev);
    handleClose();
  };

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col>
            <h2 className="">Dettagli animale</h2>
            {a && (
              <>
                <div className="row my-5">
                  <div className=" col-md-10 offset-md-1">
                    <div className="card align-items-center p-2"></div>
                    {/* <h4>{a.animale.nome}</h4> */}
                    <div className="d-flex align-items-baseline">
                      <strong>Specie: </strong>
                      {/* <span className="ms-2">{a.animale.specie}</span> */}
                    </div>
                    <div className="d-flex align-items-baseline">
                      <strong>Data di nascita: </strong>
                      {/* {new Date(a.animale.dataNascita).toLocaleDateString()} */}
                    </div>
                    <div className="d-flex align-items-baseline">
                      <strong>Colore: </strong>
                      {/* <span className="ms-2">{a.animale.colore}</span> */}
                    </div>
                    <div className="d-flex align-items-baseline">
                      <strong>Microchip:</strong>
                      {/* <span className="ms-2">{a.animale.microchip ? a.animale.microchip : "No"}</span> */}
                    </div>
                    <div className="d-flex align-items-baseline">
                      <strong>Proprietario:</strong>
                      <span className="ms-2">
                        {/* {a.animale.proprietario.nome} {a.animale.proprietario.cognome} */}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <Button variant="primary" onClick={handleShow}>
                    Aggiungi nuova visita
                  </Button>
                  <h4 className="my-5 text-center">Elenco Visite</h4>
                </div>

                <Modal show={show} onHide={handleClose}>
                  <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                      <Modal.Title className="text-center">Aggiungi Visita</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Select value={idAnimale} onChange={(e) => setIdAnimale(e.currentTarget.value)}>
                          <option value="">Seleziona un animale</option>
                          {animali &&
                            animali.map((item) => (
                              <option key={item.animale.idAnimale} value={item.animale.idAnimale}>
                                {item.animale.nome}
                              </option>
                            ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Data Visita</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Data visita"
                          value={dataVisita}
                          onChange={(e) => setDataVisita(e.currentTarget.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Esame Obiettivo</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Esame obiettivo"
                          value={esameObiettivo}
                          onChange={(e) => setEsameObiettivo(e.currentTarget.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Descrizione Cura</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Descrizione Cura"
                          value={descrizioneCura}
                          onChange={(e) => setDescrizioneCura(e.currentTarget.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Costo Visita</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Costo Visita"
                          value={costoVisita}
                          onChange={(e) => setCostoVisita(e.currentTarget.value)}
                        />
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Chiudi
                      </Button>
                      <Button variant="primary" type="submit">
                        Aggiungi
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal>

                <Row className="">
                  {v.visita.map((obj, index) => (
                    <Col className="col-12 col-md-6 col-lg-4" key={index}>
                      <Card className="bg-light bg-opacity-75">
                        <Card.Body>
                          <div className="d-flex align-items-baseline">
                            <Card.Subtitle>Data Visita: </Card.Subtitle>
                            <Card.Text className="ms-2">{new Date(obj.dataVisita).toLocaleDateString()}</Card.Text>
                          </div>
                          <div className="d-flex align-items-baseline">
                            <Card.Subtitle>Costo visita: </Card.Subtitle>
                            <Card.Text className="ms-2">{obj.costoVisita}</Card.Text>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
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

export default DetailAnimale;
