import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditVisita, fetchVisitaById } from "../../../redux/actions/visite";

function EditVisite() {
  const v = useSelector((state) => state.visita.singolaVisita);

  const [idAnimale, setIdAnimale] = useState("");
  const [dataVisita, setDataVisita] = useState("");
  const [esameObiettivo, setEsameObiettivo] = useState("");
  const [descrizioneCura, setDescrizioneCura] = useState("");
  const [costoVisita, setCostoVisita] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVisitaById(id));
  }, []);

  useEffect(() => {
    if (v) {
      setIdAnimale(v.visita.idAnimale);
      setDataVisita(v.visita.dataVisita);
      setEsameObiettivo(v.visita.esameObiettivo);
      setDescrizioneCura(v.visita.descrizioneCura);
      setCostoVisita(v.visita.costoVisita);
    }
  }, [v]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedVisitaObj = {
      IdVisita: v.visita.idVisita,
      IdAnimale: idAnimale,
      DataVisita: dataVisita,
      EsameObiettivo: esameObiettivo,
      DescrizioneCura: descrizioneCura,
      CostoVisita: costoVisita,
    };

    dispatch(fetchEditVisita(updatedVisitaObj));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Modifica Visita</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID Animale</Form.Label>
          <Form.Control
            type="text"
            placeholder="ID Animale"
            value={idAnimale}
            onChange={(e) => setIdAnimale(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data Visita</Form.Label>
          <Form.Control
            type="text"
            placeholder="Data Visita"
            value={dataVisita}
            onChange={(e) => setDataVisita(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Esame Obiettivo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Esame Obiettivo"
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

        <Button variant="primary" type="submit">
          Salva Modifiche
        </Button>
      </Form>
    </Container>
  );
}

export default EditVisite;
