import { useEffect } from "react";
import { fetchListaAnimali } from "../../../redux/actions/animale";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchListaVisite } from "../../../redux/actions/visite";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const ElencoVisite = () => {
  const dispatch = useDispatch();
  const listaVisite = useSelector((state) => state.visita.listaVisite);

  useEffect(() => {
    dispatch(fetchListaVisite());
  }, []);

  return (
    <Container className="mt-3">
      <h1 className="text-center">Lista visite</h1>
      <Row>
        {listaVisite &&
          listaVisite.map((item, index) => (
            <Col className="col-4" key={`${index}-visite`}>
              <Card className="bg-light bg-opacity-75">
                <Card.Body>
                  <Card.Title>Id visita: {item.visita.idVisita}</Card.Title>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Id animale: </Card.Subtitle>
                    <Card.Text className="ms-2"> {item.visita.idAnimale}</Card.Text>
                  </div>

                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Data visita: </Card.Subtitle>
                    <Card.Text className="ms-2">{new Date(item.visita.dataVisita).toLocaleDateString()}</Card.Text>
                  </div>
                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Costo visita: </Card.Subtitle>
                    <Card.Text className="ms-2">{item.visita.costoVisita} euro </Card.Text>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link className="btn btn-dark me-1" to={"/Visite/Details/" + item.visita.idVisita}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </Link>
                    <Link className="btn btn-dark" to={"/Visite/Edit/" + item.visita.idVisita}>
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

export default ElencoVisite;
