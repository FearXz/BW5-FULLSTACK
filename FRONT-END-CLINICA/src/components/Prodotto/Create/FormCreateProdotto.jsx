import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchCreateProdotto } from "../../../redux/actions/prodotto";

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

function FormCreateProdotto() {
	const [IdFornitore, setIdFornitore] = useState(1);
	const [NomeProdotto, setNomeProdotto] = useState("");
	const [DescrizioneProdotto, setDescrizioneProdotto] = useState("");
	const [TipoProdotto, setTipoProdotto] = useState("");
	const [PrezzoProdotto, setPrezzoProdotto] = useState("");
	const [NArmadio, setNArmadio] = useState("");
	const [NCassetto, setNCassetto] = useState("");
	const [QuantitaProdotto, setQuantitaProdotto] = useState("");
	const dispatch = useDispatch();
	// const fornitori = useSelector(
	// 	(state) => state.fornitore.listaFornitori
	// ); todo: non esiste da gestire fornitori in backend

	const handleSubmit = (e) => {
		e.preventDefault();

		const prodottoObj = {
			IdFornitore: IdFornitore, // todo: da gestire fornitore in backend
			NomeProdotto: NomeProdotto,
			DescrizioneProdotto: DescrizioneProdotto,
			TipoProdotto: TipoProdotto,
			PrezzoProdotto: PrezzoProdotto,
			NArmadio: NArmadio,
			NCassetto: NCassetto,
			QuantitaProdotto: QuantitaProdotto,
		};

		dispatch(fetchCreateProdotto(prodottoObj));
	};

	useEffect(() => {
		//fetchListaFornitori(); fetch che non esiste, da creare todo
	});

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<h1>Aggiungi Prodotto</h1>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Nome prodotto</Form.Label>
					<Form.Control
						type="text"
						placeholder="Inserisci il nome del prodotto"
						value={NomeProdotto}
						onChange={(e) => setNomeProdotto(e.currentTarget.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Fornitore</Form.Label>
					<Form.Select
						value={IdFornitore}
						onChange={(e) => setIdFornitore(e.currentTarget.value)}>
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

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Descrizione del prodotto</Form.Label>
					<Form.Control
						type="text"
						placeholder="Inserisci la descrizione del prodotto"
						value={DescrizioneProdotto}
						onChange={(e) =>
							setDescrizioneProdotto(e.currentTarget.value)
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Tipo del prodotto</Form.Label>
					<Form.Control
						type="text"
						placeholder="Indica il tipo del prodotto (es. farmaceutico, alimentare, ecc)"
						value={TipoProdotto}
						onChange={(e) => setTipoProdotto(e.currentTarget.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Prezzo</Form.Label>
					<Form.Control
						type="number"
						placeholder="Indica il prezzo"
						value={PrezzoProdotto}
						onChange={(e) =>
							setPrezzoProdotto(e.currentTarget.value)
						}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Numero dell&apos;armadio</Form.Label>
					<Form.Control
						type="number"
						placeholder="Indica il numero dell'armadio"
						value={NArmadio}
						onChange={(e) => setNArmadio(e.currentTarget.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Numero del cassetto</Form.Label>
					<Form.Control
						type="number"
						placeholder="Indica il numero del cassetto"
						value={NCassetto}
						onChange={(e) => setNCassetto(e.currentTarget.value)}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Quantità</Form.Label>
					<Form.Control
						type="number"
						placeholder="Indica la quantità"
						value={QuantitaProdotto}
						onChange={(e) =>
							setQuantitaProdotto(e.currentTarget.value)
						}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Aggiungi
				</Button>
			</Form>
		</Container>
	);
}

export default FormCreateProdotto;
