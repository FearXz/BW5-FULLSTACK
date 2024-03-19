import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateProprietario, fetchListaAnimali } from "../../../redux/actions/actions";

function FormCreateAnimale() {

  const [NomeAnimale, setNomeAnimale] = useState("");
  const [ProprietarioId, setProprietarioId] = useState("");
  const [DataNascita, setDataNascita] = useState("");
  const [SpecieAnimale, setSpecieAnimale] = useState("");
  const [ColoreAnimale, setColoreAnimale] = useState("");
  const [Microchip, setMicrochip] = useState("");
  const dispatch = useDispatch();
  const proprietari = useSelector(state => state.proprietario.listaProprietari);

  const handleSubmit = (e) => {
    e.preventDefault();

    const proprietarioObj = {
      NomeAnimale: NomeAnimale,
      DataNascita: DataNascita,
      SpecieAnimale: SpecieAnimale,
      ColoreAnimale: ColoreAnimale,
      Microchip: Microchip,

    };

    dispatch(fetchCreateProprietario(proprietarioObj));
  };

  return (
    <Container>
<button onClick={() => dispatch(fetchListaAnimali())} className=" btn-blue-500">rgweg</button>

      <Form onSubmit={handleSubmit}>
        <h1>Aggiungi Animale</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Inserisci il nome dell'animale" value={NomeAnimale} onChange={(e) => setNomeAnimale(e.currentTarget.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Proprietario</Form.Label>
          <Form.Select value={ProprietarioId} onChange={(e) => setProprietarioId(e.currentTarget.value)}>
            <option value="">Seleziona un proprietario</option>
            {proprietari && proprietari.map((item) => (
              <option key={item.proprietario.idProprietario} value={item.proprietario.idProprietario}>
                {item.proprietario.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Data di Nascita</Form.Label>
          <Form.Control
            type="date"
            placeholder="Inserisci la data di nascita"
            value={DataNascita}
            onChange={(e) => setDataNascita(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Specie Animale</Form.Label>
          <Form.Control
            type="text"
            placeholder="Indica la specie dell'animale"
            value={SpecieAnimale}
            onChange={(e) => setSpecieAnimale(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Colore Animale</Form.Label>
          <Form.Control
            type="text"
            placeholder="Indica il colore dell'animale"
            value={ColoreAnimale}
            onChange={(e) => setColoreAnimale(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Microchip</Form.Label>
          <Form.Control
            type="text"
            placeholder="Se l'animale ha microchip inseriscilo qui"
            value={Microchip}
            onChange={(e) => setMicrochip(e.currentTarget.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default FormCreateAnimale;
