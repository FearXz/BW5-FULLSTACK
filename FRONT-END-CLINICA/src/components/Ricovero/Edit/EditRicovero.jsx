import React from "react";
import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditRicovero, fetchRicoveroById } from "../../../redux/actions/ricovero";

function EditRicovero() {
  const r = useSelector((state) => state.ricovero.ricoveroDaEditare);

  const [idAnimale, setIdAnimale] = useState("");
  const [dataInizioRicovero, setDataInizioRicovero] = useState("");
  const [fotoAnimale, setFotoAnimale] = useState("");
  const [prezzoRicovero, setPrezzoRicovero] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRicoveroById(id));
  }, []);

  useEffect(() => {
    if (r) {
      setIdAnimale(r.ricovero.idAnimale);
      const date = new Date(r.ricovero.dataInizioRicovero);
      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
        date.getDate()
      ).padStart(2, "0")}`;
      setDataInizioRicovero(formattedDate);
      //  setDataVisita(v.visita.dataVisita);
      setFotoAnimale(r.ricovero.fotoAnimale);
      setPrezzoRicovero(r.ricovero.prezzoRicovero);
    }
  }, [r]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRicoveroObj = {
      IdRicovero: r.ricovero.idRicovero,
      IdAnimale: idAnimale,
      DataInizioRicovero: dataInizioRicovero,
      FotoAnimale: fotoAnimale,
      PrezzoRicovero: prezzoRicovero,
    };

    dispatch(fetchEditRicovero(updatedRicoveroObj));
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Modifica Ricovero</h1>
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
          <Form.Label>Data Inizio Ricovero</Form.Label>
          <Form.Control
            type="date"
            placeholder="Data Inizio Ricovero"
            value={dataInizioRicovero}
            onChange={(e) => setDataInizioRicovero(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Foto Animale</Form.Label>
          <Form.Control
            type="text"
            placeholder="Foto Animale"
            value={fotoAnimale}
            onChange={(e) => setFotoAnimale(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prezzo Ricovero</Form.Label>
          <Form.Control
            type="text"
            placeholder="Prezzo Ricovero"
            value={prezzoRicovero}
            onChange={(e) => setPrezzoRicovero(e.currentTarget.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Salva Modifiche
        </Button>
      </Form>
    </Container>
  );
}

export default EditRicovero;
