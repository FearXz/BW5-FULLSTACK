import { useEffect, useState } from "react";
import { fetchProprietarioById } from "../../../redux/actions/proprietario";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Modal,
	Row,
} from "react-bootstrap";
import { fetchCreateAnimale } from "../../../redux/actions/animale";

function DetailProprietario() {
	const [NomeAnimale, setNomeAnimale] = useState("");
	const [IdProprietario, setIdProprietario] = useState("");
	const [DataNascita, setDataNascita] = useState("");
	const [SpecieAnimale, setSpecieAnimale] = useState("");
	const [ColoreAnimale, setColoreAnimale] = useState("");
	const [Microchip, setMicrochip] = useState("");

	const [refresh, setRefresh] = useState(false);

	const dispatch = useDispatch();
	const { id } = useParams();
	const p = useSelector((state) => state.proprietario.singoloProprietario);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		dispatch(fetchProprietarioById(id));
	}, [refresh]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const animaleObj = {
			NomeAnimale: NomeAnimale,
			IdProprietario: p.proprietario.idProprietario,
			DataNascita: DataNascita,
			SpecieAnimale: SpecieAnimale,
			ColoreAnimale: ColoreAnimale,
			Microchip: Microchip,
		};

		dispatch(fetchCreateAnimale(animaleObj));
		setRefresh((prev) => !prev);
		handleClose();
	};

	return (
		<div>
			<Container className="mt-4">
				<Row>
					<Col>
						<h2 className="">Dettagli proprietario</h2>
						{p && (
							<>
								<div className="row my-5">
									<div className=" col-md-10 offset-md-1">
										<div className="card align-items-center p-2">
											<h4>
												{p.proprietario.nome}{" "}
												{p.proprietario.cognome}
											</h4>
											<div className="d-flex align-items-baseline">
												<strong>
													Codice fiscale:{" "}
												</strong>
												<span className="ms-2">
													{
														p.proprietario
															.codiceFiscale
													}
												</span>
											</div>
											<div className="d-flex align-items-baseline">
												<strong>
													Numero telefono:{" "}
												</strong>
												<span className="ms-2">
													{
														p.proprietario
															.numeroTelefono
													}
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="my-3">
									<Button
										variant="primary"
										onClick={handleShow}>
										Aggiungi nuovo animale
									</Button>
									<h4 className="my-5 text-center">
										Elenco Animali
									</h4>
								</div>

								<Modal show={show} onHide={handleClose}>
									<Form onSubmit={handleSubmit}>
										<Modal.Header closeButton>
											<Modal.Title>
												Aggiungi animale
											</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<h1>Aggiungi Animale</h1>
											<Form.Group
												className="mb-3"
												controlId="formBasicEmail">
												<Form.Label>Nome</Form.Label>
												<Form.Control
													type="text"
													placeholder="Inserisci il nome dell'animale"
													value={NomeAnimale}
													onChange={(e) =>
														setNomeAnimale(
															e.currentTarget
																.value
														)
													}
												/>
											</Form.Group>

											<Form.Group
												className="mb-3"
												controlId="formBasicPassword">
												<Form.Label>
													Data di Nascita
												</Form.Label>
												<Form.Control
													type="date"
													placeholder="Inserisci la data di nascita"
													value={DataNascita}
													onChange={(e) =>
														setDataNascita(
															e.currentTarget
																.value
														)
													}
												/>
											</Form.Group>

											<Form.Group
												className="mb-3"
												controlId="formBasicPassword">
												<Form.Label>
													Specie Animale
												</Form.Label>
												<Form.Control
													type="text"
													placeholder="Indica la specie dell'animale (es. cane, gatto, ecc)"
													value={SpecieAnimale}
													onChange={(e) =>
														setSpecieAnimale(
															e.currentTarget
																.value
														)
													}
												/>
											</Form.Group>
											<Form.Group
												className="mb-3"
												controlId="formBasicPassword">
												<Form.Label>
													Colore Animale
												</Form.Label>
												<Form.Control
													type="text"
													placeholder="Indica il colore dell'animale (es. nero, bianco ecc)"
													value={ColoreAnimale}
													onChange={(e) =>
														setColoreAnimale(
															e.currentTarget
																.value
														)
													}
												/>
											</Form.Group>
											<Form.Group
												className="mb-3"
												controlId="formBasicPassword">
												<Form.Label>
													Microchip
												</Form.Label>
												<Form.Control
													type="text"
													placeholder="Se l'animale ha microchip inseriscilo qui"
													value={Microchip}
													onChange={(e) =>
														setMicrochip(
															e.currentTarget
																.value
														)
													}
												/>
											</Form.Group>
										</Modal.Body>
										<Modal.Footer>
											<Button
												variant="secondary"
												onClick={handleClose}>
												Chiudi
											</Button>
											<Button
												variant="primary"
												type="submit">
												Aggiungi
											</Button>
										</Modal.Footer>
									</Form>
								</Modal>

								<Row className="">
									{p.animali.map((obj, index) => (
										<Col
											className="col-12 col-md-6 col-lg-4"
											key={index}>
											<Card className="bg-light bg-opacity-75">
												<Card.Body>
													<div className="d-flex align-items-baseline">
														<Card.Subtitle>
															Nome:{" "}
														</Card.Subtitle>
														<Card.Text className="ms-2">
															{obj.nome}
														</Card.Text>
													</div>
													<div className="d-flex align-items-baseline">
														<Card.Subtitle>
															Specie:{" "}
														</Card.Subtitle>
														<Card.Text className="ms-2">
															{obj.specie}
														</Card.Text>
													</div>
													<div className="d-flex align-items-baseline">
														<Card.Subtitle>
															Data di nascita:{" "}
														</Card.Subtitle>
														<Card.Text className="ms-2">
															{new Date(
																obj.dataNascita
															).toLocaleDateString()}
														</Card.Text>
													</div>
													<div className="d-flex align-items-baseline">
														<Card.Subtitle>
															Colore:{" "}
														</Card.Subtitle>
														<Card.Text className="ms-2">
															{obj.coloreAnimale}
														</Card.Text>
													</div>
													<div className="d-flex align-items-baseline">
														<Card.Subtitle>
															Microchip:{" "}
														</Card.Subtitle>
														<Card.Text className="ms-2">
															{obj.microchip
																? obj.microchip
																: "No"}
														</Card.Text>
													</div>
												</Card.Body>
											</Card>
										</Col>
									))}
								</Row>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default DetailProprietario;
