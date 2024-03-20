import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchListaRicoveri } from "../../../redux/actions/ricovero";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faEdit } from "@fortawesome/free-solid-svg-icons";

export function ElencoRicoveri() {
  const dispatch = useDispatch();
  const elencoRicoveri = useSelector((state) => state.ricovero.listaRicoveri);

  useEffect(() => {
    dispatch(fetchListaRicoveri());
    console.log(elencoRicoveri);
  }, []);
  return (
    <Container className="mt-3">
      <h2 className="text-center">Lista ricoveri</h2>
      <Row>
        {elencoRicoveri &&
          elencoRicoveri.map((item, index) => (
            <Col className="col-4" key={`${index}-ricoveri`}>
              <Card className="bg-light bg-opacity-75">
                <Card.Body>
                  <Card.Title>{item.ricovero.animale.nomeAnimale}</Card.Title>
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid fix-h-300 fix-w-300" src={item.ricovero.fotoAnimale} alt="foto animale" />
                  </div>

                  <div className="d-flex align-items-baseline">
                    <Card.Subtitle>Prezzo: € </Card.Subtitle>
                    <Card.Text className="ms-2">{item.ricovero.prezzoRicovero}</Card.Text>
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link className="btn btn-dark me-1" to={"/Ricovero/Details/" + item.ricovero.idRicovero}>
                      <FontAwesomeIcon icon={faInfoCircle} />
                    </Link>
                    <Link className="btn btn-dark" to={"/Ricovero/Edit/" + item.ricovero.idRicovero}>
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
