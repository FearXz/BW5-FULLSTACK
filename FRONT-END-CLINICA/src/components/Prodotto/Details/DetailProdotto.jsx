import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchEditProdotto,
	fetchProdottoById,
} from "../../../redux/actions/prodotto";
import { Link, useParams } from "react-router-dom";

//           _____                    _____                    _____                    _____                    _____
//          /\    \                  /\    \                  /\    \                  /\    \                  /\    \
//         /::\____\                /::\    \                /::\    \                /::\    \                /::\    \
//        /:::/    /               /::::\    \              /::::\    \              /::::\    \              /::::\    \
//       /:::/    /               /::::::\    \            /::::::\    \            /::::::\    \            /::::::\    \
//      /:::/    /               /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \          /:::/\:::\    \
//     /:::/____/               /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \        /:::/__\:::\    \
//    /::::\    \              /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \      /::::\   \:::\    \
//   /::::::\____\________    /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \    /::::::\   \:::\    \
//  /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\ ___\  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\
// /:::/  |:::::::::::\____\/:::/__\:::\   \:::\____\/:::/__\:::\   \:::|    |/:::/  \:::\   \:::\____\/:::/  \:::\   \:::|    |
// \::/   |::|~~~|~~~~~     \:::\   \:::\   \::/    /\:::\   \:::\  /:::|____|\::/    \:::\  /:::/    /\::/    \:::\  /:::|____|
//  \/____|::|   |           \:::\   \:::\   \/____/  \:::\   \:::\/:::/    /  \/____/ \:::\/:::/    /  \/_____/\:::\/:::/    /
//        |::|   |            \:::\   \:::\    \       \:::\   \::::::/    /            \::::::/    /            \::::::/    /
//        |::|   |             \:::\   \:::\____\       \:::\   \::::/    /              \::::/    /              \::::/    /
//        |::|   |              \:::\   \::/    /        \:::\  /:::/    /               /:::/    /                \::/____/
//        |::|   |               \:::\   \/____/          \:::\/:::/    /               /:::/    /                  ~~
//        |::|   |                \:::\    \               \::::::/    /               /:::/    / ciao omar
//        \::|   |                 \:::\____\               \::::/    /               /:::/    /
//         \:|   |                  \::/    /                \::/____/                \::/    /
//          \|___|                   \/____/                  ~~                       \/____/

const DetailProdotto = () => {
	const [IdFornitore, setIdFornitore] = useState(1);
	const [NomeProdotto, setNomeProdotto] = useState("");
	const [DescrizioneProdotto, setDescrizioneProdotto] = useState("");
	const [TipoProdotto, setTipoProdotto] = useState("");
	const [PrezzoProdotto, setPrezzoProdotto] = useState("");
	const [NArmadio, setNArmadio] = useState("");
	const [NCassetto, setNCassetto] = useState("");
	const [QuantitaProdotto, setQuantitaProdotto] = useState("");
	const { id } = useParams();
	const dispatch = useDispatch();
	// const fornitori = useSelector(
	// 	(state) => state.fornitore.listaFornitori
	// ); todo: non esiste da gestire fornitori in backend
	const { singoloProdotto } = useSelector((state) => state.prodotto);

	const handleSubmit = (e) => {
		e.preventDefault();

		const prodottoObj = {
			IdProdotto: id,
			IdFornitore: IdFornitore, // todo: da gestire fornitore in backend
			NomeProdotto: NomeProdotto,
			DescrizioneProdotto: DescrizioneProdotto,
			TipoProdotto: TipoProdotto,
			PrezzoProdotto: PrezzoProdotto,
			NArmadio: NArmadio,
			NCassetto: NCassetto,
			QuantitaProdotto: QuantitaProdotto,
		};

		dispatch(fetchEditProdotto(prodottoObj));
	};

	useEffect(() => {
		dispatch(fetchProdottoById(id));
	}, []);

	useEffect(() => {
		if (singoloProdotto) {
			setNomeProdotto(singoloProdotto.prodotto.nomeProdotto);
			setDescrizioneProdotto(
				singoloProdotto.prodotto.descrizioneProdotto
			);
			setTipoProdotto(singoloProdotto.prodotto.tipoProdotto);
			setPrezzoProdotto(singoloProdotto.prodotto.prezzoProdotto);
			setNArmadio(singoloProdotto.prodotto.nArmadio);
			setNCassetto(singoloProdotto.prodotto.nCassetto);
			setQuantitaProdotto(singoloProdotto.prodotto.quantitaProdotto);
			setIdFornitore(singoloProdotto.prodotto.idFornitore);
		}
	}, [singoloProdotto]);

	useEffect(() => {
		//fetchListaFornitori(); todo: fetch che non esiste, da creare
	});

	return (
		<Container>
			{singoloProdotto && (
				<Form onSubmit={handleSubmit}>
					<h1>Modifica Prodotto</h1>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Nome prodotto</Form.Label>
						<Form.Control
							disabled
							type="text"
							placeholder="Inserisci il nome del prodotto"
							value={NomeProdotto}
							onChange={(e) =>
								setNomeProdotto(e.currentTarget.value)
							}
						/>
						<span>
							assedfcda
							{singoloProdotto.prodotto.NomeProdotto}
						</span>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Fornitore</Form.Label>
						<Form.Select
							value={IdFornitore}
							onChange={(e) =>
								setIdFornitore(e.currentTarget.value)
							}>
							<option value="">Seleziona un fornitore</option>
							{/* {proprietari &&
							proprietari.map((item) => (
								<option
									key={item.proprietario.codiceFiscale}
									value={item.proprietario.idProprietario}>
									{item.proprietario.nome}
								</option>
							))} */}
						</Form.Select>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Descrizione del prodotto</Form.Label>
						<Form.Control
							disabled
							type="text"
							placeholder="Inserisci la descrizione del prodotto"
							value={DescrizioneProdotto}
							onChange={(e) =>
								setDescrizioneProdotto(e.currentTarget.value)
							}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Tipo del prodotto</Form.Label>
						<Form.Control
							disabled
							type="text"
							placeholder="Indica il tipo del prodotto (es. farmaceutico, alimentare, ecc)"
							value={TipoProdotto}
							onChange={(e) =>
								setTipoProdotto(e.currentTarget.value)
							}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Prezzo</Form.Label>
						<Form.Control
							disabled
							type="number"
							placeholder="Indica il prezzo"
							value={PrezzoProdotto}
							onChange={(e) =>
								setPrezzoProdotto(e.currentTarget.value)
							}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Numero dell&apos;armadio</Form.Label>
						<Form.Control
							disabled
							type="number"
							placeholder="Indica il numero dell'armadio"
							value={NArmadio}
							onChange={(e) => setNArmadio(e.currentTarget.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Numero del cassetto</Form.Label>
						<Form.Control
							disabled
							type="number"
							placeholder="Indica il numero del cassetto"
							value={NCassetto}
							onChange={(e) =>
								setNCassetto(e.currentTarget.value)
							}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Quantità</Form.Label>
						<Form.Control
							disabled
							type="number"
							placeholder="Indica la quantità"
							value={QuantitaProdotto}
							onChange={(e) =>
								setQuantitaProdotto(e.currentTarget.value)
							}
						/>
					</Form.Group>

					<Link
						className="btn btn-warning"
						to={
							"/Prodotto/Edit/" +
							singoloProdotto.prodotto.idProdotto
						}>
						vai a pagina di modifica
					</Link>
				</Form>
			)}
		</Container>
	);
};

export default DetailProdotto;
