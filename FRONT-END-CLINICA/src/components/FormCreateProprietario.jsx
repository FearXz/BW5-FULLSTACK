import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchCreateProprietario } from "../redux/actions/actions";

function FormCreateProprietario() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [codiceFiscale, setCodiceFiscale] = useState("");
  const [telefono, setTelefono] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const proprietarioObj = {
      NomeProprietario: nome,
      CognomeProprietario: cognome,
      CodiceFiscale: codiceFiscale,
      NumeroTelefono: telefono,
    };

    dispatch(fetchCreateProprietario(proprietarioObj));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Aggiunti Proprietario</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.currentTarget.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cognome"
            value={cognome}
            onChange={(e) => setCognome(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>CodiceFiscale</Form.Label>
          <Form.Control
            type="text"
            placeholder="CodiceFiscale"
            value={codiceFiscale}
            onChange={(e) => setCodiceFiscale(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Numero di Telefon</Form.Label>
          <Form.Control
            type="text"
            placeholder="Numero diTelefono"
            value={telefono}
            onChange={(e) => setTelefono(e.currentTarget.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormCreateProprietario;
