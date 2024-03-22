import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAnimaleById,
	fetchEditAnimale,
} from "../../../redux/actions/animale";
import { Link, useParams } from "react-router-dom";
import { fetchListaProprietari } from "../../../redux/actions/proprietario";
import { formatData } from "../../../functions/config";

export const DetailAnimale = () => {
	const [NomeAnimale, setNomeAnimale] = useState("");
	const [IdProprietario, setIdProprietario] = useState("");
	const [DataNascita, setDataNascita] = useState("");
	const [SpecieAnimale, setSpecieAnimale] = useState("");
	const [ColoreAnimale, setColoreAnimale] = useState("");
	const [Microchip, setMicrochip] = useState("");
	const dispatch = useDispatch();

	const { animaleDaEditare } = useSelector((state) => state.animale);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchAnimaleById(id)); // necessario per avere i dati dell'animale da editare
	}, []);

	useEffect(() => {
		if (animaleDaEditare) {
			setNomeAnimale(animaleDaEditare.animale.nome);
			setIdProprietario(
				animaleDaEditare.animale.proprietario.idProprietario
			);
			const date = new Date(animaleDaEditare.animale.dataNascita);
			const formattedDate = `${date.getFullYear()}-${String(
				date.getMonth() + 1
			).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
			setDataNascita(formattedDate);
			setSpecieAnimale(animaleDaEditare.animale.specie);
			setColoreAnimale(animaleDaEditare.animale.coloreAnimale);
			setMicrochip(animaleDaEditare.animale.microchip);
		}
	}, [animaleDaEditare]);

	return (
		<Container>
			<h1 className="my-5 text-center">Dettagli animale</h1>
			{animaleDaEditare && (
				<>
					<Card className="border border-2 p-4">
						<Card.Title>
							<dt>Nome: </dt>
							<dd>{NomeAnimale}</dd>
							<hr />
						</Card.Title>
						<Card.Body className="p-0">
							<dt>Proprietario: </dt>
							<dd>
								{animaleDaEditare.animale.proprietario.nome}
							</dd>
							<dt>Data di nascita: </dt>
							<dd>{DataNascita}</dd>
							<dt>Specie: </dt>
							<dd>{SpecieAnimale}</dd>
							<dt>Colore: </dt>
							<dd>{ColoreAnimale}</dd>
							<dt>Microchip: </dt>
							<dd>{Microchip ? Microchip : "Senza microchip"}</dd>
							<hr />
							<Link
								className="d-block"
								to={`/animale/edit/${id}`}>
								Modifica dettagli animale
							</Link>

							<Link
								className="d-block mt-4"
								to={`/Visite/Create/${id}`}>
								Registra nuova visita
							</Link>
						</Card.Body>
					</Card>

					<hr className="my-4" />

					<h2 className="text-center">Elenco visite</h2>
					{animaleDaEditare.animale.visite.map((visita, index) => (
						<Card
							className="border border-2 p-4 my-3"
							key={`${index}-visita`}>
							<Card.Body>
								<Card.Title>
									<h3>
										{formatData(
											visita.dataVisita
										).toLocaleUpperCase()}
									</h3>
									<hr />
								</Card.Title>
								<Card.Text>
									<dt>Esame obiettivo: </dt>
									<dd>{visita.esameObiettivo}</dd>
									<dt>Descrizione cura: </dt>
									<dd>{visita.descrizioneCura}</dd>
									<dt>Prezzo: </dt>
									<dd>{visita.costoVisita}</dd>
								</Card.Text>
							</Card.Body>
						</Card>
					))}
				</>
			)}
		</Container>
	);
};

export default DetailAnimale;
