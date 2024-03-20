import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateVisita } from "../../../redux/actions/visite";
import { fetchListaAnimali } from "../../../redux/actions/animale";

function FormCreateVisite() {
  const [idAnimale, setIdAnimale] = useState("");
  const [dataVisita, setDataVisita] = useState("");
  const [esameObiettivo, setEsameObiettivo] = useState("");
  const [descrizioneCura, setDescrizioneCura] = useState("");
  const [costoVisita, setCostoVisita] = useState("");

  const dispatch = useDispatch();

  const animali = useSelector((state) => state.animale.listaAnimali);

  const handleSubmit = (e) => {
    e.preventDefault();

    const visiteObj = {
      IdAnimale: idAnimale,
      DataVisita: dataVisita,
      EsameObiettivo: esameObiettivo,
      DescrizioneCura: descrizioneCura,
      CostoVisita: costoVisita,
    };

    dispatch(fetchCreateVisita(visiteObj));
  };
  useEffect(() => {
    dispatch(fetchListaAnimali());
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Aggiungi Visita</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id Animale</Form.Label>
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Data Visita</Form.Label>
          <Form.Control
            type="date"
            placeholder="Data visita"
            value={dataVisita}
            onChange={(e) => setDataVisita(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Esame Obiettivo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Esame obiettivo"
            value={esameObiettivo}
            onChange={(e) => setEsameObiettivo(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descrizione Cura</Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrizione cura"
            value={descrizioneCura}
            onChange={(e) => setDescrizioneCura(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Costo Visita</Form.Label>
          <Form.Control
            type="text"
            placeholder="Costo visita"
            value={costoVisita}
            onChange={(e) => setCostoVisita(e.currentTarget.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Aggiungi
        </Button>
      </Form>
    </Container>
  );
}

export default FormCreateVisite;
