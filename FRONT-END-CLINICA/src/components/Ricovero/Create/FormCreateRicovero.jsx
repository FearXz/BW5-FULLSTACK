import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCreateRicovero } from "../../../redux/actions/ricovero";
import { fetchListaAnimali } from "../../../redux/actions/animale";

function FormCreateRicovero() {
  const [idAnimale, setIdAnimale] = useState("");
  const [dataInizioRicovero, setDataInizioRicovero] = useState("");
  const [fotoAnimale, setFotoAnimale] = useState("");
  const [prezzoRicovero, setPrezzoRicovero] = useState("");

  const dispatch = useDispatch();

  const animali = useSelector((state) => state.animale.listaAnimali);

  const handleSubmit = (e) => {
    e.preventDefault();

    const ricoveroObj = {
      IdAnimale: idAnimale,
      DataInizioRicovero: dataInizioRicovero,
      PrezzoRicovero: prezzoRicovero,
    };

    const formData = new FormData();
    formData.append("fotoAnimale", fotoAnimale);

    dispatch(fetchCreateRicovero(ricoveroObj, formData));
  };
  useEffect(() => {
    dispatch(fetchListaAnimali());
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Aggiungi Ricovero</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome Animale</Form.Label>
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
          <Form.Label>Data Inizio Ricovero</Form.Label>
          <Form.Control
            type="date"
            placeholder="Data Inizio Ricovero"
            value={dataInizioRicovero}
            onChange={(e) => setDataInizioRicovero(e.currentTarget.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Foto Animale</Form.Label>
          <Form.Control accept="image/*" type="file" onChange={(e) => setFotoAnimale(e.target.files[0])} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Prezzo Ricovero</Form.Label>
          <Form.Control
            type="text"
            placeholder="Prezzo Ricovero"
            value={prezzoRicovero}
            onChange={(e) => setPrezzoRicovero(e.currentTarget.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Aggiungi
        </Button>
      </Form>
    </Container>
  );
}

export default FormCreateRicovero;
