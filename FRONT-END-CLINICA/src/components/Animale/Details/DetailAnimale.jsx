import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAnimaleById,
	fetchEditAnimale,
} from "../../../redux/actions/animale";
import { useParams } from "react-router-dom";
import { fetchListaProprietari } from "../../../redux/actions/proprietario";

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

	const formatData = (data) => {
		setDataNascita(data);
		console.log(data);
	};

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
			<h1>Dettagli animale</h1>
			<Card>
				<Card.Title>
					<h2>Nome: {NomeAnimale}</h2>
				</Card.Title>
				<Card.Body>
					{/* <dt>Proprietario: </dt>
       <dd> {animaleDaEditare.proprietario.nome} {animaleDaEditare.proprietario.cognome}</dd>
        <dt>Data di nascita: </dt>
        <dd>{DataNascita}</dd>
        <dt>Specie: </dt>
        <dd>{SpecieAnimale}</dd>
        <dt>Colore: </dt>
        <dd>{ColoreAnimale}</dd>
        <dt>Microchip: </dt>
        <dd>{Microchip}</dd> */}
				</Card.Body>
			</Card>
		</Container>
	);
};

export default DetailAnimale;
