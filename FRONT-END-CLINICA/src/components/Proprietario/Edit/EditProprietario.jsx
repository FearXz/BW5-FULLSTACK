import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProprietarioById, fetchUpdateProprietario } from "../../../redux/actions/proprietario";

function EditProprietario() {
  const p = useSelector((state) => state.proprietario.singoloProprietario);

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [codiceFiscale, setCodiceFiscale] = useState("");
  const [telefono, setTelefono] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProprietarioById(id));
  }, []);

  useEffect(() => {
    if (p) {
      setNome(p.proprietario.nome);
      setCognome(p.proprietario.cognome);
      setCodiceFiscale(p.proprietario.codiceFiscale);
      setTelefono(p.proprietario.numeroTelefono);
    }
  }, [p]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProprietarioObj = {
      IdProprietario: p.proprietario.idProprietario,
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
          <Form.Label>Numero di Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Numero di Telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.currentTarget.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Salva Modifiche
        </Button>
      </Form>
    </Container>
  );
}
import { fromJS } from "immutable";

export default EditProprietario;
