import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateAnimale } from "../../../redux/actions/animale";
import { fetchListaProprietari } from "../../../redux/actions/proprietario";

function FormCreateAnimale() {

  const [NomeAnimale, setNomeAnimale] = useState("");
  const [IdProprietario, setIdProprietario] = useState("");
  const [DataNascita, setDataNascita] = useState("");
  const [SpecieAnimale, setSpecieAnimale] = useState("");
  const [ColoreAnimale, setColoreAnimale] = useState("");
  const [Microchip, setMicrochip] = useState("");
  const dispatch = useDispatch();
  const proprietari = useSelector(state => state.proprietario.listaProprietari);

  const handleSubmit = (e) => {
    e.preventDefault();

    const animaleObj = {
      NomeAnimale: NomeAnimale,
      IdProprietario: IdProprietario,
      DataNascita: DataNascita,
      SpecieAnimale: SpecieAnimale,
      ColoreAnimale: ColoreAnimale,
      Microchip: Microchip,

    };

    dispatch(fetchCreateAnimale(animaleObj));
  };

  useEffect(() => {
		fetchListaProprietari();
	});

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Aggiungi Animale</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Inserisci il nome dell'animale" value={NomeAnimale} onChange={(e) => setNomeAnimale(e.currentTarget.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Proprietario</Form.Label>
          <Form.Select value={IdProprietario} onChange={(e) => setIdProprietario(e.currentTarget.value)}>
            <option value="">Seleziona un proprietario</option>
            {proprietari && proprietari.map((item) => (
              <option key={item.proprietario.codiceFiscale} value={item.proprietario.idProprietario}>
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
            placeholder="Indica la specie dell'animale (es. cane, gatto, ecc)"
            value={SpecieAnimale}
            onChange={(e) => setSpecieAnimale(e.currentTarget.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Colore Animale</Form.Label>
          <Form.Control
            type="text"
            placeholder="Indica il colore dell'animale (es. nero, bianco ecc)"
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
