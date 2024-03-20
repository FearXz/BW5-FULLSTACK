import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAnimaleById } from "../../../redux/actions/animale";

function DetailAnimale() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const a = useSelector((state) => state.animale.animaleDaEditare);

  useEffect(() => {
    dispatch(fetchAnimaleById(id));
  }, [id]);
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 className="">Dettagli animale</h2>
          {a && (
            <>
              <h4>{a.animale.nome}</h4>
              <div className="d-flex align-items-baseline">
                <strong>Specie: </strong>
                <span className="ms-2">{a.animale.specie}</span>
              </div>
              <div className="d-flex align-items-baseline">
                <strong>Data di nascita: </strong>
                {new Date(a.animale.dataNascita).toLocaleDateString()}
              </div>
              <div className="d-flex align-items-baseline">
                <strong>Colore: </strong>
                <span className="ms-2">{a.animale.colore}</span>
              </div>
              <div className="d-flex align-items-baseline">
                <strong>Microchip:</strong>
                <span className="ms-2">{a.animale.microchip ? a.animale.microchip : "No"}</span>
              </div>
              <div className="d-flex align-items-baseline">
                <strong>Proprietario:</strong>
                <span className="ms-2">{a.animale.proprietario.nome} {a.animale.proprietario.cognome}</span>
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DetailAnimale;
