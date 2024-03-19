import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchUpdateProprietario } from "../../../redux/actions/actions";
import PropTypes from "prop-types";

function EditProprietario({ proprietario }) {
  const [nome, setNome] = useState(proprietario?.NomeProprietario || "");
  const [cognome, setCognome] = useState(proprietario?.CognomeProprietario || "");
  const [codiceFiscale, setCodiceFiscale] = useState(proprietario?.CodiceFiscale || "");
  const [telefono, setTelefono] = useState(proprietario?.NumeroTelefono || "");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProprietarioObj = {
      Id: proprietario?.Id,
      NomeProprietario: nome,
      CognomeProprietario: cognome,
      CodiceFiscale: codiceFiscale,
      NumeroTelefono: telefono,
    };

    dispatch(fetchUpdateProprietario(updatedProprietarioObj));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Modifica Proprietario</h1>
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

EditProprietario.propTypes = {
  proprietario: PropTypes.shape({
    NomeProprietario: PropTypes.string,
    CognomeProprietario: PropTypes.string,
    CodiceFiscale: PropTypes.string,
    NumeroTelefono: PropTypes.string,
    Id: PropTypes.number,
  }),
};

export default EditProprietario;
