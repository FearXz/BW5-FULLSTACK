// import { Button, Col, Container, Row } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { fetchListaProprietari } from "../redux/actions/actions";

// function Home() {
//   const dispatch = useDispatch();
//   return (
//     <Container>
//       <Row>
//         <Col className=" d-flex justify-content-center">
//           <div className=" fs-1 text-danger  bg-gray-900">MEGA KEBAB</div>
//         </Col>
//       </Row>
//       <Button onClick={() => dispatch(fetchListaProprietari())} className=" btn-blue-500">
//         {" "}
//         BOTTONE KEBAB
//       </Button>
//     </Container>
//   );
// }

// export default Home;

import { useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchListaProprietari } from "../../redux/actions/proprietario";

function Home() {
  const dispatch = useDispatch();
  return (
    <Container>
      <div className="my-4 py-4 text-center bg-light">
        <div className=" fs-1 text-danger  bg-gray-900">MEGA KEBAB</div>
        <h1>Benvenuti alla Clinica Veterinaria &quot;KEBAB&quot;</h1>
        <p className="lead">
          La nostra clinica si impegna a fornire cure compassionate e di alta qualità per i vostri amici a quattro
          zampe.
        </p>
      </div>
      <Row className="mb-4">
        <Col md={6}>
          <h2>Chi Siamo</h2>
          <p>
            La Clinica Veterinaria &quot;Kebab&quot; è stata fondata nel 2010 da un gruppo di veterinari appassionati
            con una missione comune: fornire cure veterinarie eccellenti e compassione per gli animali domestici della
            nostra comunità.
          </p>
          <p>
            La nostra equipe è composta da professionisti altamente qualificati e appassionati, pronti a prendersi cura
            dei bisogni sanitari e benessere dei vostri amici pelosi.
          </p>
        </Col>
        <Col md={6}>
          <h2>Servizi</h2>
          <ul>
            <li>Esami di Routine e Vaccinazioni</li>
            <li>Chirurgia Generale e Ortopedica</li>
            <li>Analisi del Sangue e Diagnostica per Immagini</li>
            <li>Ricovero e Cura dei Pazienti</li>
            <li>E molto altro ancora...</li>
          </ul>
        </Col>
      </Row>
      <Button onClick={() => dispatch(fetchListaProprietari())} className=" btn-blue-500">
        {" "}
        BOTTONE KEBAB
      </Button>
    </Container>
  );
}

export default Home;
